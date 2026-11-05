Africa Opportunity Hub 🌍

Connecting young Africans to opportunities that help them learn, grow, and build their future.

Africa Opportunity Hub is a full-stack web application designed to make it easier for young Africans to discover opportunities across the continent and beyond.

The platform aims to bring together job opportunities, scholarships, internships, fellowships, and grants in one accessible place, helping users discover relevant opportunities without having to search across multiple websites and platforms.

Built with React, TypeScript, Java, and Spring Boot, the project focuses on creating a practical, maintainable, and scalable platform while applying modern software engineering principles.

🎯 Project Objectives
Make opportunities more accessible to young Africans.
Provide a centralized platform for discovering career, education, and development opportunities.
Allow users to search, filter, and explore opportunities based on their interests and eligibility.
Enable users to create accounts and save opportunities for future reference.
Introduce a contributor workflow for submitting opportunities for review.
Provide administrators with tools to manage and publish opportunities.
✨ Features
Frontend

The React frontend currently includes:

Home Page: Introduction to the platform, featured opportunities, and opportunity categories.
Explore Opportunities: Browse available opportunities.
Search: Search opportunities by title, organization, or keywords.
Filtering: Filter opportunities by category and eligibility scope.
Sorting: Sort opportunities by application deadline or title.
Pagination: Navigate through opportunity listings.
Opportunity Details: View detailed information about individual opportunities.
Responsive Navigation: Navigation that adapts to different screen sizes.
Authentication UI: Login and registration pages with form validation and password visibility controls.
Client-side Routing: React Router navigation with automatic scroll-to-top behaviour.

The frontend currently uses illustrative opportunity data. Integration with the backend is part of the ongoing development.

Backend

The Java backend includes the foundations for:

Authentication: Authentication endpoints and supporting authentication services.
JWT Security: JWT service and authentication filter.
User Management: User model, repository and user details service.
Category Management: Category controller, service and repository.
Opportunity Management: Opportunity controller, service and repository.
Security Configuration: Spring Security configuration and CSRF handling.
Data Transfer Objects: Dedicated request and response DTOs.

Backend functionality is being developed incrementally, with end-to-end integration and runtime verification still in progress.

Planned Features
Complete frontend-backend integration.
User profiles and account management.
Save and unsave opportunities.
Personal saved-opportunities dashboard.
Contributor access and opportunity submissions.
Administrative review and approval of submissions.
Opportunity publishing, editing, archiving, and rejection.
Backend validation and duplicate opportunity detection.
🛠️ Technology Stack
Frontend
React
TypeScript
Vite
React Router
Lucide React
CSS
Backend
Java
Spring Boot
Spring Security
JSON Web Tokens (JWT)
RESTful APIs
Maven
Database
MySQL
Development Tools
IntelliJ IDEA
Visual Studio Code
MySQL Workbench
Git and GitHub
🏗️ Application Architecture

Africa Opportunity Hub is structured as a full-stack application with a React-based frontend and a Java Spring Boot backend.

Frontend Architecture

The frontend follows a component-based architecture, with separation of responsibilities across:

Components: Reusable UI elements.
Layouts: Shared application layouts and navigation.
Pages: Individual application screens.
Services: API and application service logic.
Data: Opportunity data used during frontend development.
Types: TypeScript interfaces and type definitions.
Styles: Shared and component-specific styling.
Backend Architecture

The backend follows a layered architecture to separate application responsibilities:

Controller: Handles incoming HTTP requests and responses.
Service: Contains business logic and application operations.
Repository: Handles database access and persistence.
Model: Represents application domain entities.
DTO: Defines request and response data structures.
Security: Handles authentication and JWT-related functionality.
Config: Contains application and security configuration.

The backend exposes REST endpoints designed to communicate with the frontend using JSON.

Core Domain Entities

The current backend domain model includes:

User: Represents a registered platform user.
Category: Represents an opportunity category.
Opportunity: Represents an opportunity published on the platform.

