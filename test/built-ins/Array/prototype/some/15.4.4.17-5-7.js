// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-5-7
description: Array.prototype.some - built-in functions can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return this === eval;
        }

        return [11].some(callbackfn, eval);
    }
runTestCase(testcase);