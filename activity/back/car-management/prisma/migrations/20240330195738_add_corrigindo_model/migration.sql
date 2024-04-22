/*
  Warnings:

  - You are about to drop the `ImageCar` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ImageCar" DROP CONSTRAINT "ImageCar_carId_fkey";

-- DropTable
DROP TABLE "ImageCar";
