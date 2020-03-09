import { Component, OnInit } from '@angular/core';
import { Region, Common } from '@w-bank/domain';
import { WorldBankService } from '@w-bank/data';
import { Router } from '@angular/router';

@Component({
  selector: 'wb-manage-regions',
  templateUrl: './manage-regions.component.html'
})
export class ManageRegionsComponent extends Common implements OnInit {

  public regions: Array<Region> = [];

  constructor(
    private worldBankService: WorldBankService,
    private router:Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.worldBankService.obtainContientalRegions()
    .subscribe(response =>{

      if(response){
        this.regions = response[1];
        this.regions = this.regions.filter(region => region.id);
      }
    },
    error => {
      this.regions = [];
      console.log('Error worldBankService.obtainContientalRegions');
    });
  }

  public viewRegion(selectedRegion:Region){
    this.router.navigate([this.ROUTING_PATH_REGION, selectedRegion.code]);
  }

}
