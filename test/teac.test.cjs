Object.defineProperty(global, "name_of_leaking_property", {
    set: function(_value) {
      throw new Error("Found the leak!");
    }
});
const {describe, it} = require('mocha');
const assert = require('assert');
const greg = '2023-08-20';
describe('Core test :', function() {
    it(`${greg} => [40,7,5,false]` , async function() {
        const {Teac} = await import('../dist/teac.js');
        const teacDate = Promise.resolve(new Teac(greg).num());
        let result;
        teacDate.then(r=>{
            result = r;
            assert.equal(result, [40,7,5,false]);
        });
    });
});