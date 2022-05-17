CREATE TABLE userinfo (
    `idx` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `email` VARCHAR(30) NOT NULL,
    `password` VARCHAR(30) NOT NULL,
    `privatekey` VARCHAR(128) NOT NULL,
    `address` VARCHAR(256) NOT NULL,
    `balance` INT(16) NOT NULL
)DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

INSERT INTO userinfo(`email`,`password`,`privatekey`,`address`,`balance`) VALUES("email","pwd","private","address",0);

SELECT * FROM userinfo;

DROP table userinfo;

UPDATE
DELETE