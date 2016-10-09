CREATE DATABASE chat;

USE chat;
/* Create other tables and define schemas for them here! */

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'messages'
-- 
-- ---

DROP TABLE IF EXISTS `messages`;
    
CREATE TABLE `messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `text` VARCHAR(255) NULL DEFAULT NULL,
  `id_users` INTEGER NULL DEFAULT NULL,
  `id_rooms` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
    
CREATE TABLE `users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'rooms'
-- 
-- ---

DROP TABLE IF EXISTS `rooms`;
    
CREATE TABLE `rooms` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `roomname` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'user_friends'
-- 
-- ---

DROP TABLE IF EXISTS `user_friends`;
    
CREATE TABLE `user_friends` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_users` INTEGER NULL DEFAULT NULL,
  `id_friends` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (id_rooms) REFERENCES `rooms` (`id`);
ALTER TABLE `user_friends` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);
ALTER TABLE `user_friends` ADD FOREIGN KEY (id_friends) REFERENCES `users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `user_friends` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---
-- INSERT INTO `users` (`username`) VALUES ('Jeff');
-- INSERT INTO `users` (`username`) VALUES ('Wallace');
-- INSERT INTO `users` (`username`) VALUES ('Ben');
-- INSERT INTO `rooms` (`roomname`) VALUES ('Lobby');
-- INSERT INTO `messages` (`text`,`id_users`,`id_rooms`) VALUES ('Hello all',1, 1);
-- INSERT INTO `messages` (`text`,`id_users`,`id_rooms`) VALUES ('Hello again',1, 1);
-- INSERT INTO `user_friends` (`id_users`,`id_friends`) VALUES (1,2);
-- INSERT INTO `user_friends` (`id_users`,`id_friends`) VALUES (1,3);

--   -- Selecting the names of all the friends of Jeff
-- SELECT f.username FROM users f INNER JOIN user_friends uf ON uf.id_friends=f.id INNER JOIN users u ON uf.id_users=u.id AND u.username='Jeff';





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

