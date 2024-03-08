module.exports= {
    
registerTypeContratct: (req, res)=>{
        
    const mongoose = require('mongoose')
    require('../../models/typeContract')
    const typeContract = mongoose.model('typeContract')

    new typeContract({
        name:  req.body.typecontract
    }).save().then(()=>{
        req.flash('success_typecontract','Cadastrado com sucesso')
        return res.redirect('/cadresources')
    }).catch((err)=>{
        
        req.flash('error_typecontract',`Erro ao cadastrar, ${err}`)
        return res.redirect('/cadresources')
    })
},

registerJobNomenclature: (req, res) =>{
       
    const mongoose = require('mongoose')
    require('../../models/jobNomenclature')
    const jobNomenclature = mongoose.model('jobNomenclature')

    new jobNomenclature({
        name:  req.body.jobnomenclature,
        typeContract: req.body.reftypecontract
 
    }).save().then(()=>{
        req.flash('success_jobnomenclature','Cadastrado com sucesso')
        return res.redirect('/cadresources')
    }).catch((err)=>{
        req.flash('error_jobnomenclature',`Erro ao cadastrar, ${err}`)
        return res.redirect('/cadresources')
    })
},

registerSector: (req, res)=>{
        
    const mongoose = require('mongoose')
    require('../../models/sector')
    const sector = mongoose.model('sector')

    new sector({
        name:  req.body.sector
    }).save().then(()=>{
        req.flash('success_sector','Cadastrado com sucesso')
        return res.redirect('/cadresources')
    }).catch((err)=>{
        req.flash('error_sector',`Erro ao cadastrar, ${err}`)
        return res.redirect('/cadresources')
    })
},

registerSecretary: (req, res)=>{
        
    const mongoose = require('mongoose')
    require('../../models/secretary')
    const secretary = mongoose.model('secretary')

    new secretary({
        name:  req.body.secretary
    }).save().then(()=>{
        req.flash('success_secretary','Cadastrado com sucesso')
        return res.redirect('/cadresources')
    }).catch((err)=>{
        req.flash('error_secretary',`Erro ao cadastrar, ${err}`)
        return res.redirect('/cadresources')
    })
},

registerSex: (req, res)=>{
        
    const mongoose = require('mongoose')
    require('../../models/sex')
    const sex = mongoose.model('sex')

    new sex({
        name:  req.body.sex
    }).save().then(()=>{
        req.flash('success_sex','Cadastrado com sucesso')
        return res.redirect('/cadresources')
    }).catch((err)=>{
        req.flash('error_sex',`Erro ao cadastrar, ${err}`)
        return res.redirect('/cadresources')
    })
}
}