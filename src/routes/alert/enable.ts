import { NextFunction, Request, Response } from "express"
import { CareTakerDetails } from "src/util/types"
import { prisma } from ".."

export const enableAlarm = async (req: Request, res: Response, next: NextFunction) => {
  const { patientId }: CareTakerDetails = req.body

  try {

    const enable = await prisma.location.update({
      where: { patientId },
      data: {
        alarm: true
      }
    })
    // console.log(enable)
    res.status(200).send(enable)
  }
  catch (error: any) {
    res.status(400).send(error.message)
  }
}