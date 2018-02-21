const express = require('express')

const Event = require('./model')

const router = express.Router()

router.get('/event', (req, res, next) => {
  Event.find({})
    .then(event => {
      res.json({event})
    })
    .catch(next)
})

router.post('/event', (req, res, next) => {

  new Event(req.body.event)
    .save()
    .then(event => {
      res.json({event})
    })
    .catch(next)
})

router.put('/event/:id', function (req, res) {
  Event.findOneAndUpdate({ "_id": req.params.id}, {
    title: req.body.event.title,
    date: req.body.event.date,
    location: req.body.event.location
  }, { new: true }, function (err, doc) {
    if (err) {
      res.status(400).json(err)
    }
    res.status(200).json(doc)
  })
})

router.delete('/event/:id', function (req, res) {
  let id = req.params.id
  Event.remove({
    _id: id
  }, function () {
    res.json()
  })
})

module.exports = router