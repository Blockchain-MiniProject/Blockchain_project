CREATE TABLE blocks (
    `index` INT(11) NOT NULL ,
    `data` VARCHAR(100) NOT NULL,
    `timestamp` VARCHAR(100) NOT NULL,
    `hash` VARCHAR(100) NOT NULL,
    `previousHash` VARCHAR(100) NOT NULL,
    `difficulty` INT(11) default 0 NOT NULL,
    `nonce` INT(16) default 0 NOT NULL
    -- `date` TIMESTAMP default current_timestamp NOT NULL
) DEFAULT CHARSET utf8 COLLATE = utf8_general_ci;

CREATE TABLE blocks(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    update_time DATETIME COMMENT 'Update Time',
    content VARCHAR(255) COMMENT 'content'
) DEFAULT CHARSET UTF8 COMMENT 'newTable';

INSERT INTO board(subject,content,name) VALUES("subject3","content3","name3");

SELECT * FROM board;
INSERT INTO board(필드1,필드2...) VALUES(1,2,...)

UPDATE
DELETE