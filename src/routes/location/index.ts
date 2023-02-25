import { Router } from "express";
import { readLocation } from "./read";
import { updateLocation } from "./update";

const router = Router()

router.get('/read', readLocation)
router.post('/update', updateLocation)

export default router

