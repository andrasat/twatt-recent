const router = require('express').Router()
const OAuth = require('oauth')
require('dotenv').config()

/* GET search twitter */
router.get('/search', (req, res)=> {
  let oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.APP_CONS_KEY,
    process.env.APP_SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
  )
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.q}`,
    process.env.ACC_TOKEN,
    process.env.ACC_SECRET,
    (err, data)=> {
      if(err) console.error(err)
      res.send(data)
    }
  )
})

/* GET recent twitter */
router.get('/recent', (req, res)=> {
  let oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.APP_CONS_KEY,
    process.env.APP_SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
  )
  oauth.get(
    `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${req.query.name}&count=${req.query.count}`,
    process.env.ACC_TOKEN,
    process.env.ACC_SECRET,
    (err, data)=> {
      if(err) console.error(err)
      res.send(data)
    }
  )
})

module.exports = router