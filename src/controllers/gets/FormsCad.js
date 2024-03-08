module.exports = {

cadResources: async (req, res)=>{

    const mongoose = require('mongoose')

    require('../../models/typeContract')
    require('../../models/jobNomenclature')
    require('../../models/sector')
    require('../../models/secretary')
    require('../../models/sex')

    const typecontract = mongoose.model('typeContract')
    const jobnomenclature = mongoose.model('jobNomenclature')
    const sector = mongoose.model('sector')
    const secretary = mongoose.model('secretary')
    const sex = mongoose.model('sex')

    const typeContract = await typecontract.find({}).lean()
    const jobNomenclature = await jobnomenclature.find({}).lean().populate('typeContract')
    const Sector = await sector.find({}).lean()
    const Secretary = await secretary.find({}).lean()
    const Sex = await sex.find({}).lean()

    res.render('cadResources', {
        title: 'Home - GABPE NEWS',
        header: 'header.css',
        default: 'default.css',
        page: 'cadResources.css',
        headerjs: 'header.js',
        menu: 'menu.css',
        jobNomenclature: jobNomenclature,
        typeContract: typeContract,
        Sector: Sector,
        Sex: Sex,
        Secretary: Secretary
    })
},
cadUsers: async (req, res)=>{
    const mongoose = require('mongoose')

    require('../../models/typeContract')
    require('../../models/jobNomenclature')
    require('../../models/sector')
    require('../../models/secretary')
    require('../../models/sex')

    const typecontract = mongoose.model('typeContract')
    const jobnomenclature = mongoose.model('jobNomenclature')
    const sector = mongoose.model('sector')
    const secretary = mongoose.model('secretary')
    const sex = mongoose.model('sex')

    const typeContract = await typecontract.find({}).lean()
    const jobNomenclature = await jobnomenclature.find({})
    const Sector = await sector.find({}).lean()
    const Secretary = await secretary.find({}).lean()
    const Sex = await sex.find({}).lean()

    res.render('cadUsers', {
        
        title: 'Home - GABPE NEWS',
        header: 'header.css',
        default: 'default.css',
        page: 'cadResources.css',
        headerjs: 'header.js',
        menu: 'menu.css',
    })
}
}