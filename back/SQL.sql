CREATE TABLE userinfo (
    `idx` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `email` VARCHAR(30) NOT NULL,
    `password` VARCHAR(30) NOT NULL,
    `privatekey` VARCHAR(128) NOT NULL,
    `address` VARCHAR(256) NOT NULL,
    `balance` INT(16) NOT NULL
)DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

INSERT INTO userinfo(email,password,privatekey,address,balance) VALUES("sdf@nadfs","1234","4607ac1c52f58fed1a333805fa7023f8dad6d07e1168234dfcf61de829757e9a","04fb4120eea7c13858498e534aa21423357748e912fbc56481dd930843e9a769ce4d4b998dcca3db4ddecae3d283117785d017629837ebead98fcdf857e7e72313",0);

SELECT * FROM userinfo;

DROP table userinfo;

UPDATE
DELETE