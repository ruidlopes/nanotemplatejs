# Nano Template JS

This tiny Javascript library provides a small addition to the `string` object that allows for simple templating features.

# Usage

This library provides a single function, `t` (and an alias named `template`) that can be executed on Javascript strings. Templates are identified by the `$` marker, followed either by a number starting from `0` (e.g., `$2`) or a word (e.g., `$foo`).


## Positional parameters

The easiest way to use this library is passing the values to be replaced directly as function arguments:

`string.t(value1, value2, value3, ...)`

Example:

`"test $0 $1".t("one", "two")` returns `"test one two"`


## Named parameters

Since arguments have implicit assignment to their position, this library provides word-based templates, which should be passed as simple Javascript objects:

`string.t(object)`

Example:

`"<a href='$url'>$text</a>".t({url:"http://foo.com", text: "foo"})` returns `"<a href='http://foo.com'>foo</a>"`


## Looping

This library also provides looping capabilities, which can be useful for applying a single template to a set of values. This is achieved by passing a Javascript array as a single parameter:

`string.t(array)`

Example:

`"test $0 ".t(["one", "two"])` returns `"test one test two "`


# Additional examples

More example usage can be found in the `test` directory of this project:

* `assertions.js` provides insights on the usage of this library, especially in the context of server-side Javascript
* `example.html` provides some usage scenarios to apply this library directly within HTML files