"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_repository_1 = require("./character/character.repository");
const express = require('express');
class Server {
    constructor(port) {
        this.port = port;
    }
    start() {
        const app = express();
        app.get('/', function (req, res) {
            res.send('Salut les gens');
        });
        app.get('/characters', function (req, res) {
            character_repository_1.findAll((characters) => {
                res.json(characters);
            });
        });
        app.listen(this.port, function () {
            console.log('Serveur démarré');
        });
    }
}
exports.default = Server;
