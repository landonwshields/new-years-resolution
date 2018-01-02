const db = require('./connections')


function getResolutions(){
  return db.select('*').from('resolutions')
}

function addResolution(newResolution){
  return db('resolutions').insert(newResolution)
}

function getOneResolution(id){
  return db.select().from('resolutions').where('id', id)
}

function update(id, resolution) {
  return db.table('resolutions').update(resolution).where('id', id);
}

function deleteResolution(id){
  return db('resolutions').where('id', id).del()
}

module.exports = {
  getResolutions,
  addResolution,
  getOneResolution,
  update,
  deleteResolution
}
