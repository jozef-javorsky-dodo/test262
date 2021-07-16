// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.findlast
description: Throws a TypeError if this has a detached buffer
info: |
  %TypedArray%.prototype.findLast  (predicate [ , thisArg ] )

  2. Perform ? ValidateTypedArray(O).

  22.2.3.5.1 Runtime Semantics: ValidateTypedArray ( O )

  ...
  5. If IsDetachedBuffer(buffer) is true, throw a TypeError exception.
  ...
includes: [testTypedArray.js, detachArrayBuffer.js]
features: [TypedArray]
---*/

var predicate = function() {
  throw new Test262Error();
};

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA(1);
  $DETACHBUFFER(sample.buffer);
  assert.throws(TypeError, function() {
    sample.findLast(predicate);
  });
});
