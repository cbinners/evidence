var express = require("express");
var app = express();

app.configure(function() {
	app.use(app.router);
});

app.get("*", function(req, res) {
	res.send("Hello");
});

app.listen(9000);
