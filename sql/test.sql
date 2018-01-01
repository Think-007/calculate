/*
Navicat MySQL Data Transfer

Source Server         : 本地mysql
Source Server Version : 50710
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50710
File Encoding         : 65001

Date: 2018-01-01 23:51:49
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for mg_court
-- ----------------------------
DROP TABLE IF EXISTS `mg_court`;
CREATE TABLE `mg_court` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(64) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `country` varchar(32) DEFAULT NULL,
  `city` varchar(64) DEFAULT NULL,
  `type` tinyint(4) DEFAULT NULL,
  `area` double DEFAULT NULL,
  `owner` varchar(63) DEFAULT NULL,
  `tel_number` varchar(20) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=gb2312;

-- ----------------------------
-- Records of mg_court
-- ----------------------------

-- ----------------------------
-- Table structure for mg_match_record
-- ----------------------------
DROP TABLE IF EXISTS `mg_match_record`;
CREATE TABLE `mg_match_record` (
  `id` varchar(255) NOT NULL,
  `match_name` varchar(64) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `court_id` int(11) NOT NULL,
  `player_name` varchar(64) NOT NULL,
  `swing_time` int(11) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`,`match_name`,`user_id`,`court_id`)
) ENGINE=InnoDB DEFAULT CHARSET=gb2312;

-- ----------------------------
-- Records of mg_match_record
-- ----------------------------

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

-- ----------------------------
-- Records of mg_user
-- ----------------------------

-- ----------------------------
-- Table structure for mg_user_record
-- ----------------------------
DROP TABLE IF EXISTS `mg_user_record`;
CREATE TABLE `mg_user_record` (
  `recordid` varchar(64) NOT NULL,
  `userid` varchar(64) NOT NULL,
  `recordinfo` text,
  `createtime` datetime DEFAULT NULL,
  PRIMARY KEY (`recordid`),
  UNIQUE KEY `mg_user_record_index` (`userid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mg_user_record
-- ----------------------------

-- ----------------------------
-- Procedure structure for hi
-- ----------------------------
DROP PROCEDURE IF EXISTS `hi`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `hi`()
select 'hello world'
;;
DELIMITER ;
