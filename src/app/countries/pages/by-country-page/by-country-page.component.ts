import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.model';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public initialValue: string = '';

  constructor(
    private countriesService: CountriesService
  ) { }

  searchByCountry(country: any) {
    this.countriesService.searchCountry(country)
      .subscribe(data => {
        this.countries = data;
      });
  }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.initialValue = this.countriesService.cacheStore.byCountry.term;
  }

}
