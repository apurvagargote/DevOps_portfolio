# DevOps Portfolio Website

A professional portfolio website built with React and deployed using a complete DevOps SDLC pipeline.

## Architecture Overview

![Architecture Diagram](https://via.placeholder.com/800x400?text=Portfolio+Architecture+Diagram)

This project demonstrates a complete DevOps workflow with:

- **Frontend**: React-based portfolio website with modular components
- **Infrastructure**: AWS resources provisioned with Terraform
- **Containerization**: Docker for application packaging
- **Orchestration**: Kubernetes (EKS) for container management
- **CI/CD**: GitHub Actions for automated build, test, and deployment
- **Monitoring**: Prometheus and Grafana for infrastructure and application metrics

## Project Structure

```
portfolio/
├── public/                  # Static assets
├── src/                     # React application source code
│   ├── components/          # Reusable React components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Footer.jsx       # Page footer
│   │   ├── Home.jsx         # Home/landing page
│   │   ├── About.jsx        # About me section
│   │   ├── Skills.jsx       # Skills and tools section
│   │   ├── Projects.jsx     # DevOps projects showcase
│   │   ├── Resume.jsx       # Resume and experience
│   │   └── Contact.jsx      # Contact information and form
│   ├── assets/              # Images and other assets
│   └── styles/              # CSS and styled components
├── infrastructure/          # Infrastructure as Code
│   ├── terraform/           # Terraform configurations for AWS
│   ├── kubernetes/          # Kubernetes manifests
│   ├── ansible/             # Ansible playbooks for configuration
│   └── monitoring/          # Prometheus and Grafana configurations
└── .github/workflows/       # CI/CD pipeline definitions
```

## DevOps SDLC Workflow

1. **Code**: Develop React components and infrastructure code
2. **Build**: Compile React app and build Docker image
3. **Test**: Run automated tests for React components
4. **Deploy**: 
   - Provision AWS infrastructure with Terraform
   - Configure instances with Ansible
   - Deploy to Kubernetes with kubectl
5. **Monitor**: Track performance with Prometheus and Grafana

## Local Development

### Prerequisites

- Node.js 16+
- Docker and Docker Compose
- Minikube (for local Kubernetes testing)

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Build for production:
   ```
   npm run build
   ```

## Deployment

### Local Kubernetes Deployment

1. Start Minikube:
   ```
   minikube start
   ```

2. Build and deploy to local Kubernetes:
   ```
   docker build -t portfolio:latest .
   kubectl apply -f infrastructure/kubernetes/deployment.yaml
   ```

3. Access the application:
   ```
   minikube service portfolio-service
   ```

### AWS Deployment

The project is set up for automated deployment to AWS EKS using GitHub Actions:

1. Configure the following GitHub secrets:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `DOCKERHUB_USERNAME`
   - `DOCKERHUB_TOKEN`

2. Push to the main branch to trigger the CI/CD pipeline:
   ```
   git push origin main
   ```

3. The pipeline will:
   - Build and test the React application
   - Create a Docker image and push to Docker Hub
   - Apply Terraform configurations to provision AWS resources
   - Deploy the application to EKS
   - Configure monitoring with Prometheus and Grafana

## Monitoring

Access Grafana dashboards at `http://your-domain/grafana` (credentials in AWS Secrets Manager)

## License

MIT