let express = require('express')
const {Appointment} = require("../models");
let router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/',async(req, res) => {
  const appointments = await Appointment.findAll()
  res.json(appointments)
})
router.get('/:id', async(req, res) => {
  const appointment = await Appointment.findOne({ 'where': { id: req.params.id } })
  res.json(appointment)
})
router.post('/', async(req, res) => {
  await Appointment.create(req.body)
  res.status(201).end()
})
router.delete('/:id', (req, res) => {
  Appointment.destroy({ where: { id: req.params.id } }).then(count => {
    if (!count) {
      return res.status(404).send()
    }
    res.status(204).send()
  })
})

module.exports = router