const mongoose = require('mongoose');
const schema = mongoose.Schema;

const users = new schema({
    Nome: {
        type: String,
        required: true
    },
    typeContract: {
        type: String,
        ref: 'typeContract',
    },
    sector: {
        type: String,
        ref: 'sector'
    },
    directLeader:{
        type: String,
        ref: 'directLeader'
    },
    secretary:{
        type: String,
        ref: 'secretary'
    },
    sex:{
        type: String,
        ref: 'sex'
    },
    phone:{
        type: String,
    },
    SSN:{
        type: String,
        unique: true,
        require: true
    },
    registration:{
        type: String,
        unique: true
    },
    user: {
        type: String,
        unique: true
    },
    CompaniesEmail: {
        type: String,
        unique: true
    },
    PersonalEmail: {
        type: String,
        unique: true
    },
    password:{
        type: String,
    },
})

module.exports = mongoose.model('users', users);