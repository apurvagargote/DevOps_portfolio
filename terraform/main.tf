terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
    tls = {
      source  = "hashicorp/tls"
      version = "~> 4.0"
    }
    local = {
      source  = "hashicorp/local"
      version = "~> 2.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

# Generate private key
resource "tls_private_key" "k3s_key" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

# Upload public key to AWS
resource "aws_key_pair" "k3s_key" {
  key_name   = "k3s-key-${formatdate("YYYYMMDDhhmmss", timestamp())}"
  public_key = tls_private_key.k3s_key.public_key_openssh
}

# Save private key locally
resource "local_file" "private_key" {
  content         = tls_private_key.k3s_key.private_key_pem
  filename        = "${path.module}/k3s-key.pem"
  file_permission = "0600"
}

# Security group
resource "aws_security_group" "k3s_sg" {
  name        = "k3s-sg-portfolio-${formatdate("YYYYMMDDhhmmss", timestamp())}"
  description = "Security group for K3s server"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 2000
    to_port     = 2000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 6443
    to_port     = 6443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 30000
    to_port     = 32767
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# EC2 Instance
resource "aws_instance" "k3s_server" {
  ami                    = "ami-054d6a336762e438e" # Ubuntu 22.04 us-east-1
  instance_type          = "t2.micro"
  key_name               = aws_key_pair.k3s_key.key_name
  vpc_security_group_ids = [aws_security_group.k3s_sg.id]

  root_block_device {
    volume_size = 20
  }

  tags = {
    Name = "k3s-server"
  }

  user_data = <<-EOF
              #!/bin/bash
              echo "Preparing for K3s installation..."
              apt-get update
              apt-get upgrade -y

              # Install K3s without Traefik
              curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--disable=traefik" sh -

              # Wait for K3s to be ready
              sleep 30

              # Configure kubeconfig
              mkdir -p /home/ubuntu/.kube
              sudo cp /etc/rancher/k3s/k3s.yaml /home/ubuntu/.kube/config
              sudo chown ubuntu:ubuntu /home/ubuntu/.kube/config
              export KUBECONFIG=/home/ubuntu/.kube/config
              chmod 600 /home/ubuntu/.kube/config

              # Install NGINX Ingress Controller
              sudo kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml

              echo "K3s and NGINX Ingress installation completed"
              EOF
}
