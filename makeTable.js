
import options from './options/options.js'
import knexLib from 'knex'

// Tabla mariaDB
try {
    const mariaDBsql = knexLib(options.mariaDbOptions)
    await mariaDBsql.schema.dropTableIfExists('productos')
    await mariaDBsql.schema.createTable('productos', table => {
        table.increments('id').primary();
        table.string('product', 30).notNullable();
        table.float('price').notNullable();
        table.string('thumbnail', 2000).notNullable()
    })
    console.log('Tabla mariaBD creada con éxito')
    await mariaDBsql.destroy()
} catch (err){
    console.log('Error en la creación de la tabla', err)
}

// Tabla SQLite3
try {
    const SQLiteSql = knexLib(options.SQLiteOptions)
    await SQLiteSql.schema.dropTableIfExists('ecommerce')
    await SQLiteSql.schema.createTable('ecommerce', table => {
        table.increments('id').primary();
        table.string('author', 30).notNullable();
        table.string('body', 2500).notNullable();
        table.string('date', 19).notNullable()
    })
    console.log('Tabla SQLite3 creada con éxito')
    await SQLiteSql.destroy()
} catch (err){
    console.log('Error en la creación de la tabla', err)
}