/**
 *
 * @author rbetancur
 */
export class Common {
  public readonly ROUTING_PATH_HOME: string = 'home';
  public readonly ROUTING_PATH_REGION: string = 'region';
  public readonly ROUTING_PATH_COUNTRY: string = 'country';
  public readonly ROUTING_PARAM_REGION_CODE: string = 'code';
  public readonly ROUTING_PARAM_COUNTRY_ID: string = 'id';
  public readonly MESSAGES_NO_REGIONS_FOUND: string = 'general.noRegionsFound';
  public noResultError: boolean = false;
  public noResultMessage: string;

  constructor(){}
}
