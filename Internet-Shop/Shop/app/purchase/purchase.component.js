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
var PurchaseComponent = (function () {
    function PurchaseComponent(cartService) {
        this.cartService = cartService;
        this.cart = [];
    }
    PurchaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.getCart().subscribe(function (res) {
            _this.cart = res;
            _this.sum = _this.getSum();
        });
    };
    PurchaseComponent.prototype.getSum = function () {
        var sum = 0;
        for (var _i = 0, _a = this.cart; _i < _a.length; _i++) {
            var c = _a[_i];
            sum = sum + c.Price;
        }
        return sum;
    };
    PurchaseComponent.prototype.order = function (name, address) {
        var purchaseComponent = this;
        purchaseComponent.cartService.addToPurchase(name, address, function () {
            purchaseComponent.cartService.clearCart();
        });
    };
    return PurchaseComponent;
}());
PurchaseComponent = __decorate([
    core_1.Component({
        template: "\n    <form #myForm=\"ngForm\" novalidate>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                  <h4>Here you can make an order.</h4>\n                  <br>\n                  <div class=\"form-group\">\n                     <label class=\"col-md-6 control-label\">Name: </label>\n                     <div class=\"col-md-10\">\n                        <input class=\"form-control\" name=\"Name\" [(ngModel)]=\"Name\" required />\n                     </div>\n                 </div>\n                 <div class=\"form-group\">\n                    <label class=\"col-md-6 control-label\">Address: </label>\n                    <div class=\"col-md-10\">\n                        <p><textarea name=\"Address\" class=\"form-control\" [(ngModel)]=\"Address\" required></textarea></p>\n                    </div>\n                 </div>\n                 <div class=\"form-group\">\n                    <label class=\"col-md-6 control-label\">Total price: </label>\n                    <div class=\"col-md-10\">\n                        <p>{{sum}} $</p>\n                    </div>\n                    </div>\n                <div class=\"form-group\">\n                    <div class=\"col-md-10\">\n                        <br>\n                        <button [disabled]=\"myForm.invalid\" [routerLink]=\"['/cars'] \" (click)=\"order(Name, Address)\" class=\"btn btn-primary btn-lg\">Order</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>",
        providers: [cart_service_1.CartService]
    }),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], PurchaseComponent);
exports.PurchaseComponent = PurchaseComponent;
//# sourceMappingURL=purchase.component.js.map