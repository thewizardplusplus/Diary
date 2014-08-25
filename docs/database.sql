-- for MySQL

DROP TABLE IF EXISTS `diary_points`;
CREATE TABLE `diary_points` (
	`id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`date` DATE NOT NULL,
	`text` TEXT NOT NULL,
	`state` ENUM('INITIAL', 'SATISFIED', 'NOT_SATISFIED', 'CANCELED') NOT NULL DEFAULT 'INITIAL',
	`check` BOOLEAN NOT NULL DEFAULT 0,
	`order` BIGINT UNSIGNED NOT NULL DEFAULT 18446744073709551615
) ENGINE = MYISAM;

DROP TABLE IF EXISTS `diary_daily_points`;
CREATE TABLE `diary_daily_points` (
	`id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`text` TEXT NOT NULL,
	`check` BOOLEAN NOT NULL DEFAULT 0,
	`order` BIGINT UNSIGNED NOT NULL DEFAULT 18446744073709551615
) ENGINE = MYISAM;

DROP TABLE IF EXISTS `diary_backups`;
CREATE TABLE `diary_backups` (
	`id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`create_time` DATETIME NOT NULL,
	`create_duration` FLOAT NOT NULL DEFAULT 0.0
) ENGINE = MYISAM;

DROP TABLE IF EXISTS `diary_parameters`;
CREATE TABLE `diary_parameters` (
	`id` BIGINT UNSIGNED NOT NULL DEFAULT 1 PRIMARY KEY,
	`password_hash` TEXT NOT NULL,
	`points_on_page` TINYINT UNSIGNED NOT NULL DEFAULT 24,
	`dropbox_access_token` VARCHAR(255) NOT NULL
) ENGINE = MYISAM;
