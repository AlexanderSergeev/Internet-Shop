"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var WishListService = (function () {
    function WishListService(http) {
        this.http = http;
    }
    WishListService.prototype.getWishList = function () {
        return this.http
            .get('/api/wishlist')
            .map(function (res) { return res.json(); });
    };
    WishListService.prototype.addToWishList = function (idCar) {
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
        xhr.onreadystatechange = function () {
            if (xhr.status !== 200 && xhr.status !== 204) {
                alert(xhr.status + ': ' + xhr.statusText);
                return false;
            }
            return true;
        };
        alert('Adding successful!');
        return true;
    };
    WishListService.prototype.deleteFromWishList = function (idCar) {
        var xhr = new XMLHttpRequest();
        xhr.open('DELETE', '/api/wishlist/' + idCar, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.status !== 200 && xhr.status !== 204) {
                alert(xhr.status + ': ' + xhr.statusText);
                return false;
            }
            return true;
        };
        return true;
    };
    return WishListService;
}());
WishListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], WishListService);
exports.WishListService = WishListService;
//# sourceMappingURL=wishlist.service.js.map