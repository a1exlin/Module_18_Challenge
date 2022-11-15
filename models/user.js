const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema ({
    username: {
    type: String,
    unique: true,
    required: true,
    trim: true,

    },

    email: {
     type: String,
     required: true,
     unique: true,
     // regex is reading specific characters whether it has the following in the line below
     match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },

    thoughts:[
      {
        type: ObjectId, ref: 'thought'
      },  
    ],

    friends:[
        {
            type: ObjectId, ref: 'user'
        },
    ],

},
// settings, allows the virtuals and id to be used for the userSchema.
{
    toJSON: {
      virtuals: true,
    },
    id: false,
  }

);



userSchema.virtual('friendCount').get(function(){

    // returns the refered friends length of their message
    return this.friends.length;
})

