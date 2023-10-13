/*
  Warnings:

  - Added the required column `advertisementId` to the `Advertisement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Advertisement` ADD COLUMN `advertisementId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Advertisement` ADD CONSTRAINT `Advertisement_advertisementId_fkey` FOREIGN KEY (`advertisementId`) REFERENCES `Companies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
