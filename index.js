const express = require('express')
const axios = require('axios')

const app = express()

app.get('/', (req,res) => res.send('API Running'))

app.get('/api/stocks', (req,res,next) => {
    res.send({
        sucess: true,
        message: 'it works'
    });
    
    const test = async () => {
        try {
            const {data} =  await axios.get('https://paper-api.alpaca.markets/v2/account');
            console.log('response', data)
        } catch (error) {
            console.log(' error',  error)
        }
    }
    test()
})

// Define Routes
app.use('/api/alpaca', require('./routes/api/alpaca'))
app.use('/api/alphavantage', require('./routes/api/alphavantage'))




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));