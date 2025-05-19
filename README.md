# Items Management System

A full-stack application for inventory management with a React frontend and Node.js Express backend.

## Prerequisites

- Node.js (v16.x or higher)
- npm or yarn
- MySQL Server

## Project Structure

The project is divided into two main directories:

- `client/`: React frontend application built with Vite
- `server/`: Node.js Express backend API

## Database Setup

1. Create a MySQL database for the application:

```sql
CREATE DATABASE myappdb;

USE myappdb;

CREATE TABLE items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  quantity INT DEFAULT 0,
  price DECIMAL(10, 2) DEFAULT 0.00,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## Server Setup

1. Navigate to the server directory:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:
   - Create a `.env.development` file in the server directory with the following content:

```
DATABASE_HOST=localhost
DATABASE_USER=root
DATABASE_PASSWORD=your_mysql_password
DATABASE_NAME=myappdb
DATABASE_PORT=3306
PORT=3000
BASE_URL=http://localhost
```

4. Start the server:

```bash
node app.js
```

The server should now be running on http://localhost:3000.

## Client Setup

1. Navigate to the client directory:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

   - The `.env.development` file should already have `VITE_API_URL=http://localhost:3000`
   - Modify this if your backend is running on a different URL

4. Start the development server:

```bash
npm run dev
```

The client application should now be running on http://localhost:5173 (or the port assigned by Vite).

## Using the Application

Once both the client and server are running:

1. Open your browser and navigate to http://localhost:5173
2. You'll see the inventory management interface
3. You can:
   - View all items in the table
   - Create new items using the "Create Item" button
   - Edit items by clicking the menu in the actions column
   - Delete items from the same actions menu

## API Endpoints

The server provides the following API endpoints:

- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get a specific item by ID
- `POST /api/items` - Create a new item
- `PUT /api/items/:id` - Update an existing item
- `DELETE /api/items/:id` - Delete an item

## Development Workflow

1. Make changes to the client or server code
2. For client changes, Vite will automatically reload the page
3. For server changes, you'll need to restart the server (consider using nodemon for automatic restarts)

## Troubleshooting

### Common Issues:

1. Database connection errors:

   - Check your MySQL server is running
   - Verify database credentials in `.env.development`

2. API connectivity issues:

   - Ensure the server is running
   - Check that VITE_API_URL is set correctly in the client

3. Missing dependencies:
   - Run `npm install` in both client and server directories

## Building for Production

### Client:

```bash
cd client
npm run build
```

The built files will be in the `dist` directory.

### Server:

The server can be deployed using a process manager like PM2:

```bash
npm install -g pm2
pm2 start app.js --name "items-management-api"
```

Remember to set appropriate environment variables for production deployment.

---

## Author

**[Achmad96](https://github.com/achmad96)**  
Passionate full-stack developer focused on building robust web applications.  
Feel free to reach out or contribute!
