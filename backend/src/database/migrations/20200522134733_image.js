exports.up = function(knex) {
    return knex.schema.createTable('image', function(table){
      table.increments();

      table.string('nomePopu').notNullable();
      table.string('nomeCien').notNullable();
      table.string('url').notNullable();
	  table.string('data').notNullable();

    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('image');
  };
