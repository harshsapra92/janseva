import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) { }

  getSections() {
    return of([{
      title: 'New',
      descrription: ''
    }, {
      title: 'Accepted',
      descrription: ''
    }, {
      title: 'Work In Progress',
      descrription: ''
    }, {
      title: 'Done',
      descrription: ''
    }]);
  }

}
