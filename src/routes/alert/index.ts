import { Router } from "express";
import { disableAlarm } from "./disable";
import { enableAlarm } from "./enable";

const router = Router()

router.post('/enable', enableAlarm);
router.post('/disable', disableAlarm);

export default router