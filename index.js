const express = require('express')
const request = require('request')

const app = express()

app.get('/', (req,res) => res.send('API Running'))

app.post('/api/stocks', (req,res,next) => {
    res.send({
        sucess: true,
        message: 'it works'
    });


    const request = require('request');
    request('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=30min&apikey=53R95KRHZB2DPHRX', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.

    const content = JSON.parse(body)
    console.log(content['Meta Data'])
    });
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));