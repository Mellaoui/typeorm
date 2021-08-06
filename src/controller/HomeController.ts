import {getRepository} from "typeorm";
import express from "express"
import {NextFunction, Request, Response} from "express";
import { request } from "http";

var express = require('express');



export class HomeCotroller{
    

    async index(request: Request, response: Response, next: NextFunction) {
        return "landing";
    }


}

