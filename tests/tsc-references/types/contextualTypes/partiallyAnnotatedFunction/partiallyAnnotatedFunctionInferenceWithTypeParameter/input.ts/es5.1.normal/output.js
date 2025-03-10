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
var C = function C() {
    "use strict";
    _classCallCheck(this, C);
};
var D = /*#__PURE__*/ function(C) {
    "use strict";
    _inherits(D, C);
    function D() {
        _classCallCheck(this, D);
        return _possibleConstructorReturn(this, _getPrototypeOf(D).apply(this, arguments));
    }
    return D;
}(C);
// exactly
test(function(t1, t2) {
    t2.test2;
});
test(function(t1, t2) {
    t2.test2;
});
// zero arg
test(function() {
});
// fewer args
test(function(t1) {
});
// rest arg
test(function() {
    for(var _len = arguments.length, ts = new Array(_len), _key = 0; _key < _len; _key++){
        ts[_key] = arguments[_key];
    }
});
// source function has rest arg
testRest(function(t1) {
});
testRest(function(t1, t2, t3) {
});
testRest(function(t1, t2, t3) {
});
testRest(function(t1, t2, t3) {
});
testRest(function(t2) {
    for(var _len = arguments.length, t3 = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        t3[_key - 1] = arguments[_key];
    }
});
testRest(function(t2) {
    for(var _len = arguments.length, t3 = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        t3[_key - 1] = arguments[_key];
    }
});
