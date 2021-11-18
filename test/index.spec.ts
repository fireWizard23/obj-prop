import { expect } from "chai";
import {clearProperties, hasTheseProperties, nullProperties} from '../src/index';


describe('HasTheseProperties', () => {
    it('should not have any properties', () => {
        const test = {};
        const has = hasTheseProperties(test, "username");
        expect(has).equal(false);
    });
    it("should return true when it has username",() => {
        const test = {username: "hey"};
        const has = hasTheseProperties(test, "username");
        expect(has).equal(true);

    } )
});

describe('NullProperties', () => {
    it('should not initialize the property when it is non existent', () => {
        const test = {};
        nullProperties(test, "test");
        expect(Object.keys(test).length).equal(0);
    });
});


describe('ClearProperties', () => {
    it('should not initialize the property when it is non existent', () => {
        const test = {};
        clearProperties(test, "test");
        expect(Object.keys(test).length).equal(0);
    });
});