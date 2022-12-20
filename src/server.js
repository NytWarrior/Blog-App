const express = require('express')

const { db } = require('./db/models')               // const models = require('./db/models')
// const db = models.db


const app = express()

db.sync({ force: true })
    .then(() => {
        app.listen(5555, () => {
            console.log("Server started on http://localhost:5555")
        })
    })
    .catch((err) => {
        console.log(new Error('Could not start database'))
        console.log(err)
    })

