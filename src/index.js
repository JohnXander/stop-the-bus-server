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
const gameRouter = require('./routers/game')
const teamRouter = require('./routers/team')
const categoryRouter = require('./routers/category')
const roundRouter = require('./routers/round')
const cardRouter = require('./routers/card')

app.use('/users', userRouter)
app.use('/games', gameRouter)
app.use('/teams', teamRouter)
app.use('/categories', categoryRouter)
app.use('/rounds', roundRouter)
app.use('/cards', cardRouter)

app.listen(port, () => {
    console.log(`\n Server is running on http://localhost:${port}\n`)
})
