import { NextFunction, Request, Response } from "express";
import { PatientDetails } from "src/util/types";
import { prisma } from "..";


export const readPatient = async (req: Request, res: Response, next: NextFunction) => {
  const { id }: PatientDetails = req.body

  try {
    const patient = await prisma.patient.findUnique({
      where: { id }
    })
    // console.log(patient)
    res.status(200).send(patient)
  }
  catch (error: any) {
    res.status(400).send(error.message)
  }
}
