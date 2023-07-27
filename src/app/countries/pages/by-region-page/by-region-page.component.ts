import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.model';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;
  public initialValue: string = '';
  constructor(
    private _countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.countries = this._countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this._countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region) {
    this.selectedRegion = region;
    this._countriesService.searchRegion(region)
      .subscribe(data => {
        this.countries = data;
      });
  }
}
