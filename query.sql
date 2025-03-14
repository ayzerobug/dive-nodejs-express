CREATE DATABASE notes_app;
USE notes_app;

CREATE TABLE notes (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  contents TEXT NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO notes (title, contents)
VALUES 
('My First Note', 'A note about something'),
('My Second Note', 'A note about something else');


CREATE DATABASE book_app;
USE book_app;

CREATE TABLE books ( id INTEGER PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, author VARCHAR(255) NOT NULL, created_at TIMESTAMP NOT NULL DEFAULT NOW());

INSERT INTO books (name, author) VALUES ("Dive First Book", "Ayomide Micheal");

SELECT * FROM books WHERE id = 1;