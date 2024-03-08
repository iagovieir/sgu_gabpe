const mongoose = require('mongoose');
const schema = mongoose.Schema;

const typeContract = new schema({  
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('typeContract', typeContract);