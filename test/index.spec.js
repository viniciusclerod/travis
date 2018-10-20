const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require('../app.js');

chai.use(chaiHttp);

describe('GET routes', () => {
    describe('index', () => {
        it('success, as expected response OK', function (done) { // <= Pass in done callback
            chai.request(app)
                .get('/')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    done();                               // <= Call done to signal callback end
                });
        });
    });
});