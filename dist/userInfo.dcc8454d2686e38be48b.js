webpackJsonp([0],{"1saR":function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__("GiK3"),__WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__),__WEBPACK_IMPORTED_MODULE_1_react_redux__=__webpack_require__("RH2O"),__WEBPACK_IMPORTED_MODULE_2_actions_userInfo__=__webpack_require__("BVBi"),_createClass=function(){function e(e,_){for(var t=0;t<_.length;t++){var r=_[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(_,t,r){return t&&e(_.prototype,t),r&&e(_,r),_}}();function _classCallCheck(e,_){if(!(e instanceof _))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,_){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!_||"object"!=typeof _&&"function"!=typeof _?e:_}function _inherits(e,_){if("function"!=typeof _&&null!==_)throw new TypeError("Super expression must either be null or a function, not "+typeof _);e.prototype=Object.create(_&&_.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_&&(Object.setPrototypeOf?Object.setPrototypeOf(e,_):e.__proto__=_)}__webpack_require__("3Sk7");var UserInfo=function(_Component){function UserInfo(){return _classCallCheck(this,UserInfo),_possibleConstructorReturn(this,(UserInfo.__proto__||Object.getPrototypeOf(UserInfo)).apply(this,arguments))}return _inherits(UserInfo,_Component),_createClass(UserInfo,[{key:"render",value:function(){var e=this,_=this.props.userInfo,t=_.userInfo,r=_.isLoading,n=_.errorMsg;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",null,r?"请求信息中.......":n||__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p",null,"用户信息："),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p",null,"用户名：",t.name),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p",null,"介绍：",t.intro)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{onClick:function(){return e.props.getUserInfo()}},"请求用户信息"))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),UserInfo}(__WEBPACK_IMPORTED_MODULE_0_react__.Component),_default=Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__.connect)(function(e){return console.log("connect",e),{userInfo:e.userInfo}},{getUserInfo:__WEBPACK_IMPORTED_MODULE_2_actions_userInfo__.d})(UserInfo),a55;__webpack_exports__.default=_default,a55=__webpack_require__("3Sk7").default,a55&&(a55.register(UserInfo,"UserInfo","D:\\前端\\React学习包\\dataProject\\src\\pages\\UserInfo\\UserInfo.js"),a55.register(_default,"default","D:\\前端\\React学习包\\dataProject\\src\\pages\\UserInfo\\UserInfo.js"))}});