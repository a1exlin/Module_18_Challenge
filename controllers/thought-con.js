const { user, thought } = require('../models');

const thoughtCon = {
    // the thought api route


    getAllThought(req, res) {

        thought.find({})
            .populate({

                path: 'reactions',
                select: '-_v'

            })

            .select('-_v')
            .sort({ _id: -1 })
            .then(thoughtdb => res.json(thoughtdb))

            .catch(err => {

                console.log(err);

                res.sendStatus(400);

            });


    },


};