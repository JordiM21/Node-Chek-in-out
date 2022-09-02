//imports needed
const express = require("express");
const {
	getAllRegisters,
	getRegister,
	createRegister,
	updateRegister,
	deleteRegister,
} = require("../controllers/register.controller");
//.Router() is an express function who give us the app needed to do the method: get, post, patch
const registerRouter = express.Router();

//we are just defining the method we are going to use and if requires a param
//then we point the following function to the controllers(in imports)
registerRouter.get("/", getAllRegisters);

registerRouter.get("/:id", getRegister);

registerRouter.post("/", createRegister);

registerRouter.patch("/:id", updateRegister);

registerRouter.delete("/:id", deleteRegister);

module.exports = { registerRouter };
