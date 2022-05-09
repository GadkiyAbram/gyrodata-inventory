CREATE DATABASE gyrodata_tracker;

-- set extension

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
id uuid PRIMARY KEY DEFAULT
uuid_generate_v4(),
user_name VARCHAR(255) NOT NULL,
user_email VARCHAR(255) NOT NULL,
user_password VARCHAR(255) NOT NULL
);

-- insert fake users
INSERT INTO users (user_name, user_email, user_password)
VALUES ('Aleksandr', 'alex-abram@bk.ru', 'admin');

select *
from users;