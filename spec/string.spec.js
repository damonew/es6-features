'use strict';

/**
  * string.spec.js
  * Explores new String features in ES6
  */
describe('an ES6 String',()=>{

    it('has a .startsWith() method', () => {
        let test = 'Darth';
        expect(test.startsWith('D')).toBe(true);
    });

    it('has a .startsWith() method that is case sensitive', () => {
        let test = 'Darth';
        expect(test.startsWith('d')).toBe(false);
    });

    it('has an .endsWith() method', () => {
        let test = 'Darth';
        expect(test.endsWith('h')).toBe(true);
    });

    it('has an .includes() method', () => {
        let test = 'Darth';
        expect(test.includes('art')).toBe(true);
    });

    it('has a .repeat() method', () => {
        let test = 'x';
        let expected = 'xxxxx';
        expect(test.repeat(5).length).toBe(5);
        expect(test.repeat(5)).toEqual(expected);
    });

    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
    it('supports interpolation using backticks (``)', () => {
        let name = 'Darth';
        let test = `Hello ${name}`;
        let expected = 'Hello Darth';
        expect(test).toEqual(expected);
        expect(`${name.toUpperCase()}`).toEqual('DARTH');
    });

    it('can be multiline using backticks (``)', () => {
        let test = `
Roses are #ff0000
Violets are #0000ff`;
        let expected = '\nRoses are #ff0000\nViolets are #0000ff';
        expect(test).toEqual(expected);
    });
});
