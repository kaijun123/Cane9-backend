/*
  Warnings:

  - Added the required column `address` to the `SafeZone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `SafeZone` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SafeZone" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "postalCode" TEXT;
