import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Car } from './models/car';

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
                    <td><a (click)="cancel()" class="btn btn-info" role="button">Cancel</a></td>
                </tr>
            </tbody>
        </table>
    </div>`,
    providers: [DataService]
})
export class CartComponent implements OnInit {

    cart: Car[] = [];

    constructor(private dataService: DataService) { }
    ngOnInit() {
        this.dataService.getCart().subscribe(res => {
            this.cart = res;
        });
    }

    cancel() {

    }

}