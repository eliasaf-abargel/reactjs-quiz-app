# Kubernetes DevSecOps CICD Project Using Github Actions and ArgoCD


Click on the image above to watch the video.

![gif2](https://github.com/cloudcore-hub/reactjs-quiz-app/assets/88560609/a0dfce93-3bde-45af-b82a-d7c9e2c47294)




### Project Introduction:
Welcome to the End-to-End DevSecOps Kubernetes Project guide! In this comprehensive project, we will walk through the process of setting up a robust Three-Tier architecture on AWS using Kubernetes, DevOps best practices, and security measures. This project aims to provide hands-on experience in deploying, securing, and monitoring a scalable application environment.

### Project Overview:
In this project, we will cover the following key aspects:

1. IAM User Setup: Create an IAM user on AWS with the necessary permissions to facilitate deployment and management activities.
2. Infrastructure as Code (IaC): Use Terraform and AWS CLI to set up the Jumphost server (EC2 instance) on AWS.
3. Github Actions Configuration: configure essential githubt actions on Github Actions workflow, including Snyk, Docker, Sonarqube, Terraform, Kubectl, AWS CLI, and Trivy.
4. EKS Cluster Deployment: Utilize eksctl commands to create an Amazon EKS cluster, a managed Kubernetes service on AWS.
5. Load Balancer Configuration: Configure AWS Application Load Balancer (ALB) for the EKS cluster.
6. Dockerhub Repositories: Automatically Create repositories for both frontend and backend Docker images on Dockerhub.
7. ArgoCD Installation: Install and set up ArgoCD for continuous delivery and GitOps.
8. Sonarqube Integration: Integrate Sonarqube for code quality analysis in the DevSecOps pipeline.
9. Snyk Integration: Integrate Snyk for vulnerability scanning and dependency management analysis in the DevSecOps pipeline.
10. Trivy Integration: Integrate Trivy for container image and filesystem vulnerability scanning in the DevSecOps pipeline.
11. Github Action Pipelines: Create Github Action pipelines for deploying backend and frontend code to the EKS cluster.
12. Monitoring Setup: Implement monitoring for the EKS cluster using Helm, Prometheus, and Grafana.
13. ArgoCD Application Deployment: Use ArgoCD to deploy the Three-Tier application, including database, backend, frontend, and ingress components.
14. DNS Configuration: Configure DNS settings to make the application accessible via custom subdomains.
15. Data Persistence: Implement persistent volume and persistent volume claims for database pods to ensure data persistence.
16. Conclusion and Monitoring: Conclude the project by summarizing key achievements and monitoring the EKS cluster’s performance using Grafana.

### Prerequisites:
Before starting this project, ensure you have the following prerequisites:

- An AWS account with the necessary permissions to create resources.
- Terraform and AWS CLI installed on your local computer.
- Basic familiarity with Kubernetes, Docker, CICD pipelines, Github Actions, Terraform, and DevOps principles.
