webpackJsonp([3],{"0WGl":function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__("GiK3"),__WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__),__WEBPACK_IMPORTED_MODULE_1_actions_counter__=__webpack_require__("oTjF"),__WEBPACK_IMPORTED_MODULE_2_react_redux__=__webpack_require__("RH2O"),_createClass=function(){function e(e,t){for(var _=0;_<t.length;_++){var r=t[_];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,_,r){return _&&e(t.prototype,_),r&&e(t,r),t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}__webpack_require__("3Sk7");var Counter=function(_Component){function Counter(){return _classCallCheck(this,Counter),_possibleConstructorReturn(this,(Counter.__proto__||Object.getPrototypeOf(Counter)).apply(this,arguments))}return _inherits(Counter,_Component),_createClass(Counter,[{key:"render",value:function(){var e=this;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",null,"当前计数为",this.props.counter.count),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{onClick:function(){return e.props.increment()}},"自增"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{onClick:function(){return e.props.decrement()}},"自减"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{onClick:function(){return e.props.reset()}},"重置"))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Counter}(__WEBPACK_IMPORTED_MODULE_0_react__.Component),mapStateToProps=function(e){return{counter:e.counter}},mapDispatchToProps=function(e){return{increment:function(){e(Object(__WEBPACK_IMPORTED_MODULE_1_actions_counter__.e)())},decrement:function(){e(Object(__WEBPACK_IMPORTED_MODULE_1_actions_counter__.d)())},reset:function(){e(Object(__WEBPACK_IMPORTED_MODULE_1_actions_counter__.f)())}}},_default=Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__.connect)(mapStateToProps,mapDispatchToProps)(Counter),a556;__webpack_exports__.default=_default,a556=__webpack_require__("3Sk7").default,a556&&(a556.register(Counter,"Counter","D:\\前端\\React学习包\\dataProject\\src\\pages\\Counter\\Counter.js"),a556.register(mapStateToProps,"mapStateToProps","D:\\前端\\React学习包\\dataProject\\src\\pages\\Counter\\Counter.js"),a556.register(mapDispatchToProps,"mapDispatchToProps","D:\\前端\\React学习包\\dataProject\\src\\pages\\Counter\\Counter.js"),a556.register(_default,"default","D:\\前端\\React学习包\\dataProject\\src\\pages\\Counter\\Counter.js"))}});