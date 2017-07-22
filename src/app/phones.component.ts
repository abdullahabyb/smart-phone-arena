import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Phone }                from './phone';
import { PhoneService }         from './phone.service';

@Component({
  selector: 'my-phones',
  templateUrl: './phones.component.html',
  styleUrls: [ './phones.component.css' ]
})
export class PhonesComponent implements OnInit {
  phones: Phone[];
  selectedPhone: Phone;

  constructor(
    private phoneService: PhoneService,
    private router: Router) { }

  getPhones(): void {
    this.phoneService
        .getPhones()
        .then(phones => this.phones = phones);
  }
// add new phone function
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.phoneService.create(name)
      .then(phone => {
        this.phones.push(phone);
        this.selectedPhone = null;
      });
  }
// delete function
  delete(phone: Phone): void {
    this.phoneService
        .delete(phone.id)
        .then(() => {
          this.phones = this.phones.filter(h => h !== phone);
          if (this.selectedPhone === phone) { this.selectedPhone = null; }
        });
  }

  ngOnInit(): void {
    this.getPhones();
  }

  onSelect(phone: Phone): void {
    this.selectedPhone = phone;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPhone.id]);
  }
}
