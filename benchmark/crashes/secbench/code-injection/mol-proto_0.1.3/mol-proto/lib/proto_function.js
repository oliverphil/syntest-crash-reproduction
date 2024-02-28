'use strict';


var makeProtoFunction = require('./utils').makeProtoFunction
    , repeat = require('./proto_util').repeat;


/**
 * - [makeFunction](#makeFunction)
 * - [partial](#partial)
 * - [partialRight](#partialRight)
 * - [memoize](#memoize)
 * - [delay](#delay)
 * - [defer](#defer)
 * - [deferTicks](#deferTicks)
 * - [delayMethod](#delayMethod)
 * - [deferMethod](#deferMethod)
 * - [debounce](#debounce)
 * - [throttle](#throttle)
 * - [once](#once)
 *
 * These methods can be [chained](proto.js.html#Proto)
 */
var functionMethods = module.exports = {
    makeFunction: makeFunction,
    partial: partial,
    partialRight: partialRight,
    memoize: memoize,
    delay: delay,
    defer: defer,
    deferTicks: deferTicks,
    delayMethod: delayMethod,
    deferMethod: deferMethod,
    debounce: debounce,
    throttle: throttle,
    once: once
};


var slice = Array.prototype.slice;


/**
 * Similarly to Function constructor creates a function from code.
 * Unlike Function constructor, the first argument is a function name
 *
 * @param {String} name new function name
 * @param {String} arg1, arg2, ... the names of function parameters
 * @param {String} funcBody function body
 * @return {Function}
 */
function makeFunction(arg1, arg2, funcBody) {
    var name = this
        , count = arguments.length - 1
        , funcBody = arguments[count]
        , func
        , code = '';
    for (var i = 0; i < count; i++)
        code += ', ' + arguments[i];
    code = ['func = function ', name, '(', code.slice(2), ') {\n'
                , funcBody, '\n}'].join('');
    eval(code);
    return func;
}


/**
 * Creates a function as a result of partial function application with the passed parameters.
 *
 * @param {Function} self Function to be applied
 * @param {List} arguments Arguments after self will be prepended to the original function call when the partial function is called.
 * @return {Function}
 */
function partial() { // , ... arguments
    var func = this;
    var args = slice.call(arguments);
    return function() {
        return func.apply(this, args.concat(slice.call(arguments)));
    }
}


/**
 * Creates a function as a result of partial function application with the passed parameters, but parameters are appended on the right.
 *
 * @param {Function} self Function to be applied
 * @param {List} arguments Arguments after self will be appended on the right to the original function call when the partial function is called.
 * @return {Function}
 */
function partialRight() { // , ... arguments
    var func = this;
    var args = slice.call(arguments);
    return function() {
        return func.apply(this, slice.call(arguments).concat(args));
    }
}


/**
 * Creates a memoized version of the function using supplied hash function as key. If the hash is not supplied, uses its first parameter as the hash.
 * 
 * @param {Function} self function to be memoized
 * @param {Function} hashFunc optional hash function that is passed all function arguments and should return cache key.
 * @param {Integer} limit optional maximum number of results to be stored in the cache. 1000 by default.
 * @return {Function} memoized function
 */
function memoize(hashFunc, limit) {
    var func = this;
    var cache = {}, keysList = [];
    limit = limit || 1000;

    return function() {
        var key = hashFunc ? hashFunc.apply(this, arguments) : arguments[0];
        if (cache.hasOwnProperty(key))
            return cache[key];

        var result = cache[key] = func.apply(this, arguments);
        keysList.push(key);

        if (keysList.length > limit)
            delete cache[keysList.shift()];

        return result;
    };
}


/**
 * Delays function execution by a given time in milliseconds.
 * The context in function when it is executed is set to `null`.
 *
 * @param {Function} self function that execution has to be delayed
 * @param {Number} wait approximate dalay time in milliseconds
 * @param {List} arguments optional arguments that will be passed to the function
 */
function delay(wait) { // , arguments
    var args = slice.call(arguments, 1);
    return _delay(this, wait, args);
}
 

