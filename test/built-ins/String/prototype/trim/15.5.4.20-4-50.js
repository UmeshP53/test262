// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-4-50
description: >
    String.prototype.trim handles whitepace and lineterminators
    (abc\u2029)
includes: [runTestCase.js]
---*/

function testcase() {
  if ("abc\u2029".trim() === "abc") {
    return true;
  }
 }
runTestCase(testcase);