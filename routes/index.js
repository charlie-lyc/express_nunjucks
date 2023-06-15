const express = require('express')


const router = express.Router()

router.get('/', (req, res) => {
    res.render('pages/home')
})
router.get('/signin', (req, res) => {
    res.render('pages/signin')
})
router.get('/signup', (req, res) => {
    res.render('pages/signup')
})
router.get('/signout', (req, res) => {
    res.render('pages/signout')
})

module.exports = router