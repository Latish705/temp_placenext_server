
<div align="center">
  <img src="https://path-to-your-logo.png" alt="PlaceNext Logo" width="150"/>
  <h1>PlaceNext: University Placement Platform (Backend)</h1>
  <p><strong>The official backend server for PlaceNext, a modern, scalable platform connecting students, colleges, and companies for placement opportunities.</strong></p>
  <p>
    <a href="#-features">Features</a> •
    <a href="#-architecture-overview">Architecture</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-api-documentation">API</a> •
    <a href="#-how-to-contribute">Contribute</a>
  </p>
</div>

---

PlaceNext is an **event-driven, multi-tenant application** built with a focus on clean architecture and modern development practices.  
This repository contains the complete source code for the backend services that power the platform.

---

## ✨ Features

- **Role-Based Access Control**: Distinct user roles for Students, Faculty, and Company Employees, each with specific permissions.  
- **Job Posting & Application**: Companies create job postings with criteria, colleges approve them, and students apply.  
- **Multi-Round Tracking**: Manage the entire interview process across multiple rounds.  
- **Event-Driven Notifications**: Decoupled notification system to inform users of important events (e.g., new job postings, status changes).  

---

## 🏛️ Architecture Overview

The PlaceNext backend is a **Layered, Event-Driven Monolith**, designed for scalability and maintainability. It can be evolved into microservices if required.

### Architecture Diagram
```mermaid
graph TD
    subgraph "Request Layer"
        A[Client App] -->|HTTPS Request| B(Express Router);
        B --> C{Middleware};
    end

    subgraph "Application Layer"
        C --> D[Controllers];
        D --> E{Business Logic};
        E --> F[Models / Data Access];
    end

    subgraph "Business Logic (Design Patterns)"
        P1[Strategy Pattern]
        P2[Factory Pattern]
        P3[Proxy Pattern]
        P4[Observer Pattern]
    end

    subgraph "Data & Events"
        F --> G[(MongoDB Database)];
        H(Event Emitter) -- notifies --> I[Services];
        E -- triggers --> H;
    end

    E-.->P1 & P2 & P3 & P4;
````

### Key Architectural Concepts

* **Layered Design**

  * **Routing**: Directs requests to controllers.
  * **Middleware**: Handles authentication (Firebase), authorization, and validation.
  * **Controllers**: Thin orchestration layer with no business logic.
  * **Models**: Mongoose schemas as the single source of truth.
* **Design Patterns**

  * **Observer Pattern**: Event-based communication between services.
  * **Strategy Pattern**: Role-specific authentication (StudentAuth, FacultyAuth).
  * **Factory Pattern**: Abstract object creation (e.g., OrganisationFactory).
  * **Proxy Pattern**: Permission checks (e.g., JobApprovalProxy).

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Language:** TypeScript
* **Database:** MongoDB with Mongoose ODM
* **Authentication:** Firebase Admin SDK
* **Environment Management:** dotenv

---

## 🚀 Getting Started

### Prerequisites

* Node.js **v18+**
* Running MongoDB instance (local or cloud)
* Google Firebase project with a service account key (`.json` file)

### Local Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/[YOUR-USERNAME]/placenext-server.git
   cd placenext-server
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory:

   ```env
   # Server configuration
   PORT=8000

   # MongoDB connection string
   MONGO_URI=mongodb://127.0.0.1:27017/placenext

   # Firebase Admin SDK credentials (as a single line string)
   FIREBASE_CRED={"type":"service_account","project_id":"your-project-id","private_key_id":"...","private_key":"-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----\\n","client_email":"...","client_id":"...","auth_uri":"...","token_uri":"...","auth_provider_x509_cert_url":"...","client_x509_cert_url":"..."}
   ```

4. **Compile and Run**
   Add these scripts to `package.json`:

   ```json
   "scripts": {
     "build": "tsc",
     "start": "node dist/index.js",
     "dev": "tsc -w & nodemon dist/index.js"
   }
   ```

   Build and start:

   ```bash
   npm run build
   npm start
   ```

   The server will run at [http://localhost:8000](http://localhost:8000).

---

## 📁 Project Structure

```
/src
|-- /api            # Feature-based folders with routes and controllers
|-- /config         # Database (db.ts) and Firebase (firebase.ts) connections
|-- /middleware     # Authentication, authorization, and error handling
|-- /models         # Mongoose schemas and TypeScript interfaces
|-- /patterns       # Factory, Proxy, Strategy pattern implementations
|-- /services       # Observer services (NotificationService, CollegeService)
|-- /events         # Central event emitter for Observer pattern
|-- app.ts          # Express app setup and global middleware
|-- index.ts        # Application entry point
```

---

## 🤝 How to Contribute

### Workflow

1. Fork and clone the repository.
2. Create an issue describing your feature or bug fix.
3. Create a branch:

   ```bash
   git checkout -b feature/my-new-feature
   ```
4. Make changes following coding standards.
5. Write tests and ensure they pass.
6. Push and create a Pull Request linked to your issue.

### Coding Standards

* **TypeScript only** with strict typing (avoid `any`).
* **Follow layered architecture** (no business logic in controllers).
* **Conventional commit messages** (e.g., `feat: Add job application endpoint`).
* **Use event emitter for communication** instead of direct dependencies.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).


