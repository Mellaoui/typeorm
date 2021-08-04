import { expect } from 'chai';
import { UserController } from '../src/controller/UserController';
import faker from "faker";

describe('adduser', ()=>{
    it(async ()=> {
        let adduser = new UserController()
        expect(adduser.save).to.equal(String);
    }) 
})

