const express = require('express')
const PORT = process.env.PORT || 5000

const app = express()

app.get('/test', (req, res) => res.send('Awesome!!'))

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
