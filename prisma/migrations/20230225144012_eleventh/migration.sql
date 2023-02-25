/*
  Warnings:

  - You are about to drop the column `frequency` on the `SafeZone` table. All the data in the column will be lost.
  - The `details` column on the `SafeZone` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "SafeZone" DROP COLUMN "frequency",
ADD COLUMN     "frequencies" TEXT[],
DROP COLUMN "details",
ADD COLUMN     "details" TEXT[];
