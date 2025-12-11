//  FIRST START UP SERVER

const express = require('express')
const server = express()
const PORT = process.env.PORT || 3000


//handle security 
//this how you install 
const helmet = require('helmet')
const cors = require('cors')
//configurign helmet
//server.use(helmet())
server.use(helmet.contentSecurityPolicy({
    useDefaults : true,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    directives: {
        "img-src": ["'self'", "https: data"],
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"]
    }
}))
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true}))



server.listen(PORT, () => console.log((`The dodgers won the 2025 world series!!`)))


//CONNECT TO DATABASE