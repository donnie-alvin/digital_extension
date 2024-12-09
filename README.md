Here’s the updated **README.md** to include the progress of API endpoint creation and testing:

---

```markdown
# Digital Extension Services Web App

This project is a web application designed to provide digital extension services to smallholder farmers in Zimbabwe. The app aims to bridge the gap between farmers and extension officers by offering an accessible platform for sharing agricultural knowledge, products, and feedback.

---

## Features

- **User Management**: Create and manage user accounts.
- **Crop Information**: Add and retrieve crop-related data.
- **Products**: Provide an e-commerce section for agricultural products.
- **Feedback**: Collect user feedback to improve services.
- **Extension Officers**: Manage information about extension officers for easier access.

---

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

---

## Technologies Used

- **Backend**: Node.js, Express
- **Database**: MySQL (Managed via phpMyAdmin)
- **Frontend**: To be developed using HTML, CSS, and JavaScript.

---

## Contributors

- [Your Name](https://github.com/your-profile)

---

## License

This project is licensed under the MIT License.
```

---

