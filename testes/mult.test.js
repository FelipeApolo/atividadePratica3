const mult = require('../mult');

describe('Testes de multiplicação', () => {
    it('Multiplicaçao de dois números', (done) => {
        expect(mult(3, 2)).toBe(6);
        done();
    })
    it('Multiplicação de dois números - "string" e número', (done) => {
        expect(sum("texto", 2)).toBe(undefined);
        done();
    })
})