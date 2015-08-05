// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-3-14
description: Array.prototype.map - 'length' is a string containing Infinity
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(val, idx, obj) {
            return val < 10;
        }

        var obj = { 0: 9, length: "Infinity" };

        try {
            Array.prototype.map.call(obj, callbackfn);
        } catch (e) {
            if (e instanceof RangeError) {
                return true;
            }
        }
    }
runTestCase(testcase);