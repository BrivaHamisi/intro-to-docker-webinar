# Docker Fundamentals - Interactive Learning Website

A modern, interactive Next.js single-page application designed for teaching Docker concepts in a classroom setting. This project itself serves as a practical example of containerization.

## Overview

This application provides:
- **Interactive UI** for exploring Docker concepts
- **Core Concepts Section** with detailed explanations
- **Workflow Demonstration** showing Docker's development lifecycle  
- **Command Reference** for essential Docker commands
- **Production-Ready Dockerfile** as a teaching example

Perfect for demonstrating how to containerize a Next.js application!

## Quick Start

### Prerequisites
- Node.js 18+ and npm (for local development)
- Docker (to containerize the application)

### Development Mode

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

### Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

## Docker Usage

### Build and Run with Docker

```bash
# Build the Docker image
docker build -t intro-to-docker:latest .

# Run the container
docker run -d -p 3000:3000 --name docker-learning intro-to-docker:latest

# View logs
docker logs docker-learning

# Stop the container
docker stop docker-learning

# Remove the container
docker rm docker-learning
```

### Using Docker Compose

```bash
# Start the application with Docker Compose
docker compose up -d

# View logs
docker compose logs -f app

# Stop the application
docker compose down
```

### Viewing Container Details

```bash
# List running containers
docker ps

# Access the running container shell
docker exec -it docker-learning sh

# View container resource usage
docker stats

# Inspect the image
docker image inspect intro-to-docker:latest
```

## Teaching Points

This project demonstrates several Docker concepts:

1. **Multi-stage Builds** - The Dockerfile uses a builder stage to optimize the final image size
2. **Alpine Images** - Uses lightweight `node:18-alpine` base images
3. **Layer Caching** - Dockerfile is ordered to leverage Docker's build cache
4. **Production Optimization** - Installs only production dependencies in the final stage
5. **Port Exposure** - Demonstrates the EXPOSE instruction
6. **Environment Variables** - Sets NODE_ENV for production optimization

## Classroom Scenarios

### Scenario 1: Basic Containerization
Show students how to:
1. Build the image: `docker build -t intro-to-docker:latest .`
2. Run the container: `docker run -p 3000:3000 intro-to-docker:latest`
3. Access the application at localhost:3000

### Scenario 2: Multi-stage Builds
Examine the Dockerfile to discuss:
- Why multi-stage builds are important
- How builder stage optimizes the final image
- The difference between the builder and production stages

### Scenario 3: Container Inspection
Teach students to:
1. Use `docker ps` to see running containers
2. Use `docker logs` to view container output
3. Use `docker exec` to access the running container
4. Use `docker inspect` to examine container configuration

### Scenario 4: Docker Compose
Show orchestration by:
1. Starting with `docker compose up`
2. Inspecting logs with `docker compose logs`
3. Stopping with `docker compose down`

### Scenario 5: Image Management
Demonstrate:
1. `docker images` - List all images
2. `docker rmi` - Remove images
3. `docker tag` - Tag images for registries
4. `docker push` - Push to Docker Hub

## Project Structure

```
intro-to-docker/
├── Dockerfile                 # Multi-stage Docker build
├── docker-compose.yml        # Docker Compose configuration
├── .dockerignore             # Files to exclude from Docker builds
├── package.json              # Node.js dependencies
├── app/
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Interactive Docker learning page
│   ├── globals.css           # Global styles
│   └── favicon.ico           # App icon
├── public/                   # Static assets
└── README.md                 # This file
```

## Key Technologies

- **Next.js** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Docker** - Containerization platform

## Common Docker Commands Reference

| Command | Purpose |
|---------|---------|
| `docker build -t name:tag .` | Build an image from Dockerfile |
| `docker run -p 3000:3000 image` | Run a container from an image |
| `docker ps` | List running containers |
| `docker ps -a` | List all containers |
| `docker logs container_id` | View container logs |
| `docker exec -it container_id bash` | Access container shell |
| `docker stop container_id` | Stop a running container |
| `docker rm container_id` | Remove a stopped container |
| `docker images` | List available images |
| `docker rmi image_id` | Remove an image |

## Learning Resources

- [Docker Official Documentation](https://docs.docker.com/)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [Next.js Deployment with Docker](https://nextjs.org/docs/deployment)

## Extending the Application

You can enhance this application by:

1. Adding more interactive sections for advanced concepts (Networking, Volumes, Swarm, Kubernetes)
2. Creating hands-on exercises with embedded code playgrounds
3. Adding dark mode toggle (already styled for it)
4. Creating a sidebar navigation for better organization
5. Adding code syntax highlighting for example commands
6. Implementing a quiz section to test knowledge

## Tips for Classroom Use

1. **Live Coding**: Show students the Dockerfile while explaining each layer
2. **Container Inspection**: Use `docker inspect` to show all configuration details
3. **Performance Demo**: Compare container startup time vs VMs
4. **Networking Demo**: Run multiple containers and show communication
5. **Registry Demo**: Build and push to Docker Hub to show image distribution

## License

This project is open source and available for educational purposes.

---

**Built with ❤️ for Docker Education**
