/*
Navicat MySQL Data Transfer

Source Server         : 172.18.5.110
Source Server Version : 50525
Source Host           : 172.18.5.110:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50525
File Encoding         : 65001

Date: 2017-11-01 17:11:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for mg_user
-- ----------------------------
DROP TABLE IF EXISTS `mg_user`;
CREATE TABLE `mg_user` (
  `userid` varchar(64) NOT NULL,
  `username` varchar(64) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  `telnumber` varchar(32) DEFAULT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `realname` varchar(64) DEFAULT NULL,
  `sex` tinyint(4) DEFAULT '0',
  `birthday` datetime DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `country` varchar(64) DEFAULT NULL,
  `provience` varchar(64) DEFAULT NULL,
  `headurl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `userid` (`userid`),
  UNIQUE KEY `telnumber` (`telnumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
