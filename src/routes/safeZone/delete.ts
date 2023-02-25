import { Request, Response, NextFunction } from "express"
import { prisma } from ".."


export const deleteSafeZone = async (req: Request, res: Response, next: NextFunction) => {
  const safeZoneId = req.body.safeZoneId

  try {
    const safeZone = await prisma.safeZone.delete({
      where: {
        id: safeZoneId
      }
    })
    // console.log(safeZone)
    res.status(200).send(safeZone)
  }
  catch (error: any) {
    res.status(400).send(error.message)
  }
}