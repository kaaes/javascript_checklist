---
title: Home
layout: default
project : /javascript_checklist
---
##Variables

* defining variables (default value, `var` and `let` operators)
* variable scopes (local and global, block in ECMAScript6)
* variable hoisting 
  [Adequately Good - JavaScript Scoping and Hoisting][hoisting]
* `undefined` vs `null`

##Operators

* operators precedence
* how `+` behaves on strings and numbers
* `||` and `&&`
* real life usage for bitwise operators `|` `~`, `~~`, `>>>`
* `typeof` vs `instanceof` 

##Objects

* global object in browser and in strict mode
* built-in objects vs string literals
* securing the objects with ECMA5 methods

##Arrays

* iterating
* `for...in` vs `for`
* ECMA5 methods `map`, `filter`, `forEach`, `each`, `some`, `reduce`, `reduceRight`
* removing elements from array (`splice` method vs `delete`)
* difference between array literals and object literals

##Functions

* defining (difference between `function foo(){}` and `var foo = function(){}`)
* invoking (as function, as method, as constructor, `call`/`apply`, `bind` (ECMA5))
* default return value and constructor return value
* `arguments` - the array-like object (not an array!)
* `arguments.length` vs `functionName.length`
* function context - `this`!
* the `_this`/`that`/`self` pattern
* closures!

##JSON
* a subset of JS?
  [JSON: The JavaScript subset that isn't][json subset]

##Inheritance

* `prototype` object and prototype chain
* constructors and difference between `fun()` and `new fun()`

##Browsers and DOM

* memory leaks in browsers
* compilators 

##Script loading

* asynchronous/deferred script loading
* scripts concatenation

##Event

* DOM events bubbling and capturing
* cancelable events, bubbling events
* event delegation
* custom events

##Event loop

* timers, `setInterval`, `setTimeout`, how to use them

##Misc

* how `eval` works
* design patterns
  [Adequately Good - JavaScript Module Pattern: In-Depth][module pattern]
  [Essential JavaScript Design Patterns For Beginners, Volume 1][design patterns]

##Reference

[hoisting]: http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting
[module pattern]: http://http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
[design patterns]: http://addyosmani.com/resources/essentialjsdesignpatterns/book/
[json subset]: http://timelessrepo.com/json-isnt-a-javascript-subset