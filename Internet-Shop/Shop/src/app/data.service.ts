import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getCars() {
    return this.http
      .get('/api/cars')
      .map(res => res.json());
  }

}