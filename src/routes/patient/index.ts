import { Router } from "express";
import { createPatient } from "./create";
import { readPatient } from "./read";
import { updatePatient } from "./update";

const router = Router()

router.post('/create', createPatient)
router.get('/read', readPatient)
router.post('/update', updatePatient)

export default router