Additional entities, including saved opportunities and opportunity submissions, are planned for future development.

📂 Project Structure

The repository contains both frontend and backend projects under one root directory.

text
AfricaOpportunityHubProject/
│
├── README.md
├── .gitignore
│
├── be-africa-opportunity-hub/
│   ├── .mvn/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/africaopportunityhub/
│   │   │   │   ├── config/
│   │   │   │   ├── controller/
│   │   │   │   ├── dto/
│   │   │   │   ├── model/
│   │   │   │   ├── repository/
│   │   │   │   ├── security/
│   │   │   │   └── service/
│   │   │   └── resources/
│   │   └── test/
│   ├── mvnw
│   ├── mvnw.cmd
│   └── pom.xml
│
└── fe-africa-opportunity-hub/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── layouts/
    │   │   └── opportunities/
    │   ├── data/
    │   ├── pages/
    │   ├── services/
    │   ├── styles/
    │   └── types/
    ├── package.json
    └── vite.config.ts

📊 Development Progress

The project is being developed incrementally, with frontend and backend implementation progressing in parallel.

Area	Status
Frontend project setup	Completed
Design system and shared layouts	Completed
Navigation and routing	Completed
Home page	Completed
Explore opportunities	Completed
Search, filtering and sorting	Implemented
Pagination	Implemented
Opportunity details	Implemented
Login and registration UI	Implemented
Backend project setup	Completed
Backend category components	Implemented
Backend opportunity components	Implemented
Authentication and JWT infrastructure	Implemented; runtime verification pending
Frontend-backend integration	In progress
Saved opportunities	Planned
Contributor workflows	Planned
Admin workflows	Planned
End-to-end testing	Planned
Deployment	Planned
🚀 Getting Started
Prerequisites

Ensure you have the following installed:

Node.js and npm
Java Development Kit (JDK)
MySQL Server
Git

The backend includes the Maven Wrapper, so a separate Maven installation is not required.

1. Clone the repository
bash
git clone <repository-url>
cd AfricaOpportunityHubProject

2. Frontend Setup

Navigate to the frontend directory:

bash
cd fe-africa-opportunity-hub


Install dependencies:

bash
npm install


Start the development server:

bash
npm run dev


The frontend should be available at:

text
http://localhost:5173

3. Backend Setup

Navigate to the backend directory from the repository root:

bash
cd be-africa-opportunity-hub


Configure the required database connection properties and application secrets using local environment variables or your IDE's run configuration.

Ensure MySQL is running and the configured database is available.

On Windows, start the Spring Boot application using the Maven Wrapper:

powershell
.\mvnw.cmd spring-boot:run


On macOS or Linux:

bash
./mvnw spring-boot:run


Note: The backend requires valid local database configuration before it can start successfully. Actual credentials and application secrets should never be committed to the repository.

🔐 Planned User Roles

The intended platform will support three user roles:

1. User
Browse and explore opportunities.
Search and filter opportunities.
Save and manage saved opportunities.
2. Contributor
Access all User capabilities.
Submit opportunities for administrative review.
3. Admin
Manage opportunities.
Review contributor submissions.
Approve, reject, publish, and archive opportunities.
Manage platform users and contributor access.

Role-based permissions and the associated workflows are part of the planned platform functionality.

🗺️ Roadmap

The development roadmap includes:

Complete the frontend experience.
Complete backend API development.
Finalise secure user registration and authentication.
Integrate the frontend with backend APIs.
Implement saved opportunities.
Develop contributor submission workflows.
Develop administrative management capabilities.
Introduce automated testing and validation.
Deploy the application.
💡 Project Vision

Africa Opportunity Hub is built around a simple idea: access to opportunities should not depend on how well-connected someone is or how many websites they know to search.

By bringing opportunities together in one accessible platform, the goal is to help more young Africans discover possibilities, take meaningful action, and build their futures.

Built with purpose. Designed for opportunity. Inspired by Africa.

Africa Opportunity Hub is an actively developed full-stack project.