const db = require('./connections')

function getResolutions(){
  return db.select('*').from('resolutions')
}

function getPeople(){
  return db.select().from('people')
}

function addResolution(newResolution){
  return db('resolutions').insert(newResolution)
}

function addPerson(newPerson){
  return db('people').insert(newPerson)
}

function getOneResolution(id){
  return db.select().from('resolutions').where('id', id)
}

function getOnePerson(id){
  return db.select().from('people').where('id', id)
}

function update(id, resolution) {
  return db.table('resolutions').update(resolution).where('id', id);
}

function deleteResolution(id){
  return db('resolutions').where('id', id).del()
}

module.exports = {
  getResolutions,
  getPeople,
  addResolution,
  addPerson,
  getOneResolution,
  getOnePerson,
  update,
  deleteResolution
}
