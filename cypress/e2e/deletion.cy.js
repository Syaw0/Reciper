/* eslint-disable no-undef */
describe('Edit Stage', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(200);
    cy.getByTestId('normalRecipeCard').eq(0).click();
    cy.wait(200);
    cy.getByTestId('recipePageDeleteButton').click();
  });

  it('first float warning show up', () => {
    cy.getByTestId('FloatPage').should('exist');
  });
  it('if click on the no we float fade out', () => {
    cy.getByTestId('floatPageNoButton').click();
    cy.getByTestId('FloatPage').should('not.exist');
  });

  it('if click on the yes if server is ok success msg showup', () => {
    cy.intercept('DELETE', 'http://localhost:8080/delete*', {
      body: {
        status: true,
      },
    });
    cy.getByTestId('floatPageYesButton').click();
    cy.getByTestId('recipeSuccessMsg').should('exist');
    cy.getByTestId('homePage').should('exist');
  });

  it('if server do not response error msg show up', () => {
    cy.intercept('DELETE', 'http://localhost:8080/delete*', {
      body: {
        status: false,
      },
    });
    cy.getByTestId('floatPageYesButton').click();
    cy.getByTestId('recipeErrorMsg').should('exist');
  });
});
