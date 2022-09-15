/* eslint-disable no-undef */
describe('User Journey', () => {
  it('let s travel into the app with user eyes!', () => {
    cy.visit('/');
    cy.getByTestId('homePage').should('exist');

    // lets search something and navigate into app
    cy.getByTestId('headSearchInput').type('chicken{enter}');
    cy.getByTestId('orderListPage').should('exist').contains('chicken');
    cy.getByTestId('normalRecipeCard').eq(0).click();
    cy.getByTestId('bread2').contains('Recipe');
    cy.getByTestId('recipePageEditButton').should('exist');
    cy.getByTestId('bread0').click();
    cy.getByTestId('homePage').should('exist');

    // lets add a recipe into a app
    cy.getByTestId('headerNavAdd').click();
    cy.getByTestId('addRecipeName').type('Pork Soap');
    cy.getByTestId('addRecipeDescription').type('delicious food');
    cy.getByTestId('addRecipePublisher').type('Siaw');
    cy.getByTestId('addRecipeServing').type(2);
    cy.getByTestId('addRecipePrepTime').type(22);
    cy.getByTestId('addRecipeCookTime').type(80);
    cy.getByTestId('addRecipeFile').selectFile(`${__dirname}/../fixtures/default.png`);
    cy.getByTestId('addRecipeNextStageBtn').click();
    cy.getByTestId('addMaterialInp1').type('PORK');
    cy.getByTestId('addRecipeNextStageBtn').click();
    cy.getByTestId('addStepInp1').type('Foo Baar');
    cy.getByTestId('addRecipeNextStageBtn').click();
    cy.getByTestId('addTipInp1').type('something');
    cy.getByTestId('addRecipeNextStageBtn').click();
    cy.getByTestId('addStep5').should('exist');
    cy.getByTestId('addRecipeNextStageBtn').click();
    cy.getByTestId('loader').should('exist');
    cy.getByTestId('addRecipeNextStageBtn').should('be.disabled');
    cy.getByTestId('AddStep5SuccessMsg').should('exist');
    cy.getByTestId('addRecipeNextStageBtn').should('be.disabled');
    cy.getByTestId('homePage').should('exist');

    // lets check if my recipe added ?
    cy.getByTestId('headerNavOrderList').click();
    cy.getByTestId('categoryRecipeCard').find('p').contains('Pork').click();
    cy.getByTestId('normalRecipeCard').find('p').contains('Pork Soap').click();
    cy.getByTestId('recipePage').should('exist');
    cy.getByTestId('recipePageEditButton').click();
    cy.getByTestId('editPage').should('exist');

    // lets my recipe
    cy.getByTestId('editEditButton').click();
    cy.getByTestId('editPage').should('exist');
    cy.getByTestId('editRecipeFile').selectFile(`${__dirname}/../fixtures/default.png`);
    cy.getByTestId('editRecipeName').type('PORKY PORKY');
    cy.getByTestId('editEditButton').click();
    cy.getByTestId('loader').should('exist');
    cy.getByTestId('editSuccessMsg').should('exist');
    cy.getByTestId('homePage').should('exist');

    // check if my recipe edited successfully
    cy.getByTestId('headerNavOrderList').click();
    cy.getByTestId('categoryRecipeCard').find('p').contains('Pork').click();
    cy.getByTestId('normalRecipeCard').find('p').contains('PORKY PORKY').click();
    cy.getByTestId('recipePage').should('exist');

    // lets delete my recipe and check if deleted
    cy.getByTestId('recipePageDeleteButton').click();
    cy.getByTestId('FloatPage').should('exist');
    cy.getByTestId('floatPageYesButton').click();
    cy.getByTestId('recipeSuccessMsg').should('exist');
    cy.getByTestId('homePage').should('exist');

    cy.getByTestId('headerNavOrderList').click();
    cy.getByTestId('categoryRecipeCard').find('p').contains('Pork').click();
    cy.getByTestId('normalRecipeCard').find('p').should('not.contain', 'PORKY PORKY');
  });
});
