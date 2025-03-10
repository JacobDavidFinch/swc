function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var C = /*#__PURE__*/ function() {
    "use strict";
    function C() {
        _classCallCheck(this, C);
    }
    _createClass(C, [
        {
            key: "X",
            get: function get() {
                return 1;
            }
        },
        {
            key: "foo",
            value: function foo() {
                return 1;
            }
        }
    ], [
        {
            key: "Y",
            get: function get() {
                return 1;
            }
        },
        {
            key: "bar",
            value: function bar() {
                return 1;
            }
        }
    ]);
    return C;
}();
var D = /*#__PURE__*/ function(C) {
    "use strict";
    _inherits(D, C);
    function D() {
        _classCallCheck(this, D);
        return _possibleConstructorReturn(this, _getPrototypeOf(D).apply(this, arguments));
    }
    _createClass(D, [
        {
            key: "X",
            get: function get() {
                return null;
            }
        },
        {
            key: "foo",
            value: function foo() {
                return 1;
            }
        }
    ], [
        {
            key: "Y",
            get: function get() {
                return null;
            }
        },
        {
            key: "bar",
            value: function bar() {
                return null;
            }
        }
    ]);
    return D;
}(C);
var E = // if D is a valid class definition than E is now not safe tranisitively through C
/*#__PURE__*/ function(D) {
    "use strict";
    _inherits(E, D);
    function E() {
        _classCallCheck(this, E);
        return _possibleConstructorReturn(this, _getPrototypeOf(E).apply(this, arguments));
    }
    _createClass(E, [
        {
            key: "X",
            get: function get() {
                return '';
            }
        },
        {
            key: "foo",
            value: function foo() {
                return '';
            }
        }
    ], [
        {
            key: "Y",
            get: function get() {
                return '';
            }
        },
        {
            key: "bar",
            value: function bar() {
                return '';
            }
        }
    ]);
    return E;
}(D);
var c;
var d;
var e;
c = d;
c = e;
var r = c.foo(); // e.foo would return string
