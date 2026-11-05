# Africa Opportunity Hub

> **Built with purpose. Designed for opportunity. Inspired by Africa.**

Africa Opportunity Hub is a platform designed to help young Africans discover opportunities across the continent and beyond. It brings jobs, scholarships, internships, fellowships, and grants into one place, making it easier for people to find opportunities that support their education, careers, and personal development.

This project is being developed as both a useful platform and a practical way to demonstrate full-stack software engineering, backend development, API design, database design, and system architecture.

**Status:** Active development — features and architecture are evolving.

---

## Table of Contents

- [Project Objectives](#project-objectives)
- [Opportunity Categories](#opportunity-categories)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Current Features](#current-features)
- [Development Progress](#development-progress)
- [Planned Features](#planned-features)
- [User Roles](#user-roles)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Roadmap](#roadmap)
- [Project Vision](#project-vision)

---

## Project Objectives

The main objectives of Africa Opportunity Hub are to:

- Create a centralized platform where young Africans can discover relevant opportunities.
- Make opportunities easier to search, explore, and access.
- Provide a simple and intuitive user experience.
- Allow approved contributors to submit opportunities for review.
- Give administrators tools to review and manage published opportunities.
- Build a maintainable backend with clear separation of responsibilities.
- Apply practical software engineering concepts, including REST API design, relational database design, validation, authentication, and testing.

## Opportunity Categories

The platform focuses on five main categories:

1. **Jobs** — Employment opportunities across different industries and experience levels.
2. **Scholarships** — Funding opportunities for education and academic development.
3. **Internships** — Opportunities to gain practical experience and develop professional skills.
4. **Fellowships** — Structured programmes for professional, academic, and leadership development.
5. **Grants** — Funding opportunities for individuals, organizations, and initiatives.

## Technology Stack

The project is being developed with the following technologies.

### Frontend

- React
- TypeScript
- Vite
- React Router
- Lucide React
- CSS

### Backend

- Java
- Spring Boot (planned as the backend framework)
- RESTful APIs
- Maven

### Database

- MySQL

### Development Tools

- IntelliJ IDEA
- Visual Studio Code
- MySQL Workbench
- Git and GitHub

> The technology stack and implementation details may evolve as development progresses.

## Architecture

The intended backend architecture is a **modular monolith** with a layered structure.

The goal is to keep the application organized by responsibility while allowing the project to remain straightforward to develop, test, and maintain.

The main backend layers are:

- **Controller:** Handles incoming HTTP requests and returns API responses.
- **Service:** Contains business logic and coordinates application operations.
- **Repository:** Handles database access.
- **Model:** Represents the main domain entities.
- **DTO:** Defines the data transferred between the API and its clients.
- **Config:** Holds application configuration.

The project uses a relational database to manage users, categories, opportunities, submissions, and saved opportunities.

## Current Features

### Frontend

The following frontend functionality has been implemented using sample opportunity data:

- Landing page with an introduction to the platform.
- Opportunity categories displayed on the home page.
- Featured opportunities.
- Explore opportunities page.
- Search opportunities by keyword.
- Filter opportunities by category and eligibility.
- Sort opportunities.
- Paginate opportunity results.
- Individual opportunity details pages.
- Navigation between the home, explore, login, and registration pages.
- Responsive navigation for smaller screens.
- Login and registration user interfaces.
- Basic client-side form validation.
- Password visibility controls.
- Not-found state for invalid opportunity details.
- Automatic scroll-to-top when navigating between pages.

### Backend

Backend development is underway. The initial work has included:

- Java backend project setup.
- MySQL database connection and testing.
- Category domain and data-access implementation.
- Initial API server and endpoint testing.
- Initial opportunity data and database work.

The backend is still being developed and will be integrated with the frontend as the API functionality becomes available.

## Development Progress

| Area | Progress |
|---|---|
| Frontend project setup | Completed |
| Shared layout and navigation | Completed |
| Home page | Completed |
| Explore opportunities page | Completed |
| Search, filtering, sorting, and pagination UI | Completed |
| Opportunity details page | Completed |
| Login and registration UI | Completed |
| Client-side form validation | Completed |
| Database setup and connection | Initial setup completed |
| Category backend functionality | Implemented and tested |
| Opportunity backend functionality | In progress |
| Spring Boot setup and backend structure | In progress |
| Authentication and authorization | Planned |
| Frontend and backend integration | Planned |
| Saved opportunities | Planned |
| Contributor submission workflow | Planned |
| Admin review and publishing workflow | Planned |
| Automated tests and deployment | Planned |

## Planned Features

The following capabilities are part of the intended product:

- User registration, login, and logout.
- Secure authentication and authorization.
- User profiles.
- Save and unsave opportunities.
- View a personal list of saved opportunities.
- Submit opportunities for review (approved contributors only).
- Admin review of submitted opportunities.
- Publish, reject, edit, and archive opportunities.
- Validation of opportunity details and application links.
- Duplicate opportunity checks.
- Filtering and sorting supported by backend API endpoints.
- Pagination supported by backend API endpoints.

## User Roles

The platform is intended to support three roles. Each user will have one role at a time.

### 1. User

A standard registered user will be able to:

- Browse and search opportunities.
- Filter and sort opportunities.
- View opportunity details.
- Save and unsave opportunities.
- View saved opportunities.

### 2. Contributor

A contributor will have all standard user capabilities, with the additional ability to:

- Submit new opportunities for review.
- Provide relevant opportunity details and source links.
- Track the status of submitted opportunities (planned).

### 3. Admin

An administrator will be able to:

- Browse and manage opportunities.
- Review submitted opportunities.
- Create and edit opportunities.
- Publish, reject, and archive opportunities.
- Promote standard users to contributors.
- Perform administrative actions required to maintain the platform.

## Project Structure

The frontend and backend are currently developed as separate projects. The intended GitHub repository may bring them together under one repository.

A possible structure is:

```text
africa-opportunity-hub/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── types/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   └── main/
│   │       └── java/
│   └── pom.xml
│
├── .gitignore
└── README.md
```

This is an illustrative structure. The actual folder names may differ depending on how the projects are arranged in the repository.

## Getting Started

### Prerequisites

To work on the project locally, you will need:

- Node.js and npm
- Java Development Kit (JDK)
- Maven
- MySQL
- Git

### Frontend Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

### Backend Setup

Backend setup instructions will be added once the backend project structure and application configuration are finalized.

The backend requires a configured MySQL database and the appropriate local database connection settings.

**Important:** Do not commit database passwords, API keys, or other secrets to GitHub. Use environment variables or a local configuration file excluded from version control.

## Roadmap

The development roadmap is organized into the following stages:

- [x] Set up the React and TypeScript frontend.
- [x] Build the shared layout and navigation.
- [x] Implement the home and explore pages.
- [x] Implement opportunity details pages.
- [x] Add search, filtering, sorting, and pagination interfaces.
- [x] Build login and registration interfaces.
- [x] Set up the initial MySQL database.
- [x] Implement and test initial category backend functionality.
- [ ] Complete the opportunity backend functionality.
- [ ] Finalize the Spring Boot backend structure.
- [ ] Implement authentication and authorization.
- [ ] Connect the frontend to the backend APIs.
- [ ] Implement saved opportunities.
- [ ] Implement contributor opportunity submissions.
- [ ] Implement administrator review and publishing workflows.
- [ ] Add comprehensive backend and frontend tests.
- [ ] Deploy the application.

## Project Vision

Africa Opportunity Hub aims to make opportunity discovery simpler and more accessible for young Africans.

Beyond the technical implementation, the broader vision is to build a platform that helps people discover possibilities, access resources, and take meaningful steps toward their goals.

The project is being built incrementally, with an emphasis on clean code, maintainable architecture, practical engineering decisions, and a useful end product.

---

**Africa Opportunity Hub — Built with purpose. Designed for opportunity. Inspired by Africa.**
