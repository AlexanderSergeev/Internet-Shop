import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

    constructor(private http: Http) { }

    getCars() {
        return this.http
            .get('/api/cars')
            .map(res => res.json());
    }

    getCar(name: string) {
        return this.http
            .get('/api/cars/{' + name + '}')
            .map(res => {
                console.log('res' + res);
                return res.json();
            });
    }

}