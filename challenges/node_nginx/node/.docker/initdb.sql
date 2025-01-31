CREATE DATABASE
IF NOT EXISTS nodenginxchallengedb;

CREATE TABLE
IF NOT EXISTS `nodenginxchallengedb`.`people`
(
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR
(255) NOT NULL
);