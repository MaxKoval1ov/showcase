"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenSchema = void 0;
const mongoose = require("mongoose");
exports.TokenSchema = new mongoose.Schema({
    token: { type: String, required: true },
    uId: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
    expireAt: { type: Date, required: true },
});
exports.TokenSchema.index({ token: 1, uId: 1 }, { unique: true });
//# sourceMappingURL=user-token.schema.js.map