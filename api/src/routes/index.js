const { Router } = require('express')
const usersRouter = Router()
const { getUsers, createUser, getUserById, deleteUserById, updateUser} = require('../controllers/index.controller')

usersRouter.get('/', getUsers)
usersRouter.get('/:id', getUserById)
usersRouter.delete('/:id', deleteUserById)
usersRouter.post('/', createUser)
usersRouter.put('/:id', updateUser )

module.exports = usersRouter