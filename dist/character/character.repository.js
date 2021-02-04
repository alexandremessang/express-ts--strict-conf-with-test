"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = void 0;
const fs_1 = require("fs");
const findAll = (callback) => {
    fs_1.readFile('./src/character/character.json', 'utf8', (error, data) => {
        const characters = JSON.parse(data);
        callback(characters);
    });
};
exports.findAll = findAll;
