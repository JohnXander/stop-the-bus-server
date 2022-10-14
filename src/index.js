require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const cors = require('cors')
const morgan = require('morgan')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const userRouter = require('./routers/user')

app.use('/users', userRouter)

app.listen(port, () => {
    console.log(`\n Server is running on http://localhost:${port}\n`)
})
