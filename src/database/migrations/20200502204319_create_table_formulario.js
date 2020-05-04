exports.up = async knex => knex.schema.createTable('products', table => {
    // Obrigatorios
    table.increments('id')
    table.varchar('barcode_number', 20).unique().notNullable()
    table.varchar('product_name', 100).notNullable()    
    table.varchar('category', 100).notNullable()
    table.text('description').notNullable()
    table.float('price').notNullable()

    // Optativos - outros 
    table.text('images').nullable()
    table.varchar('barcode_type', 10).nullable()
    table.varchar('publisher', 50).nullable()
    table.varchar('brand', 30).nullable()

    // Optativos - Livros
    table.text('title').nullable();
    table.text('author').nullable();


    // Optativos - Eletronicos
    table.varchar('mpnm', 20).nullable();
    table.varchar('model', 20).nullable();
    table.varchar('asin', 20).nullable();
    table.varchar('manufacturer', 50).nullable();
    table.varchar('label', 50).nullable();
    table.float('length').nullable();
    table.float('width').nullable();
    table.float('height').nullable();
    table.float('weight').nullable();
    table.text('features').nullable();


    // Trace
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })

exports.down = async knex => knex.schema.dropTable('products')