# Kubernetes DevSecOps CICD Project Using Github Actions and ArgoCD


Click on the image above to watch the video.

![gif2](https://github.com/cloudcore-hub/reactjs-quiz-app/assets/88560609/a0dfce93-3bde-45af-b82a-d7c9e2c47294)

- [Step 1: SSH Exchange between local computer and Github account.](#step-1-ssh-exchange-between-local-computer-and-github-account)
- [Step 2: CREATE AWS Resources.](#step-2-create-aws-resources)
- [Step 3: Install Terraform & AWS CLI.](#step-3-install-terraform--aws-cli)
- [Step 4: Deploy the Jumphost Server(EC2) using Terraform on Github Actions.](#step-4-deploy-the-jumphost-server-ec2-using-terraform-on-github-actions)
- [Step 5: Configure the Jumphost.](#step-5-configure-the-jumphost)
- [Step 6: Setup Docker Repositories to allow image push for Frontend & Backend images.](#step-6-setup-docker-repositories-to-allow-image-push-for-frontend--backend-images)
- [Step 7: Configure Sonar Cloud for our app_code Pipeline.](#step-7-configure-sonar-cloud-for-our-app_code-pipeline)
- [Step 8: Setup Synk Token for the app code pipeline.](#step-8-setup-synk-token-for-the-app-code-pipeline)
- [Step 9: Review and Deploy Application Code.](#step-9-review-and-deploy-application-code)
- [Step 10: Configure ArgoCD.](#step-10-configure-argocd)
- [Step 11: Set up the Monitoring for our EKS Cluster using Prometheus and Grafana.](#step-11-set-up-the-monitoring-for-our-eks-cluster-using-prometheus-and-grafana)
- [Step 12: Deploy Quiz Application using ArgoCD.](#step-12-deploy-quiz-application-using-argocd)
- [Step 13: Creating an A-Record in AWS Route 53 Using ALB DNS.](#step-13-creating-an-a-record-in-aws-route-53-using-alb-dns)
- [Step 14: Clean up.](#step-14-clean-up)
- [Conclusion](#conclusion)


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
