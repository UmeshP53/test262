// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-143
description: >
    Object.defineProperty - 'Attributes' is a Number object that uses
    Object's [[Get]] method to access the 'value' property  (8.10.5
    step 5.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { };

        var numObj = new Number(-2);

        numObj.value = "Number";

        Object.defineProperty(obj, "property", numObj);

        return obj.property === "Number";
    }
runTestCase(testcase);