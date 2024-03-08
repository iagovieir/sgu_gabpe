const mongoose = require('mongoose');
const schema = mongoose.Schema;

const sector = new schema({  
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('sector', sector);