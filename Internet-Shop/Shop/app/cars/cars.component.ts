import { Component, OnInit } from '@angular/core';
import { CarsService } from '../shared/cars.service';
import { Car } from '../shared/car';

@Component({
    selector: 'list-cars',
    template: ` 
    <div class="panel">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th> 
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let car of cars">
                    <td><img src = "{{car.Picture}}" width="100" height="80"></td>
                    <td><a [routerLink]="['/cars', car.Id] ">{{car.Name}}</a></td>
                    <td>{{car.Price}} $</td>
                </tr>
            </tbody>
        </table>
    </div><router-outlet></router-outlet>`,
    providers: [CarsService]
})
export class CarsComponent implements OnInit {

    cars: Car[] = [];

    constructor(private carsService: CarsService) { }
    ngOnInit() {
        this.carsService.getCars().subscribe(res => {
            this.cars = res;
        });
    }

}
