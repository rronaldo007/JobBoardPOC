/*
  Warnings:

  - Added the required column `advertisementId` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Application` ADD COLUMN `advertisementId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Application` ADD CONSTRAINT `Application_advertisementId_fkey` FOREIGN KEY (`advertisementId`) REFERENCES `Advertisement`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
