import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorldBankService } from '@w-bank/data';
import { Country, Region, Common } from '@w-bank/domain';

@Component({
  selector: 'wb-ui-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent extends Common implements OnInit {

  public country: Country;

  private countryId: string;

  public flag: string;

  constructor(
    private worldBankService: WorldBankService,
    private activatedroute: ActivatedRoute,
    private router: Router
  ) {
    super();
    this.retrieveCountryId();
  }

  ngOnInit(): void {
  }

  private retrieveCountryId() {
    this.activatedroute.paramMap.subscribe(params => {
      this.countryId = params.get(this.ROUTING_PARAM_COUNTRY_ID);
      this.obtainCountry();
    });
  }

  private obtainCountry(){
    this.worldBankService
      .obtainCountry(this.countryId)
      .subscribe(response => {
        if (response) {
          const countries = response[1];

          if (countries && countries.length > 0) {
            this.country = countries[0];
            this.flag = `https://www.countryflags.io/${this.country.iso2Code}/shiny/32.png`;
          }
        } else {
          this.noResultError = true;
          this.noResultMessage = `No se econtraron resultados para el país con código ${this.countryId}`;
        }
      });

  }

  public viewRegion(selectedRegion:Region){
    this.router.navigate([this.ROUTING_PATH_REGION,selectedRegion.id]);
  }

}
