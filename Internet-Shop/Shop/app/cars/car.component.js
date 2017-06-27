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
var cars_service_1 = require("../shared/cars.service");
var router_1 = require("@angular/router");
var cart_service_1 = require("../shared/cart.service");
var wishlist_service_1 = require("../shared/wishlist.service");
var CarComponent = (function () {
    function CarComponent(carsService, cartService, wishListService, route, router) {
        this.carsService = carsService;
        this.cartService = cartService;
        this.wishListService = wishListService;
        this.route = route;
        this.router = router;
    }
    CarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = Number.parseInt(params['id']);
            _this.carsService.getCar(id).subscribe(function (res) {
                _this.car = res;
            });
        });
    };
    CarComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CarComponent.prototype.addToCart = function (idCar) {
        this.cartService.addToCart(idCar);
    };
    CarComponent.prototype.addToWishList = function (idCar) {
        this.wishListService.addToWishList(idCar);
    };
    return CarComponent;
}());
CarComponent = __decorate([
    core_1.Component({
        template: "\n     <div class=\"container\">\n        <b>{{car?.Name}} info:</b> \n        <br>\n        <p>Price: {{car?.Price}}$</p>\n        <p>VehiclePower: {{car?.VehiclePower}} PS</p> \n        <p>MaximumSpeed: {{car?.MaximumSpeed}} km/h</p> \n        <a (click)=\"addToCart(car.Id)\" class=\"btn btn-info\" role=\"button\">Add to Cart</a>\n        <a (click)=\"addToWishList(car.Id)\" class=\"btn btn-success\" role=\"button\">Add to Wish List</a>\n    </div><br>",
        providers: [cars_service_1.CarsService, cart_service_1.CartService, wishlist_service_1.WishListService]
    }),
    __metadata("design:paramtypes", [cars_service_1.CarsService, cart_service_1.CartService, wishlist_service_1.WishListService, router_1.ActivatedRoute, router_1.Router])
], CarComponent);
exports.CarComponent = CarComponent;
//# sourceMappingURL=car.component.js.map