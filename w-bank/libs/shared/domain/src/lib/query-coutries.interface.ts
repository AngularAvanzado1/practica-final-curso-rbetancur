import { Country } from './country.interface';
import { Pagination } from "./pagination.interface";
/**
 * Defines the result of a country query.
 * @author rbetancur
 */
export interface QueryCoutries {
  pagination: Pagination;
  countries: Country[];
}
