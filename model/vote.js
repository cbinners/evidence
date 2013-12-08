var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Vote = new Schema({
	forType: {type: String, required: true},
	forId: {type: Schema.ObjectId, required: true},
	user: {type: String, required: true},
	voteType: {type: String, trim: true, lowercase: true}
	dateVoted: {type: Date, required: true, default: Date.now}
});

module.exports = mongoose.model("Vote", Vote);