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

DROP TABLE IF EXISTS `diary_parameters`;
CREATE TABLE `diary_parameters` (
	`id` BIGINT UNSIGNED NOT NULL DEFAULT 1 PRIMARY KEY,
	`password_hash` TEXT NOT NULL,
	`start_date` DATE NOT NULL
) ENGINE = MYISAM;

INSERT INTO `diary_parameters` (`password_hash`, `start_date`)
VALUES (
	'$2a$13$7RC2CWHDqafP4dvl7t5PCucccPVl7spVT4FiALXEaxWCnzCTskqAK',
	CURDATE()
);
