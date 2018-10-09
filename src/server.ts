import app from './app'
import Constants from './Constants'
import chalk from "chalk"


app.get('/', function(req, res){
    res.render('Landing');
});


app.listen(Constants.PORT, function(){
    console.log(`listening on Port ${chalk.blue('' + Constants.PORT)}`);
});
