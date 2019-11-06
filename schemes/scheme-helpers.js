const db = require("../data/dbConfig");
const Controllers = require("../generateControllers");
const dbController = new Controllers({db:db('schemes')});

exports.find = function() {
    return dbController.find();
}

exports.findById =  function(id) {
    return dbController.findById(id)
}

exports.remove =  function(id) {
    return dbController.remove(id);
}

exports.update =  function(changes,id) {
    return dbController.update(changes,id);
}

exports.findSteps = function(id) {
    return db('schemes').join('steps as s')
    .where({'s.scheme_id':id})
}

exports.addStep = function(step, scheme_id) {
    const body = {...step,...{scheme_id}}
    return db('steps').insert(body);
}