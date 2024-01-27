const jobCntlr = require('../controllers/jobCntlr');
const Router  = require('express');

const router = Router();

router.post("/NewJobByCompany",jobCntlr.CreateJobByCompany);
router.delete("/DeleteJobByCompany/:job_ref_id",jobCntlr.DeleteJobByCompany);
router.get("/GetAllJobsByCompany/:company_id",jobCntlr.GetAllJobsByCompany);
router.put("/UpdateJobByCompany",jobCntlr.UpdateJobByCompany);

module.exports = router;