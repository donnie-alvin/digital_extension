
## Progress

### Completed Tasks

1. **Set Up Project**
   - Initialized Node.js project.
   - Installed dependencies: Express, mysql, body-parser, and nodemon.

2. **Database**
   - Designed database schema.
   - Set up the database using `phpMyAdmin` and SQL script.

3. **Backend Development**
   - Implemented CRUD operations for all entities.
   - Established routes for each entity (Users, Crops, Products, Officers, Feedback).

4. **API Endpoints**
   - Built RESTful API endpoints for the following entities:
     - `/api/users` (User management)
     - `/api/crops` (Crop information)
     - `/api/products` (Product management)
     - `/api/officers` (Extension officer information)
     - `/api/feedback` (Feedback collection)

5. **Testing**
   - API endpoints tested using Postman:
     - Successfully tested `POST /users` with sample JSON input.
     - Verified error handling for undefined routes.

---

### Tasks In Progress

- **Frontend Development**
  - Design UI/UX for the platform.
  - Integrate API endpoints with frontend components.

- **Documentation**
  - Expand endpoint usage instructions for developers.
  - Add deployment instructions for local setup.

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-name/digital-extension-services.git
   ```

2. Install dependencies:
   ```bash
   cd digital-extension-services
   npm install
   ```

3. Set up the database:
   - Import the `database-schema.sql` file into `phpMyAdmin`.

4. Run the server locally:
   ```bash
   npm run start
   ```

---

## API Endpoints

| Entity              | HTTP Method | Endpoint                   | Description                     |
|---------------------|-------------|----------------------------|---------------------------------|
| **Users**           | GET         | `/api/users`              | Fetch all users                |
|                     | POST        | `/api/users`              | Create a new user              |
|                     | PUT         | `/api/users/:id`          | Update a user by ID            |
|                     | DELETE      | `/api/users/:id`          | Delete a user by ID            |
| **Crops**           | GET         | `/api/crops`              | Fetch all crops                |
|                     | POST        | `/api/crops`              | Add a new crop                 |
| **Products**        | GET         | `/api/products`           | Fetch all products             |
|                     | POST        | `/api/products`           | Add a new product              |
| **Extension Officers** | GET      | `/api/officers`           | Fetch all officers             |
|                     | POST        | `/api/officers`           | Add a new officer              |
| **Feedback**        | GET         | `/api/feedback`           | Fetch all feedback             |
|                     | POST        | `/api/feedback`           | Submit feedback                |

### Testing the Endpoints

To test the API endpoints, you can use the following cURL commands:

1. **GET /api/users**:
   ```sh
   curl -X GET http://localhost:5001/api/users
   ```

2. **POST /api/users**:
   ```sh
   curl -X POST http://localhost:5001/api/users -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john@example.com", "password": "password123"}'
   ```

3. **GET /api/products**:
   ```sh
   curl -X GET http://localhost:5001/api/products
   ```

4. **POST /api/products**:
   ```sh
   curl -X POST http://localhost:5001/api/products -H "Content-Type: application/json" -d '{"name": "Maize", "description": "Rainy season crop", "price": 100.50}'
   ```

5. **GET /api/officers**:
   ```sh
   curl -X GET http://localhost:5001/api/officers
   ```

6. **POST /api/officers**:
   ```sh
   curl -X POST http://localhost:5001/api/officers -H "Content-Type: application/json" -d '{"name": "Jane Smith", "email": "jane@example.com", "phone": "123-456-7890"}'
   ```

7. **GET /api/feedback**:
   ```sh
   curl -X GET http://localhost:5001/api/feedback
   ```

8. **POST /api/feedback**:
   ```sh
   curl -X POST http://localhost:5001/api/feedback -H "Content-Type: application/json" -d '{"user_id": 1, "message": "Great service!"}'
   ```

---



---

## Frontend Structure

The frontend of the application is organized as follows:

- **public**
  - `index.html`: Main entry point.
  - **styles/**
    - `style.css`: Global styles.
  - **scripts/**
    - `main.js`: Core functionality.
    - `api.js`: Handles API requests.
  - **components/**
    - `header.html`: Header component.
    - `footer.html`: Footer component.
    - `dashboard.html`: Dashboard component.


=======
## Contributors

- [Mike](https://github.com/your-profile)

---

## License

