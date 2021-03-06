import Knex from 'knex';

export async function up(knex: Knex) {
    return knex
        .schema
        .createTable('pizzas', (table) => {
            table
                .increments('id')
                .primary();
            table
                .string('name')
                .notNullable();
            table
                .float('price')
                .notNullable();
            table
                .string('image')
                .notNullable();
            table
                .string('ingredients')
                .notNullable();
            table
                .boolean('active')
                .notNullable()
                .defaultTo(true);
            table
                .string('description', 100);
            table
                .integer('establishment_id')
                .notNullable()
                .references('id')
                .inTable('establishments')
            table
                .dateTime('created_at')
                .notNullable()
                .defaultTo(knex.fn.now());
    });
};

export async function down(knex: Knex) {
    return knex.schema.dropTable('pizzas');
};
