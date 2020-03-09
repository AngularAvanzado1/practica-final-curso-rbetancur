import { Pagination } from './pagination.interface';
import { Region } from './region.interface';

/**
 * Defines the result of a regions query.
 * @author rbetancur
 */
export interface RegionsResponse {
  pagination: Pagination;
  regions: Array<Region>;
}
