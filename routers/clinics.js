let express = require('express')
const {clinics} = require('../models');
let router = express.Router()
const bodyParser = require('body-parser')

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'clinics',
  password: '',
  port: 5432,
})

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/',async(req, res) => {
  const { rows } = await clinics.findAll(pool)
  res.json(rows)
})
router.get('/:id', async(req, res) => {
  const { rows } = await clinics.find(pool, req.params.id)
  res.json(rows)
})

router.post('/', async(req, res) => {
  await clinics.create(pool, req.body)
  res.status(201).end()
})

router.delete('/clinics/:id', async(req, res) => {
  const { rowCount } = await clinics.destroy(pool, req.params.id)
  if (rowCount > 0) {
    res.status(202).end()
  } else {
    res.status(404).end()
  }
})

module.exports = router