DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;
USE movie_db;

CREATE TABLE movies
(
	id int NOT NULL AUTO_INCREMENT,
	movie_title varchar(255) NOT NULL,
	watched BOOLEAN DEFAULT FALSE NOT NULL,
    summary VARCHAR(255),
    actors VARCHAR(255),
    rating TINYINT(1),
	PRIMARY KEY (id)
);
