  describe('Criação de Produto', () => {
    beforeEach(() => {
      cy.login();
    });
  
    it('POST - Validar criação de produto com token e dados corretos', () => {
      const token = Cypress.env('token');
      expect(token).to.exist;
  
      cy.request({
        method: 'POST',
        url: '/auth/products/add',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: {
          title: "Perfume Oil",
          description: "Mega Discount, Impression of A...",
          price: 13,
          discountPercentage: 8.4,
          rating: 4.26,
          stock: 65,
          brand: "Impression of Acqua Di Gio",
          category: "fragrances",
          thumbnail: "https://i.dummyjson.com/data/products/11/thumnail.jpg"
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
        expect(response.body.title).to.eq("Perfume Oil");
        expect(response.body.price).to.eq(13);
        expect(response.body.stock).to.eq(65);
      });
    });
  });
  
  