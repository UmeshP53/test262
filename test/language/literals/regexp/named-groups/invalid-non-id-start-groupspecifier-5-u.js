// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: GroupSpecifier must be identifier-like.
esid: prod-GroupSpecifier
negative:
  phase: parse
  type: SyntaxError
features: [regexp-named-groups]
---*/

throw "Test262: This statement should not be evaluated.";

/(?<a\uDCA4>.)/u;
