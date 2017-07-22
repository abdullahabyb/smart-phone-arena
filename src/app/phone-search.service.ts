import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Phone }           from './phone';

@Injectable()
export class PhoneSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Phone[]> {
    return this.http
               .get(`api/phones/?name=${term}`)
               .map(response => response.json().data as Phone[]);
  }
}
