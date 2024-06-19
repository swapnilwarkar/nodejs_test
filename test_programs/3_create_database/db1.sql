#
# SQL Export
# Created by ABC
# Created: 18th June 2024. 
# Encoding: Unicode (UTF-8)
#

CREATE DATABASE IF NOT EXISTS `db1` DEFAULT CHARACTER SET latin1 DEFAULT COLLATE latin1_swedish_ci;
USE `db1`;


CREATE TABLE `users` (
  `userId` varchar(64) NOT NULL,
  `accountId` varchar(64) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `email` (`email`),
  KEY `accountId` (`accountId`),
) ENGINE=InnoDB DEFAULT CHARSET=latin1;