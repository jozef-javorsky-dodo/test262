
// start.wast:1
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x08\x81\x80\x80\x80\x00\x01\x0a\x88\x80\x80\x80\x00\x01\x82\x80\x80\x80\x00\x00\x0b");

// start.wast:6
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x08\x81\x80\x80\x80\x00\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x41\x00\x0f\x0b");

// start.wast:13
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x01\x7f\x00\x03\x82\x80\x80\x80\x00\x01\x00\x08\x81\x80\x80\x80\x00\x00\x0a\x88\x80\x80\x80\x00\x01\x82\x80\x80\x80\x00\x00\x0b");

// start.wast:21
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7f\x03\x84\x80\x80\x80\x00\x03\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8d\x80\x80\x80\x00\x02\x03\x69\x6e\x63\x00\x00\x03\x67\x65\x74\x00\x01\x08\x81\x80\x80\x80\x00\x02\x0a\xaf\x80\x80\x80\x00\x03\x8f\x80\x80\x80\x00\x00\x41\x00\x41\x00\x2d\x00\x00\x41\x01\x6a\x3a\x00\x00\x0b\x88\x80\x80\x80\x00\x00\x41\x00\x2d\x00\x00\x0f\x0b\x88\x80\x80\x80\x00\x00\x10\x00\x10\x00\x10\x00\x0b\x0b\x87\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x01\x41");

// start.wast:45
assert_return(() => call($1, "get", []), 68);

// start.wast:46
run(() => call($1, "inc", []));

// start.wast:47
assert_return(() => call($1, "get", []), 69);

// start.wast:48
run(() => call($1, "inc", []));

// start.wast:49
assert_return(() => call($1, "get", []), 70);

// start.wast:51
let $2 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7f\x03\x84\x80\x80\x80\x00\x03\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x8d\x80\x80\x80\x00\x02\x03\x69\x6e\x63\x00\x00\x03\x67\x65\x74\x00\x01\x08\x81\x80\x80\x80\x00\x02\x0a\xaf\x80\x80\x80\x00\x03\x8f\x80\x80\x80\x00\x00\x41\x00\x41\x00\x2d\x00\x00\x41\x01\x6a\x3a\x00\x00\x0b\x88\x80\x80\x80\x00\x00\x41\x00\x2d\x00\x00\x0f\x0b\x88\x80\x80\x80\x00\x00\x10\x00\x10\x00\x10\x00\x0b\x0b\x87\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x01\x41");

// start.wast:74
assert_return(() => call($2, "get", []), 68);

// start.wast:75
run(() => call($2, "inc", []));

// start.wast:76
assert_return(() => call($2, "get", []), 69);

// start.wast:77
run(() => call($2, "inc", []));

// start.wast:78
assert_return(() => call($2, "get", []), 70);

// start.wast:80
let $3 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x01\x7f\x00\x60\x00\x00\x02\x92\x80\x80\x80\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x05\x70\x72\x69\x6e\x74\x00\x00\x03\x82\x80\x80\x80\x00\x01\x01\x08\x81\x80\x80\x80\x00\x01\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x41\x01\x10\x00\x0b");

// start.wast:86
let $4 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x01\x7f\x00\x60\x00\x00\x02\x92\x80\x80\x80\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x05\x70\x72\x69\x6e\x74\x00\x00\x03\x82\x80\x80\x80\x00\x01\x01\x08\x81\x80\x80\x80\x00\x01\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x41\x02\x10\x00\x0b");

// start.wast:92
let $5 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x02\x92\x80\x80\x80\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x05\x70\x72\x69\x6e\x74\x00\x00\x08\x81\x80\x80\x80\x00\x00");

// start.wast:97
assert_uninstantiable("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x08\x81\x80\x80\x80\x00\x00\x0a\x89\x80\x80\x80\x00\x01\x83\x80\x80\x80\x00\x00\x00\x0b");