describe('Página Inicial', () => {
    it('Deve carregar a página inicial e exibir o título correto', () => {
      cy.visit('/'); // Navega para a página inicial
      cy.contains('h1', 'Hello, front-end'); // Verifica se o título existe
    });
  
    it('Deve ter o título da página no DOM', () => {
      cy.visit('/');
      cy.get('h1').should('have.text', 'Hello, front-end');
    });
  });