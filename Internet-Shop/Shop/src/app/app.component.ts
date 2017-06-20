import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Car } from './car';

@Component({
  selector: 'list-cars',
  template: `<div class="panel">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let car of cars">
                    <td>{{car.Name}}</td>
                    <td>{{car.Price}} $</td>
                </tr>
            </tbody>
        </table>
    </div>`,
  providers: [DataService]
})
export class AppComponent implements OnInit {

  cars: Car[] = [];

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.getCars().subscribe(res => {
      this.cars = res;
    });
  }
}
