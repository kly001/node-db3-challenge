const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('scheme')
}

function findById(id) {

}

function findSteps() {

}

function add() {

}

function update(changes,id) {

}

function remove(id) {
    
}