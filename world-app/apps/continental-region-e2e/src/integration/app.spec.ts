import {
  visitHome,
  getTitle,
  getSubTitle,
  getTable
} from '../support/app.po';

describe('GIVEN: The continental-region web app', () => {
  beforeEach(() => visitHome());

  context('WHEN: user visit home page', () => {

    it('THEN: should display a section title', () => {
      getTitle().contains('Continental regions');
    });

    it('THEN: should display a table of regions', () => {
      getTable().contains('East Asia & Pacific');
      getTable().contains('East Asia & Pacific').click();

      getSubTitle().contains('East Asia & Pacific');
      getSubTitle().contains('COUNTRIES');
      getTable().contains('Australia');
      getTable().contains('Australia').click();

      getTitle().contains('Country Information');
      getSubTitle().contains('Australia');

    });

  });

});
