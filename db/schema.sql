DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;
USE movies_db;

CREATE TABLE movies
(
	id int NOT NULL AUTO_INCREMENT,
	movie_title varchar(255) NOT NULL,
	watched BOOLEAN DEFAULT FALSE NOT NULL,
    summary VARCHAR(255),
    actors VARCHAR(255),
    release_year INT (5),
    rt_rating INT (3),
    user_rating TINYINT(1),
	PRIMARY KEY (id)
);


