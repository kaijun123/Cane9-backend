import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import caretaker from "./caretaker/index";
import { healthCheck } from "./healthCheck";
import patient from "./patient/index";
import safeZone from "./safeZone/index";
import location from "./location/index"
import alert from "./alert/index"


export const prisma = new PrismaClient()

const router = Router()

router.get('/', healthCheck);
router.use('/safezone', safeZone)
router.use('/patient', patient)
router.use('/caretaker', caretaker)
router.use('/location', location)
router.use('/alert', alert)



export default router