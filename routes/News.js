const router = require('express').Router();
const auth = require('../middleware/auth');
const { getAllNews, updateNews, createNews } = require('../controllers/News');

router.get("/all", getAllNews);
router.put("/update", auth, updateNews);
router.post("/new", auth, createNews);

module.exports = router;