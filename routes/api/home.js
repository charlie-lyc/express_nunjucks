const express = require('express')


const router = express.Router()

router.get('/', require('../../controllers/home'))

module.exports = router