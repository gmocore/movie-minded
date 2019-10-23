DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;
USE movies_db;

DROP TABLE IF EXISTS movies;

CREATE TABLE movies
(
	id int NOT NULL AUTO_INCREMENT,
	movie_title varchar(255) NOT NULL,
	watched BOOLEAN DEFAULT FALSE NOT NULL,
    poster VARCHAR(255),
    summary VARCHAR(255),
    actors VARCHAR(255),
    release_year INT (5),
    rt_rating VARCHAR (4),
    user_rating INT(1),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);



