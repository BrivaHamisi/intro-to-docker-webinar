'use client';

import { useState } from 'react';

interface DockerConcept {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string;
  example: string;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [expandedConcept, setExpandedConcept] = useState<string | null>(null);

  const dockerConcepts: DockerConcept[] = [
    {
      id: 'image',
      title: 'Docker Image',
      description: 'A lightweight, standalone, executable package',
      icon: '📦',
      details: 'A Docker image is a blueprint for creating containers. It includes the application code, runtime, libraries, and dependencies. Images are immutable and can be shared and reused.',
      example: 'docker build -t myapp:1.0 .'
    },
    {
      id: 'container',
      title: 'Docker Container',
      description: 'A running instance of a Docker image',
      icon: '🏃',
      details: 'A container is a lightweight, isolated runtime environment. It runs an image and provides complete isolation from the host system and other containers.',
      example: 'docker run -p 3000:3000 myapp:1.0'
    },
    {
      id: 'volume',
      title: 'Docker Volume',
      description: 'Persistent data storage mechanism',
      icon: '💾',
      details: 'Volumes allow data to persist beyond the container lifecycle. They can be shared between containers and the host system.',
      example: 'docker run -v /data:/app/data myapp:1.0'
    },
    {
      id: 'network',
      title: 'Docker Network',
      description: 'Communication layer between containers',
      icon: '🌐',
      details: 'Networks enable containers to communicate with each other and the outside world. Docker provides built-in network drivers.',
      example: 'docker network create mynetwork'
    },
    {
      id: 'registry',
      title: 'Docker Registry',
      description: 'Repository for storing and sharing images',
      icon: '📚',
      details: 'A registry stores Docker images. Docker Hub is the default public registry, but you can also use private registries.',
      example: 'docker push myregistry/myapp:1.0'
    },
    {
      id: 'compose',
      title: 'Docker Compose',
      description: 'Multi-container orchestration tool',
      icon: '🎼',
      details: 'Docker Compose uses a YAML file to define and run multi-container applications. Simplifies complex setups.',
      example: 'docker compose -f docker-compose.yml up'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center gap-4">
            <div className="text-5xl">🐋</div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Docker Fundamentals
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Learn containerization with interactive demonstrations
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-4 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'concepts', label: 'Core Concepts' },
              { id: 'workflow', label: 'Workflow' },
              { id: 'commands', label: 'Commands' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium text-sm border-b-2 transition ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What is Docker?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Docker is a containerization platform that allows you to package applications
                and their dependencies into isolated, portable containers. This ensures that
                applications run consistently across different environments.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded">
                  <div className="text-3xl mb-2">⚙️</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    Lightweight
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Minimal overhead compared to virtual machines
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-gray-700 p-6 rounded">
                  <div className="text-3xl mb-2">🔄</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    Portable
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Run anywhere: dev, test, production
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-gray-700 p-6 rounded">
                  <div className="text-3xl mb-2">🔒</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    Isolated
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Secure resource isolation between containers
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Concepts Tab */}
        {activeTab === 'concepts' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dockerConcepts.map((concept) => (
              <div
                key={concept.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
                onClick={() => setExpandedConcept(
                  expandedConcept === concept.id ? null : concept.id
                )}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="text-4xl">{concept.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {concept.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {concept.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-xl ml-2">
                      {expandedConcept === concept.id ? '−' : '+'}
                    </div>
                  </div>
                  {expandedConcept === concept.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                        {concept.details}
                      </p>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded p-3 text-sm font-mono text-gray-800 dark:text-gray-200 break-all">
                        {concept.example}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Workflow Tab */}
        {activeTab === 'workflow' && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Docker Workflow
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Write Dockerfile',
                  description: 'Define your application dependencies and setup instructions'
                },
                {
                  step: 2,
                  title: 'Build Image',
                  description: 'Use docker build to create an image from your Dockerfile'
                },
                {
                  step: 3,
                  title: 'Run Container',
                  description: 'Use docker run to start a container from your image'
                },
                {
                  step: 4,
                  title: 'Push to Registry',
                  description: 'Upload your image to Docker Hub or a private registry'
                },
                {
                  step: 5,
                  title: 'Deploy',
                  description: 'Pull and run your container in production environments'
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Commands Tab */}
        {activeTab === 'commands' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Essential Docker Commands
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { cmd: 'docker --version', desc: 'Check Docker version' },
                  { cmd: 'docker images', desc: 'List all images' },
                  { cmd: 'docker ps', desc: 'List running containers' },
                  { cmd: 'docker ps -a', desc: 'List all containers' },
                  { cmd: 'docker build -t name:tag .', desc: 'Build an image' },
                  { cmd: 'docker run -d -p 80:80 image', desc: 'Run a container' },
                  { cmd: 'docker stop container_id', desc: 'Stop a container' },
                  { cmd: 'docker rm container_id', desc: 'Remove a container' },
                  { cmd: 'docker logs container_id', desc: 'View container logs' },
                  { cmd: 'docker exec -it id bash', desc: 'Access container shell' },
                  { cmd: 'docker push image', desc: 'Push image to registry' },
                  { cmd: 'docker pull image', desc: 'Pull image from registry' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
                    <code className="text-sm font-mono text-blue-600 dark:text-blue-400 break-all">
                      {item.cmd}
                    </code>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            🐋 Built with Next.js for Docker Education
          </p>
        </div>
      </footer>
    </div>
  );
}
