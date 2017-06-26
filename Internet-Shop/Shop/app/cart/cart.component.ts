import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
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
                    <td><a (click)="cancel(i)" class="btn btn-info" role="button">Cancel</a></td>
                </tr>
            </tbody>
        </table>
    </div>`,
    providers: [DataService]
})
export class CartComponent implements OnInit {

    cart: Array<Car> = [];

    constructor(private dataService: DataService) { }
    ngOnInit() {
        this.dataService.getCart().subscribe(res => {
            this.cart = res;
            console.log(this.cart.length);
        });
    }

    cancel(index: number) {
        this.dataService.deleteFromCart(index);
        this.dataService.getCart().subscribe(res => {
            this.cart = res;
        });
    }

}