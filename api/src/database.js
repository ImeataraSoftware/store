require('dotenv').config();

const fs = require('fs');

const path = require('path');

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'dpg-ch02c1grddlaqj137mj0-a.oregon-postgres.render.com',
  port: 5432,
  database: 'store_5llp',
  username: 'store',
  password: 'DCtZiWqnWwXKnVozb5hW40L9zzeDU3qE',
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach((model) => model(sequelize));

const { Category, User, Product } = sequelize.models;

// // Category - Product

// Category.hasMany(Product);

// Product.belongsTo(Category);

module.exports = { sequelize, ...sequelize.models };
