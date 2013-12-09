var genericResource = require("./genericResource");
var Viewpoint = require("../model/viewpoint");

module.exports = {
    list: function(req, res) {
        var query = Viewpoint.find(req.query);
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
        genericResource.get(Viewpoint, req, res);
    },

    create: function(req, res) {
        genericResource.create(Viewpoint, req, res);
    },

    update: function(req, res) {
        genericResource.update(Viewpoint, req, res);
    },

    remove: function(req, res) {
        genericResource.remove(Viewpoint, req, res);
    }
};