import { Request, Response, NextFunction } from "express"
import { SafeZoneDetails } from "src/util/types"
import { prisma } from ".."

export const createSafeZone = async (req: Request, res: Response, next: NextFunction) => {
  const { patientId, lat, long, radius }: SafeZoneDetails = req.body


  try {
    if (!lat || !long || !radius) {
      throw new Error("Lat/ long/ radius is not provided")
    }
    const safeZone = await prisma.patient.update({
      where: { id: patientId },
      data: {
        safeZone: {
          create: {
            lat, long, radius
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