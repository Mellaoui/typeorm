import "reflect-metadata";
import {createConnection} from "typeorm";
import  express from "express";
import  bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import dotenv from "dotenv";
import {User} from "./entity/User";

var path = require('path');
export const app = express();

createConnection().then(async connection => {

    const port = process.env.SERVER_PORT;
    // create express app
    app.use(bodyParser.json());
    app.set('view engine', 'ejs');
    app.set('views',path.join( __dirname,'view'));
   
    //serve static files


     

    
    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            let result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.render(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(port);


    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
