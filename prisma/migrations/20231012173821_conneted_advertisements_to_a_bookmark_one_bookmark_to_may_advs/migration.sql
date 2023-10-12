/*
  Warnings:

  - Added the required column `advertisementId` to the `Bookmarked` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Bookmarked` ADD COLUMN `advertisementId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Bookmarked` ADD CONSTRAINT `Bookmarked_advertisementId_fkey` FOREIGN KEY (`advertisementId`) REFERENCES `Advertisement`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
