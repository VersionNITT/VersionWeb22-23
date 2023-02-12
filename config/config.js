require('dotenv').config();
module.exports ={
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.PDB_USER,
    "host": process.env.PDB_HOST,
    "database": process.env.PDB_NAME,
    "password": process.env.PDB_PASS,
    "port": process.env.PDB_PORT,
    "ssl": { rejectUnauthorized: false },
    "dialect": "postgres"
  }
}