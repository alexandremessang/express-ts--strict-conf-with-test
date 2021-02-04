"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const moment = require('moment');
const character_repository_1 = require("./character.repository");
fs_1.readFile('./package.json', 'utf8', (error, filecontent) => {
    console.log(filecontent);
    const packageJson = JSON.parse(filecontent);
    console.log(packageJson.name);
});
character_repository_1.findAll((characters) => {
    const characs = characters.map(character => {
        const date = moment();
        return {
            firstName: character.firstName,
            lastName: character.lastName,
            age: character.age,
            birthyear: date.subtract(character.age, 'year').year()
        };
    });
    console.log(characs);
});
