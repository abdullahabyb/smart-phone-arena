import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Phone }        from './phone';
import { PhoneService } from './phone.service';

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: [ './phone-detail.component.css' ]
})
export class PhoneDetailComponent implements OnInit {
  phone: Phone;

  constructor(
    private phoneService: PhoneService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.phoneService.getPhone(+params.get('id')))
      .subscribe(phone => this.phone = phone);
  }
// save button
  save(): void {
    this.phoneService.update(this.phone)
      .then(() => this.goBack());
  }
// back button
  goBack(): void {
    this.location.back();
  }
}
