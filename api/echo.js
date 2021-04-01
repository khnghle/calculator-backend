const router = require('express').Router()

router.use('*', (req, res, next) => {
  res.send(req.body.equation || 'hello world')
})


module.exports = router;