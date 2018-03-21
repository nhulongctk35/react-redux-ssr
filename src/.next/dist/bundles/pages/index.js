module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Injector/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__injector__ = __webpack_require__("./components/Injector/injector.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__injector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__injectReducers__ = __webpack_require__("./components/Injector/injectReducers.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__injectReducers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__injectSagas__ = __webpack_require__("./components/Injector/injectSagas.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__injectSagas__["a"]; });




/***/ }),

/***/ "./components/Injector/injectReducers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export injectReducer */
/* harmony export (immutable) */ __webpack_exports__["a"] = injectReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




function syncReducers(store) {
  store.replaceReducer(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(_extends({}, store.injectedReducers)));
}

function injectReducer(store, name, asyncReducer) {
  if (store.injectedReducers[name]) {
    return;
  }

  store.injectedReducers[name] = asyncReducer;
  syncReducers(store);
}

function injectReducers(store, reducers) {
  if (reducers && Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["isPlainObject"])(reducers)) {
    Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"])(reducers, function (reducer, name) {
      injectReducer(store, name, reducer);
    });
  }
}

/***/ }),

/***/ "./components/Injector/injectSagas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = injectSagas;

function injectSagas(store, sagas) {
  if (!sagas) {
    return;
  }
  var newEffects = sagas.filter(function (saga) {
    return !store.injectedSagas[saga.name];
  });
  newEffects.forEach(function (saga) {
    var sagaTask = store.runSaga(saga);
    store.injectedSagas[saga.name] = { saga: saga, sagaTask: sagaTask };
  });
}

/***/ }),

/***/ "./components/Injector/injector.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = injector;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__("./store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__injectReducers__ = __webpack_require__("./components/Injector/injectReducers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__injectSagas__ = __webpack_require__("./components/Injector/injectSagas.js");


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/framgia/Projects/react-redux-ssr/src/components/Injector/injector.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








function injector() {
  var injectors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var BaseComponent = arguments[1];

  var WrappedComponent = function (_Component) {
    _inherits(WrappedComponent, _Component);

    function WrappedComponent() {
      _classCallCheck(this, WrappedComponent);

      return _possibleConstructorReturn(this, (WrappedComponent.__proto__ || Object.getPrototypeOf(WrappedComponent)).apply(this, arguments));
    }

    _createClass(WrappedComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        Object(__WEBPACK_IMPORTED_MODULE_4__injectReducers__["a" /* injectReducers */])(this.context.store, injectors.reducers);
        Object(__WEBPACK_IMPORTED_MODULE_5__injectSagas__["a" /* injectSagas */])(this.context.store, injectors.sagas);
      }
    }, {
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(BaseComponent, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }));
      }
    }], [{
      key: 'getInitialProps',
      value: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
          var store;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  store = ctx.store;

                  Object(__WEBPACK_IMPORTED_MODULE_4__injectReducers__["a" /* injectReducers */])(store, injectors.reducers);
                  Object(__WEBPACK_IMPORTED_MODULE_5__injectSagas__["a" /* injectSagas */])(store, injectors.sagas);

                  if (!BaseComponent.getInitialProps) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 6;
                  return BaseComponent.getInitialProps(ctx);

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x2) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    return WrappedComponent;
  }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

  WrappedComponent.contextTypes = { store: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object };
  return Object(__WEBPACK_IMPORTED_MODULE_3__store__["a" /* withReduxSaga */])(WrappedComponent);
}

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users__ = __webpack_require__("./pages/users/index.js");


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__users__["a" /* default */]);

/***/ }),

/***/ "./pages/users/Users.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/home/framgia/Projects/react-redux-ssr/src/pages/users/Users.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Users = function (_Component) {
  _inherits(Users, _Component);

  function Users() {
    _classCallCheck(this, Users);

    return _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).apply(this, arguments));
  }

  _createClass(Users, [{
    key: 'render',
    value: function render() {
      var _props$data = this.props.data,
          data = _props$data === undefined ? [] : _props$data;

      var usersView = data.map(function (user) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { key: user.id, __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            }
          },
          JSON.stringify(user)
        );
      });

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        usersView
      );
    }
  }]);

  return Users;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Users);

/***/ }),

/***/ "./pages/users/UsersContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_es6_promise__ = __webpack_require__("es6-promise");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_es6_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_es6_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users__ = __webpack_require__("./pages/users/Users.js");
var _jsxFileName = '/home/framgia/Projects/react-redux-ssr/src/pages/users/UsersContainer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






__WEBPACK_IMPORTED_MODULE_2_es6_promise___default.a.polyfill();



var UsersContainer = function (_Component) {
  _inherits(UsersContainer, _Component);

  function UsersContainer() {
    _classCallCheck(this, UsersContainer);

    return _possibleConstructorReturn(this, (UsersContainer.__proto__ || Object.getPrototypeOf(UsersContainer)).apply(this, arguments));
  }

  _createClass(UsersContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.dispatch({
        type: 'LOAD_DATA'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var users = this.props.users;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Users__["a" /* default */], { data: users, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      });
    }
  }]);

  return UsersContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    users: state.users.users
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(UsersContainer));

/***/ }),

/***/ "./pages/users/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Injector__ = __webpack_require__("./components/Injector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sagas__ = __webpack_require__("./pages/users/sagas.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("./pages/users/reducers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UsersContainer__ = __webpack_require__("./pages/users/UsersContainer.js");





/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__components_Injector__["c" /* injector */])({ reducers: __WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], sagas: __WEBPACK_IMPORTED_MODULE_1__sagas__["a" /* default */] }, __WEBPACK_IMPORTED_MODULE_3__UsersContainer__["a" /* default */]));

