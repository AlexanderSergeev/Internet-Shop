import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CartService {

    constructor(private http: Http) { }

    getCart() {
        return this.http
            .get('/api/cart')
            .map(res => res.json());
    }


    addToCart(idCar: number) {
        var xhr = new XMLHttpRequest();

        var json = JSON.stringify({
            CarId: idCar
        });

        xhr.open('POST', '/api/cart', true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(json);
    }

    deleteFromCart(idCar: number): boolean {
        var xhr = new XMLHttpRequest();

        xhr.open('DELETE', '/api/cart/' + idCar, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.status !== 200 && xhr.status !== 204) {
                alert(xhr.status + ': ' + xhr.statusText);
                return false;
            }
            return true;
        }
        return true;
    }
}