import { Request, Response, NextFunction } from "express"
import { SafeZoneDetails } from "src/util/types"
import { prisma } from ".."


export const updateSafezone = async (req: Request, res: Response, next: NextFunction) => {
  const { safeZoneId, radius }: SafeZoneDetails = req.body

  try {
    if (!safeZoneId) {
      throw new Error("SafeZoneId not provided")
    }
    const safeZone = await prisma.safeZone.update({
      where: { id: safeZoneId },
      data: { radius }
    })
    console.log(safeZone)
    res.status(200).send(safeZone)
  }
  catch (error: any) {
    res.status(400).send(error.message)
  }
}