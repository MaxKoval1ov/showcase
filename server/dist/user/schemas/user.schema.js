"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
});
exports.UserSchema.index({ name: 1 }, { unique: true });
//# sourceMappingURL=user.schema.js.map