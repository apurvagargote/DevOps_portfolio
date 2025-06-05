# Portfolio Project with K3s Deployment

This project demonstrates a complete CI/CD pipeline for a portfolio website with:
- Frontend (React)
- Backend (Node.js)
- Kubernetes deployment on AWS EC2 using K3s
- Monitoring with Prometheus and Grafana

## Architecture

```
GitHub -> GitHub Actions -> Docker Hub -> K3s on EC2 -> Ingress -> Frontend/Backend
```

## Setup Instructions

### 1. Provision EC2 with Terraform

```bash
cd terraform
terraform init
terraform apply -var="key_name=your-key-pair-name"
```

### 2. Install K3s on EC2

SSH into your EC2 instance and run the installation script:

```bash
ssh -i your-key.pem ubuntu@<ec2-public-ip>
chmod +x scripts/install-k3s.sh
./scripts/install-k3s.sh
```

### 3. Get Kubeconfig

```bash
ssh -i your-key.pem ubuntu@<ec2-public-ip> 'sudo cat /etc/rancher/k3s/k3s.yaml' > kubeconfig.yaml
# Edit kubeconfig.yaml to replace 127.0.0.1 with your EC2 public IP
```

### 4. Set up GitHub Secrets

Add the following secrets to your GitHub repository:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`
- `KUBE_CONFIG` (contents of your kubeconfig.yaml file)

### 5. Deploy to Kubernetes

Push to your main branch and GitHub Actions will:
1. Build and push Docker images to Docker Hub
2. Deploy your application to K3s

## Accessing Your Application

- Frontend: http://<ec2-public-ip>/
- Backend API: http://<ec2-public-ip>/api
- Grafana: http://<ec2-public-ip>/grafana (default credentials: admin/admin)

## Monitoring

Access Grafana dashboard at http://<ec2-public-ip>/grafana to view metrics from Prometheus.