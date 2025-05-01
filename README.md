# E-commerce Platform with Django, React, Docker, and AWS EC2


A full-stack e-commerce platform built with **Django** (Backend), **React** (Frontend), containerized using **Docker**, and deployed on **AWS EC2**.

## 🔧 Technologies Used

### Backend
- **Django** (Python): REST API with Django REST Framework
- **PostgreSQL**: Database (Cloud-managed or Dockerized)
- **Authentication**: JWT (Simple JWT)
- **AWS Services**: EC2, RDS (optional), S3 (for static/files if used)

### Frontend
- **React**: Single Page Application (SPA) with dynamic routing
- **Axios**: API communication with Django backend
- **State Management**: Context API or Redux (if used)
- **Styling**: CSS Modules/Tailwind/Bootstrap (as per your setup)

### Infrastructure
- **Docker**: Containerization for both frontend and backend
- **Docker Compose**: Multi-container orchestration
- **AWS EC2**: Cloud deployment
- **Nginx**: Reverse proxy (if used)

## 🚀 Project Structure


```plaintext
ecommerce-project/
├── backend/               # Django backend
│   ├── Dockerfile         # Backend container config
│   ├── requirements.txt   # Python dependencies
│   ├── manage.py          # Django CLI
│   └── ecommerce/        # Main app
│       ├── __init__.py
│       ├── settings.py    # Django settings
│       ├── models.py      # Database schema
│       ├── serializers.py # Data serialization
│       ├── views.py       # API logic
│       ├── urls.py        # API endpoints
│       └── migrations/    # Database migrations
│
├── frontend/              # React frontend
│   ├── Dockerfile         # Frontend container config
│   ├── package.json       # NPM dependencies
│   ├── public/            # Static assets
│   │   ├── index.html
│   │   └── favicon.ico
│   └── src/
│       ├── components/    # Reusable UI components
│       │   ├── Header/
│       │   ├── ProductCard/
│       │   └── Footer/
│       ├── pages/         # Route components
│       │   ├── Home.jsx
│       │   ├── ProductDetail.jsx
│       │   └── Cart.jsx
│       ├── contexts/      # State management
│       │   ├── AuthContext.js
│       │   └── CartContext.js
│       ├── services/      # API clients
│       │   └── api.js
│       ├── App.jsx        # Root component
│       ├── index.jsx      # Entry point
│       └── styles/        # CSS files
│
├── docker-compose.yml     # Multi-service definition
├── .env                   # Environment variables
├── .gitignore
└── README.md
```

## 🌐 How It All Connects

1. **Frontend-Backend Communication**:
   - React app makes API calls to Django backend via Axios
   - Django REST Framework handles these requests and returns JSON responses
   - JWT tokens are used for authenticated routes

2. **Database Layer**:
   - Django models interact with PostgreSQL database
   - Database can be hosted:
     - Inside a Docker container (for development)
     - On AWS RDS (for production)
     - Or directly on EC2

3. **Dockerization**:
   - Each service (Django, React, DB) runs in separate containers
   - `docker-compose.yml` defines how they connect:
     - Frontend container exposes port 3000
     - Backend container exposes port 8000
     - Containers communicate via Docker network

4. **EC2 Deployment**:
   - All containers run on an AWS EC2 instance
   - Security groups configured to allow HTTP/HTTPS traffic
   - Domain and SSL can be added via Route 53 & Certbot

## 🛠️ Setup & Deployment

### Prerequisites
- Docker & Docker Compose installed
- AWS account (for EC2 deployment)
- PostgreSQL (if not using Dockerized DB)

### Development (Local with Docker)
1. Clone the repository
2. Configure environment variables (`.env` files for backend/frontend)
3. Build and start containers:
   ```bash
   docker-compose up --build
### System Architecture

    A[Client] --> B[Cloudflare CDN]
    B --> C[AWS EC2 Instance]
    C --> D[Nginx]
    D --> E[React Frontend]
    D --> F[Django Backend]
    F --> G[(PostgreSQL)]
    F --> H[(Redis)]
    F --> I[AWS S3]
    G --> J[Daily Backups to S3]

### 🛠️ Key Features
- Core Functionality
    - Product Management

    - Categories and tags

    - Inventory tracking

    - Product variants

    - Rich text descriptions
---
- User System

    - Email verification

    - Password reset

    - Profile management

    - Order history
---
- Checkout Process

    - Multi-step cart

    - Coupon codes

    - Multiple payment gateways

    - Order tracking

### 🚀 Deployment Guide
#### Local Development
```bash
# Start with hot-reload
docker-compose -f docker-compose.dev.yml up

# Run tests
docker-compose exec backend pytest
docker-compose exec frontend npm test
```
#### Production Deployment
```bash
# Using Terraform for AWS
cd infrastructure/terraform
terraform init
terraform apply -var="db_password=${DB_PASSWORD}"

# Deploy with Ansible
ansible-playbook -i inventory.ini deploy.yml
```
### 📊Common Maintenance Tasks
#### Database Backups

```bash
pg_dump -h $DB_HOST -U $DB_USER $DB_NAME > backup.sql
aws s3 cp backup.sql s3://your-bucket/backups/
```
#### Log Rotation

```nginx
# Nginx config
access_log /var/log/nginx/access.log main buffer=32k flush=5m;
```

### 🔧 Troubleshooting Guide

#### *Common Issues*

#### Django Database Connection Drops
```bash
#Solution: Increase connection timeout
DATABASES = {
    'default': {
        'OPTIONS': {
            'connect_timeout': 30,
        }
    }
}
```
#### React CORS Errors

```python
# Django settings.py
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "https://yourdomain.com"
]
```

#### Docker Build Failures

```dockerfile
# Optimize Dockerfile
RUN --mount=type=cache,target=/root/.cache \
    pip install -r requirements/prod.txt
```
## 📬 Contact
### Project Maintainer: @NumaIYI
### Live Demo: https://demo.ecommerce.example.com
### Issue Tracker: https://github.com/NumaIYI/E-commerce-django-react-EC2-docker/issues
**Thanks for reading**
