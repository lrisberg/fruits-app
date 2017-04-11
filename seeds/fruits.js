exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fruits').del()
    .then(function() {
      // Inserts seed entries
      return knex('fruits').insert([{
          id: 1,
          name: 'kiwi',
          picture_url: 'http://axelthekey.com/wp-content/uploads/2015/05/kiwi.jpg',
          color: 'green',
          calories: 42
        },
        {
          id: 2,
          name: 'banana',
          picture_url: 'https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3.jpg',
          color: 'yellow',
          calories: 100
        },
        {
          id: 3,
          name: 'blueberry',
          picture_url: 'http://www.medicalnewstoday.com/content/images/articles/287/287710/blueberries.jpg',
          color: 'blue',
          calories: 85
        }
      ]);
    });
};
