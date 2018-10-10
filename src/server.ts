import app from './app'
import Constants from './Constants'
import chalk from "chalk"
import express from "express"


app.listen(Constants.PORT, function(){
    console.log(`listening on Port ${chalk.blue('' + Constants.PORT)}`);
});
