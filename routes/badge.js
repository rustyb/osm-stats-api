var Boom = require('boom');
var Badge = require('../models/Badge');
var bookshelf = require('../db/bookshelf_init')
var Promise = require('bluebird');
var R = require('ramda');

module.exports = [
  {
    method: 'GET',
    path: '/badges',
    handler: function (req, res) {
      Badge.fetchAll({withRelated: 'users'}).then(res);
    }
  }
]