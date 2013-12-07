var express = require("express");
var config = require("./config");
var mongoose = require("mongoose");
var path = require("path");
var app = express();

mongoose.connect(config.dbConnectionString);

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

var issueResource = require("./resources/issueResource");
app.get(config.apiPrefix + "/issues", issueResource.list);
app.get(config.apiPrefix + "/issues/:id", issueResource.get);
app.post(config.apiPrefix + "/issues", issueResource.create);
app.put(config.apiPrefix + "/issues/:id", issueResource.update);
app.del(config.apiPrefix + "/issues/:id", issueResource.remove);

var viewpointResource = require("./resources/viewpointResource");
app.get(config.apiPrefix + "/viewpoints", viewpointResource.list);
app.get(config.apiPrefix + "/viewpoints/:id", viewpointResource.get);
app.post(config.apiPrefix + "/viewpoints", viewpointResource.create);
app.put(config.apiPrefix + "/viewpoints/:id", viewpointResource.update);
app.del(config.apiPrefix + "/viewpoints/:id", viewpointResource.remove);

var cardResource = require("./resources/cardResource");
app.get(config.apiPrefix + "/cards", cardResource.list);
app.get(config.apiPrefix + "/cards/:id", cardResource.get);
app.post(config.apiPrefix + "/cards", cardResource.create);
app.put(config.apiPrefix + "/cards/:id", cardResource.update);
app.del(config.apiPrefix + "/cards/:id", cardResource.remove);

//all other routes serve the ember app
app.all("*", function(req, res) {
	res.sendfile(path.join(config.webAppPath, "/index.html"));
});

app.listen(config.port);
console.log("API running at http://" + config.bindAddress + ":" + config.port + config.apiPrefix);
