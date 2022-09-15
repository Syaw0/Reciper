/* eslint-disable no-undef */
describe('Edit Stage', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(200);
    cy.getByTestId('normalRecipeCard').eq(0).click();
    cy.wait(200);
    cy.getByTestId('recipePageEditButton').click();
  });

  it('if inputs are not filled we can not edit the recipe', () => {
    cy.getByTestId('editEditButton').click({ force: true });
    cy.getByTestId('editPage').should('exist');
  });

  it('if inputs are not filled then click a edit loader showup then if server ok success msg fade in', () => {
    cy.intercept('POST', 'http://localhost:8080/edit*', {
      body: {
        status: true,
      },
    });
    cy.getByTestId('editRecipeFile').selectFile(`${__dirname}/../fixtures/default.png`);
    cy.getByTestId('editEditButton').click({ force: true });
    cy.getByTestId('loader').should('exist');
    cy.getByTestId('editSuccessMsg').should('exist');
    cy.getByTestId('homePage').should('exist');
  });

  it('if server do not response the request error msg show up', () => {
    cy.intercept('POST', 'http://localhost:8080/edit*', {
      body: {
        status: false,
      },
    });
    cy.getByTestId('editRecipeFile').selectFile(`${__dirname}/../fixtures/default.png`);
    cy.getByTestId('editEditButton').click({ force: true });
    cy.getByTestId('loader').should('exist');
    cy.getByTestId('editErrorMsg').should('exist');
  });
});
