const { User, Thought } = require('../models');

const userCon = {
    // /api/users
    // get all users

    getAllUser(req, res) {
        User.find({})
        .select('-__v')
        .sort({_id: -1})
        .then(thoughtdb => res.json(thoughtdb))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        })
    },

  // gets the User by id
  getUserById({params}, res) {
    User.findOne({ _id: params.id})

      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .populate({
        path: 'friends',
        select: '-__v'
      })
      .then(thoughtdb => {
        if (!thoughtdb) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(thoughtdb);
      })
      .catch(err => {

        console.log(err);

        res.sendStatus(400);

      });
  },

   // create User
   createUser(req, res) {
    User.create(req.body)

      .then(thoughtdb => res.json(thoughtdb))

      .catch(err => res.json(err));
  },

  // update User by id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true, 
    runValidators: true })

      .then(thoughtdb => {

        if (!thoughtdb) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }

        res.json(thoughtdb);
      })
      
      .catch(err => res.json(err));
  },

   addFriend({ params }, res) {

    User.findOneAndUpdate(
      { _id: params.userId },
      { $push: { friends: params.friendId } },
      { new: true }
    )
      .then((thoughtdb) => {
        if (!thoughtdb) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(thoughtdb);
      })
      .catch((err) => res.status(400).json(err));
  },

}

module.exports = userCon;