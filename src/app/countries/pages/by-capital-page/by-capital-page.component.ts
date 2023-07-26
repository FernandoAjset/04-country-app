import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.model';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  constructor(
    private countriesService: CountriesService
  ) { }

  searchByCapital(term: any): void {
    this.isLoading = true;
    this.countriesService.searchByCapital(term)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }

  ngOnInit(): void {
  }

}
