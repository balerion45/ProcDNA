import express from 'express';

const router = express.Router();


router.post('/', createNewClinicalTrial);
router.get('/',getClinicalTrials);
router.put('/',)




export default router;