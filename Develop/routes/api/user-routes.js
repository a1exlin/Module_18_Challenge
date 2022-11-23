const router = require('express').Router();


const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    addFriend,

} = require('../../controllers/user-con');

router
.route('/api/users')
.get(getAllUser)
.post(createUser);

router
.route('/api/users/usersId')
.get(getUserById)
.put(updateUser);

router
.route('/api/users/friends')
.post(addFriend)

module.export = router;

// added code to user-routes
