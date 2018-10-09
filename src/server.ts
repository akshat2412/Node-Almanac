import app from './app'
import Constants from './Constants'
import chalk from "chalk"
import morgan from "morgan"
import path from "path"
import express from "express"

app.use(morgan('tiny'));
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')))
app.use('/css', express.static(path.join(__dirname, '/Public/css')))

app.set('views', path.join(__dirname, '/Views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('Landing');
});


app.listen(Constants.PORT, function(){
    console.log(`listening on Port ${chalk.blue('' + Constants.PORT)}`);
});
