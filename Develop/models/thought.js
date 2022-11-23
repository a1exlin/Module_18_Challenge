// Still need timestamp code for the commented lines
const { Schema, model, Types } = require('mongoose');
const ObjectId = Schema.ObjectId;
const moment = require('moment');

const reactionSchema = new Schema({

    reactionbody: {
        type: String,
        required: true,
        maxlength: 280,

    },

    reactionId: {
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
        // still need timestamp cod
        // this getter formats the date to desired format using a parameter "time" to allow the date to be recieved as desired format
        get:(time) => {
            return new Date.now(time);
        }
      


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

        createdAt: {
            type: Date,
            default: Date.now,
            // needs timestamp
            get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
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

// reaction count 
thoughtSchema.virtual('reactionCount').get(function(){

    return this.reactions.length;

});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;

