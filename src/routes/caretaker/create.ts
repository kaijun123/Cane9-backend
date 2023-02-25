import { NextFunction, Request, Response } from "express"
import { CareTakerDetails } from "src/util/types"
import { prisma } from ".."

export const createCareTaker = async (req: Request, res: Response, next: NextFunction) => {
  const { patientId, name, relationship, contact, image }: CareTakerDetails = req.body

  try {

    if (!name || !relationship || !contact || !image) {
      throw new Error("Name / relationship / contact / image not provided")
    }

    const createCareTaker = await prisma.patient.update({
      where: { id: patientId },
      data: {
        caretaker: {
          create: {
            name, relationship, contact, image
          }
        }
      }
    })
    console.log(createCareTaker)
    res.status(200).send(createCareTaker)
  }
  catch (error: any) {
    res.status(400).send(error.message)
  }
}