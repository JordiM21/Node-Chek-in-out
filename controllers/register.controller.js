const { User } = require("../models/register.models");

//we always use a trycatch function in order to handle error better and the async/await let us run first or give priority to the findAll
const getAllRegisters = async (req, res) => {
	try {
		const register = await User.findAll({}); //get all users: working, out, cancelled that's why there´s no a where
		res.status(200).json({
			register, //return the users we found
		});
	} catch (error) {
		console.log(error);
	}
};

const getRegister = async (req, res) => {
	try {
		const { id } = req.params; //like this we bring the number which is on params url DESTRUCTURING
		const register = await User.findAll({ where: { id } }); //means where: {id == User.id}
		res.status(200).json({
			register,
		});
	} catch (error) {
		console.log(error);
	}
};

const createRegister = async (req, res) => {
	try {
		const { entrance } = req.body; //entrance is the body we put in body's postman, that's why we took it from req.body
		const newRegister = await User.create({ entrance }); //create is the express method for POST
		res.status(201).json({
			status: "success",
			data: { newRegister },
		});
	} catch (error) {
		console.log(error);
	}
};

const updateRegister = async (req, res) => {
	try {
		const { exit } = req.body; //the body's postman when update(exit)
		const { id } = req.params; //params from url
		const register = await User.findOne({ wehere: { id } });
		if (!register) {
			//handle error if register was not found
			return res.status(404).json({
				status: "error",
				message: "there is not a register with that id",
			});
		}
		await register.update({ exit, status: "out" });
		res.status(200).json({
			status: "success",
			data: { register },
		});
	} catch (error) {
		console.log(error);
	}
};

const deleteRegister = async (req, res) => {
	try {
		const { id } = req.params; //localize or select the id which comes by params
		const user = await User.findOne({ where: { id } }); //and then we search in our list if we got an id who matches
		if (!user) {
			//if didn't find it!
			return res.status(404).json({
				status: "error",
				message: "there is not a register with that id",
			});
		}
		await user.update({ status: "cancelled" }); //soft delete function
		res.status(204).json({
			//succes but we delete something
			status: "success",
			message: "deleted succesfully",
		});
	} catch (error) {
		console.log(error);
	}
};

//export all the functions to use it on routes
module.exports = {
	getAllRegisters,
	getRegister,
	createRegister,
	updateRegister,
	deleteRegister,
};
