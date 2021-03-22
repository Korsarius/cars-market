import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { IDealer } from './IDealer';

@Injectable({
  providedIn: 'root',
})
export class DealersService {
  private dealersUrl: string = 'api/dealers'; // URL to web api
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

  getDealers(): Observable<IDealer[]> {
    return this.http
      .get<IDealer[]>(this.dealersUrl)
      .pipe(catchError(this.handleError<IDealer[]>('getDealers', [])));
  }

  /** DELETE: delete the dealer from the server */
  deleteDealer(dealer: IDealer | string): Observable<IDealer> {
    const id: string = typeof dealer === 'string' ? dealer : dealer.id;
    const url: string = `${this.dealersUrl}/${id}`;
    console.log('url: ', url);

    return this.http.delete<IDealer>(url, this.httpOptions).pipe(
      catchError(this.handleError<IDealer>('deleteDealer'))
    );
  }
}
