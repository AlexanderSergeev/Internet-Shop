import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Car } from './car';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'car-info',

    template: `<div>
       We are in car component!
       {{name}}
    </div>`,
    providers: [DataService]
})
export class CarComponent implements OnInit {

    car: Car;
    sub: any;
    name: string;

    constructor(private dataService: DataService, private route: ActivatedRoute) { }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.name = params["name"].toString();

        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}