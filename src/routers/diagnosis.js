let express = require('express')
const { Diagnosis } = require("../models");
let router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/',async(req, res) => {
  const diagnoses = await Diagnosis.findAll()
  res.json(diagnoses)
})
router.get('/:id', async(req, res) => {
  const diagnosis = await Diagnosis.findOne({ 'where': { id: req.params.id } })

  if(diagnosis) {

    res.json(diagnosis)
  } else {
    res.status(404).end()
  }

})
router.post('/', async(req, res) => {
  await Diagnosis.create(req.body)
  res.status(201).end()
})
module.exports = router