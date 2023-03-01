const app = require('../server')
const supertest = require('supertest')

test("test Add promo ", async () => {
    const response = await supertest(app).post("/PromoCode/AddPromoCode")
        .send({
            code_promo: "JKUND8JHT4VF5C0",
            pourcentage_promo: 80,
            date_expiration: 2000-45-20
        })
    expect(response.status).toBe(200)
})

test("test Get promo ", async () => {
    const response = await supertest(app).get("/PromoCode")
    expect(response.status).toBe(200)
})

test("test Delete promo ", async () => {
    const response = await supertest(app).post("/PromoCode/DeletePromoCode/" + 2)
    expect(response.status).toBe(200)
})