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
var C2 = /*#__PURE__*/ function(C) {
    "use strict";
    _inherits(C2, C);
    function C2() {
        _classCallCheck(this, C2);
        return _possibleConstructorReturn(this, _getPrototypeOf(C2).apply(this, arguments));
    }
    return C2;
}(C);
var D = function D() {
    "use strict";
    _classCallCheck(this, D);
};
function F(x) {
    return 42;
}
var M1;
(function(M) {
    var F2 = function F2(x) {
        return x.toString();
    };
    var A = function A() {
        "use strict";
        _classCallCheck(this, A);
    };
    M.A = A;
    M.F2 = F2;
})(M1 || (M1 = {
}));
// all of these are errors
for(var a;;){
}
for(var a = 1;;){
}
for(var a = 'a string';;){
}
for(var a = new C();;){
}
for(var a = new D();;){
}
for(var a = M1;;){
}
for(var b;;){
}
for(var b = new C();;){
}
for(var b = new C2();;){
}
for(var f = F;;){
}
for(var f = function(x) {
    return '';
};;){
}
for(var arr;;){
}
for(var arr = [
    1,
    2,
    3,
    4
];;){
}
for(var arr = [
    new C(),
    new C2(),
    new D()
];;){
}
for(var arr2 = [
    new D()
];;){
}
for(var arr2 = new Array();;){
}
for(var m;;){
}
for(var m = M1.A;;){
}
