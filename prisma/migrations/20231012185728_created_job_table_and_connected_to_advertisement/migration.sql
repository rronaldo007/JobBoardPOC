/*
  Warnings:

  - A unique constraint covering the columns `[type]` on the table `Advertisement` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `Job` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Job_id_key`(`id`),
    UNIQUE INDEX `Job_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Advertisement_type_key` ON `Advertisement`(`type`);

-- AddForeignKey
ALTER TABLE `Advertisement` ADD CONSTRAINT `Advertisement_type_fkey` FOREIGN KEY (`type`) REFERENCES `Job`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
