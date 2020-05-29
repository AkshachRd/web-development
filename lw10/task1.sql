CREATE DATABASE university;
USE university;

CREATE TABLE faculties (
  facultys_id INT UNSIGNED AUTO_INCREMENT,
  faculty VARCHAR(20) NOT NULL,
  PRIMARY KEY (facultys_id)
);

CREATE TABLE groups (
  groups_id INT UNSIGNED AUTO_INCREMENT,
  group VARCHAR(20) NOT NULL,
  PRIMARY KEY (groups_id),
  FOREIGN KEY (groups_faculty) REFERENCES faculties (faculty) ON DELETE CASCADE
);

CREATE TABLE students (
  students_id INT UNSIGNED AUTO_INCREMENT,
  first_name VARCHAR(20) NOT NULL,
  age TINYINT,
  last_name VARCHAR(20) NOT NULL,
  PRIMARY KEY (students_id),
  FOREIGN KEY (students_group) REFERENCES groups (group) ON DELETE CASCADE
);