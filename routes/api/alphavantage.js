const express = require('express')
const axios = require('axios')

const router = express.Router()

// @route   GET api/alphavantage
// @desc    AlphaVantage route
// @access  Public
router.get('/', (req,res) => res.send('AlphaVantage Route'))

module.exports = router