/***/ }),

/***/ "./pages/users/reducers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var initState = {
  users: []
};

function userReducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case 'LOAD_DATA_SUCCESS':
      {
        return Object.assign({}, state, { users: payload });
      }
    default:
      return state;
  }
}

var reducers = {};
reducers['users'] = userReducers;
/* harmony default export */ __webpack_exports__["a"] = (reducers);

/***/ }),

/***/ "./pages/users/sagas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__("redux-saga/effects");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__);


var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(loadDataSaga),
    _marked2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(rootSaga);




function loadDataSuccess(data) {
  return {
    type: 'LOAD_DATA_SUCCESS',
    payload: data
  };
}

function loadDataSaga() {
  var res, data;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function loadDataSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch('https://jsonplaceholder.typicode.com/users');

        case 3:
          res = _context.sent;
          _context.next = 6;
          return res.json();

        case 6:
          data = _context.sent;
          _context.next = 9;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(loadDataSuccess(data));

        case 9:
          _context.next = 13;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context['catch'](0);

        case 13:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 11]]);
}

function rootSaga() {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function rootSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["all"])([Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["takeLatest"])('LOAD_DATA', loadDataSaga)]);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

/* harmony default export */ __webpack_exports__["a"] = ([rootSaga]);

/***/ }),

/***/ "./reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ "./saga.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([]);

/***/ }),

/***/ "./store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export configureStore */
/* harmony export (immutable) */ __webpack_exports__["a"] = withReduxSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_saga__ = __webpack_require__("redux-saga");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_saga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducer__ = __webpack_require__("./reducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__saga__ = __webpack_require__("./saga.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Injector__ = __webpack_require__("./components/Injector/index.js");


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/framgia/Projects/react-redux-ssr/src/store.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }












var sagaMiddleware = __WEBPACK_IMPORTED_MODULE_4_redux_saga___default()();

var bindMiddleware = function bindMiddleware(middleware) {
  if (true) {
    var _require = __webpack_require__("redux-devtools-extension"),
        composeWithDevTools = _require.composeWithDevTools;

    return composeWithDevTools(__WEBPACK_IMPORTED_MODULE_2_redux__["applyMiddleware"].apply(undefined, _toConsumableArray(middleware)));
  }
  return __WEBPACK_IMPORTED_MODULE_2_redux__["applyMiddleware"].apply(undefined, _toConsumableArray(middleware));
};

function configureStore() {
  var _this = this;

  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var store = Object(__WEBPACK_IMPORTED_MODULE_2_redux__["createStore"])(function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return state;
  }, initialState, bindMiddleware([sagaMiddleware]));

  store.runSaga = function (saga) {
    return sagaMiddleware.run(saga);
  };
  store.injectedReducers = {};
  store.injectedSagas = {};

  store.sagaTasksDone = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(isServer) {
      var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, saga;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (isServer) {
                store.dispatch(__WEBPACK_IMPORTED_MODULE_4_redux_saga__["END"]);
              }

              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 4;
              _iterator = Object.values(store.injectedSagas)[Symbol.iterator]();

            case 6:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context.next = 13;
                break;
              }

              saga = _step.value;
              _context.next = 10;
              return saga.sagaTask;

            case 10:
              _iteratorNormalCompletion = true;
              _context.next = 6;
              break;

            case 13:
              _context.next = 19;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context['catch'](4);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 19:
              _context.prev = 19;
              _context.prev = 20;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 22:
              _context.prev = 22;

              if (!_didIteratorError) {
                _context.next = 25;
                break;
              }

              throw _iteratorError;

            case 25:
              return _context.finish(22);

            case 26:
              return _context.finish(19);

            case 27:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[4, 15, 19, 27], [20,, 22, 26]]);
    }));

    return function (_x3) {
      return _ref.apply(this, arguments);
    };
  }();

  Object(__WEBPACK_IMPORTED_MODULE_7__components_Injector__["a" /* injectReducers */])(store, __WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */]);
  Object(__WEBPACK_IMPORTED_MODULE_7__components_Injector__["b" /* injectSagas */])(store, __WEBPACK_IMPORTED_MODULE_6__saga__["a" /* default */]);
  return store;
}

function withReduxSagaWrapper(BaseComponent) {
  var WrappedComponent = function (_React$Component) {
    _inherits(WrappedComponent, _React$Component);

    function WrappedComponent() {
      _classCallCheck(this, WrappedComponent);

      return _possibleConstructorReturn(this, (WrappedComponent.__proto__ || Object.getPrototypeOf(WrappedComponent)).apply(this, arguments));
    }

    _createClass(WrappedComponent, [{
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(BaseComponent, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }));
      }
    }], [{
      key: 'getInitialProps',
      value: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
          var isServer, store, props;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  isServer = ctx.isServer, store = ctx.store;
                  props = void 0;

                  if (!BaseComponent.getInitialProps) {
                    _context2.next = 6;
                    break;
                  }

                  _context2.next = 5;
                  return BaseComponent.getInitialProps(ctx);

                case 5:
                  props = _context2.sent;

                case 6:
                  if (!isServer) {
                    _context2.next = 9;
                    break;
                  }

                  _context2.next = 9;
                  return store.sagaTasksDone(isServer);

                case 9:
                  return _context2.abrupt('return', props);

                case 10:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function getInitialProps(_x4) {
          return _ref2.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    return WrappedComponent;
  }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

  return WrappedComponent;
}

function withReduxSaga(BaseComponent) {
  return __WEBPACK_IMPORTED_MODULE_3_next_redux_wrapper___default()(configureStore)(withReduxSagaWrapper(BaseComponent));
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "es6-promise":
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map