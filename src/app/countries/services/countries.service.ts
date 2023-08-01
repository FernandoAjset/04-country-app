import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.model';
import { environment } from './../../../environment/environment';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { region: undefined, countries: [] }
  }

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('cacheStorage', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('cacheStorage')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStorage')!) as CacheStore;
  }

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
      .pipe(
        tap(countries => {
          this.cacheStore.byCapital = { term, countries };
        }),
        tap(() => this.saveToLocalStorage())
      );
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${environment.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => {
          this.cacheStore.byCountry = { term, countries };
        }),
        tap(() => this.saveToLocalStorage())
      );
  }

  searchRegion(region: Region): Observable<Country[]> {
    const url = `${environment.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => {
          this.cacheStore.byRegion = { region, countries };
        }),
        tap(() => this.saveToLocalStorage())
      );
  }
}
