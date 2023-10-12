/*
  Warnings:

  - A unique constraint covering the columns `[personId]` on the table `Bookmarked` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `personId` to the `Bookmarked` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Bookmarked` ADD COLUMN `personId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Bookmarked_personId_key` ON `Bookmarked`(`personId`);

-- AddForeignKey
ALTER TABLE `Bookmarked` ADD CONSTRAINT `Bookmarked_personId_fkey` FOREIGN KEY (`personId`) REFERENCES `People`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
