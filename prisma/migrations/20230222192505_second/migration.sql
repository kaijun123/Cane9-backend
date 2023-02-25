/*
  Warnings:

  - Changed the type of `radius` on the `SafeZone` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "SafeZone" DROP COLUMN "radius",
ADD COLUMN     "radius" INTEGER NOT NULL;
