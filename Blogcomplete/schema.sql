DROP DATABASE IF EXISTS blog;

CREATE DATABASE blog;

USE blog;

-- CREATE TABLE users (
--   id int NOT NULL AUTO_INCREMENT,
--   balance decimal(10, 2) NOT NULL,
--   name varchar(50) NOT NULL,
--   PRIMARY KEY (ID)
-- );
-- CREATE TABLE author (
--   uid SERIAL PRIMARY KEY,
--   username VARCHAR(255) UNIQUE,
--   date_created DATE,
--   last_login DATE
-- );

CREATE TABLE posts (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY(id),
  title VARCHAR(70),
  body VARCHAR(255),
  author VARCHAR(70),
  date_created VARCHAR(100)
);

-- CREATE TABLE comments (
--   cid SERIAL PRIMARY KEY,
--   comment VARCHAR(255),
--   author VARCHAR REFERENCES users(username),
--   user_id INT REFERENCES users(uid),
--   post_id INT REFERENCES posts(pid),
--   date_created TIMESTAMP
-- );
/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

/* For the record, these numbers were generated with Math.random,
 * please don't read into them. :) */

INSERT INTO posts (id, title, body, author, date_created) VALUES (1, "Best burgers, Armadillos", "There burgers have a nice crust covering the entire surface of each side. The buns are toasted, I always go for the 1lb. cheeseburger, just meat and cheese, so you can focus on the taste of the burger.  I've never been disappointed,  I love this place!", "anonymous", "May, 12 2020");
