import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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
                return res.json();
            });
    }

    getCart() {
        return this.http
            .get('/api/cars/cart')
            .map(res => res.json());
    }

    getWishList() {
        return this.http
            .get('/api/cars/wishlist')
            .map(res => res.json());
    }

}