const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const queries = require('./db/queries');
const methodOverride = require('method-override');

app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(methodOverride("_method"))

app.get('/', function (req, res) {
   res.render('landing')
})

app.get('/resolutions', (req, res) => {
  queries.getResolutions()
    .then(resolution => {
      console.log(resolution);
        res.render('resolutions', {
              resolution: resolution,

        })
    })
})
















app.listen(port, () => {
  console.log(`listening at ${port}`)
})
