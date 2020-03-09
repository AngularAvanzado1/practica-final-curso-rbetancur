import { Pagination } from './pagination.interface';
import { Country } from './country.interface';

/**
 * Defines the result of a detailed continental region query and it countries associated.
 * Also, it defines the detailed data of an specific country
 * @author rbetancur
 */
export interface RegionCountryResponse {
  pagination: Pagination;
  countries: Array<Country>;
}
