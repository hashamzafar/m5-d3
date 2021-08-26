import Products from "./Product.js";
import sequelize from "../sequelize.js";
import Category from "./Category.js";



Category.hasMany(Products, { as: "category_name" })
Products.belongsTo(Category)

export default { Products, sequelize, Category };