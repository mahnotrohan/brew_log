CREATE TABLE IF NOT EXISTS `recipes` (
	`id` text PRIMARY KEY NOT NULL,
	`creator` text DEFAULT '' NOT NULL,
	`title` text DEFAULT '' NOT NULL,
	`data` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
