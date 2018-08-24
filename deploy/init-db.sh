#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE USER costs_user WITH PASSWORD 'justdoit2018';
    CREATE DATABASE costs;
    GRANT ALL PRIVILEGES ON DATABASE costs TO costs_user;
EOSQL

CREATE TABLE categories (
   id SERIAL PRIMARY KEY,
   name VARCHAR NOT NULL
);

CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   email VARCHAR NOT NULL,
   password VARCHAR NOT NULL,
   firstName VARCHAR NOT NULL,
   lastName VARCHAR NOT NULL
);

CREATE TABLE costs (
   id SERIAL PRIMARY KEY,
   category_id INT4 references categories(id),
   amount MONEY,
   user_id INT4 references users(id)
);

INSERT INTO categories (name) VALUES
  ('Продукти'),
  ('Кафе/Ресторани'),
  ('Громадський транспорт'),
  ('Комунальні послуги');

INSERT INTO users (email, password, firstName, lastName) VALUES
  ('test01@gmail.com','password', 'Test1', 'User1'),
  ('test02@gmail.com','password', 'Test2', 'User2');

INSERT INTO costs (category_id, amount, user_id) VALUES
  (
    (SELECT id FROM categories WHERE categories.name = 'Громадський транспорт'),
    2.8,
    (SELECT id FROM users WHERE users.email = 'test01@gmail.com')
  ),
  (
    (SELECT id FROM categories WHERE categories.name = 'Громадський транспорт'),
    1.7,
    (SELECT id FROM users WHERE users.email = 'test01@gmail.com')
  ),
  (
    (SELECT id FROM categories WHERE categories.name = 'Продукти'),
    42,
    (SELECT id FROM users WHERE users.email = 'test02@gmail.com')
  );