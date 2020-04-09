const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    creator:{type: Schema.Types.ObjectID, ref: 'User'},
    name: {type: String, required: true},
    users: [{type: Schema.Types.ObjectID, ref: 'User'}],
    pending: [{type: Schema.Types.ObjectID, ref: 'User'}],
    eventID: {type: String},
    bio: {type: String}
});

groupSchema.set('timestamps', true);

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;