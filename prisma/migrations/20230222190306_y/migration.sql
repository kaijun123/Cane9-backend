-- CreateTable
CREATE TABLE "Location" (
    "patientId" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lat" TEXT NOT NULL,
    "long" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("patientId")
);

-- CreateTable
CREATE TABLE "SafeZone" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "lat" TEXT NOT NULL,
    "long" TEXT NOT NULL,
    "radius" TEXT NOT NULL,

    CONSTRAINT "SafeZone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "postalCode" INTEGER NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SafeZone" ADD CONSTRAINT "SafeZone_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
