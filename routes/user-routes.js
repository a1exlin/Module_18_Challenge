const router = require('express').Router();
const { model } = require('mongoose');

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    addFriend,

} = require('../..controllers/user-con');

router
.route('/')
.get(getAllUser)
.post(createUser)

router
.route('/:id')
.get(getUserById)
.put(updateUser);

router
.route('/:useId/friends/:friendId')
.post(addFriend)

module.export = router;

// added code to user-routes
