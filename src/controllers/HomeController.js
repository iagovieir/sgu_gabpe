const { find } = require('../models/typeContract')

module.exports = {
    home: (req, res)=>{
        res.render('home',{
            title: 'Home - GABPE NEWS',
            style: 'home.css',
            style1: 'default.css',
            script: 'header.js'
        })
    },

    temp: async (req, res)=>{

        const mongoose = require('mongoose')
        require('../models/typeContract')
        require('../models/jobNomenclature')
        const users = mongoose.model('typeContract')
        const nomeType = mongoose.model('jobNomenclature')
        
        const listusers = await users.find({}).lean()
        const listtype = await nomeType.find({}).lean().populate('typeContract')


        res.render('cadastrar', {
            listusers: listusers, 
            listtype:listtype,title: 'Home - GABPE NEWS',
            style: 'header.css',
            style1: 'default.css',
            script: 'header.js'
        })
    },

    registerTypeContratct: async (req, res)=>{
        
        const mongoose = require('mongoose')
        require('../models/typeContract')
        const users = mongoose.model('typeContract')

        new users({
            name:  req.body.nomeclature
        }).save().then((sucess)=>{
            console.log('cadatstrado com sucesso')
            return res.redirect('/temp2')
        }).catch((err)=>{
            res.render('cadastrar', {error: err.message})
            console.log(err)
        })
    },

    temp2: (req, res)=>{
        res.render('cadastrar2',{
            title: 'Home - GABPE NEWS',
            style: 'header.css',
            style1: 'default.css',
            script: 'header.js'
        })
    },

     registerJobNomenclature: async (req, res) =>{
       
        const mongoose = require('mongoose')
        require('../models/jobNomenclature')
        const users = mongoose.model('jobNomenclature')

        new users({
            name:  req.body.nomeclature,
            typeContract: req.body.codigoRef
            
        }).save().then((sucess)=>{
            console.log('cadatstrado com sucesso')
            return res.redirect('/temp')
        }).catch((err)=>{
            res.render('cadastrar2', {error: err.message})
            console.log(err)
        })
    }
}