import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ICar } from './ICar';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private carsUrl: string = 'api/cars'; // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  public constructor(private http: HttpClient) {}

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

  public getCars(): Observable<ICar[]> {
    return this.http.get<ICar[]>(this.carsUrl).pipe(
      tap((_) => this.log('fetched cars')),
      catchError(this.handleError<ICar[]>('getCars', []))
    );
  }

  /** PUT: update the car on the server */
  public updateCar(car: ICar): Observable<any> {
    console.log('car: ', car);
    return this.http.put(this.carsUrl, car, this.httpOptions).pipe(
      tap((_) => this.log(`update car id=${car.id}`)),
      catchError(this.handleError<any>('updateCar'))
    );
  }

  /* GET cars whose brand contains search term */
  public searchCars(term: string): Observable<ICar[]> {
    if (!term.trim()) {
      // if not search term, return empty car array.
      return of([]);
    }
    return this.http.get<ICar[]>(`${this.carsUrl}/?brand=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found cars matching "${term}"`)
          : this.log(`no cars matching "${term}"`)
      ),
      catchError(this.handleError<ICar[]>(`searchCars`, []))
    );
  }
}
