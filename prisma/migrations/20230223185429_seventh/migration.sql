-- DropForeignKey
ALTER TABLE "Patient" DROP CONSTRAINT "Patient_caretakerId_fkey";

-- AlterTable
ALTER TABLE "Patient" ALTER COLUMN "caretakerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_caretakerId_fkey" FOREIGN KEY ("caretakerId") REFERENCES "Caretaker"("id") ON DELETE SET NULL ON UPDATE CASCADE;
