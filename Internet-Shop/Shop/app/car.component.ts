import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './data.service';
import { Car } from './car';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/catch';

@Component({
    template: `<div>
        <p>{{car?.Name}} details:</p> 
        <p>Price: {{car?.Price}}$</p>
        <p>VehiclePower: PS</p> 
        <p>MaximumSpeed: km/h</p>  
    </div>`,
    providers: [DataService]
})
export class CarComponent implements OnInit, OnDestroy {

    car: Car;
    sub: any;

    constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let name = params["name"].toString();
            this.dataService.getCar(name).subscribe(res => {
                console.log('res' + res);
                this.car = res;
            }, function (err) {
                console.log('res' + err);
                return err;
            });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}