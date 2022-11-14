const router = require('express').Router();
const { getAllDraws, getSportsDraw, createNewDraw, addNewPool } = require('../controllers/Draw');
const auth = require('../middleware/auth');

router.get("/all", getAllDraws);
router.get("/:sport", getSportsDraw);
router.post("/new", auth, createNewDraw);
router.post("/pool/add", auth, addNewPool);

module.exports = router;