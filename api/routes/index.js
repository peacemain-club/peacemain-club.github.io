const express = require('express');
const router = express.Router();

const apply = require('./apply');
const login = require('./login');
const interview = require('./interview');

router.use('/apply', apply);
router.use('/login', login);
router.use('/interview', interview);

module.exports = router;
