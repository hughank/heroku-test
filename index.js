const express = require('express')
const PORT = process.env.PORT || 5000

const app = express()

app.get('/test', (req, res) => res.send('Awesome!!'))

app.get('/data', (req, res) => {
    res.json({
        id: 1,
        name: 'Coolname'
    })
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
