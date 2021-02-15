const express = require('express')
const router = express.Router()
const Alpaca = require('@alpacahq/alpaca-trade-api')

const alpaca = new Alpaca()

// @route   GET api/alpaca
// @desc    Alpaca route
// @access  Public
router.get('/', (req,res) => res.send('Alpaca Route'))

// @route   GET api/alpaca/data
// @desc    Alpaca data route
// @access  Public
router.get('/data', (req,res) => {

    alpaca.createOrder({
            symbol: aapl, // any valid ticker symbol
            qty: 1,
            side: 'buy' ,
            type: 'market',
            time_in_force: 'day',
            // limit_price: number, // optional,
            // stop_price: number, // optional,
            // client_order_id: string, // optional,
            // extended_hours: boolean, // optional,
            // order_class: string, // optional,
            // take_profit: object, // optional,
            // stop_loss: object, // optional,
            // trail_price: string, // optional,
            // trail_percent: string // optional,})
        })

    alpaca.getAccount().then((account) => {
        console.log('Current Account:', account)
      })

    // // Check if the market is open now.
    // alpaca.getClock().then((clock) => {
    //     console.log('The market is ' + clock.is_open ? 'open.' : 'closed.')
    // })

    // // View Account Information
    // alpaca.getAccount()
    // .then((account) => {
    //     // Check if our account is restricted from trading.
    //     if (account.trading_blocked) {
    //         console.log('Account is currently restricted from trading.')
    //     }

    //     // Check how much money we can use to open new positions.
    //     console.log(`$${account.buying_power} is available as buying power.`)
    // })

    // // See If a Particular Asset is Tradable on Alpaca
    // alpaca.getAsset('AAPL')
    // .then((aaplAsset) => {
    //     if (aaplAsset.tradable) {
    //         console.log('We can trade AAPL.')
    //     }
    // })
})




module.exports = router