exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fruits').del()
    .then(function() {
      // Inserts seed entries
      return knex('fruits').insert([{
          id: 1,
          name: 'kiwi'
        },
        {
          id: 2,
          name: 'banana'
        },
        {
          id: 3,
          name: 'blueberry'
        }
      ]);
    });
};
