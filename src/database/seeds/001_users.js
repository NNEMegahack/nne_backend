
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('form').del()
    .then(function () {
      // Inserts seed entries
      return knex('form').insert([
        {username: 'rowValue1'},
        {username: 'rowValue2'}
      ]);
    });
};
