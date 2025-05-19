const mysql = require('mysql2/promise');

const createConnection = async () => {
  return await mysql.createConnection({
    host: process.env.DATABASE_HOST || 'localhost',
    user: process.env.DATABASE_USER || 'root',
    port: process.env.DATABASE_PORT || 3306,
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME || 'myappdb'
  });
};

const closeConnection = (connection) => {
  if (connection) {
    connection.end((err) => {
      if (err) {
        console.error('Error closing the database connection:', err.stack);
      } else {
        console.log('Database connection closed.');
      }
    });
  }
};

module.exports = { createConnection, closeConnection };
