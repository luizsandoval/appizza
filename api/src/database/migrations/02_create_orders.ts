import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('orders', (table) => {
        table.increments('id').primary();
        table.float('total').notNullable();
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users');
        table
            .dateTime('created_at')
            .notNullable()
            .defaultTo(new Date());
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('orders');
}
