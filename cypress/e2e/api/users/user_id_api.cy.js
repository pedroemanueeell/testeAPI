const userIds = [1, 2, 3, 4, 5];

describe('Consulta de Usuários por ID', () => {
  userIds.forEach(id => {
    it(`Deve validar dados do usuário com ID ${id}`, () => {
      cy.request(`/users/${id}`).then((response) => {
        expect(response.status).to.eq(200);

        const user = response.body;
        expect(user).to.have.property('id', id);
        expect(user.firstName).to.be.a('string').and.not.be.empty;
        expect(user.lastName).to.be.a('string').and.not.be.empty;
        expect(user.age).to.be.a('number');
        expect(user.email).to.be.a('string').and.include('@');
        expect(user.username).to.be.a('string').and.not.be.empty;
        expect(['admin', 'moderator', 'user']).to.include(user.role);
      });
    });
  });
});
