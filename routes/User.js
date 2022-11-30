const router = require('express').Router();
const { register, login } = require('../controllers/User');
const admin = require('../middleware/admin');
const auth = require('../middleware/auth');

router.post('/register', auth, admin, register);
router.post("/login", login);

module.exports = router;