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
var cart_service_1 = require("../shared/cart.service");
var CartComponent = (function () {
    function CartComponent(cartService) {
        this.cartService = cartService;
        this.cart = [];
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.getCart().subscribe(function (res) {
            _this.cart = res;
            console.log(_this.cart.length);
        });
    };
    CartComponent.prototype.remove = function (carId) {
        if (this.cartService.deleteFromCart(carId)) {
            var index = this.cart.findIndex(function (car) { return car.Id === carId; });
            this.cart.splice(index, 1);
        }
    };
    return CartComponent;
}());
CartComponent = __decorate([
    core_1.Component({
        selector: 'list-cart',
        template: "\n    <div class=\"panel\">\n        <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th>\u2116</th> \n                    <th>Name</th> \n                    <th>VehiclePower</th>\n                    <th>MaximumSpeed</th>\n                    <th>Price</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let car of cart; let i = index\">\n                    <td>{{i+1}}</td>\n                    <td>{{car.Name}}</td>\n                    <td>{{car.VehiclePower}} PS</td>\n                    <td>{{car.MaximumSpeed}} km/h</td>\n                    <td>{{car.Price}} $</td>\n                    <td><a (click)=\"remove(car.Id)\" class=\"btn btn-info\" role=\"button\">Remove</a></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>",
        providers: [cart_service_1.CartService]
    }),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartComponent);
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map