# Aliio DCGPP (Decentralized Content Generation and Publishing Platform)

Aliio DCGPP is an open-source, decentralized platform designed to automate content generation, SEO optimization, and publishing across multiple digital channels. This monorepo contains various microservices built using TypeScript, Next.js, and NestJS, providing a scalable and flexible solution for developers and marketers looking to enhance their digital content workflows.

## Table of Contents

1. Introduction
2. Features
3. Monorepo Structure
4. Getting Started
5. Microservices Overview
6. Installation and Setup
7. Running the Project
8. Testing
9. Deployment
10. Contributing
11. License

## 1. Introduction

Aliio DCGPP aims to provide an end-to-end solution for decentralized content creation and publishing. It leverages AI-powered content generation with OpenAI, decentralized storage using IPFS, multichannel publishing, and an API-first architecture to deliver a robust and scalable digital experience platform (DXP).

## 2. Features

- AI-Powered Content Generation using OpenAI API
- SEO Optimization Microservice for basic and advanced SEO analysis
- Decentralized Content Storage using IPFS
- Multichannel Publishing to Web, Mobile, Social Media, and more
- User Management with OAuth 2.0 Authentication and Role-Based Access Control (RBAC)
- Scalable Microservices Architecture with GraphQL API Gateway
- Monitoring and Logging with Prometheus and Grafana
- Open Source with community-driven development

## 3. Monorepo Structure

The project is structured as a monorepo managed with Nx, containing the following microservices:

- content-engine: Next.js 14 application for AI-powered content generation.
- seo-optimizer: NestJS microservice for SEO analysis and optimization.
- storage-service: Service for decentralized content storage using IPFS.
- publishing-service: Service for multichannel content publishing.
- auth-service: User management and authentication service using OAuth 2.0.
- api-gateway: GraphQL API Gateway to manage microservice communication.

## 4. Getting Started

To get started with Aliio DCGPP, clone the repository and follow the setup instructions for each microservice.

1. Clone the repository:
   `git clone https://github.com/atiqisrak/aliio-dcgpp.git`
2. Navigate to the project directory:
   `cd aliio-dcgpp`

3. Install global dependencies:
   `npm install -g nx`

## 5. Microservices Overview

### content-engine

- A Next.js 14 application that integrates with the OpenAI API to generate AI-powered content based on user input. It provides a user-friendly interface for content creation with customizable templates.

### seo-optimizer

- A NestJS microservice that performs basic and advanced SEO analysis on the generated content, providing insights and optimization suggestions to improve search engine visibility.

### storage-service

- A microservice that handles decentralized content storage using IPFS. It ensures content integrity and availability in a decentralized network.

### publishing-service

- A microservice responsible for publishing content across multiple channels such as web, mobile, and social media. It integrates with Contentful CMS and other platforms for seamless content distribution.

### auth-service

- A microservice for user authentication and management using OAuth 2.0. It provides secure access control with role-based permissions for different user types.

### api-gateway

- A GraphQL API Gateway that manages communication between all microservices, providing a unified API interface for the frontend and other external clients.

## 6. Installation and Setup

1. Install dependencies for all microservices:
   `npm install`

2. Create environment files for each microservice:

   - content-engine: `.env.local`
   - seo-optimizer: `.env`
   - storage-service: `.env`
   - publishing-service: `.env`
   - auth-service: `.env`

   Add necessary environment variables such as OpenAI API keys, database URLs, and OAuth credentials.

3. Initialize the database (if required):
   `nx run auth-service:migrate`

## 7. Running the Project

1. Start the development server for each microservice:

   - Content Engine: `nx serve content-engine`
   - SEO Optimizer: `nx serve seo-optimizer`
   - Storage Service: `nx serve storage-service`
   - Publishing Service: `nx serve publishing-service`
   - Auth Service: `nx serve auth-service`

2. Start the API Gateway:
   `nx serve api-gateway`

3. Open your browser and navigate to `http://localhost:3000` to access the Content Engine UI.

## 8. Testing

1. Run unit tests for all microservices:
   `nx test`

2. Run integration tests:
   `nx e2e`

3. Ensure that all tests pass before committing changes.

## 9. Deployment

Aliio DCGPP can be deployed on AWS or any other cloud provider. Follow these steps for deployment:

1. Set up Docker containers for each microservice:
   `nx build content-engine --prod && docker build -t content-engine .`

2. Use CI/CD pipelines (GitHub Actions or Jenkins) to automate testing, building, and deployment.

3. Monitor services with Prometheus and Grafana.

## 10. Contributing

We welcome contributions from the community! Please follow our contribution guidelines and code of conduct. To contribute:

1. Fork the repository.
2. Create a new branch with your feature or bug fix.
3. Submit a pull request with a detailed description of your changes.

## 11. License

Aliio DCGPP is open source and available under the MIT License. See the LICENSE file for more information.

---

Feel free to customize this README to better fit your project's specifics, and add any additional details as needed!
