import express, {Request, Response} from "express";
import * as bodyParser from "body-parser";
import path from "path";
import morgan from "morgan";
import {NotificationsRouter} from "./Routes/NotificationsRouter"


class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.Config();      
        this.SetRoutes(); 
    }

    private Config(): void{
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

    private SetRoutes(): void{
        this.app.get('/', (req: Request, res: Response) => {
            res.render('Landing');
        });
        this.app.use('/notifications', NotificationsRouter);
    }
}

export default new App().app