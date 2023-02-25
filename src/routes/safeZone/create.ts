import { Request, Response, NextFunction } from "express"
import { SafeZoneDetails } from "src/util/types"
import { prisma } from ".."

export const createSafeZone = async (req: Request, res: Response, next: NextFunction) => {
  const { patientId, location, address, postalCode, lat, long, radius, frequencies, details }: SafeZoneDetails = req.body

  try {
    if (!patientId || !location || !address || !postalCode || !lat || !long || !radius) {
      throw new Error("patientId/ lat/ long/ radius / location/ address is not provided")
    }

    const safeZone = await prisma.patient.update({
      where: { id: patientId },
      data: {
        safeZone: {
          create: {
            location, address, postalCode, lat, long, radius, frequencies, details
          }
        }
      }
    })

    // console.log(safeZone)
    res.status(200).send(safeZone)
  }
  catch (error: any) {
    res.status(400).send(error.message)
  }
}