import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService{
    isLogged: boolean = false;
    constructor(private http: Http){}
    login(){
        setTimeout(()=>{
            this.isLogged = true;
        }, 1000);
    }
}