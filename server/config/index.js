'use strict';

module.exports.development = {
    connect: {
        client: 'pg',
        connection: {
            host: 'localhost',
            port: '5433',
            user: 'postgres',
            password: 'admin',
            database: 'users'
        }
    }
};
