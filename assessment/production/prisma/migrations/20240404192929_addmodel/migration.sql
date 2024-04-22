/*
  Warnings:

  - You are about to drop the column `manufacturing` on the `production` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `production` table. All the data in the column will be lost.
  - Added the required column `date_manufacturing` to the `production` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "production" DROP COLUMN "manufacturing",
DROP COLUMN "price",
ADD COLUMN     "date_manufacturing" TEXT NOT NULL,
ADD COLUMN     "production_approved" BOOLEAN NOT NULL DEFAULT false;
