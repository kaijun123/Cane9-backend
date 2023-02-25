import { Router } from "express";
import { createSafeZone } from "./create";
import { deleteSafeZone } from "./delete";
import { readSafeZone } from "./read";
import { update } from "./update";


const router = Router()

router.post('/create', createSafeZone);
router.get('/read', readSafeZone)
router.post('/update', update)
router.post('/delete', deleteSafeZone)


export default router