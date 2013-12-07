var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Issue = new Schema({
	title: {type: String, required: true, max: 150},
	user: {type: String, required: true},
	slugs: {type: [String], trim: true, required: true, match: /^[\da-zA-Z-_]*$/},
	tags: {type: String, trim: true, match: /^[\da-zA-Z-_]*$/},
	datePosted: {type: Date, required: true, default: Date.now}
});

module.exports = mongoose.model("Issue", Issue);
