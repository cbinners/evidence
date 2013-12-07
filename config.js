var path = require("path");

module.exports = {
	apiPrefix: "/api",
	staticPrefix: "/static",
	port: 9000,
	webAppPath: path.join(__dirname, "web-app"),
	dbConnectionString: "mongodb://localhost:27017"
}