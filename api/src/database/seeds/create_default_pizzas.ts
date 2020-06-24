import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('pizzas').insert([
        {
            name: 'Pepperoni',
            price: 32.00,
            ingredients: 'Muçarela, Pepperoni',
            image: 'pepperoni.jpeg'
        },
        {
            name: 'Portuguesa',
            price: 34.99,
            ingredients: 'Muçarela, Cebola, Presunto, Ovo, Palmito',
            image: 'portuguesa.jpeg'
        },
        {
            name: 'Muçarela',
            price: 29.99,
            ingredients: 'Muçarela, Orégano',
            image: 'mucarela.jpeg'
        },
        {
            name: 'Bauru',
            price: 29.99,
            ingredients: 'Muçarela, Presunto, Rodelas de Tomate',
            image: 'bauru.jpeg'
        },
        {
            name: 'Três Queijos',
            price: 32.50,
            ingredients: 'Muçarela, Catupiry, Queijo Prato',
            image: 'tres-queijos.jpeg'
        },
        {
            name: 'Calabresa',
            price: 29.99,
            ingredients: 'Calabresa, Cebola',
            image: 'calabresa.jpeg'
        },
    ]);
}
