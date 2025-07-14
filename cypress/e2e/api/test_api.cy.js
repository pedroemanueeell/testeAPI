describe('Validacao da Fake Store Api ', () => {
    beforeEach(() => {
        cy.login();
      });
    it('GET - Validar lista de produtos utilizando', () => {
        cy.request('/products').then((response) => {
            expect(response.status).to.eq(200);
            const products = response.body[0];
            expect(products).to.have.property('id');
            expect(products).to.have.property('title');
            expect(products).to.have.property('price');
            expect(products).to.have.property('category');
          });
    });
    
    it('PATCH - Validar atualizaçao do produto', () => {
        const id = 1;
        const atualizacaoDados = {
            title: 'Titulo atualizado - teste',
        };
        
        cy.request({
            method: 'PATCH',
            url:`/products/${id}`,
            body: atualizacaoDados,
            headers: {
                Authorization: `Bearer ${Cypress.env('token')}`,
                'content-Type': 'application/json',
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('title', atualizacaoDados.title);
            expect(response.body).to.have.property('id', id);
        });        
    });

    it('DELETE - Validar exclusao de um item', () => {
        const id = 1;
        
        cy.request({
            method: 'DELETE',
            url: `/products/${id}`,
            headers: {
                Authorization: `Bearer ${Cypress.env('token')}`,
                'Content-Type': 'application/json',
            }
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', id);
            expect(response.body).to.have.property('title');
          });
    });

    it('POST - Validar criacao de um produto', () => {
        cy.request({
            method: 'POST',
            url: '/products',
            body: {
                title: 'Teste criação',
                price: 100.00,
                description: 'Teste post',
                category: 'men',
            },
            headers: {
                Authorization: `Bearer ${Cypress.env('token')}`,
                'Content-Type': 'application/json'
              }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id');
          });
    });
});