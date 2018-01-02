
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('people_resolutions').del()
    .then(function () {
      // Inserts seed entries
      return knex('people_resolutions').insert([
        {
          people_id: 100,
          resolutions_id: 100
        },
        {
          people_id: 200,
          resolutions_id: 200
        },
        {
          people_id: 300,
          resolutions_id: 300
        }
      ]);
    });
};
