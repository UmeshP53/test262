// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1.2-4-s
description: >
    Strict Mode - SyntaxError is thrown when FutureReservedWord
    'public' occurs in strict mode code
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            eval("var public = 1;");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
}
runTestCase(testcase);