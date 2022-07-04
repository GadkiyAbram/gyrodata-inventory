const knexfile = {
    development: {
        client: 'postgresql',
        connection: {
            database: 'gyrodata_tracker',
            user: 'postgres',
            password: '12345',
        },
        pool: {
            min: 3,
            max: 10
        }
    }
}

module.exports = knexfile;