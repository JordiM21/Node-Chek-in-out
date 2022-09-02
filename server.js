//needed imports
const { app } = require("./app");
const { db } = require("./utils/database.utils");

const startServer = async () => {
	try {
		await db
			.authenticate()
			.then(() => console.log("db auhtenticated"))
			.catch((err) => console.error(err));
		await db
			.sync()
			.then(() => console.log("sync success"))
			.catch((err) => console.log(err));
		const PORT = 4001;
		app.listen(PORT, () => {
			console.log("express app running");
		});
	} catch (error) {
		console.log(error);
	}
};

startServer();
