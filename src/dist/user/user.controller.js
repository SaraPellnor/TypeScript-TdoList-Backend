"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const user_model_1 = require("./user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
function registerUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const hash = yield bcrypt_1.default.hash(req.body.password, 10);
            const user = {
                username: req.body.username,
                password: hash
            };
            const data = yield user_model_1.UserModel.create(user);
            res.status(201).json(data);
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.registerUser = registerUser;
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield user_model_1.UserModel.findOne(req.body);
            const match = bcrypt_1.default.compareSync(req.body.password, data.password);
            if (match) {
                if (req.body.password === data.password) {
                    if (req.session) {
                        req.session.user = data;
                    }
                    res.status(200).json(data);
                }
            }
            else {
                res.status(404).json("wrong");
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.loginUser = loginUser;
