import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

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
            .get('/api/cars/' + name)
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

    addToCart(idCar: number) {
        var xhr = new XMLHttpRequest();

        var json = JSON.stringify({
            IdCar: idCar
        });

        xhr.open('POST', '/api/cars/cart', true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(json);
    }

    addToWishList(idCar: number) {
        var xhr = new XMLHttpRequest();

        var json = JSON.stringify({
            IdCar: idCar
        });

        xhr.open('POST', '/api/cars/wishlist', true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(json);
    }

    deleteFromCart(index: number) {
        var xhr = new XMLHttpRequest();

        xhr.open('DELETE', '/api/cars/cart/' + index , true);
        xhr.send();
    }
}