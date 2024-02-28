'use strict';

var _ = require('../lib/proto')
    , assert = require('assert');


describe('Utility functions', function() {
    it('should define times function', function() {
        var arr = [], thisArg = {}
        _(4).times(function(i) {
            assert.equal(this, thisArg);
            arr.push(i);
        }, thisArg);

        assert.deepEqual(arr, [0, 1, 2, 3]);
    });


    it('should define repeat function', function() {
        var arr = _.repeat({ test: 1 }, 3);
        assert.deepEqual(arr, [{ test: 1 }, { test: 1 }, { test: 1 }]);
    });


    it('should define tap function', function() {
        var obj = { a: 1, b: 2, c: 3 };

        var result = _(obj)
            .mapKeys(function(value) {
                return value * 10;
            })
            .tap(function(self) {
                assert.deepEqual(self, { a: 10, b: 20, c: 30 })
            })
            .allKeys()
            .tap(function(self) {
                assert.deepEqual(self, ['a','b','c']);
            })
            ._();
        
        assert.deepEqual(result, ['a','b','c']);
    });


    it('should define result function', function() {
        var func1 = 'test1'
            , thisArg = {};
            
        function func2() {
            assert.equal(this, thisArg);
            assert.deepEqual(_.slice(arguments), [ 'param0', 'param1' ]);
            return 'test2';
        }

        assert.equal(_.result(func1), 'test1');
        assert.equal(_.result(func2, thisArg, 'param0', 'param1'), 'test2');
    });
});
