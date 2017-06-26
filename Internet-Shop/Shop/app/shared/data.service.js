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
var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getCars = function () {
        return this.http
            .get('/api/cars')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getCar = function (name) {
        return this.http
            .get('/api/cars/' + name)
            .map(function (res) {
            return res.json();
        });
    };
    DataService.prototype.getCart = function () {
        return this.http
            .get('/api/cars/cart')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getWishList = function () {
        return this.http
            .get('/api/cars/wishlist')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.addToCart = function (idCar) {
        var xhr = new XMLHttpRequest();
        var json = JSON.stringify({
            IdCar: idCar
        });
        xhr.open('POST', '/api/cars/cart', true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(json);
    };
    DataService.prototype.addToWishList = function (idCar) {
        var xhr = new XMLHttpRequest();
        var json = JSON.stringify({
            IdCar: idCar
        });
        xhr.open('POST', '/api/cars/wishlist', true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(json);
    };
    DataService.prototype.deleteFromCart = function (index) {
        var xhr = new XMLHttpRequest();
        xhr.open('DELETE', '/api/cars/cart/' + index, true);
        xhr.send();
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map