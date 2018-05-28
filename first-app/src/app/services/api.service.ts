import { Http } from '@angular/http';
import { Injectable } from '@angular/core'
import { MessageService } from './message.service';
import 'rxjs/RX';

@Injectable()
export class ApiService {
    url = 'https://itunes.apple.com/search';
    constructor(private http: Http, private mes: MessageService) {    }

    search(term) {
        let apiURL = `${this.url}?term=${term}&media=music&limit=20`;
        return this.http.get(apiURL)
            .map(res => {
                return res.json().results
            });
    }
}

