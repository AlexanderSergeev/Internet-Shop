﻿import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Car } from './car';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getCars(): Observable<Car[]> {
    return this.http.get('/api/cars')
      .map((resp: Response) => {

        let carsList = resp.json().data;

        let cars: Car[] = [];
        for (let index in carsList) {
          let car = carsList[index];
          cars.push({ id: car.id, name: car.name, price: car.price, vehiclePower: car.vehiclePower, maximumSpeed: car.maximumSpeed });
        }
        return cars;
      });
  }
}