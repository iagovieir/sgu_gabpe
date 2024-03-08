const mongoose = require('mongoose');
const schema = mongoose.Schema;

const jobNomenclature = new schema({
    name: {
        type: String,
        required: true
    },
    typeContract:{
        type: String,
        ref: 'typeContract',
        required: true
    }
})

module.exports = mongoose.model('jobNomenclature', jobNomenclature);