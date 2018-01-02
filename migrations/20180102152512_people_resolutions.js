exports.up = function(knex, Promise) {
  return Promise.all([
     knex.schema.createTable('people_resolutions', function (table) {
       table.increments().primary
       table.integer('people_id').references('people.id')
       table.integer('resolutions_id').references('resolutions.id')

     })
   ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('people_resolutions')
  ])
};
