-- CreateTable
CREATE TABLE `Instructor` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Instructor_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SessionsObject` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `instructor` INTEGER UNSIGNED NOT NULL,
    `start` DATETIME(3) NOT NULL,
    `end` DATETIME(3) NOT NULL,
    `isBooked` BOOLEAN NOT NULL,
    `client` INTEGER UNSIGNED NULL,

    UNIQUE INDEX `SessionsObject_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Client` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Client_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SessionsObject` ADD CONSTRAINT `SessionsObject_instructor_fkey` FOREIGN KEY (`instructor`) REFERENCES `Instructor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SessionsObject` ADD CONSTRAINT `SessionsObject_client_fkey` FOREIGN KEY (`client`) REFERENCES `Client`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
