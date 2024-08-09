import express from "express";
import {
  createNewClinicalTrial,
  getClinicalTrials,
  updateClinicalTrial,
  deleteClinicalTrail,
} from "../controllers/clinicalTrial.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createNewClinicalTrial);
router.get("/", verifyToken, getClinicalTrials);
router.put("/:id", verifyToken, updateClinicalTrial);
router.delete("/:id", verifyToken, deleteClinicalTrail);

export default router;
