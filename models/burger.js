// import orm to create a function that will interact with db
var orm = require("../config/orm.js");

var burger ={
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
// var colums and vals are arrays
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;