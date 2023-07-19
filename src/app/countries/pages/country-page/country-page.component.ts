import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {
  public country?: Country;

  constructor(
    private route: ActivatedRoute,
    private _countriesService: CountriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(({ id }) => this._countriesService.searchCountryByAlphaCode(id))
      )
      .subscribe(country => {
        if (!country) {
          return this.router.navigateByUrl('');
        }
        return this.country = country;
      })
  }
}
