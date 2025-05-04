import express from 'express'
import { user ,search,helloExpress, addUser, editUser,deleteUser} from './controller.js'

export const router = express.Router()


router.get('/', helloExpress)

router.get('/search',search)

router.get('/:name',user)

router.post('/add',addUser)

router.put('/edit/:id',editUser)

router.delete('/delete/:id',deleteUser)