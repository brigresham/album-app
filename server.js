//  FIRST START UP SERVER

const express = require('express')
const server = express()
const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log((`The dodgers won the 2025 world series!!`)))