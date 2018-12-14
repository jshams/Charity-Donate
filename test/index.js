const chai = require('chai');
const chaiHttp = require('chai-http');
const ListItem = require('../models/listItem');
const Comment = require('../models/comment');
const server = require('../app.js');
const should = chai.should();
const expect = chai.expect;


/////// TODO: Still need to create PUT and test the route
chai.use(chaiHttp);

const sampleId = '5c120900e898a25bdbd9c8e3';

const agent = chai.request.agent(server);

describe('Index Page', () => {
  it('Should load index page ', (done) => {
    agent
    .get('/')
    .end((err, res) => {
      res.status.should.be.equal(200);
      res.should.be.html;
      done();
    })
  })
})
