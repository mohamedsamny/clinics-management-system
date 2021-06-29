let express = require('express')
const {Clinic} = require('../models');
let router = express.Router()
const bodyParser = require('body-parser')


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/',async(req, res) => {
  const clinics = await Clinic.findAll()
  res.json(clinics)
})
router.get('/:id', async(req, res) => {
  const clinic = await Clinic.findOne({ where: { id: req.params.id } })
  if(!clinic) {
    return res.status(404).end()
  }

  res.json(clinic)
})

router.post('/', async(req, res) => {
  const clinic = await Clinic.create(req.body)
  res.json(clinic)
})

router.delete('/:id', async(req, res) => {
  const count = await Clinic.destroy({ where: { id: req.params.id } })
  if (!count) {
    return res.status(404).send()
  }
  res.status(204).send()
})



module.exports = router