// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-36
description: >
    Object.defineProperty - 'O' is a Boolean object that uses Object's
    [[GetOwnProperty]] method to access the 'name' property (8.12.9
    step 1)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = new Boolean(true);

        Object.defineProperty(obj, "foo", {
            value: 12,
            configurable: false
        });

        try {
            Object.defineProperty(obj, "foo", {
                value: 11,
                configurable: true
            });
            return false;
        } catch (e) {
            return e instanceof TypeError && obj.foo === 12;
        }
    }
runTestCase(testcase);