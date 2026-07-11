const {UserSchema} = require('../schemas/UserSchema');

const {model} = require('mongoose');

const UserModel = model('user', UserSchema);

module.exports = {UserModel};