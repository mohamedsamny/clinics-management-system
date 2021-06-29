let express = require('express')
const {User} = require("../models");
let router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/',async(req, res) => {
  const users = await User.findAll()
  res.json(users)
})
router.get('/:id', async(req, res) => {
  const user = await User.findOne({ 'where': { id: req.params.id } })
  res.json(user)
})
router.post('/', async(req, res) => {
  await User.create(req.body)
  res.status(201).end()
})
router.delete('/:id', (req, res) => {
  User.destroy({ where: { id: req.params.id } }).then(count => {
    if (!count) {
      return res.status(404).send()
    }
    res.status(204).send()
  })
})
module.exports = router