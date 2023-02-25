/*
  Warnings:

  - You are about to drop the column `name` on the `SafeZone` table. All the data in the column will be lost.
  - Added the required column `location` to the `SafeZone` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SafeZone" DROP COLUMN "name",
ADD COLUMN     "location" TEXT NOT NULL;
