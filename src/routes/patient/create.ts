import { NextFunction, Request, Response } from "express";
import { PatientDetails } from "src/util/types";
import { prisma } from "..";


export const createPatient = async (req: Request, res: Response, next: NextFunction) => {
  const { id, name, age, address, image, languages, hobbies, postalCode }: PatientDetails = req.body

  try {

    if (!name || !age || !address || !image || !languages || !hobbies || !postalCode) {
      throw new Error("Name / age / address / image / languages / hobbies/ postalCode not provided")
    }

    const patient = await prisma.patient.create({
      data: { id, name, age, address, image, languages, hobbies, postalCode }
    })
    console.log(patient)
    res.status(200).send(patient)
  }
  catch (error: any) {
    res.status(400).send(error.message)
  }

}
