const router = require('express').Router()
const {User} = require('../db/models')
const {UserInfo} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  const {id} = req.params
  try {
    const user = await User.findById(id, {
      include: [UserInfo]
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  const {id} = req.user.dataValues
  req.body.userId = id
  // need to get schoolId to match school from rec
  try {
    const user = await UserInfo.create(req.body)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  const {id} = req.user.dataValues
  req.body.userId = id
  try {
    const user = await UserInfo.update(req.body, {where: {userId: id}})
    res.json(user)
  } catch (err) {
    next(err)
  }
})
