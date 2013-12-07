var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Card = new Schema({
	title: {type: String, required: true, max:300},
	thumbnailUrl: {type: String},
	user: {type: String, required: true},
	brightCounter: {type: Number, required: true},
	viewpointId: {type: ObjectID, required: ture}
	datePosted: {type: Date, required: true, default: Date.now}
});

module.exports = mongoose.model("Card",Card);
