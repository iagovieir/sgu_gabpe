const { find } = require('../../models/typeContract')

module.exports = {
    home: (req, res)=>{
        res.render('home',{
            title: 'Home - GABPE NEWS',
            page: 'home.css',
            default: 'default.css',
            header: 'header.css',
            menu: 'menu.css',
            headerjs: 'header.js'
        })
    }
}