"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var car_component_1 = require("./cars/car.component");
var cars_component_1 = require("./cars/cars.component");
var cart_component_1 = require("./cart/cart.component");
var wishlist_component_1 = require("./wishlist/wishlist.component");
var purchase_component_1 = require("./purchase/purchase.component");
var routes = [
    {
        path: '', redirectTo: 'cars', pathMatch: 'full'
    },
    {
        path: 'cart', component: cart_component_1.CartComponent
    },
    {
        path: 'wishlist', component: wishlist_component_1.WishListComponent
    },
    {
        path: 'purchase', component: purchase_component_1.PurchaseComponent
    },
    {
        path: 'cars', component: cars_component_1.CarsComponent,
        children: [
            { path: ':id', component: car_component_1.CarComponent }
        ]
    }
];
exports.appRouterModule = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map