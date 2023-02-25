-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "alarm" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "outOfSafeZone" BOOLEAN NOT NULL DEFAULT false;
