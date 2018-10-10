"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
class App {
    constructor() {
        this.app = express_1.default();
        this.config();
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // For logging request data automatically
        this.app.use(morgan_1.default('tiny'));
        // Add path for static css files
        this.app.use('/css', express_1.default.static(path_1.default.join(__dirname, '../node_modules/bootstrap/dist/css')));
        this.app.use('/css', express_1.default.static(path_1.default.join(__dirname, '/Public/css')));
        // Add view path and view engine
        this.app.set('views', path_1.default.join(__dirname, '/Views'));
        this.app.set('view engine', 'ejs');
    }
}
exports.default = new App().app;
