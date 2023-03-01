const supertest = require('supertest')
const app =require ('../server.js')


describe("POST /Product/add",() =>{

        describe("creat user 🤗", () =>{
        it("should respond with a 200 status code", async () =>{
           const response = await supertest(app).post("/Product/add").send({
            title_produit:"produit cosmitique",
            description_produit:"bon qualité",
            image_produit:"image",
            prix_produit:"12",
            stock_produit:"12",
         pourcentage_produit:"12",
            })
            expect(response.statusCode).toBe(200)
        })
    })



})