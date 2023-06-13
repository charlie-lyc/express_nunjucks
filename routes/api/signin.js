const express = require('express')


const router = express.Router()

router.get('/', require('../../controllers/signin'))

module.exports = router