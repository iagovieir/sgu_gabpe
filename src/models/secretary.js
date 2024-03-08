const mongoose = require('mongoose');
const schema = mongoose.Schema;

const secretary = new schema({  
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('secretary', secretary);