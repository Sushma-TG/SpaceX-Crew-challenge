import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Crew } from './crew.model';

@Injectable({
  providedIn: 'root',
})
export class CrewService {
  crewUrl = 'https://api.spacexdata.com/v4/crew';

  constructor(private http: HttpClient) {}

  getCrew(): Observable<Crew[]> {
    return this.http
      .get<Crew[]>(this.crewUrl)
      .pipe(retry(2), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
