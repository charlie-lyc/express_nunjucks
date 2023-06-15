require('dotenv').config()
const express = require('express')
const path = require('path')
const nunjucks = require('nunjucks')


const app = express()
app.use(express.static(path.resolve('public')))

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true // HMR
})
// app.set('view engine', 'njk')
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))


/**
 * Backend 
 */
// app.get('/api', (req, res) => {
//     res.status(200).json({ msg: 'hello' })
// })
////////////////////////////////////////////////////////////
app.use('/api', require('./routes/api/home'))
// app.use('/api/signin', require('./routes/api/signin'))
// app.use('/api/signup', require('./routes/api/signup'))
// app.use('/api/signout', require('./routes/api/signout'))
app.use('/api/auth', require('./routes/api/auth'))


/**
 * Frontend 
 */
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'index.html'))
// })
////////////////////////////////////////////////////////////////
// app.get('/', (req, res) => {
//     res.render('pages/home')
// })
////////////////////////////////////////////////////////////////
// app.use('/', require('./routes/home'))
// app.use('/signin', require('./routes/signin'))
// app.use('/signup', require('./routes/signup'))
// app.use('/signout', require('./routes/signout'))
////////////////////////////////////////////////////////////////
// app.use('*', require('./routes')) // XXX NOT WORKING!!! XXX
////////////////////////////////////////////////////////////////
app.use('/', require('./routes'))


const port = process.env.PORT || 3001
app.listen(port, () => {
    if (process.env.NODE_ENV == 'dev') {
        console.log(`Server started on port ${port}`)
    }
})