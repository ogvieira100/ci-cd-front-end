import { mount } from '@cypress/angular';
import { FirstComponentComponent } from './first-component.component';




describe('AppComponent', () => {
  it('deve renderizar o título corretamente', () => {
    mount(FirstComponentComponent); // Monta o componente
    cy.get('p').should('have.text', 'first-component works!'); // Verifica o texto do título
  });
});
