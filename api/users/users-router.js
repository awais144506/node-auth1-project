const express = require('express')
const User = require('./users-model')
const { restricted } = require('../auth/auth-middleware')
const router = express.Router()
router.get('/', restricted, (req, res, next) => {
  User.find()
    .then(u => {
      res.status(200).json(u)
    }
    )
    .catch(next)
})

module.exports = router


/**
  [GET] /api/users

  This endpoint is RESTRICTED: only authenticated clients
  should have access.

  response:
  status 200
  [
    {
      "user_id": 1,
      "username": "bob"
    },
    // etc
  ]

  response on non-authenticated:
  status 401
  {
    "message": "You shall not pass!"
  }
 */
