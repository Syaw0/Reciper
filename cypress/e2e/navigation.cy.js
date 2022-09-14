/* eslint-disable no-undef */
describe('navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  context('top header', () => {
    it('navigate to the category', () => {
      cy.getByTestId('headerNavOrderList').click();
      cy.getByTestId('orderListPage').should('exist').contains('Category');
    });
    it('navigate to the Add page', () => {
      cy.wait(500);
      cy.getByTestId('headerNavAdd').click();
      cy.getByTestId('addPage').should('exist');
    });
    it('navigate to the list with search box', () => {
      cy.getByTestId('headSearchInput').type('cookie{enter}');
      cy.wait(500);
      cy.getByTestId('orderListPage').should('exist').contains('cookie');
    });
    it('navigate to Home', () => {
      cy.getByTestId('headerNavOrderList').click();
      cy.getByTestId('headerNavHome').click();
      cy.getByTestId('homePage').should('exist').contains('Trends');
    });
  });

  context('with Breads', () => {
    it('nav to category and then nav to home with breads', () => {
      cy.getByTestId('headerNavOrderList').click();
      cy.getByTestId('orderListPage').should('exist').contains('Category');
      cy.wait(200);
      cy.getByTestId('bread0').click();
      cy.getByTestId('homePage').should('exist').contains('Trends');
    });

    it('deep nested', () => {
      cy.getByTestId('headerNavOrderList').click();
      cy.getByTestId('orderListPage').should('exist').contains('Category');
      cy.getByTestId('categoryRecipeCard').eq(0).click();
      cy.getByTestId('normalRecipeCard').eq(0).click();
      cy.getByTestId('recipePage').should('exist');
      cy.getByTestId('bread2').click();
      cy.getByTestId('normalRecipeCard').eq(0).should('exist');
      cy.getByTestId('bread1').click();
      cy.getByTestId('categoryRecipeCard').eq(0).should('exist');
      cy.getByTestId('bread0').click();
      cy.getByTestId('homePage').should('exist').contains('Trends');
    });
  });

  context('in home page', () => {
    it('nav to Trends recipe with see more btn', () => {
      cy.getByTestId('itemIntroducerSeeMoreBtn').eq(0).click();
      cy.getByTestId('orderListPage').should('exist').contains('Trends');
    });

    it('nav to News recipe with see more btn', () => {
      cy.getByTestId('itemIntroducerSeeMoreBtn').eq(1).click();
      cy.getByTestId('orderListPage').should('exist').contains('New');
    });
    it('nav to Suggest recipe with see more btn', () => {
      cy.getByTestId('itemIntroducerSeeMoreBtn').eq(2).click();
      cy.getByTestId('orderListPage').should('exist').contains('Suggest');
    });
    it('nav to Top Category recipe with see more btn', () => {
      cy.getByTestId('itemIntroducerSeeMoreBtn').eq(3).click();
      cy.getByTestId('orderListPage').should('exist').contains('Top');
    });

    it('nav to the recipe', () => {
      cy.getByTestId('normalRecipeCard').eq(0).click();

      cy.getByTestId('recipePage').should('exist');
    });
  });

  context('navigation to Add Page', () => {
    it('if nav to add then we want to return from head links warn show up', () => {
      cy.wait(200);
      cy.getByTestId('headerNavAdd').click();
      cy.getByTestId('headerNavOrderList').click();
      cy.getByTestId('FloatPage').should('exist');
    });
    it('if we click on the no nothing happen just float gone', () => {
      cy.wait(200);
      cy.getByTestId('headerNavAdd').click();
      cy.getByTestId('headerNavOrderList').click();
      cy.getByTestId('FloatPage').should('exist');
      cy.getByTestId('floatPageNoButton').click();
      cy.getByTestId('FloatPage').should('not.exist');
    });

    it('if we click on the yes we navigate to target location and cache data lost', () => {
      cy.wait(200);
      cy.getByTestId('headerNavAdd').click();
      cy.getByTestId('addRecipeName').type('heeeeey');
      cy.getByTestId('headerNavOrderList').click();
      cy.getByTestId('FloatPage').should('exist');
      cy.getByTestId('floatPageYesButton').click();
      cy.getByTestId('FloatPage').should('not.exist');
      cy.getByTestId('orderListPage').should('exist');
      cy.getByTestId('headerNavAdd').click();
      cy.getByTestId('addRecipeName').should('not.eq', 'heeeeey');
    });

    it('in the add section navigate from breads will throw a float page', () => {
      cy.wait(200);
      cy.getByTestId('headerNavAdd').click();
      cy.getByTestId('bread0').click();
      cy.getByTestId('FloatPage').should('exist');
    });
    it('if we click on the abort float page show up', () => {
      cy.wait(200);
      cy.getByTestId('headerNavAdd').click();
      cy.getByTestId('addRecipeAbortButton').click();
      cy.getByTestId('FloatPage').should('exist');
    });

    context('navigation to Edit Page', () => {
      beforeEach(() => {
        cy.wait(200);
        cy.getByTestId('normalRecipeCard').eq(0).click();
        cy.getByTestId('normalRecipeCard').eq(0).click();
        cy.getByTestId('recipePageEditButton').click();
      });
      it('first edit page show up perfectly', () => {
        cy.getByTestId('editPage').should('exist');
      });
      it('if we leave from cancel float page show up', () => {
        cy.wait(200);
        cy.getByTestId('editCancelButton').click();
        cy.getByTestId('FloatPage').should('exist');
        // cy.getByTestId('floatPageNoButton').click()
        // cy.getByTestId("FloatPage").should("not.exist")
      });

      it('navigation from top nav throw a float', () => {
        cy.wait(200);
        cy.getByTestId('headerNavAdd').click();
        cy.getByTestId('FloatPage').should('exist');
      });

      it('also nav from breads show up float', () => {
        cy.wait(200);
        cy.getByTestId('bread0').click();
        cy.getByTestId('FloatPage').should('exist');
      });
    });

    context.only('navigation to specific category', () => {
      it('nav to specific category', () => {
        cy.wait(200);
        cy.getByTestId('headerNavOrderList').click();
        cy.getByTestId('orderListPage').should('exist');
        cy.getByTestId('categoryRecipeCard').eq(0).click();
        cy.getByTestId('orderListPage').should('exist').contains('Dessert');
      });
    });
  });
});
