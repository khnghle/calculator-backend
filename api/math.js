const router = require('express').Router()
const {findTotal} = require('../utils')

router.post('/', (req, res, next) => {
  const {equation} = req.body
  const sum = findTotal(equation)
  console.log(sum)

  if(isNaN(sum)) res.send(`ERROR! ${equation} is not a proper instruction`);
  else res.status(202).send(`${equation}=${sum}`)
})

module.exports = router;