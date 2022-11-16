const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');

const mockFile = JSON.stringify({
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

const app = require('../../src/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('GET method to `/chocolates`', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile').resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });

  it('Should return a list of chocolates', async function () {
    response = await chai.request(app).get('/chocolates');

    const output = [
      { id: 1, name: 'Mint Intense', brandId: 1 },
      { id: 2, name: 'White Coconut', brandId: 1 },
      { id: 3, name: 'Mon Chéri', brandId: 2 },
      { id: 4, name: 'Mounds', brandId: 3 },
    ];

    expect(response.body.chocolates).to.be.deep.equal(output);
  });

  it('Should return status 200', async function () {
    response = await chai.request(app).get('/chocolates');

    expect(response.status).to.be.equal(200);
  });
});

describe('GET method to `/chocolates/:id`', function () {
  describe('On success', function () {
    it('Should return a chocolate `Mint Intense`', async function () {
      const output = { id: 1, name: 'Mint Intense', brandId: 1 };
      response = await chai.request(app).get('/chocolates/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.be.deep.equal(output);
    });
  });
});
