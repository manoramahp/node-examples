var model = require('../model/device_data');
var expect = require('chai').expect;

describe('Test mock function', () => {
    it('Test add x + y', () => {
        let x = 2;
        let y = 5;
        expect(model.mockFunction(x, y), 5);
    })
})
