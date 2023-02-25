import { NextFunction, Request, Response } from "express"
import { CareTakerDetails } from "src/util/types"
import { prisma } from ".."

export const updateCareTaker = async (req: Request, res: Response, next: NextFunction) => {
  const { patientId, name, relationship, contact, image }: CareTakerDetails = req.body

  try {

    if (!name || !relationship || !contact || !image) {
      throw new Error("Name / relationship / contact / image not provided")
    }

    const patient = await prisma.patient.update({
      where: { id: patientId },
      data: {
        caretaker: {
          update: {
            name, relationship, contact, image
          }
        }
      }
    })
    const caretakerId = patient.caretakerId!

    const updatedCareTaker = await prisma.caretaker.findUnique({
      where: { id: caretakerId }
    })
    console.log(updatedCareTaker)
    res.status(200).send(updatedCareTaker)
  }
  catch (error: any) {
    res.status(400).send(error.message)
  }
}