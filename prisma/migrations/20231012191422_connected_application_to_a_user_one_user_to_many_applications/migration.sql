/*
  Warnings:

  - Added the required column `personId` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Application` ADD COLUMN `personId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Application` ADD CONSTRAINT `Application_personId_fkey` FOREIGN KEY (`personId`) REFERENCES `People`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
