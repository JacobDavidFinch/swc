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
var Base = /*#__PURE__*/ function() {
    "use strict";
    function Base(x) {
        _classCallCheck(this, Base);
    }
    _createClass(Base, [
        {
            key: "b",
            value: function b() {
            }
        },
        {
            key: "c",
            get: function get() {
                return '';
            },
            set: function set(v) {
            }
        }
    ], [
        {
            key: "s",
            value: function s() {
            }
        },
        {
            key: "t",
            get: function get() {
                return '';
            },
            set: function set(v) {
            }
        }
    ]);
    return Base;
}();
var Derived = /*#__PURE__*/ function(Base) {
    "use strict";
    _inherits(Derived, Base);
    function Derived() {
        _classCallCheck(this, Derived);
        return _possibleConstructorReturn(this, _getPrototypeOf(Derived).apply(this, arguments));
    }
    return Derived;
}(Base);
var d = new Derived(1);
var r1 = d.a;
var r2 = d.b();
var r3 = d.c;
d.c = '';
var r4 = Derived.r;
var r5 = Derived.s();
var r6 = Derived.t;
Derived.t = '';
var Base2 = function Base2() {
    "use strict";
    _classCallCheck(this, Base2);
};
var Derived2 = /*#__PURE__*/ function(Base2) {
    "use strict";
    _inherits(Derived2, Base2);
    function Derived2() {
        _classCallCheck(this, Derived2);
        return _possibleConstructorReturn(this, _getPrototypeOf(Derived2).apply(this, arguments));
    }
    return Derived2;
}(Base2);
var d2;
var r7 = d2[''];
var r8 = d2[1];
