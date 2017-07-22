import { Component, OnInit } from '@angular/core';

import { Phone }        from './phone';
import { PhoneService } from './phone.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  phones: Phone[] = [];

  constructor(private phoneService: PhoneService) { }

  ngOnInit(): void {
    this.phoneService.getPhones()
    // Displaying array enements from 0 (4 in total)
      .then(phones => this.phones = phones.slice(0, 4));
  }
}
