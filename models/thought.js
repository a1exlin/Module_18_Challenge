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
            type: Date.now,
            default: Date.now,
            // needs timestamp
            get:(time) => {
            
            return new Date(time);
            }
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

