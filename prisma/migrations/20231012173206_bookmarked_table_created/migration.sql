-- CreateTable
CREATE TABLE `Bookmarked` (
    `id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Bookmarked_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
