const router = require('express').Router();
const { getAllFixtures, createNewFixture, addNewLeagueMatch, addNewKnockMatch } = require('../controllers/Fixture');
const auth = require('../middleware/auth');

router.get("/all", getAllFixtures);
router.post("/new", auth, createNewFixture);
router.post("/league/add", auth, addNewLeagueMatch);
router.post("/knock/add", auth, addNewKnockMatch);

module.exports = router;