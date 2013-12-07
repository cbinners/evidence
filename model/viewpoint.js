var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Viewpoint = new Schema({
	title: {type: String, required: true, max: 50},
	user: {type: String, required: true},
	issueSlug: {type: String, required: true},
	datePosted: {type: Date, required: true, default: Date.now}
});

module.exports = mongoose.model("Viewpoint", Viewpoint);
