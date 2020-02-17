/**
 * Provides info about query pagination.
 * @author rbetancur
 */
export interface Pagination {
  page: number;
  pages: number;
  per_page: number;
  total: number;
}
