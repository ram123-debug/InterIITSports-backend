const router = require('express').Router();
const {sendMail} = require('../controllers/Contact');

router.post("/", sendMail);

module.exports = router;