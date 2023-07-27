import { Country } from "./country.model"
import { Region } from "./region.type";

export interface CacheStore {
  byCapital: TermCouintries,
  byCountry: TermCouintries,
  byRegion: RegionCountries
}

export interface TermCouintries {
  term: string;
  countries: Country[];
}

export interface RegionCountries{
  region?:Region,
  countries:Country[]
}
