import { NextFunction, Request, Response } from "express"
import { prisma } from ".."


export const readSafeZone = async (req: Request, res: Response, next: NextFunction) => {
  const patientId: any = req.query.patientId!

  try {
    if (!patientId) {
      throw new Error("patientId not provided")
    }
    const safeZone = await prisma.safeZone.findMany({
      where: { patientId }
    })
    // console.log(safeZone)
    res.status(200).send(safeZone)
  }
  catch (error: any) {
    res.status(400).send(error.message)
  }
}