var genericResource = require("./genericResource");
var Card = require("../model/card");

module.exports = {
    list: function(req, res) {
        genericResource.list(Card, req, res);
    },

    get: function(req, res) {
        genericResource.get(Card, req, res);
    },

    create: function(req, res) {
        genericResource.create(Card, req, res);
    },

    update: function(req, res) {
        genericResource.update(Card, req, res);
    },

    remove: function(req, res) {
        genericResource.remove(Card, req, res);
    }
};