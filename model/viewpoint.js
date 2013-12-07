var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Viewpoint = new Schema({
	title: {type: String, required: true, trim: true, max: 150},
	brightCounter: {type: Number, required: true, default: 0},
	//user: {type: String, required: true},
	issueSlug: {type: String, unique: true, max: 100, trim: true, required: true, match: /^[\da-zA-Z-_]*$/},
	datePosted: {type: Date, required: true, default: Date.now}
});

module.exports = mongoose.model("Viewpoint", Viewpoint);
