//connect router to the server.js
const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

//root route            THIS WLL SHOW THE DATA ON THE MAIN PAGE 
router.get('/api', (req, res) => {
   // res.send('album api') this will show 'album api' on the webpage only => http://localhost:300/api
   res.json({
    'All Albums': `http://localhost:${PORT}/api/album`
   })
})

//ERROR HANDLING PAGE
router.use((req, res, next) => {

    res.status(404)
    .send('<h1>404 Error This page does not exist </h1> ')
})

 module.exports = router