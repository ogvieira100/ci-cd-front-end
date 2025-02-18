import { mount } from '@cypress/angular';
import { AppComponent } from './app.component';




describe('AppComponent', () => {
  it('deve renderizar o título corretamente', () => {
    mount(AppComponent); // Monta o componente
    cy.get('h1').should('have.text', 'Hello,'); // Verifica o texto do título
  });
});
