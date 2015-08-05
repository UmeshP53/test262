// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-3-14
description: Array.prototype.every - 'length' is a string containing +/-Infinity
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return val > 10;
        }

        var objOne = { 0: 9, length: "Infinity" };
        var objTwo = { 0: 9, length: "+Infinity" };
        var objThree = { 0: 9, length: "-Infinity" };

        return !Array.prototype.every.call(objOne, callbackfn) &&
            !Array.prototype.every.call(objTwo, callbackfn) &&
            Array.prototype.every.call(objThree, callbackfn) && accessed;
    }
runTestCase(testcase);