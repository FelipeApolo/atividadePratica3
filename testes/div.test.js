const div = require('../div');

describe('Testes de divisão', () => {
    it('Divisão de dois números', (done) => {
        expect(div(4, 2)).toBe(2);
        done();
    })
    it('Divisão de dois números - "string" e número', (done) => {
        expect(div("texto", 2)).toBe(undefined);
        done();
    })
})