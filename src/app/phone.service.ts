import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Phone } from './phone';

@Injectable()
export class PhoneService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private phonesUrl = 'api/phones';  // URL to web api

  constructor(private http: Http) { }

  getPhones(): Promise<Phone[]> {
    return this.http.get(this.phonesUrl)
               .toPromise()
               .then(response => response.json().data as Phone[])
               .catch(this.handleError);
  }


  getPhone(id: number): Promise<Phone> {
    const url = `${this.phonesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Phone)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.phonesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Phone> {
    return this.http
      .post(this.phonesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Phone)
      .catch(this.handleError);
  }

  update(phone: Phone): Promise<Phone> {
    const url = `${this.phonesUrl}/${phone.id}`;
    return this.http
      .put(url, JSON.stringify(phone), {headers: this.headers})
      .toPromise()
      .then(() => phone)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

