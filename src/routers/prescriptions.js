let express = require('express')
const {Prescription} = require("../models");
let router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/',async(req, res) => {
  const prescriptions = await Prescription.findAll()
  res.json(prescriptions)
})
router.get('/:id', async(req, res) => {
  const prescription = await Prescription.findOne({ 'where': { id: req.params.id } })
  res.json(prescription)
})
router.post('/', async(req, res) => {
  const prescription = await Prescription.create(req.body)
  res.json(prescription)
})
router.delete('/:id', (req, res) => {
  Prescription.destroy({ where: { id: req.params.id } }).then(count => {
    if (!count) {
      return res.status(404).send()
    }
    res.status(204).send()
  })
})

module.exports = router