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


## DOM templates

Apart from extending `string` objects, this library allows for direct manipulation of DOM elements, following the same usage pattern:

`element.t(parameters)`

Example:

Assuming the following excerpt of an HTML document:

`<p id='my-element'>$text</p>`

The execution of the following Javascript snippet

`document.getElementById('my-element').t({text: "lorem ipsum ..."})`

will transform the respective DOM element into:

`<p id='my-element'>lorem ipsum ...</p>`

*Note:* this function can be applied several times to a DOM Element, since DOM Element templates are cached.


# Additional examples

More example usage can be found in the `test` directory of this project:

* `assertions.js` provides insights on the usage of this library, especially in the context of server-side Javascript;
* `assertions.html` provides some usage scenarios to apply this library directly within HTML documents.

# Cautions

This library extends the functionalities provided by the String and DOM Element objects. Use with caution, [since it might break some libraries/scripts](http://perfectionkills.com/whats-wrong-with-extending-the-dom/).