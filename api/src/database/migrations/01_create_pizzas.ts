import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('pizzas', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.float('price').notNullable();
        table.string('image').notNullable();
        table.string('ingredients').notNullable();
        table
            .dateTime('created_at')
            .notNullable()
            .defaultTo(knex.raw('now()'));
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('pizzas');
}
