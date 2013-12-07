var genericResource = require("./genericResource");
var Viewpoint = require("../model/viewpoint");

module.exports = {
    list: function(req, res) {
        genericResource.list(Viewpoint, req, res);
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