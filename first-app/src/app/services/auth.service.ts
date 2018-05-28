import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import {Injectable, Inject} from '@angular/core';

import { UserService } from './user.service';

@Injectable()
export class AuthService implements CanActivate {
    constructor(private userService: UserService){}
    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        // console.log('auth service');
        if(this.userService.isLogged){
            return true;
        }else{
            window.alert('you are not loggin');
            return false;
        }
    }
}