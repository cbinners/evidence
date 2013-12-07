var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Card = new Schema({
	viewpointId: {type: Schema.ObjectId, required: true},
	title: {type: String, required: true, trim: true, max: 150},
	brightCounter: {type: Number, required: true, default: 0},
	thumbnailUrl: {type: String},
	//user: {type: String, required: true}
	datePosted: {type: Date, required: true, default: Date.now},
});

module.exports = mongoose.model("Card", Card);
