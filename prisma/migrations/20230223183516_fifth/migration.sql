/*
  Warnings:

  - Added the required column `caretakerId` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "caretakerId" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Patient_id_seq";

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_caretakerId_fkey" FOREIGN KEY ("caretakerId") REFERENCES "Caretaker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
