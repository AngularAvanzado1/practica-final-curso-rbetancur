import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { RegionsResponse } from '@w-bank/domain';
import { Observable } from 'rxjs';
import { WorldBankService } from './world-bank.service';

describe('GIVEN: a WorldBankService', () => {
  describe('WHEN: DataModule is compiled', () => {
    describe('WHEN: obtainContientalRegions is called()', () => {

      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule]
        });
      });

      it('THEN: should be created', () => {
        const service: WorldBankService = TestBed.inject(WorldBankService);
        expect(service).toBeTruthy();
      });

      it('THEN: it should return an Observable when call obtainContientalRegions()', () => {
        const service: WorldBankService = TestBed.inject(WorldBankService);
        const continentalRegions: Observable<RegionsResponse> = service.obtainContientalRegions();
        expect(continentalRegions).toBeInstanceOf(Observable);
      });

      it('THEN: it should return an array of regions when call obtainContientalRegions()',
        async(() => {

          const service: WorldBankService = TestBed.inject(WorldBankService);
          service.obtainContientalRegions().subscribe(response => {
            expect(response).toBeDefined();
            expect(response[1]).toBeDefined();
            expect(response[1].length).toBeGreaterThan(0);
          });

          const responseMock = `[{"page":"1","pages":"1","per_page":"50","total":"48"},
            [ {"id":"","code":"AFR","iso2code":"A9","name":"Africa"},
              {"id":"","code":"ANR","iso2code":"L5","name":"Andean Region"},
              {"id":"","code":"ARB","iso2code":"1A","name":"Arab World"},
              {"id":"","code":"CAA","iso2code":"C9","name":"Sub-Saharan Africa (IFC classification)"},
              {"id":"","code":"CEA","iso2code":"C4","name":"East Asia and the Pacific (IFC classification)"},
              {"id":"","code":"CEB","iso2code":"B8","name":"Central Europe and the Baltics"},
              {"id":"","code":"CEU","iso2code":"C5","name":"Europe and Central Asia (IFC classification)"},
              {"id":"","code":"CLA","iso2code":"C6","name":"Latin America and the Caribbean (IFC classification)"},
              {"id":"","code":"CME","iso2code":"C7","name":"Middle East and North Africa (IFC classification)"},
              {"id":"","code":"CSA","iso2code":"C8","name":"South Asia (IFC classification)"},
              {"id":"","code":"CSS","iso2code":"S3","name":"Caribbean small states"},
              {"id":"","code":"EAP","iso2code":"4E","name":"East Asia & Pacific (excluding high income)"},
              {"id":"","code":"EAR","iso2code":"V2","name":"Early-demographic dividend"},
              {"id":"1","code":"EAS","iso2code":"Z4","name":"East Asia & Pacific"},
              {"id":"","code":"ECA","iso2code":"7E","name":"Europe & Central Asia (excluding high income)"},
              {"id":"2","code":"ECS","iso2code":"Z7","name":"Europe & Central Asia"},
              {"id":"","code":"EMU","iso2code":"XC","name":"Euro area"},
              {"id":"","code":"EUU","iso2code":"EU","name":"European Union"},
              {"id":"","code":"FCS","iso2code":"F1","name":"Fragile and conflict affected situations"},
              {"id":"","code":"HPC","iso2code":"XE","name":"Heavily indebted poor countries (HIPC)"},
              {"id":"","code":"LAC","iso2code":"XJ","name":"Latin America & Caribbean (excluding high income)"},
              {"id":"3","code":"LCN","iso2code":"ZJ","name":"Latin America & Caribbean "},
              {"id":"","code":"LCR","iso2code":"L4","name":"Latin America and the Caribbean"},
              {"id":"","code":"LDC","iso2code":"XL","name":"Least developed countries: UN classification"},
              {"id":"","code":"LTE","iso2code":"V3","name":"Late-demographic dividend"},
              {"id":"","code":"MCA","iso2code":"L6","name":"Central America"},
              {"id":"","code":"MDE","iso2code":"M1","name":"Middle East (developing only)"},
              {"id":"4","code":"MEA","iso2code":"ZQ","name":"Middle East & North Africa"},
              {"id":"","code":"MNA","iso2code":"XQ","name":"Middle East & North Africa (excluding high income)"},
              {"id":"6","code":"NAC","iso2code":"XU","name":"North America"},
              {"id":"","code":"NAF","iso2code":"M2","name":"North Africa"},
              {"id":"","code":"NLS","iso2code":"6L","name":"Non-resource rich Sub-Saharan Africa countries, of which landlocked"},
              {"id":"","code":"NRS","iso2code":"6X","name":"Non-resource rich Sub-Saharan Africa countries"},
              {"id":"","code":"OED","iso2code":"OE","name":"OECD members"},
              {"id":"","code":"OSS","iso2code":"S4","name":"Other small states"},
              {"id":"","code":"PRE","iso2code":"V1","name":"Pre-demographic dividend"},
              {"id":"","code":"PSS","iso2code":"S2","name":"Pacific island small states"},
              {"id":"","code":"PST","iso2code":"V4","name":"Post-demographic dividend"},
              {"id":"","code":"RRS","iso2code":"R6","name":"Resource rich Sub-Saharan Africa countries"},
              {"id":"","code":"RSO","iso2code":"O6","name":"Resource rich Sub-Saharan Africa countries, of which oil exporters"},
              {"id":"8","code":"SAS","iso2code":"8S","name":"South Asia"},
              {"id":"","code":"SCE","iso2code":"L7","name":"Southern Cone"},
              {"id":"","code":"SSA","iso2code":"ZF","name":"Sub-Saharan Africa (excluding high income)"},
              {"id":"9","code":"SSF","iso2code":"ZG","name":"Sub-Saharan Africa "},
              {"id":"","code":"SST","iso2code":"S1","name":"Small states"},
              {"id":"","code":"SXZ","iso2code":"A4","name":"Sub-Saharan Africa excluding South Africa"},
              {"id":"","code":"WLD","iso2code":"1W","name":"World"},
              {"id":"","code":"XZN","iso2code":"A5","name":"Sub-Saharan Africa excluding South Africa and Nigeria"}
            ]]`;

          const httpMock = TestBed.inject(HttpTestingController);
          const req = httpMock.expectOne('http://api.worldbank.org/v2/region/?format=json');
          req.flush(responseMock);
          httpMock.verify();

        })
      );

    });
  });
});
