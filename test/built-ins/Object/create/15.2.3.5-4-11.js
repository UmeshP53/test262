// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-11
description: >
    Object.create - argument 'Properties' is a Date object (15.2.3.7
    step 2)
includes: [runTestCase.js]
---*/

function testcase() {

        var props = new Date();
        var result = false;

        Object.defineProperty(props, "prop", {
            get: function () {
                result = this instanceof Date;
                return {};
            },
            enumerable: true
        });
        var newObj = Object.create({}, props);
        return result && newObj.hasOwnProperty("prop");
    }
runTestCase(testcase);