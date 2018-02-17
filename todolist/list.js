const express = require('express')

const List = require('./model')

const router = express.Router()

router.get('/list', (req, res, next) => {
  List.find({})
    .then(list => {
      res.json({list})
    })
    .catch(next)
})

router.post('/list', (req, res, next) => {

  new List(req.body.list)
    .save()
    .then(list => {
      res.json({list})
    })
    .catch(next)
})

router.put('/list/:id', function (req, res) {
  List.findOneAndUpdate({ "_id": req.params.id}, {
    date: req.body.list.date,
    url: req.body.list.url,
    description: req.body.list.description
  }, { new: true }, function (err, doc) {
    if (err) {
      res.status(400).json(err)
    }
    res.status(200).json(doc)
  })
})

router.delete('/list/:id', function (req, res) {
  let id = req.params.id
  List.remove({
    _id: id
  }, function () {
    res.json()
  })
})

module.exports = router