const app = require('../server')
const supertest = require('supertest')

        test("should respond whit a 200 status code ", async () => {
            const response = await supertest(app).post("/avis/client/1/1")
            .send ({
                id_avis : 1,
                avis : 3,
                produitIdProduit : 1
            })
            expect(response.status).toBe(200)
        })
   