/**
 * Defers function execution (executes as soon as execution loop becomes free)
 * The context in function when it is executed is set to `null`.
 *
 * @param {Function} self function that execution has to be delayed
 * @param {List} arguments optional arguments that will be passed to the function
 */
function defer() { // , arguments
    return _delay(this, 1, arguments);
}

function _delay(func, wait, args) {
    return setTimeout(func.apply.bind(func, null, args), wait);
}

/**
 * Same as _.defer, takes first argument as the function to be deferred
 */
var deferFunc = makeProtoFunction(defer);

/**
 * Defers function execution for `times` ticks (executes after execution loop becomes free `times` times)
 * The context in function when it is executed is set to `null`.
 *
 * @param {Function} self function that execution has to be delayed
 * @param {Integer} ticks number of times to defer execution
 * @param {List} arguments optional arguments that will be passed to the function
 */
function deferTicks(ticks) { // , arguments
    if (ticks < 2) return defer.apply(this, arguments);
    var args = repeat.call(deferFunc, ticks - 1);
    args = args.concat(this, slice.call(arguments, 1)); 
    deferFunc.apply(null, args);
}


/**
 * Works like _.delay but allows to defer method call of `self` which will be the first _.delayMethod parameter
 *
 * @param {Object} self object to delay method call of
 * @param {String} methodName name of method
 * @param {Number} wait approximate dalay time in milliseconds
 * @param {List} arguments arguments to pass to method
 */
function delayMethod(methodName, wait) { // , ... arguments
    var args = slice.call(arguments, 2);
    _delayMethod(this, methodName, wait, args);
}


/**
 * Works like _.defer but allows to defer method call of `self` which will be the first _.deferMethod parameter
 *
 * @param {Object} self object to defer method call of
 * @param {String} methodName name of method
 * @param {List} arguments arguments to pass to method
 */
function deferMethod(methodName) { // , ... arguments
    var args = slice.call(arguments, 1);
    _delayMethod(this, methodName, 1, args);
}

function _delayMethod(object, methodName, wait, args) {
    return setTimeout(function() {
        object[methodName].apply(object, args);
    }, wait);
}


/**
 * Creates a function that will call original function once it has not been called for a specified time
 *
 * @param {Function} self function that execution has to be delayed
 * @param {Number} wait approximate dalay time in milliseconds
 * @param {Boolean} immediate true to invoke funciton immediately and then ignore following calls for wait milliseconds
 * @return {Function}
 */
function debounce(wait, immediate) {
    var func = this; // first parameter of _.debounce
    var timeout, args, context, timestamp, result;
    return function() {
        context = this; // store original context
        args = arguments;
        timestamp = Date.now();
        var callNow = immediate && ! timeout;
        if (! timeout)
            timeout = setTimeout(later, wait);
        if (callNow)
            result = func.apply(context, args);
        return result;

        function later() {
            var last = Date.now() - timestamp;
            if (last < wait)
                timeout = setTimeout(later, wait - last);
            else {
                timeout = null;
                if (! immediate)
                    result = func.apply(context, args);
            }
        }
    };
}


/**
 * Returns a function, that, when invoked, will only be triggered at most once during a given window of time. 
 *
 * @param {Function} self function that execution has to be delayed
 * @param {Number} wait approximate delay time in milliseconds
 * @param {Object} options `{leading: false}` to disable the execution on the leading edge
 * @return {Function}
 */
function throttle(wait, options) {
    var func = this; // first parameter of _.throttle
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});

    return function() {
        var now = Date.now();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
        } else if (!timeout && options.trailing !== false)
            timeout = setTimeout(later, remaining);

        return result;
    };

    function later() {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
    }
}


/**
 * Call passed function only once
 * @return {Function} self
 */
function once() {
    var func = this
        , ran = false
        , memo;
    return function() {
        if (ran) return memo;
        ran = true;
        memo = func.apply(this, arguments);
        func = null;
        return memo;
    };
}