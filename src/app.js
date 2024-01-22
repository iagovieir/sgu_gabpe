const express = require('express');
const app = express();
const path = require('path')
const {engine} = require('express-handlebars');
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/sgu-gabpe').then(()=>{
    console.log(`conectado ao banco de dados`)
}).catch((error)=>{
    console.log(`erro ao conectar ao banco de dados ${error}`)
})

app.engine('handlebars', engine({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, './views'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));


const HomeController = require('./controllers/HomeController');


app.get('/', HomeController.home);
app.get('/temp', HomeController.temp);
app.get('/temp2', HomeController.temp2)
app.post('/typecontract', HomeController.registerTypeContratct);
app.post('/jobnomenclature', HomeController.registerJobNomenclature);



app.listen(process.env.PORT || 8080, ()=>{
    console.log('Servidor conectado')
})