const express = require('express');
const app = express();

const morgan = require('morgan')
app.use(morgan('dev'))

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use('/api', require('./api'))


app.use( (err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal Server Error')
})

const port = process.env.PORT || 3000;
app.listen(port, function (){
  console.log(`Your server is listening on port ${port}`)
})