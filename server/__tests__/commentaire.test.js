const app = require('../server')
const supertest = require('supertest')

        test("should respond whit a 200 status code ", async () => {
            const response = await supertest(app).post("/commentaire/client/1/1")
            .send ({
                commentaire : "nice item",
                produitIdProduit : 1,
                userIdUser : 1
            })
            expect(response.status).toBe(200)
        })
   

          
        