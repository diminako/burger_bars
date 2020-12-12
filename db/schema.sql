### Schema
DROP DATABASE IF EXISTS snes_rpg_db;
CREATE DATABASE snes_rpg_db;
USE snes_rpg_db;

CREATE TABLE games
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	completed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
