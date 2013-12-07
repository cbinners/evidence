var genericResource = require("./genericResource");
var Issue = require("../model/issue");

module.exports = {
    list: function(req, res) {
        genericResource.list(Issue, req, res);
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