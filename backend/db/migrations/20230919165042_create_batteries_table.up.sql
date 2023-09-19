-- migrate create -ext sql -dir db/migrations/ create_batteries_table

create table if not exists public.batteries
(
    serialOne       varchar(255) not null constraint batteries_pk primary key,
    serialTwo       varchar(255) null,
    serialThree     varchar(255) null,
    arrived         varchar(255) null,
    invoice         varchar(255) null,
    ccd             varchar(255) null,
    container       varchar(255) null,
    condition       int,
    location        varchar(255) null
)