const sub = require('../sub');

describe('Testes de subtração', () => {
    it('Subtração de dois números', (done) => {
        expect(sub(3, 2)).toBe(1);
        done();
    })
    it('Subtração de dois números - "string" e número', (done) => {
        expect(sub("texto", 2)).toBe(undefined);
        done();
    })
})