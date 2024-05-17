import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { TrafficEvents } from '../interfaces/traffic-events';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TrafficEventService {
  private baseUrl = 'https://localhost:7214/api/traffic-event';

  constructor(private http: HttpClient) {}

  getTrafficEvents(): Observable<any> {
    return this.http.get(this.baseUrl, { headers: { Accept: 'application/json' } });
  }
}
