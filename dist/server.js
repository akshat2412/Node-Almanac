"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const Constants_1 = __importDefault(require("./Constants"));
const chalk_1 = __importDefault(require("chalk"));
app_1.default.get('/', function (req, res) {
    res.render('Landing');
});
app_1.default.listen(Constants_1.default.PORT, function () {
    console.log(`listening on Port ${chalk_1.default.blue('' + Constants_1.default.PORT)}`);
});
