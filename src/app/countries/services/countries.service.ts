import { environment } from './../../../environment/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Country } from '../interfaces/country.model';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  constructor(private http: HttpClient) { }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }

  searchCountryByAlphaCode(alphaCode: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${environment.apiUrl}/alpha/${alphaCode}`)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      );
  }

  searchByCapital(term: string): Observable<Country[]> {
    const url = `${environment.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url)
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${environment.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url)
  }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${environment.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url)
  }
}
