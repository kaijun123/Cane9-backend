-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "hobbies" TEXT[],
ADD COLUMN     "languages" TEXT[];

-- CreateTable
CREATE TABLE "Caretaker" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "relationship" TEXT NOT NULL,
    "contact" TEXT NOT NULL,

    CONSTRAINT "Caretaker_pkey" PRIMARY KEY ("id")
);
