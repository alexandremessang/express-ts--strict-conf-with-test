import {readFile} from 'fs';
const moment = require('moment');
import { findAll } from "./character.repository";

readFile('./package.json', 'utf8', (error, filecontent) => {
    console.log(filecontent);
    const packageJson = JSON.parse(filecontent);
    console.log(packageJson.name);
})

findAll((characters: any[]) => {
    const characs = characters.map(character => {
        const date = moment();
        return {
            // firstName: character.firstName,
            // lastName: character.lastName,
            // age: character.age,

            /* prend toutes les entrées comme ci-dessus */
            ...characters,
            birthyear: date.subtract(character.age, 'year').year()
        };
    })
    console.log(characs);
});