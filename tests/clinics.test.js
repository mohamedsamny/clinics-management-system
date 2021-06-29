const request = require('supertest')
const app = require('../index.js')
let faker = require('faker');

describe('Clinic Endpoints', () => {
  it('should create a new clinic', async () => {
    let speciality = "eye"
    let name = faker.name.findName()
    let address = faker.address.city()
    const res = await request(app)
      .post('/clinics/')
      .send({
        speciality: speciality,
        address: address,
        name: name
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body.speciality).toEqual(speciality)
    expect(res.body.address).toEqual(address)
    expect(res.body.name).toEqual(name)
  })

  it('should fetch a single clinic', async () => {
    const clinicId = 1
    const res = await request(app).get(`/clinics/${clinicId}`)
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('id')
    expect(res.body).toHaveProperty('name')
    expect(res.body).toHaveProperty('speciality')
    expect(res.body).toHaveProperty('address')
    expect(res.body).toHaveProperty('createdAt')
    expect(res.body).toHaveProperty('updatedAt')
  })

  it('should delete a clinic', async () => {
    const res = await request(app).delete('/clinics/1')
    expect(res.statusCode).toEqual(204)
  })

  it('should respond with status code 404 if trying to delete non-existing clinic', async () => {
    const res = await request(app).delete('/clinics/100')
    expect(res.statusCode).toEqual(404)
  })

  it('should respond with status code 404 if resource is not found', async () => {
    const clinicId = 1000
    const res = await request(app).get(`/clinics/${clinicId}`)
    expect(res.statusCode).toEqual(404)
  })
})