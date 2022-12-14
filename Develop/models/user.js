const {Schema, model} =require('mongoose');
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
        type: ObjectId, ref: 'Thought'
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


// user count
userSchema.virtual('friendCount').get(function(){

    // returns the refered friends length of their message
    return this.friends.length;
});

const User = model('user', userSchema );

module.exports = User;

