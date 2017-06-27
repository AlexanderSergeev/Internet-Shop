import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CarsService {

    constructor(private http: Http) { }

    getCars() {
        return this.http
            .get('/api/cars')
            .map(res => res.json());
    }

    getCar(id: number) {
        return this.http
            .get('/api/cars/' + id)
            .map(res => {
                return res.json();
            });
    }
}