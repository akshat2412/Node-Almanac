import express from "express"

export default class Router{
    public RouterObject: express.Router;
    constructor() {
        this.RouterObject = express.Router();
    }
}



