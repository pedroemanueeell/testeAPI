// cypress/support/commands.js

Cypress.Commands.add('login', () => {
  cy.request({
    method: 'POST',
    url: '/auth/login',
    headers: { 'Content-Type': 'application/json' },
    body: {
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30
    }
  }).then((response) => {
    expect(response.status).to.eq(200);

    cy.getCookie('accessToken').should('exist').then(cookie => {
      expect(cookie.value).to.be.a('string').and.not.be.empty;
      Cypress.env('token', cookie.value);
    });
  });
});
