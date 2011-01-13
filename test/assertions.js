// run with the command: node assertions.js

var fs = require("fs");
var assert = require("assert");

require("../nanotemplate.js");

// positional arguments
assert.equal("simple test".t(), "simple test");
assert.equal("simple test $0".t(1), "simple test 1");
assert.equal("simple test $0".t("foo"), "simple test foo");
assert.equal("simple test $0 $1 $2".t("test", "tester", "tested"), "simple test test tester tested");

// named arguments
assert.equal("simple test $foo".t({foo: "bar"}), "simple test bar");
assert.equal("<a href='$url'>$text</a>".t({url: "http://foo.com", text: "foo"}), "<a href='http://foo.com'>foo</a>");

// iterations
assert.equal("test $0 ".t([1,2,3]), "test 1 test 2 test 3 ");
assert.equal("<a href='$url'>$text</a>".t([
	{url: "http://foo.com", text: "foo"},
	{url: "http://bar.com", text: "bar"}]),
	"<a href='http://foo.com'>foo</a><a href='http://bar.com'>bar</a>"
);

// incorrect uses
assert.equal("simple test $0".t(1,2,3), "simple test 1");
assert.equal("simple test $ $$".t(), "simple test $ $$");