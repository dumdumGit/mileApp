const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../app');

chai.use(chaiHttp);

describe('TESTING API', () => {
    it('GET Package', (done) => {
        chai.request(app).get('/api/package').end((err,res)=>{
            expect(err).to.be.null
            expect(res).to.have.status(200)

            expect(res.body.Transaction).to.have.an('array')
            expect(res.body.Transaction).to.have.an('array')
            done();
        })
    })
})
