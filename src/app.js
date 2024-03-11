const express = require('express');
const app = express();
const flash = require('connect-flash');
const session = require('express-session');
const path = require('path');
const {engine} = require('express-handlebars');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://iagovieira:Iara.2000@sgugabbe.s0rizgs.mongodb.net/?retryWrites=true&w=majority&appName=sgugabbe').then(()=>{
    console.log(`conectado ao banco de dados`)
}).catch((error)=>{
    console.log(`erro ao conectar ao banco de dados ${error}`)
})

app.use(session({
    secret: 'GV45%3&fe',
    resave: true,
    saveUninitialized: true
}))

app.use(flash())
app.use((req, res, next)=>{
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')

    res.locals.success_jobnomenclature = req.flash('success_jobnomenclature')
    res.locals.error_jobnomenclature = req.flash('error_jobnomenclature')

    res.locals.success_typecontract = req.flash('success_typecontract')
    res.locals.error_typecontract = req.flash('error_typecontract')

    res.locals.success_secretary = req.flash('success_secretary')
    res.locals.error_secretary = req.flash('error_secretary')

    res.locals.success_sector = req.flash('success_sector')
    res.locals.error_sector = req.flash('error_sector')

    res.locals.success_sex = req.flash('success_sex')
    res.locals.error_sex = req.flash('error_sex')
    next()
})

app.engine('handlebars', engine({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, './views'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));


const HomeController = require('./controllers/gets/HomeController');
const CadsController = require('./controllers/posts/Cads');
const FormsCadsController = require('./controllers/gets/FormsCad');


app.get('/', HomeController.home);

app.get('/cadResources', FormsCadsController.cadResources);
app.get('/cadUsers', FormsCadsController.cadUsers);

app.post('/typecontract', CadsController.registerTypeContratct);
app.post('/jobnomenclature', CadsController.registerJobNomenclature);
app.post('/sector', CadsController.registerSector);
app.post('/secretary', CadsController.registerSecretary);
app.post('/sex', CadsController.registerSex)

app.listen(process.env.PORT || 8080, ()=>{
    console.log('Servidor conectado')
})