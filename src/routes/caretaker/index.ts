import { Router } from "express";
import { readCareTaker } from "./read";
import { createCareTaker } from "./create";
import { updateCareTaker } from "./update";


const router = Router()

router.post('/create', createCareTaker);
router.get('/read', readCareTaker);
router.post('/update', updateCareTaker);

export default router