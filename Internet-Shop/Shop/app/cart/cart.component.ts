import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { Car } from '../shared/car';

@Component({
    selector: 'list-cart',
    template: `
    <div class="panel">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>№</th> 
                    <th>Name</th> 
                    <th>VehiclePower</th>
                    <th>MaximumSpeed</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let car of cart; let i = index">
                    <td>{{i+1}}</td>
                    <td>{{car.Name}}</td>
                    <td>{{car.VehiclePower}} PS</td>
                    <td>{{car.MaximumSpeed}} km/h</td>
                    <td>{{car.Price}} $</td>
                    <td><a (click)="remove(car.Id)" class="btn btn-info" role="button">Remove</a></td>
                </tr>
            </tbody>
        </table>
    </div>`,
    providers: [CartService]
})
export class CartComponent implements OnInit {

    cart: Array<Car> = [];

    constructor(private cartService: CartService) { }
    ngOnInit() {
        this.cartService.getCart().subscribe(res => {
            this.cart = res;
            console.log(this.cart.length);
        });
    }

    remove(carId: number) {
        if (this.cartService.deleteFromCart(carId)) {
            let index = this.cart.findIndex(car => car.Id === carId);
            this.cart.splice(index, 1);
        }
    }

}