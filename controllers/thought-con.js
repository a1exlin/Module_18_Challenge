const { user, thought } = require('../models');
const Thought = require('../models/thought');

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

    createThought({body}, res ) {

        Thought.create(body) 

        .then(({_id}) => {

            return user.findOneandUpdate(
                {_id: body.userId},
                {$push: {thoughts: _id} },
                {new: true}
        

            );
        })

        .then(thoughtdb => {
            if (!thoughdb) {
                res.status(404).json({message: "No thought id founded!"})
                return;
            }
            res.json(thoughdb);
        })
        .catch(err => res.json(err));
    },

    thoughtUpdate ({parms, body}, res) {
        if(!thoughtdb) {
            res.status(404).json({message: "No user id founded!"})
        }

    }

};
