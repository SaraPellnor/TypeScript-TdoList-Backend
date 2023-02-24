"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: { type: String, require: true },
    password: { type: String, require: true }
}, { versionKey: false });
exports.UserModel = mongoose_1.models.user || (0, mongoose_1.model)("user", userSchema);
