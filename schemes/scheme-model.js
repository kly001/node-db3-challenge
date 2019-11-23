const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove, removeStep,
    addStep
}

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({id}).first();
    }

function findSteps(id) {
    return db('steps as st')
    .join('schemes as sc', 'sc.id', 'st.scheme_id')
    .select('st.id','sc.scheme_name', 'st.instructions', 'st.step_number')
    .where({scheme_id:id})
}

function add(scheme) {
    return db('schemes').insert(scheme)
    .then(ids => {
        return findById(ids[0])
    })
    
}

function update(changes,id) {
return db('schemes').where({id}).update(changes)
    .then(count => {
        return findById(id)
    })
}

function remove(id) {
return db('schemes').where({id}).del()
}

//------------------------------------------------
//STRETCH

function removeStep(schemeId, stepNumber) {
    return db('steps')
    .where({scheme_id: schemeId})
    .andWhere({step_number: stepNumber})
    .delete()
}

function addStep(step, scheme_id) {
    newStep = {...step, scheme_id: scheme_id}
    return db('steps').insert(newStep)
}