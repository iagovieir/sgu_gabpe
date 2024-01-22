const mongoose = require('mongoose');
const schema = mongoose.Schema;

const jobNomenclature = new schema({
    name: {
        type: String,
        require: true,
    },
    typeContract:{
        type: String,
        ref: 'typeContract',
        unique: false
    }
})

module.exports = mongoose.model('jobNomenclature', jobNomenclature);