const { user, thought } = require('../models');
const Thought = require('../../models/thought');

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

    getThoughtByID({ params }, res) {
        thought.findOne({ _id: params.id })
            .populate({
                path: 'reactions',
                select: '-__v',

            })

            .select('__v')
            .sort({ _id: -1 })
            .then(thoughdb => {

                if (!thoughdb) {
                    res.status(404).json({ message: "No thought ids founded!" })
                    return;
                }
                res.json(thoughdb);

            })
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });


    },

    createThought({ body }, res) {

        Thought.create(body)

            .then(({ _id }) => {

                return user.findOneandUpdate(
                    { _id: body.userId },
                    { $push: { thoughts: _id } },
                    { new: true }


                );
            })

            .then(thoughtdb => {
                if (!thoughtdb) {
                    res.status(404).json({ message: "No user id founded!" });
                    return;
                }
                res.json(thoughdb);
            })
            .catch(err => res.json(err));
    },


updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true, })
        .then(thoughtdb => {
            if (!thoughtdb) {
                res.status(404).json({ message: "No thoughts founded with that id!" });
                return;
            }
            res.json(thoughtdb);
        })

        .catch(err => res.json(err))
},

}

module.exports = thoughtCon;

// deleting a thought by ID

// deleteThought({ params }, res) 