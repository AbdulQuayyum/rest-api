import express from "express";

const router = express.Router();

const users = [
    {
        fristName: "Quayyum",
        lastName: "Alao",
        age: 17
    },
    {
        fristName: "John",
        lastName: "Doe",
        age: 25
    }
]

// all routes in here are starting with /users
router.get('/', (req, res) => {
    res.send(users)
})

router.post('/', (req, res) => {
    const user = req.body;

    users.push(user)

    res.send( `User with the name ${user.fristName} was added to the database` )
})

export default router;