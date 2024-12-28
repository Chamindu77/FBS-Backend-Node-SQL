// // config/db.js
// const { Sequelize } = require('sequelize');
// require('dotenv').config();

// const mysqlSequelize = new Sequelize(
//   process.env.MYSQL_DB_NAME,
//   process.env.MYSQL_DB_USER,
//   process.env.MYSQL_DB_PASSWORD,
//   {
//     host: process.env.MYSQL_DB_HOST,
//     dialect: 'mysql',
//     port: process.env.MYSQL_DB_PORT || 3306,
//     logging: false,
//   }
// );

// const postgresSequelize = new Sequelize(
//   process.env.POSTGRES_DB_NAME,
//   process.env.POSTGRES_DB_USER,
//   process.env.POSTGRES_DB_PASSWORD,
//   {
//     host: process.env.POSTGRES_DB_HOST,
//     dialect: 'postgres',
//     port: process.env.POSTGRES_DB_PORT || 5432,
//     logging: false,
//   }
// );

// module.exports = {
//   mysqlSequelize,
//   postgresSequelize,
// };


const { Sequelize } = require('sequelize');
const mysql2 = require('mysql2'); // Explicitly require mysql2
// const pg = require('pg'); // Explicitly require pg for PostgreSQL
require('dotenv').config();

const mysqlSequelize = new Sequelize(
  process.env.MYSQL_DB_NAME,
  process.env.MYSQL_DB_USER,
  process.env.MYSQL_DB_PASSWORD,
  {
    host: process.env.MYSQL_DB_HOST,
    dialect: 'mysql',
    dialectModule: mysql2, // Add the dialect module
    port: process.env.MYSQL_DB_PORT || 3306,
    logging: false,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false, // Allow self-signed certificates
      },
    },
  }
);

// const postgresSequelize = new Sequelize(
//   process.env.POSTGRES_DB_NAME,
//   process.env.POSTGRES_DB_USER,
//   process.env.POSTGRES_DB_PASSWORD,
//   {
//     host: process.env.POSTGRES_DB_HOST,
//     dialect: 'postgres',
//     port: process.env.POSTGRES_DB_PORT || 5432,
//     logging: false,
//   }
// );

// const postgresSequelize = new Sequelize(
//   process.env.POSTGRES_DB_NAME,
//   process.env.POSTGRES_DB_USER,
//   process.env.POSTGRES_DB_PASSWORD,
//   {
//     host: process.env.POSTGRES_DB_HOST,
//     dialect: 'postgres',
//     dialectModule: pg, // Add the dialect module
//     port: process.env.POSTGRES_DB_PORT || 5432,
//     logging: false,
//     dialectOptions: {
//       ssl: {
//         minVersion: 'TLSv1.2', // Optional TLS configuration
//         rejectUnauthorized: false, // Adjust as per your SSL setup
//       },
//     },
//   }
// );

module.exports = {
  mysqlSequelize
  // postgresSequelize,
};
