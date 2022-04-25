import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = []

// all routes in here are starting with /users
router.get('/', (req, res) => {
    res.send(users)
})

router.post('/', (req, res) => {
    const user = req.body;

    users.push({...user, id: uuidv4() })

    res.send( `User with the name ${user.fristName} was added to the database` )
})

//req.params is used to get the id
router.get('/:id', (req, res) => {
    const { id } = req.params

    const foundUser = users.find((user) => user.id = id)

    res.send(foundUser)
})

router.delete('/:')

export default router;