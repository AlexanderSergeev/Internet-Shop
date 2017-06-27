import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

@Injectable()
export class WishListService {

    constructor(private http: Http) { }

    getWishList() {
        return this.http
            .get('/api/wishlist')
            .map(res => res.json());
    }

    addToWishList(idCar: number) {
        /*
        const body = JSON.stringify({
            CarId: idCar
        });

        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        console.log(body);

        try {
            return this.http.post('/api/wishlist', body, { headers: headers })
                .map((resp: Response) => {
                    console.log('success');
                    return resp.json();
                })
                .catch((error: any) => { return Observable.throw(error); });     
        } catch (e) {
            console.error(e);
        } 
        
        */
        
        var xhr = new XMLHttpRequest();

        var json = JSON.stringify({
            CarId: idCar
        });

        xhr.open('POST', '/api/wishlist', true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(json);
    }

    deleteFromWishList(idCar: number): boolean {
        var xhr = new XMLHttpRequest();

        xhr.open('DELETE', '/api/wishlist/' + idCar, true);
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