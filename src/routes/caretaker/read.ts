import { NextFunction, Request, Response } from "express"
import { CareTakerDetails } from "src/util/types"
import { prisma } from ".."

export const readCareTaker = async (req: Request, res: Response, next: NextFunction) => {
  const { patientId }: CareTakerDetails = req.body

  try {
    const patient = await prisma.patient.findUnique({
      where: { id: patientId }
    })
    console.log(patient)

    const caretakerId = patient?.caretakerId || null
    if (caretakerId) {
      const caretaker = await prisma.caretaker.findUnique({
        where: { id: caretakerId }
      })
      console.log(caretaker)
      res.status(200).send(caretaker)
    }
    else {
      res.status(200).send("Patient has no caretaker")
    }
  }
  catch (error: any) {
    res.status(400).send(error.message)
  }
}