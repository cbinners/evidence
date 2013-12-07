var express = require("express");
var config = require("./config");
var path = require("path");
var app = express();

app.configure(function() {
	app.use(express.cookieParser());
	app.use(express.bodyParser());
	app.use(express.compress());
	app.use(config.staticPrefix, express.static(path.join(config.webAppPath, "static"),
	    {maxAge: 86400000}));
	app.use(app.router);
	//for use behind a reverse proxy
	if (config.trustProxy) {
	    app.enable("trust proxy");
	}
});

process.on("uncaughtException", function(error) {
	console.log(error);
});

app.get(config.apiPrefix + "/example", function(req, res) {
	res.send("Data from API");
});

//all other routes serve the ember app
app.all("*", function(req, res) {
	res.sendfile(path.join(config.webAppPath, "/index.html"));
});

app.listen(config.port);
console.log("API running at http://" + config.bindAddress + ":" + config.port + config.apiPrefix);
