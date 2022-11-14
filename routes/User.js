const router = require('express').Router();
const { register, login } = require('../controllers/User');
const auth = require('../middleware/auth');

router.post('/register', auth, register);
router.post("/login", login);

module.exports = router;