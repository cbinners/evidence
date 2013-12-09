var genericResource = require("./genericResource");
var Issue = require("../model/issue");

module.exports = {
    list: function(req, res) {
        var query = Issue.find(req.query);
        query.sort("-brightCounter");
        query.exec(function(error, result) {
            if (error) {
                console.log(error);
                return res.send(400);
            }
            res.send(result);
        });
    },

    get: function(req, res) {
       genericResource.get(Issue, req, res);
    },

    create: function(req, res) {
        genericResource.create(Issue, req, res);
    },

    update: function(req, res) {
        genericResource.update(Issue, req, res);
    },

    remove: function(req, res) {
        genericResource.remove(Issue, req, res);
    }
};