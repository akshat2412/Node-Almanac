import express from "express";
import * as bodyParser from "body-parser";
import path from "path";
import morgan from "morgan";


class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();       
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());

        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        
        // For logging request data automatically
        this.app.use(morgan('tiny'));

        // Add path for static css files
        this.app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')))
        this.app.use('/css', express.static(path.join(__dirname, '/Public/css')))
        
        // Add view path and view engine
        this.app.set('views', path.join(__dirname, '/Views'));
        this.app.set('view engine', 'ejs');
    }
}

export default new App().app