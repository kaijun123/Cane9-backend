import { NextFunction, Request, Response } from "express"
import { prisma } from ".."

export const readLocation = async (req: Request, res: Response, next: NextFunction) => {
  const patientId: any = req.query.patientId!

  try {
    const location = await prisma.location.findUnique({
      where: { patientId },
    })

    console.log(location)
    res.status(200).send(location)
  }
  catch (error: any) {
    res.status(400).send(error.message)
  }
}