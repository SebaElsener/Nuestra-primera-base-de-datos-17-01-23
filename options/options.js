
const mariaDbOptions = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'ecommerce'
    }
}

const SQLiteOptions = {
    client: 'sqlite3',
    connection: {
        filename: './DB/ecommerce.sqlite'
    },
    useNullAsDefault: true
}

const options = {
    mariaDbOptions,
    SQLiteOptions
}

export default options