const router = require('express').Router();
const { getAllResults, createNewSports, addNewPool, addNewPoolTeam, updateTeamResult } = require('../controllers/Results');
const auth = require('../middleware/auth');

router.get("/all", getAllResults);
router.post("/new", auth, createNewSports);
router.post("/pool/add", auth, addNewPool);
router.put("/team/add", auth, addNewPoolTeam);
router.put("/update", auth, updateTeamResult);

module.exports = router;