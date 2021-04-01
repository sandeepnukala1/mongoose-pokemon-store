require('dotenv').config()
const express = require('express')
const mongoose = require('./db/connection')
const { log } = require('mercedlogger')
const methodOverride = require('method-override')
const morgan = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || '2021'
const productsRouter = require('./routes/index')

const app = express()

app.set('view engine', 'ejs')

app.use(cors())
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/products', productsRouter)

app.get("/",(req, res) => {
    res.redirect("/products");
});

app.listen(PORT, () => {
    log.cyan(`Listening on Port ${PORT}`)
})