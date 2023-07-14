import { environment } from './../../../environment/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.model';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  constructor(private http: HttpClient) { }

  searchByCapital(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.apiUrl}/capital/${term}`)
  }
}
