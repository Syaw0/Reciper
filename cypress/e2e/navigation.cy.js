/* eslint-disable no-undef */
describe('navigation', () => {
  it('navigate to the category', () => {
    cy.visit('/');
    cy.getByTestId('headerNavOrderList').click();
    cy.getByTestId('orderListPage').should('exist');
  });
});
