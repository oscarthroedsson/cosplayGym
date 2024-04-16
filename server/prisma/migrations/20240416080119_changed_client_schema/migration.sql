/*
  Warnings:

  - You are about to drop the column `name` on the `Client` table. All the data in the column will be lost.
  - Added the required column `clientName` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Client` DROP COLUMN `name`,
    ADD COLUMN `clientName` VARCHAR(191) NOT NULL;
