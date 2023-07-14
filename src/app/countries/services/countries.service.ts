import { environment } from './../../../environment/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country.model';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  constructor(private http: HttpClient) { }

  searchCountryByAlphaCode(alphaCode: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${environment.apiUrl}/alpha/${alphaCode}`)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      );
  }

  searchByCapital(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.apiUrl}/capital/${term}`)
      .pipe(
        catchError(error => of([]))
      );
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.apiUrl}/name/${term}`)
      .pipe(
        catchError(error => of([]))
      );
  }

  searchRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.apiUrl}/region/${region}`)
      .pipe(
        catchError(error => of([]))
      );
  }

}
