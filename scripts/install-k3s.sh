#!/bin/bash

# Update system packages
sudo apt-get update
sudo apt-get upgrade -y

# Install prerequisites
sudo apt-get install -y curl unzip

# Install K3s
curl -sfL https://get.k3s.io | sh -

# Wait for K3s to be ready
sleep 30

# Copy kubeconfig to a more accessible location
mkdir -p $HOME/.kube
sudo cp /etc/rancher/k3s/k3s.yaml $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
export KUBECONFIG=$HOME/.kube/config
chmod 600 $HOME/.kube/config

# Update kubeconfig to use the public IP
PUBLIC_IP=$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)
sed -i "s/127.0.0.1/$PUBLIC_IP/g" $HOME/.kube/config

echo "K3s installation completed!"
echo "To use kubectl remotely, copy the kubeconfig from $HOME/.kube/config"