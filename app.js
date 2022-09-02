//needed imports
const express = require("express");
const { registerRouter } = require("./routes/register.routes");

//init express server
const app = express();

//enable app to recieve json
app.use(express.json());

//define endpoint
app.use("/register", registerRouter);

//guarantee that when could not find the url or does not match, return an error message
app.all("*", (req, res) => {
	res.status(404).json({
		status: "error",
		message: `Oops!, seems that ${req.method}/${req.url} doesn't exists on this server`,
	});
});

module.exports = { app };
