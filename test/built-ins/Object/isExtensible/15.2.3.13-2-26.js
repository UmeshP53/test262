// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.13-2-26
description: >
    Object.isExtensible returns false if O is not extensible and has a
    prototype that is extensible
includes: [runTestCase.js]
---*/

function testcase() {

        var proto = {};

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;
        var obj = new ConstructFun();

        Object.preventExtensions(obj);

        return !Object.isExtensible(obj);

    }
runTestCase(testcase);