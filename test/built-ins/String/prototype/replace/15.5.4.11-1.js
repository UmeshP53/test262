// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.11-1
description: >
    'this' object used by the replaceValue function of a
    String.prototype.replace invocation
flags: [noStrict]
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {
  var retVal = 'x'.replace(/x/, 
                           function() { 
                               if (this===fnGlobalObject()) {
                                   return 'y';
                               } else {
                                   return 'z';
                               }
                           });
  return retVal==='y';
}
runTestCase(testcase);