// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.2.1-25-s
description: arguments as local var identifier throws SyntaxError in strict mode
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  try {
    eval('function foo() { var arguments, a;}');
    return false;
  }
  catch (e) {
    return (e instanceof SyntaxError);
  }
}
runTestCase(testcase);