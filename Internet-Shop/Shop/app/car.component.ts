import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './services/data.service';
import { Car } from './models/car';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    template: `
     <div class="container">
        <b>{{car?.Name}} info:</b> 
        <br>
        <p>Price: {{car?.Price}}$</p>
        <p>VehiclePower: {{car?.VehiclePower}} PS</p> 
        <p>MaximumSpeed: {{car?.MaximumSpeed}} km/h</p> 
        <a (click)="addToCart()" class="btn btn-info" role="button">Add to Cart</a>
        <a (click)="addToWishList()" class="btn btn-success" role="button">Add to Wish List</a>
    </div><br>`,
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
                this.car = res;
            });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    addToCart() {
        
    }

    addToWishList() {
        
    }
}