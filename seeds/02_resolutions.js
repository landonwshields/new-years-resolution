
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resolutions').del()
    .then(function () {
      // Inserts seed entries
      return knex('resolutions').insert([
        {
          id: 100,
          resolution: 'Go to the gym more often'
        },
        {
          id: 200,
          resolution: 'Eat healthier'
        },
        {
          id: 300,
          resolution: 'Code more often'
        }
      ]);
    });
};
