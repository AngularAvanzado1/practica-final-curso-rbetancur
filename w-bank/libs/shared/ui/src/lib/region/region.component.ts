import { Component, OnInit } from '@angular/core';
import { Region, Country, Common } from '@w-bank/domain';
import { WorldBankService } from '@w-bank/data';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

/**
 * @author rbetancur
 */
@Component({
  selector: 'wb-ui-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent extends Common implements OnInit {
  public countries: Array<Country> = [];

  public region: Region;

  private regionCode: string;

  constructor(
    private worldBankService: WorldBankService,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private translate: TranslateService
  ) {
    super();
    this.retrieveRegionCode();
  }

  ngOnInit(): void {
  }

  private retrieveRegionCode() {
    this.activatedroute.paramMap.subscribe(params => {
      this.regionCode = params.get(this.ROUTING_PARAM_REGION_CODE);
      this.obtainContinentalRegion();
    });
  }

  private obtainContinentalRegion() {
    this.worldBankService
      .obtainContinentalRegion(this.regionCode)
      .subscribe(response => {
        if (response) {
          this.countries = response[1];

          if (this.countries.length > 0) {
            this.region = this.countries[0].region;
          }
        } else {
          this.noResultError = true;
          // this.noResultMessage = this.translate.instant(this.MESSAGES_NO_REGIONS_FOUND, { 0: this.regionCode });
          this.noResultMessage = `No se econtraron resultados para la region con código ${this.regionCode}`;
        }
      });
  }

  public viewCoutry(selectedCountry: Country) {
    this.router.navigate([this.ROUTING_PATH_COUNTRY, selectedCountry.id]);
  }

  public viewRegions(){
    this.router.navigate([this.ROUTING_PATH_HOME]);
  }
}
