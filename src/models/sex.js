const mongoose = require('mongoose');
const schema = mongoose.Schema;

const sex = new schema({  
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('sex', sex);