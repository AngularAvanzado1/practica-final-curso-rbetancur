import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegionsResponse, RegionCountryResponse} from '@w-bank/domain';

/**
 * Exposes services to consult continental regions and details of an specific region or country
 *
 * @author rbetancur
 */
@Injectable({
  providedIn: 'root'
})
export class WorldBankService {

  constructor(private httpClient: HttpClient) {}

  /** Obtains continental geographical regions */
  public obtainContientalRegions():Observable<RegionsResponse> {
    const regionsURL = 'http://api.worldbank.org/v2/region/?format=json';
    return this.httpClient.get<RegionsResponse>(regionsURL);
  }

  /** Obtains the basic data of the continental region and its associated countries*/
  public obtainContinentalRegion(regionCode: string):Observable<RegionCountryResponse> {
    const regionURL = `http://api.worldbank.org/v2/region/${regionCode}/country?per_page=1000&format=json`;
    return this.httpClient.get<RegionCountryResponse>(regionURL);
  }

  /** Obtains the basic data of a country */
  public obtainCountry(countryCode: string):Observable<RegionCountryResponse>{
    const countryURL=`http://api.worldbank.org/V2/country/${countryCode}?format=json`;
    return this.httpClient.get<RegionCountryResponse>(countryURL);
  }

}
