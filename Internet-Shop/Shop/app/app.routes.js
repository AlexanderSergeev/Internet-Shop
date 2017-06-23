"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var car_component_1 = require("./car.component");
var routes = [
    {
        path: 'cars/:name', component: car_component_1.CarComponent
    }
];
exports.appRouterModule = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map