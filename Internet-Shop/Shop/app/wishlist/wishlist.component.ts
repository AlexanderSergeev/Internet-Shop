import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Car } from '../shared/car';

@Component({
    selector: 'list-wish',
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
                <tr *ngFor="let car of wishList; let i = index">
                    <td>{{i+1}}</td>
                    <td>{{car.Name}}</td>
                    <td>{{car.VehiclePower}} PS</td>
                    <td>{{car.MaximumSpeed}} km/h</td>
                    <td>{{car.Price}} $</td>
                    <td><a (click)="addToCart(car.Id)" class="btn btn-success" role="button">Add to cart</a> <a (click)="cancel()" class="btn btn-info" role="button">Cancel</a></td>
                </tr>
            </tbody>
        </table>
    </div>`,
    providers: [DataService]
})
export class WishListComponent implements OnInit {

    wishList: Car[] = [];

    constructor(private dataService: DataService) { }
    ngOnInit() {
        this.dataService.getWishList().subscribe(res => {
            this.wishList = res;
        });
    }

    cancel() {

    }

    addToCart(idCar: number) {
        this.dataService.addToCart(idCar);
    }

}