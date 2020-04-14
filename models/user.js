const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  birthDate: {type: String},
  location: {type: String},
  bio: {type: String},
  picture: { type: String, default: "https://banner2.cleanpng.com/20180404/djw/kisspng-computer-icons-users-group-internet-forum-user-avatar-5ac45a991206f5.9866985115228176890738.jpg"},
  events:[],
  groups:[{type: Schema.Types.ObjectID, ref: 'Group'}]
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;
