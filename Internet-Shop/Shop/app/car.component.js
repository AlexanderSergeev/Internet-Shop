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
var data_service_1 = require("./data.service");
var router_1 = require("@angular/router");
require("rxjs/add/operator/catch");
var CarComponent = (function () {
    function CarComponent(dataService, route, router) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
    }
    CarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var name = params["name"].toString();
            _this.dataService.getCar(name).subscribe(function (res) {
                console.log('res' + res);
                _this.car = res;
            }, function (err) {
                console.log('res' + err);
                return err;
            });
        });
    };
    CarComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return CarComponent;
}());
CarComponent = __decorate([
    core_1.Component({
        template: "<div>\n        <p>{{car?.Name}} details:</p> \n        <p>Price: {{car?.Price}}$</p>\n        <p>VehiclePower: PS</p> \n        <p>MaximumSpeed: km/h</p>  \n    </div>",
        providers: [data_service_1.DataService]
    }),
    __metadata("design:paramtypes", [data_service_1.DataService, router_1.ActivatedRoute, router_1.Router])
], CarComponent);
exports.CarComponent = CarComponent;
//# sourceMappingURL=car.component.js.map