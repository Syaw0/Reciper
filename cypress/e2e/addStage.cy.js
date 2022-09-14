/* eslint-disable no-undef */
describe('Add Stage', () => {
  beforeEach(() => {
    // mainStore.setState((state) => ({ ...state, checkStrictFile: false }));
    // in the test env we must turn this value in mainStorage to false
    // because of strict check value

    cy.visit('/');
    cy.wait(200);
    cy.getByTestId('headerNavAdd').click();
  });

  it('if we do not fill inputs we can not navigate to next step', () => {
    cy.getByTestId('addRecipeNextStageBtn').click();
    cy.getByTestId('addPage').contains('Step 1');
  });
  it('for go to step next we must fill all inputs', () => {
    cy.getByTestId('addRecipeName').type('felan');
    cy.getByTestId('addRecipeDescription').type('felan');
    cy.getByTestId('addRecipePublisher').type('felan');
    cy.getByTestId('addRecipeServing').type(2);
    cy.getByTestId('addRecipePrepTime').type(2);
    cy.getByTestId('addRecipeCookTime').type(2);
    cy.getByTestId('addRecipeNextStageBtn').click();
    cy.getByTestId('addPage').contains('Step 2');
  });

  context('step1', () => {
    beforeEach(() => {
      cy.getByTestId('addRecipeName').type('felan');
      cy.getByTestId('addRecipeDescription').type('felan');
      cy.getByTestId('addRecipePublisher').type('felan');
    });

    it('we must use just number bigger than 0 in serving and prep and cook', () => {
      cy.getByTestId('addRecipeServing').type('s}');
      cy.getByTestId('addRecipePrepTime').type('s');
      cy.getByTestId('addRecipeCookTime').type('s');
      cy.getByTestId('addRecipeNextStageBtn').click();
      cy.getByTestId('addMaterialInp2').should('not.exist');
    });
  });

  context('step2', () => {
    beforeEach(() => {
      cy.getByTestId('addRecipeName').type('felan');
      cy.getByTestId('addRecipeDescription').type('felan');
      cy.getByTestId('addRecipePublisher').type('felan');
      cy.getByTestId('addRecipeServing').type(2);
      cy.getByTestId('addRecipePrepTime').type(2);
      cy.getByTestId('addRecipeCookTime').type(2);
      cy.getByTestId('addRecipeNextStageBtn').click();
    });

    it('we can add item by click on the add material', () => {
      cy.getByTestId('addStep2AddMaterialButton').click();
      cy.getByTestId('addMaterialInp2').should('exist');
    });

    it('if we do not fill inputs we can not navigate between steps', () => {
      cy.getByTestId('addRecipeNextStageBtn').click();
      cy.getByTestId('addMaterialInp1').should('exist');
      cy.getByTestId('addRecipePreStageBtn').click();
      cy.getByTestId('addMaterialInp1').should('exist');
    });

    it('navigate to previous step', () => {
      cy.getByTestId('addMaterialInp1').type('Hello');
      cy.getByTestId('addRecipePreStageBtn').click();
      cy.getByTestId('addMaterialInp1').should('not.exist');
    });

    it('also we can delete item', () => {
      cy.getByTestId('addStep2AddMaterialButton').click();
      cy.getByTestId('addStep2InputHolder').find('p').eq(1).find('svg')
        .eq(0)
        .click({ force: true });
      cy.getByTestId('addMaterialInp2').should('not.exist');
      cy.getByTestId('addMaterialInp1').should('exist');
    });
  });

  context('step3', () => {
    beforeEach(() => {
      cy.getByTestId('addRecipeName').type('felan');
      cy.getByTestId('addRecipeDescription').type('felan');
      cy.getByTestId('addRecipePublisher').type('felan');
      cy.getByTestId('addRecipeServing').type(2);
      cy.getByTestId('addRecipePrepTime').type(2);
      cy.getByTestId('addRecipeCookTime').type(2);
      cy.getByTestId('addRecipeNextStageBtn').click();
      cy.getByTestId('addMaterialInp1').type('Hello');
      cy.getByTestId('addRecipeNextStageBtn').click();
    });

    it('we in step 3', () => {
      cy.getByTestId('addStepInp1').should('exist');
    });

    it('if we do not fill inputs we can not navigate between steps', () => {
      cy.getByTestId('addRecipeNextStageBtn').click();
      cy.getByTestId('addStepInp1').should('exist');
      cy.getByTestId('addRecipePreStageBtn').click();
      cy.getByTestId('addStepInp1').should('exist');
    });

    it('navigate to previous step', () => {
      cy.getByTestId('addStepInp1').type('Hello');
      cy.getByTestId('addRecipePreStageBtn').click();
      cy.getByTestId('addStepInp1').should('not.exist');
    });

    it('also we can delete item', () => {
      cy.getByTestId('addStep3AddStepButton').click();
      cy.getByTestId('addStep3InputHolder').find('p').eq(1).find('svg')
        .eq(0)
        .click({ force: true });
      cy.getByTestId('addStepInp2').should('not.exist');
      cy.getByTestId('addStepInp1').should('exist');
    });
  });

  context('step4', () => {
    beforeEach(() => {
      cy.getByTestId('addRecipeName').type('felan');
      cy.getByTestId('addRecipeDescription').type('felan');
      cy.getByTestId('addRecipePublisher').type('felan');
      cy.getByTestId('addRecipeServing').type(2);
      cy.getByTestId('addRecipePrepTime').type(2);
      cy.getByTestId('addRecipeCookTime').type(2);
      cy.getByTestId('addRecipeNextStageBtn').click();
      cy.getByTestId('addMaterialInp1').type('Hello');
      cy.getByTestId('addRecipeNextStageBtn').click();
      cy.getByTestId('addStepInp1').type('Hello');
      cy.getByTestId('addRecipeNextStageBtn').click();
    });

    it('we in step 4', () => {
      cy.getByTestId('addTipInp1').should('exist');
    });

    it('if we do not fill inputs we can not navigate between steps', () => {
      cy.getByTestId('addRecipeNextStageBtn').click();
      cy.getByTestId('addTipInp1').should('exist');
      cy.getByTestId('addRecipePreStageBtn').click();
      cy.getByTestId('addTipInp1').should('exist');
    });

    it('navigate to previous step', () => {
      cy.getByTestId('addTipInp1').type('Hello');
      cy.getByTestId('addRecipePreStageBtn').click();
      cy.getByTestId('addTipInp1').should('not.exist');
    });

    it('also we can delete item', () => {
      cy.getByTestId('addStep4AddTipButton').click();
      cy.getByTestId('addStep4InputHolder').find('p').eq(1).find('svg')
        .eq(0)
        .click({ force: true });
      cy.getByTestId('addTipInp2').should('not.exist');
      cy.getByTestId('addTipInp1').should('exist');
    });
  });

  context.only('step5', () => {
    beforeEach(() => {
      cy.getByTestId('addRecipeName').type('felan');
      cy.getByTestId('addRecipeDescription').type('felan');
      cy.getByTestId('addRecipePublisher').type('felan');
      cy.getByTestId('addRecipeServing').type(2);
      cy.getByTestId('addRecipePrepTime').type(2);
      cy.getByTestId('addRecipeCookTime').type(2);
      cy.getByTestId('addRecipeNextStageBtn').click();
      cy.getByTestId('addMaterialInp1').type('Hello');
      cy.getByTestId('addRecipeNextStageBtn').click();
      cy.getByTestId('addStepInp1').type('Hello');
      cy.getByTestId('addRecipeNextStageBtn').click();
      cy.getByTestId('addTipInp1').type('Hello');
      cy.getByTestId('addRecipeNextStageBtn').click();
    });

    it('we in step 5', () => {
      cy.getByTestId('addStep5').should('exist');
    });
  });
});
