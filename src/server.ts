import app from './app'
import Constants from './Constants'
import chalk from "chalk"
import morgan from "morgan"

app.use(morgan('tiny'));

app.get('/', function(req, res){
    res.send("Hello from Node Almanac");
});

app.listen(Constants.PORT, function(){
    console.log(`listening on Port ${chalk.blue('' + Constants.PORT)}`);
});
