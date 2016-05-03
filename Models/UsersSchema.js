var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;


var usersSchema = new Schema({

    user_id: Number,
    firstName: String,
    lastName: String,
    email: String,
    gender: String,
    password: String

});


usersSchema.plugin(autoIncrement.plugin, {

    model: 'User',
    field: 'user_id',
    startAt: 1,
    incrementBy: 1
});

var myModel = mongoose.model('User', usersSchema);
module.exports = myModel;