
# 🚀 Static Website CI/CD Pipeline with Jenkins and Docker

This project demonstrates a complete CI/CD pipeline for deploying a static HTML website using Jenkins and Docker.

It automates the process of:
- Fetching code from GitHub
- Building a Docker image
- Running the container
- (Optional) Pushing to Docker Hub

---

## 🛠️ Tech Stack

- **HTML/CSS** – Static frontend
- **Jenkins** – CI/CD pipeline automation
- **Docker** – Containerization
- **Nginx** – Web server (inside container)
- **Git & GitHub** – Source control

---

## ✅ Features

- GitHub integration with Jenkins
- SCM Polling (auto-trigger build on code change)
- Docker image creation and version tagging
- Optional push to Docker Hub
- Container deployment using `nginx`

---

## 🗂️ Project Structure

Static_web/
├── index.html # Your main static webpage
├── Dockerfile # Docker instructions
├── Jenkinsfile # Jenkins pipeline script
└── README.md # Project documentation

---

## ⚙️ Jenkins Setup Guide

1. **Install Plugins**:
   - Docker
   - Pipeline
   - Git
   - Credentials Binding (optional for DockerHub)

2. **Job Configuration**:
   - Type: *Pipeline*
   - Set GitHub repo under SCM
   - Enable **Poll SCM**: `H/2 * * * *`
   - Add `Jenkinsfile` from the repo

3. **Pipeline Stages**:
   - Checkout from GitHub
   - Build Docker image
   - Run the container
   - Optional: Push image to DockerHub

---

## 🐳 Docker Commands (Manual Testing)

To test manually (without Jenkins):

```cmd
# Clone repo
git clone https://github.com/murli1234/Static_web.git
cd Static_web

# Build image
docker build -t static-web-app .

# Run container on port 80
docker run -d -p 80:80 static-web-app

# Visit in browser
http://localhost
```

---

## 🙋‍♂️ Author
Murli Patidar  
📍 Bhopal, India  
🔗 [GitHub](https://github.com/murli1234)
