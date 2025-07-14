Cypress.Commands.add('login', () => {
    cy.request('POST', '/auth/login', {
      username: 'mor_2314',
      password: '83r5^_'
    }).then((res) => {
      Cypress.env('token', res.body.token);
    });
  });
  