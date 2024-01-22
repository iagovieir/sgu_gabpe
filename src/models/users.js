const mongoose = require('mongoose');
const schema = mongoose.Schema;

const users = new schema({
    Nome: {
        type: String,
        require: true
    },
    typeContract: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'typeContract'
    }

})

module.exports = mongoose.model('users', users);