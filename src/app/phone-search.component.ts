import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { PhoneSearchService } from './phone-search.service';
import { Phone } from './phone';

@Component({
  selector: 'phone-search',
  templateUrl: './phone-search.component.html',
  styleUrls: [ './phone-search.component.css' ],
  providers: [PhoneSearchService]
})
export class PhoneSearchComponent implements OnInit {
  phones: Observable<Phone[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private phoneSearchService: PhoneSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.phones = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.phoneSearchService.search(term)
        // or the observable of empty phones if there was no search term
        : Observable.of<Phone[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Phone[]>([]);
      });
  }

  gotoDetail(phone: Phone): void {
    let link = ['/detail', phone.id];
    this.router.navigate(link);
  }
}
