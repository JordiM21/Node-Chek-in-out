//needed imports
const { db } = require("../utils/database.utils");
const { Sequelize, DataTypes } = require("sequelize");

//the model(table header) means each column we are goign to work with
const User = db.define("user", {
	//db.define is the method we use in models to create models
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true, //important the primary key
		autoIncrement: true,
		allowNull: false,
		//only with this parameters it is going to start with the first one (1) and so on
	},
	entrance: {
		type: DataTypes.DATE, //2022-08-22 19:30:33
		allowNull: false, //the only space you need to create
	},
	exit: {
		type: DataTypes.DATE,
		allowNull: true, //could be null at the end but in the update(exit) it'll change
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: "working",
	},
});

module.exports = { User };
