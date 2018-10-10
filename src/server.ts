import app from './app'
import Constants from './Constants'
import chalk from "chalk"
import express from "express"
import {NotificationsRouter} from "./Routes/NotificationsRouter"

const notificationsRouter = express.Router();

app.get('/', function(req, res){
    res.render('Landing');
});

app.use("/notifications", NotificationsRouter)

app.listen(Constants.PORT, function(){
    console.log(`listening on Port ${chalk.blue('' + Constants.PORT)}`);
});
