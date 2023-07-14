import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.model';

@Component({
  selector: 'countries-table',
  templateUrl: './countryTable.component.html',
  styleUrls: ['./countryTable.component.css']
})
export class CountryTableComponent implements OnInit {
  @Input()
  public countries: Country[] = []

  constructor() { }

  ngOnInit() {
  }

}
