"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
function generateToken(length = 64) {
    return new Promise((resolve, reject) => {
        crypto_1.randomBytes(length, (err, buffer) => {
            if (err) {
                reject(err);
            }
            resolve(buffer.toString('hex'));
        });
    });
}
exports.generateToken = generateToken;
