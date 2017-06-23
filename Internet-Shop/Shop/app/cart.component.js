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
var data_service_1 = require("./services/data.service");
var CartComponent = (function () {
    function CartComponent(dataService) {
        this.dataService = dataService;
        this.cart = [];
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getCart().subscribe(function (res) {
            _this.cart = res;
        });
    };
    CartComponent.prototype.cancel = function () {
    };
    return CartComponent;
}());
CartComponent = __decorate([
    core_1.Component({
        selector: 'list-cart',
        template: "\n    <div class=\"panel\">\n        <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th>\u2116</th> \n                    <th>Name</th> \n                    <th>VehiclePower</th>\n                    <th>MaximumSpeed</th>\n                    <th>Price</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let car of cart; let i = index\">\n                    <td>{{i+1}}</td>\n                    <td>{{car.Name}}</td>\n                    <td>{{car.VehiclePower}} PS</td>\n                    <td>{{car.MaximumSpeed}} km/h</td>\n                    <td>{{car.Price}} $</td>\n                    <td><a (click)=\"cancel()\" class=\"btn btn-info\" role=\"button\">Cancel</a></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>",
        providers: [data_service_1.DataService]
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], CartComponent);
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map