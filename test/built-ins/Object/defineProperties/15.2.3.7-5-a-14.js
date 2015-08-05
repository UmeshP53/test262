// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-a-14
description: >
    Object.defineProperties - 'Properties' is a RegExp object which
    implements its own [[Get]] method to get enumerable own property
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};
        var props = new RegExp();

        Object.defineProperty(props, "prop", {
            value: {
                value: 14
            },
            enumerable: true
        });
        Object.defineProperties(obj, props);

        return obj.hasOwnProperty("prop") && obj.prop === 14;
    }
runTestCase(testcase);