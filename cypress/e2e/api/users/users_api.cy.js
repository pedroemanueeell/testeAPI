describe('Validacao de usuarios ', () => {
    
    it('GET - Validar lista de usuarios', () => {
        cy.request('/users')
            .then((response) => {
                expect(response.body).to.have.property('limit', 30);
                expect(response.status).to.eq(200);
            
                const user = response.body.users[0];
                expect(user).to.have.property('id');
                expect(user).to.have.property('firstName');
                expect(user).to.have.property('lastName');
                expect(user).to.have.property('age');
                expect(user).to.have.property('gender');
                expect(user).to.have.property('email');
                expect(user).to.have.property('username');
                expect(user).to.have.property('birthDate');
                expect(user).to.have.property('role');
                
          });
    });
    
})