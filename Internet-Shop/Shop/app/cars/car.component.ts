import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarsService } from '../shared/cars.service';
import { Car } from '../shared/car';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../shared/cart.service';
import { WishListService } from '../shared/wishlist.service';

@Component({
    template: `
     <div class="container">
        <b>{{car?.Name}} info:</b> 
        <br>
        <p>Price: {{car?.Price}}$</p>
        <p>VehiclePower: {{car?.VehiclePower}} PS</p> 
        <p>MaximumSpeed: {{car?.MaximumSpeed}} km/h</p> 
        <a (click)="addToCart(car.Id)" class="btn btn-info" role="button">Add to Cart</a>
        <a (click)="addToWishList(car.Id)" class="btn btn-success" role="button">Add to Wish List</a>
    </div><br>`,
    providers: [CarsService, CartService, WishListService]
})
export class CarComponent implements OnInit, OnDestroy {

    car: Car;
    sub: any;


    constructor(private carsService: CarsService, private cartService: CartService, private wishListService: WishListService, private route: ActivatedRoute, private router: Router) { }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = Number.parseInt(params['id']);
            this.carsService.getCar(id).subscribe(res => {
                this.car = res;
            });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    addToCart(idCar: number) {
        this.cartService.addToCart(idCar);
    }

    addToWishList(idCar: number) {
        this.wishListService.addToWishList(idCar);
    }
}