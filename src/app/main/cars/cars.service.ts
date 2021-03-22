import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { ICar } from './ICar';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private carsUrl: string = 'api/cars'; // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

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

  private log(message: string): void {
    console.log(message);
  }

  getCars(): Observable<ICar[]> {
    return this.http
      .get<ICar[]>(this.carsUrl)
      .pipe(catchError(this.handleError<ICar[]>('getCars', [])));
  }

  /** PUT: update the car on the server */
  updateCar(car: ICar): Observable<any> {
    return this.http
      .put(this.carsUrl, car, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateCar')));
  }
}
