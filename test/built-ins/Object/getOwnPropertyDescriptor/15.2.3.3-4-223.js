// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-4-223
description: >
    Object.getOwnPropertyDescriptor - ensure that 'value' property of
    returned object is data property with correct 'value' attribute
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { "property": "ownDataProperty" };

        var desc = Object.getOwnPropertyDescriptor(obj, "property");

        return desc.value === "ownDataProperty";
    }
runTestCase(testcase);