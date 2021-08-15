const chai=require("chai");
const chaiHttp=require("chai-http");
const { response } = require("express");
const server=require("../main");

chai.should();
chai.use(chaiHttp);

describe('Surprise API',()=>{

//test GET surprise 
    describe('GET api/stats',()=>{
        it('should get distribution status',(done)=>{
            chai.request(server)
                .get('/api/stats')
                .end((err,response)=>{
                    response.should.have.status(200);
                    response.body.should.be.a(Object);
                    response.body.length.should.be.eq(2);
                done();
                })
        })
    });
//test GET status

});