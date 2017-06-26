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
var data_service_1 = require("./shared/data.service");
var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.cars = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getCars().subscribe(function (res) {
            _this.cars = res;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'list-cars',
        template: "<router-outlet></router-outlet>\n    <div class=\"panel\">\n        <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th>Name</th> \n                    <th>Price</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let car of cars\">\n                    <td><a [routerLink]=\"['cars/',car.Name] \">{{car.Name}}</a></td>\n                    <td>{{car.Price}} $</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>",
        providers: [data_service_1.DataService]
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map