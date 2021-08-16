const chai = require("chai");
const chaiHttp = require("chai-http");
const { response } = require("express");
const server=require("../main");
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

chai.should();
chai.use(chaiHttp);


describe('/api/surprise', () => {
    let stub;

    before(() => {
        stub = new MockAdapter(axios);
    });

    it('chuck norris joke', async () => {
        stub.onGet('https://api.chucknorris.io/jokes/random')
            .replyOnce(200, { value: 'joke'});

        chai.request(server)
            .get('/api/surprise?name=Quent%20Whatever&birth_year=1999')
            .end((err, response) => {
                chai.expect(response).to.have.status(200);
                chai.expect(response.body).to.be.deep.equal({
                    type: 'chuck-norris-joke',
                    result: 'joke'
                });
            });
    });

    it('kayne quote', async () => {
        stub.onGet('https://api.kanye.rest')
            .replyOnce(200, { quote: 'funny quote'});

        chai.request(server)
            .get('/api/surprise?name=Quent%20Whatever&birth_year=2001')
            .end((err, response) => {
                chai.expect(response).to.have.status(200);
                chai.expect(response.body).to.be.deep.equal({
                    type: 'kanye-quote',
                    result: 'funny quote'
                });
            });
    });

    it('name sum', async () => {
        chai.request(server)
            .get('/api/surprise?name=Auent%20Whatever&birth_year=2001')
            .end((err, response) => {
                chai.expect(response).to.have.status(200);
                chai.expect(response.body).to.be.deep.equal({
                    type: 'name-sum',
                    result: 163
                });
            });
    });

    it('query params are missing', async () => {
        chai.request(server)
            .get('/api/surprise?name=Quent%20Whatever')
            .end((err, response) => {
                chai.expect(response).to.have.status(400);
                // chai.expect(response.body).to.be.a('string');
            });
    });

    after(() => {
        stub.restore();
    });
});

describe('/api/stats', () => {
    let stub;

    before(() => {
        stub = new MockAdapter(axios);
    });

    it('success', async () => {
        // For some reason this shows the stats of previous calls
        // (server isn't reset between tests)
        chai.request(server)
            .get('/api/stats')
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.deep.equal({
                    requests: 3,
                    distribution: [
                        {
                            type: 'chuck-norris-joke',
                            count: 1
                        },
                        {
                            type: 'kanye-quote',
                            count: 1
                        },
                        {
                            type: 'name-sum',
                            count: 1
                        },
                    ]
                });
            });
    });

    after(() => {
        stub.restore();
    });
});


