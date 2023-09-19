CREATE DATABASE "gyrodata-db";

create table if not exists public.users
(
    id       serial not null
        constraint users_pk
            primary key,
    email    varchar(255) not null,
    password varchar(255) not null,
    name     varchar(255),
    lastname varchar
);

comment on table public.users is 'Users table';

comment on column public.users.id is 'id of the user';