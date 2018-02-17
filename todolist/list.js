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
  List.findOneAndUpdate(req.params.id, req.body)
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