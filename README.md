# Intro To Docker and Containers
Build, Ship and Run your first Container.

![banner](./images/banner.avif)



This project is a single-page Next.js website built to teach Docker fundamentals in class.

It is both:
- A learning website for Docker concepts (images, containers, volumes, networks, compose)
- A real app you can containerize and run as part of the lesson

## Project Info

- Framework: Next.js 16 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Runtime for app: Node.js 20+ (Dockerfile uses Node 22 Alpine)

## What The App Shows

The page includes these sections:
- Overview: what Docker is and why it matters
- Core Concepts: expandable concept cards with explanations and sample commands
- Workflow: build-to-deploy lifecycle
- Commands: quick reference for common Docker commands

Main UI file: app/page.tsx

## Setup

### 1. Prerequisites

Install:
- Node.js 20 or newer
- npm
- Docker Desktop or Docker Engine

### 2. Install Dependencies

```bash
npm install
```

### 3. Run In Development

```bash
npm run dev
```

Open the URL printed by Next.js in the terminal.

Note: if port 3000 is already in use, Next.js will automatically use another port such as 3001 or 3002.

### 4. Build And Run Production Locally

```bash
npm run build
npm start
```

## Docker Setup

### Build Image

```bash
docker build -t intro-to-docker:latest .
```

### Run Container

```bash
docker run --rm -p 3000:3000 --name intro-to-docker intro-to-docker:latest
```

### Stop Container

Press Ctrl+C in the same terminal, or run:

```bash
docker stop intro-to-docker
```

## Docker Compose Setup

```bash
docker compose up --build
```

Stop with:

```bash
docker compose down
```

## How To Explain This Project In Class

Use this quick teaching flow:

1. Start with the problem
Explain that "works on my machine" issues come from differences in OS, runtime, and dependencies.

2. Show the app running locally
Run npm run dev and open the page. Point out the Docker concept sections and command examples.

3. Open the Dockerfile
Explain that the Dockerfile captures runtime + dependencies + startup command in a repeatable way.

4. Build and run the container
Run docker build then docker run. Show the same app runs the same way inside a container.

5. Compare local vs containerized run
Local uses your host environment. Container run uses the image-defined environment.

6. Demonstrate lifecycle commands
Show docker ps, docker logs, docker exec, docker stop to reinforce operational basics.

## Useful Commands For Demo

```bash
docker ps
docker logs intro-to-docker
docker exec -it intro-to-docker sh
docker images
docker compose up --build
docker compose down
```

## Project Files

- app/page.tsx: single-page Docker teaching UI
- Dockerfile: multi-stage build for production container image
- docker-compose.yml: compose setup for running the app
- .dockerignore: files excluded from Docker build context
- README_DOCKER.md: extended Docker teaching notes
