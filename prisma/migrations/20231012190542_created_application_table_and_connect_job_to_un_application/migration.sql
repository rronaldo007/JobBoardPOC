/*
  Warnings:

  - A unique constraint covering the columns `[applicationId]` on the table `Job` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `applicationId` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Job` ADD COLUMN `applicationId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Application` (
    `id` VARCHAR(191) NOT NULL,
    `resume` VARCHAR(191) NOT NULL,
    `cover` VARCHAR(191) NOT NULL,
    `status` ENUM('PENDING', 'ACCEPTED', 'REJECTED') NOT NULL DEFAULT 'PENDING',

    UNIQUE INDEX `Application_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Job_applicationId_key` ON `Job`(`applicationId`);

-- AddForeignKey
ALTER TABLE `Job` ADD CONSTRAINT `Job_applicationId_fkey` FOREIGN KEY (`applicationId`) REFERENCES `Application`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
