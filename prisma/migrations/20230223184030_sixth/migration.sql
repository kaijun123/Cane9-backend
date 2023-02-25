/*
  Warnings:

  - The primary key for the `Caretaker` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Location` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Patient` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SafeZone` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_patientId_fkey";

-- DropForeignKey
ALTER TABLE "Patient" DROP CONSTRAINT "Patient_caretakerId_fkey";

-- DropForeignKey
ALTER TABLE "SafeZone" DROP CONSTRAINT "SafeZone_patientId_fkey";

-- AlterTable
ALTER TABLE "Caretaker" DROP CONSTRAINT "Caretaker_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Caretaker_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Caretaker_id_seq";

-- AlterTable
ALTER TABLE "Location" DROP CONSTRAINT "Location_pkey",
ALTER COLUMN "patientId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Location_pkey" PRIMARY KEY ("patientId");

-- AlterTable
ALTER TABLE "Patient" DROP CONSTRAINT "Patient_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "caretakerId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Patient_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "SafeZone" DROP CONSTRAINT "SafeZone_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "patientId" SET DATA TYPE TEXT,
ADD CONSTRAINT "SafeZone_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "SafeZone_id_seq";

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SafeZone" ADD CONSTRAINT "SafeZone_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_caretakerId_fkey" FOREIGN KEY ("caretakerId") REFERENCES "Caretaker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
