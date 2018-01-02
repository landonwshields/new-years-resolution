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
        res.render('resolutions', {
              resolution: resolution,

        })
    })
})

app.post('/resolutions', (req, res) => {
  // console.log(req.body);
  queries.addResolution(req.body)
    .then(newGame => {
      res.redirect('/resolutions')
  })
})

app.get('/oneResolution/:id', (req, res) => {
  var id = req.params.id
  // console.log(req.params.id);
  queries.getOneResolution(id)
    .then(oneResolution => {
      res.render('oneResolution', {
        resolution: oneResolution
      })
    })
})

app.put('/oneResolution/:id', (req, res) => {
  var id = req.params.id;
  queries.update(id, req.body)
    .then(resolution => {
      queries.getResolutions()
        .then(resolutions => {
            res.redirect('/resolutions')
        })
      })
})

app.delete('/oneResolution/:id', function(req, res) {
  var id = req.params.id
  queries.deleteResolution(id)
    .then(deleted => {
      res.redirect('/resolutions/')
    })
})













app.listen(port, () => {
  console.log(`listening at ${port}`)
})
