const supertest = require('supertest')
const app =require ('../server.js')


describe("POST /categorie/add",() =>{

        describe("category created successfully 🤗", async() =>{
        it("should respond with a 200 status code", async () =>{
           const response = await supertest(app).post("/categorie/add").send({
            categorie:"produit cosmatiqueeeee"
            })
            expect(response.statusCode).toBe(200)
        })
    })



})