import { Request, response, Response } from "express"
import { findAll } from "./character/character.repository"

const express = require('express')

export default class Server {
    readonly port: number

    constructor (port: number) {
        this.port = port
    }

    start () {
        const app = express()
        app.get('/', function (req: Request, res: Response) {
            res.send('Salut les gens')
        })

        app.get('/characters', function (req: Request, res: Response) {
            findAll((characters: any) => {
                res.json(characters)
            })
        })

        app.listen(this.port, function() {
            console.log('Serveur démarré')
        })
    }

}