#
# SQL Export
# Created by ABC
# Created: 18th June 2024. 
# Encoding: Unicode (UTF-8)
#

CREATE DATABASE IF NOT EXISTS `db1` DEFAULT CHARACTER SET latin1 DEFAULT COLLATE latin1_swedish_ci;
USE `db1`;


CREATE TABLE `users` (
  `user_id` varchar(64) NOT NULL,
  `account_id` varchar(64) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`),
  KEY `accountId` (`account_id`),
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
