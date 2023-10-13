/*
  Warnings:

  - You are about to drop the column `mail` on the `People` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `People` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `People` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `People_mail_key` ON `People`;

-- AlterTable
ALTER TABLE `Advertisement` MODIFY `status` ENUM('PENDING', 'COMPLETED', 'CANCELLED', 'DRAFT') NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `Application` MODIFY `status` ENUM('PENDING', 'ACCEPTED', 'REJECTED', 'DRAFT') NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `People` DROP COLUMN `mail`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `People_email_key` ON `People`(`email`);
