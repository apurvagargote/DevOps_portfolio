# Setting Up Your K3s Deployment

This guide walks you through setting up your portfolio application on K3s running on an EC2 instance.

## Prerequisites

1. AWS account with permissions to create EC2 instances
2. AWS CLI configured with your credentials
3. Terraform installed
4. kubectl installed
5. GitHub account with your repository

## Step 1: Set Up GitHub Secrets

Add these secrets to your GitHub repository:

- `AWS_ACCESS_KEY_ID`: Your AWS access key
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret key
- `DOCKERHUB_USERNAME`: Your Docker Hub username
- `DOCKERHUB_TOKEN`: Your Docker Hub token
- `MONGODB_URI`: Your MongoDB connection string
- `EMAIL_USER`: Your email address for contact form
- `EMAIL_PASS`: Your email password/app password
- `EMAIL_TO`: Destination email for contact form submissions

## Step 2: Provision EC2 with Terraform

```bash
cd terraform
terraform init
terraform apply
```

This will:
- Create a t2.micro EC2 instance (free tier eligible)
- Generate an SSH key pair automatically
- Install K3s automatically
- Set up NGINX Ingress Controller

The SSH private key will be saved as `terraform/k3s-key.pem`.

## Step 3: Get Kubeconfig

```bash
# SSH into your EC2 instance using the generated key
ssh -i terraform/k3s-key.pem ubuntu@<ec2-public-ip>

# Copy the kubeconfig
cat ~/.kube/config
```

Add this kubeconfig content to your GitHub secrets as `KUBE_CONFIG`.

## Step 4: Push to Dev Branch

```bash
git checkout dev
git add .
git commit -m "Update deployment configuration"
git push origin dev
```

This will trigger the GitHub Actions workflow to:
1. Build and push Docker images with the `dev` tag
2. Deploy to the `development` namespace in K3s

## Step 5: Access Your Application

- Frontend: http://<ec2-public-ip>/
- Backend API: http://<ec2-public-ip>/api
- Grafana: http://<ec2-public-ip>/grafana (default username: admin)

## Step 6: Set Up Monitoring (Optional)

```bash
# SSH into your EC2 instance
ssh -i terraform/k3s-key.pem ubuntu@<ec2-public-ip>

# Run the monitoring setup script
chmod +x ~/portfolio/scripts/setup-monitoring.sh
~/portfolio/scripts/setup-monitoring.sh
```

## Step 7: Promote to Production

When you're ready to deploy to production:

```bash
git checkout main
git merge dev
git push origin main
```

This will deploy to the `production` namespace in K3s.