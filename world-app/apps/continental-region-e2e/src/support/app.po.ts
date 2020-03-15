export const visitHome = () => cy.visit('/');
export const getTitle= () => cy.get('h1');
export const getSubTitle= () => cy.get('h4');
export const getTable = () => cy.get('table').get('tbody').get('td');
