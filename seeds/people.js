
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {
          id: 100,
          person: 'Landon Shields'
        },
        {
          id: 200,
          person: 'Maricarmen Shields'
        },
        {
          id: 300,
          person: 'Saquon Barkley'
        }
      ]);
    });
};
