const { Sequelize } = require("sequelize");

//connect Sequelize as a ORM between postgress and express
const db = new Sequelize({
	dialect: "postgres",
	host: "localhost",
	username: "postgres",
	password: "l0c0fl1n",
	port: "5432",
	database: "checkin",
	logging: false,
});
module.exports = { db };
