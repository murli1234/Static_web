# 📄 Project Documentation: Static Website CI/CD Pipeline

## 1. Introduction
This documentation describes the architecture, workflow, and usage of the Static Website CI/CD Pipeline project. The project automates the deployment of a static HTML website using Jenkins and Docker.

## 2. Architecture Overview
- **Source Code**: Hosted on GitHub
- **Jenkins**: Automates build, test, and deployment
- **Docker**: Containerizes the static website
- **Nginx**: Serves the static content inside the container

## 3. Workflow
1. **Code Commit**: Developer pushes changes to GitHub
2. **Jenkins Trigger**: SCM polling detects changes and triggers the pipeline
3. **Build Stage**:
   - Jenkins checks out the latest code
   - Builds a Docker image using the `Dockerfile`
4. **Test/Deploy Stage**:
   - Runs the Docker container
   - (Optional) Pushes the image to Docker Hub
5. **Access**: Website is available at `http://localhost` (or server IP)

## 4. Jenkins Pipeline Details
- **Jenkinsfile** defines the pipeline stages:
  - Checkout
  - Build Docker image
  - Run container
  - Push to Docker Hub (optional)
- **Plugins Required**:
  - Docker
  - Pipeline
  - Git
  - Credentials Binding (for DockerHub)

## 5. Manual Deployment
To deploy without Jenkins:
```cmd
# Clone repo
git clone https://github.com/murli1234/Static_web.git
cd Static_web

# Build Docker image
docker build -t static-web-app .

# Run container
docker run -d -p 80:80 static-web-app
```

## 6. File Descriptions
- `index.html`, `index.css`, `index.js`, `I.png`: Static website files
- `Dockerfile`: Instructions to build the Nginx container
- `Jenkinsfile`: Jenkins pipeline script
- `README.md`: Project overview and quickstart
- `PROJECT_DOCUMENTATION.md`: Detailed documentation

## 7. Troubleshooting
- Ensure Docker and Jenkins are installed and running
- Check Jenkins logs for pipeline errors
- Verify port 80 is available on your system

## 8. Author & Contact
- **Author**: Murli Patidar
- **Location**: Bhopal, India
- **GitHub**: [murli1234](https://github.com/murli1234)

---
For further questions, raise an issue on GitHub or contact the author directly.
