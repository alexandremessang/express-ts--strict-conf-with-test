import {readFile} from "fs";

export const findAll = (callback: any) => {
    readFile('./src/character/character.json', 'utf8', (error, data) => {
        const characters = JSON.parse(data)
        callback(characters);
    });
}