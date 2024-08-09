import express from "express";
import {
  createNewClinicalTrial,
  getClinicalTrials,
  updateClinicalTrial,
  deleteClinicalTrail,
} from "../controllers/clinicalTrial.controller.js";

const router = express.Router();

router.post("/", createNewClinicalTrial);
router.get("/", getClinicalTrials);
router.put("/:id", updateClinicalTrial);
router.delete("/:id", deleteClinicalTrail);

export default router;
