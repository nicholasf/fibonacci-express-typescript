import supertest from "supertest";
import service from "../../src/service";
import { FibonacciResource, HTTPError } from "Main";
import { expect } from "chai";

const request = supertest(service);

describe('Success conditions', () => {
    it('returns valid fibonacci numbers by position', (done) => {
        request
            .get('/5')
            .expect(200)
            .expect('Content-Type', /application\/json/)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                const resource: FibonacciResource = res.body;
                expect(resource.number).to.equal(5);
                expect(resource.position).to.equal(5);                
                
                return done();
            })
    })
});

describe('Failure conditions', () => {
    it('404 without a route match', (done) => {
        request
            .get('/')
            .expect(404, done)
    });

    it('400 with invalid data', (done) => {
        request
            .get('/hello')
            .expect(400)
            .expect('Content-Type', /application\/json/)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                const errMsg: { error: HTTPError } = res.body;
                expect(errMsg.error.status).to.equal(400);
                expect(errMsg.error.message).to.equal('Please submit a positive number signifying a postition in the Fibonacci sequence.');
                return done();
            })

    });
});
