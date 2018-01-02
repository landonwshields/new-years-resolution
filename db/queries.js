const db = require('./connections')


function getResolutions(){
  return db.select('*').from('resolutions')
}


module.exports = {
  getResolutions
}
