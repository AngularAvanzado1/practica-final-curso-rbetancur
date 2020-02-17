import { Region } from './region.interface';

/**
 * Defines the country data.
 * @author rbetancur
 */
export interface Country {
  id: string;
  iso2Code: string;
  name: string;
  region: Region;
  adminregion: Region;
  incomeLevel: Region;
  lendingType: Region;
  capitalCity: string;
  longitude: number;
  latitude: number;

}
