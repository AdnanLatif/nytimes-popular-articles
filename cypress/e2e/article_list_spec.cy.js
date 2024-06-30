describe('Article List', () => {
  it('should display articles and show detail on click', () => {
    cy.visit('/');

    cy.contains('NY Times Most Popular Articles').should('be.visible');

    cy.get('.max-w-sm').should('have.length.greaterThan', 0);

    cy.get('.max-w-sm').first().click();

    cy.get('.max-w-sm').should('contain', 'Read More');
  });
});
