import  {Teac} from '../dist/teac.mjs';
import {describe, it} from 'mocha';
import assert from 'assert';

const greg = '2023-08-20';
describe('Core test, mjs :', function() {
    it(`${greg} => [40,7,5,false]` , async function() {
        const teacDate = Promise.resolve(new Teac(greg).num());
        let result;
        teacDate.then(r=>{
            result = r;
            assert.equal(result, [40,7,5,false]);
        });
    });
});