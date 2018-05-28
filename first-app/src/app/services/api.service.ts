import {Http, } from '@angular/http';
import {Injectable, } from '@angular/core'
import { MessageService } from './message.service';


@Injectable()
export class ApiService {
    value = 'im api service';
    constructor(private http: Http, private mes: MessageService){
        console.log('Api Service constructor')
    }

    getUserPlaceholder(){
        return this.http.get('https://jsonplaceholder.typicode.com/users').toPromise()
        .then(data => {
            // this.mes.success('get user success');
            this.mes.successAlert('success')
            return data.json();
        })
    }
}