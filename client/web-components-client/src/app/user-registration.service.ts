import { Injectable } from '@angular/core';
import { UserRegistration } from './user-registration';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class UserRegistrationService {
  private url: string = 'http://localhost:3000/api/userRegistration';

  constructor(private http: HttpClient) { }

  // TODO: change the observable return type after server model keys name fix
  addUser (user: UserRegistration): Observable<any> {
    return this.http.post(this.url, user, httpOptions)
      .pipe(
        tap((user: any) => this.log(`added user with id=${user.id}`))
        // catchError(this.handleError<UserRegistration>('addHero'))
      );

  }

  private log(message: string) {
    console.info('UserRegistrationService: ' + message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
