let express = require('express')
const {Patient} = require("../models");
let router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/',async(req, res) => {
  const patients = await Patient.findAll()
  res.json(patients)
})
router.get('/:id', async(req, res) => {
  const patient = await Patient.findOne({ 'where': { id: req.params.id } })
  if(!patient) {
    return res.status(404).send()
  }
  res.json(patient)
})
router.post('/', async(req, res) => {
  const patient = await Patient.create(req.body)
  res.json(patient)
})
router.delete('/:id', async(req, res) => {
  const count = await Patient.destroy({ where: { id: req.params.id } })
  if (!count) {
    return res.status(404).send()
  }
  res.status(204).send()
})

module.exports = router