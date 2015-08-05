// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-59
description: >
    Object.defineProperties - 'configurable' property of 'descObj' is
    present (8.10.5 step 4)
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};

        Object.defineProperties(obj, {
            prop: {
                configurable: true
            }
        });

        var result1 = obj.hasOwnProperty("prop");
        delete obj.prop;
        var result2 = obj.hasOwnProperty("prop");

        return result1 === true && result2 === false;
    }
runTestCase(testcase);