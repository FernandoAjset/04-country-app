import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.model';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  constructor(
    private _countriesService: CountriesService
  ) { }

  ngOnInit(): void {
  }

  searchByRegion(region: any) {
    this._countriesService.searchRegion(region)
      .subscribe(data => {
        this.countries = data;
      });
  }
}
