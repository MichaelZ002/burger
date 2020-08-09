const orm = require('../config/orm');

const burger = {
    selectAll: cb => orm.selectAll("burgers", result => cb(result)),
    insertOne: (columns, values, cb) => orm.insertOne("burgers", columns, values, result => cb(result)),
    updateOne: (condition,cb) => orm.updateOne("burgers", condition, result => cb(result))
};

module.exports = burger;