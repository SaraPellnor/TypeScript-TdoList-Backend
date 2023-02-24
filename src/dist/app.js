"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const user_router_1 = require("./user/user.router");
const todo_router_1 = require("./todo/todo.router");
const list_router_1 = require("./list/list.router");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use((0, cookie_session_1.default)({
    name: 'session',
    secret: "L1$a",
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
exports.app.use("/api/user", user_router_1.userRouter);
exports.app.use("/api/todo", todo_router_1.todoRouter);
exports.app.use("/api/list", list_router_1.listRouter);
