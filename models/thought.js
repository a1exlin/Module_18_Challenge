// Still need timestamp code for the commented lines
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const reactionSchema = new Schema({

    reactionbody: {
        type: String,
        required: true,
        maxlength: 280,

    },

    reactionsId: {
        type: ObjectId,
        default: () => mongoose.Types.ObjectId(),
    },
    username: {
        type: String,
        required: true,
    },

    createAt: {
        type: Date,
        default: Date.now,
        // still need timestamp code
        // get:


    },

    },

    {
        toJSON: {
            virtuals: true,
            getters: true,

        },

        id: false,
    },

    );

    const thoughtSchema = new Schema ({

        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlenght: 280,
        },

        createAt: {
            type: Date.now,
            default: Date.now,
            // needs timestamp
            // get:
        },

        username: {
            type: String,
            required: true,
        },

        reactions: [reactionSchema],

    },

    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,

    }

    );

const Thought = model('Though', thoughtSchema);

module.exports = Thought;

