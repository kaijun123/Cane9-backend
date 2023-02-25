import { Request, Response, NextFunction } from "express"
import { SafeZoneDetails } from "src/util/types"
import { prisma } from ".."


export const update = async (req: Request, res: Response, next: NextFunction) => {
  const { safeZoneId, lat, long, radius, image, frequencies, details }: SafeZoneDetails = req.body

  try {
    if (!safeZoneId || !lat || !long || !radius || !image || !frequencies || !details) {
      throw new Error("SafeZoneId not provided")
    }
    const safeZone = await prisma.safeZone.update({
      where: {
        id: safeZoneId
      },
      data: { lat, long, radius, image, frequencies, details }
    })
    // console.log(safeZone)
    res.status(200).send(safeZone)
  }
  catch (error: any) {
    res.status(400).send(error.message)
  }
}