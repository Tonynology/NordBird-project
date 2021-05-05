webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux-saga/core/effects */ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removeFollower),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadFollowers),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadFollowings),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(changeNickname),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadUser),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(follow),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(unfollow),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOut),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signUp),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemoveFollower),
    _marked12 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadFollowing),
    _marked13 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadFollowers),
    _marked14 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchChangeNickname),
    _marked15 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadUser),
    _marked16 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchFollow),
    _marked17 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnfollow),
    _marked18 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogin),
    _marked19 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),
    _marked20 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignUp),
    _marked21 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);





function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/user/follower/".concat(data));
}

function removeFollower(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removeFollower$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removeFollowerAPI, action.data);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_FOLLOWER_SUCCESS"],
            data: result.data
          });

        case 6:
          _context.next = 13;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          _context.next = 13;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_FOLLOWER_FAILURE"],
            error: _context.t0.response.data
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/user/followers', data);
}

function loadFollowers(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadFollowers$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowersAPI, action.data);

        case 3:
          result = _context2.sent;
          _context2.next = 6;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: LOAD_FOLLOWERS_SUCCESS,
            data: result.data
          });

        case 6:
          _context2.next = 13;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          _context2.next = 13;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: LOAD_FOLLOWERS_FAILURE,
            error: _context2.t0.response.data
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}

function loadFollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/user/followings', data);
}

function loadFollowings(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadFollowings$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowingsAPI, action.data);

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_FOLLOWINGS_SUCCESS"],
            data: result.data
          });

        case 6:
          _context3.next = 13;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          _context3.next = 13;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_FOLLOWINGS_FAILURE"],
            error: _context3.t0.response.data
          });

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
}

function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch('/user/nickname', {
    nickname: data
  });
}

function changeNickname(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function changeNickname$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(changeNicknameAPI, action.data);

        case 3:
          result = _context4.sent;
          _context4.next = 6;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_SUCCESS"],
            data: result.data
          });

        case 6:
          _context4.next = 13;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);
          _context4.next = 13;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_FAILURE"],
            error: _context4.t0.response.data
          });

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 8]]);
}

function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/user');
}

function loadUser(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadUser$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserAPI, action.data);

        case 3:
          result = _context5.sent;
          _context5.next = 6;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_SUCCESS"],
            data: result.data
          });

        case 6:
          _context5.next = 13;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          _context5.next = 13;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_FAILURE"],
            error: _context5.t0.response.data
          });

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 8]]);
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/user/".concat(data, "/follow"));
}

function follow(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function follow$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(followAPI, action.data);

        case 3:
          result = _context6.sent;
          _context6.next = 6;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_SUCCESS"],
            data: result.data
          });

        case 6:
          _context6.next = 13;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);
          _context6.next = 13;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_FAILURE"],
            error: _context6.t0.response.data
          });

        case 13:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 8]]);
}

function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/user/".concat(data, "/follow"));
}

function unfollow(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unfollow$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unfollowAPI, action.data);

        case 3:
          result = _context7.sent;
          _context7.next = 6;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_SUCCESS"],
            data: result.data
          });

        case 6:
          _context7.next = 13;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);
          _context7.next = 13;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_FAILURE"],
            error: _context7.t0.response.data
          });

        case 13:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 8]]);
}

function loginAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user/login', data);
}

function logIn(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loginAPI, action.data);

        case 3:
          result = _context8.sent;
          _context8.next = 6;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_SUCCESS"],
            data: result.data
          });

        case 6:
          _context8.next = 13;
          break;

        case 8:
          _context8.prev = 8;
          _context8.t0 = _context8["catch"](0);
          console.error(_context8.t0);
          _context8.next = 13;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_FAILURE"],
            error: _context8.t0.response.data
          });

        case 13:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8, null, [[0, 8]]);
}

function logoutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/logout');
}

function logOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOut$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logoutAPI);

        case 3:
          _context9.next = 5;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_SUCCESS"]
          });

        case 5:
          _context9.next = 12;
          break;

        case 7:
          _context9.prev = 7;
          _context9.t0 = _context9["catch"](0);
          console.error(_context9.t0);
          _context9.next = 12;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_FAILURE"],
            error: _context9.t0.response.data
          });

        case 12:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9, null, [[0, 7]]);
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user', data);
}

function signUp(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signUp$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signUpAPI, action.data);

        case 3:
          result = _context10.sent;
          console.log(result);
          _context10.next = 7;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_SUCCESS"]
          });

        case 7:
          _context10.next = 14;
          break;

        case 9:
          _context10.prev = 9;
          _context10.t0 = _context10["catch"](0);
          console.error(_context10.t0);
          _context10.next = 14;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_FAILURE"],
            error: _context10.t0.response.data
          });

        case 14:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10, null, [[0, 9]]);
}

function watchRemoveFollower() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemoveFollower$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_FOLLOWER_REQUEST"], removeFollower);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

function watchLoadFollowing() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadFollowing$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function watchLoadFollowers() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadFollowers$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(LOAD_FOLLOWERS_REQUEST, loadFollowers);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}

function watchChangeNickname() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchChangeNickname$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_REQUEST"], changeNickname);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}

function watchLoadUser() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadUser$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_REQUEST"], loadUser);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15);
}

function watchFollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchFollow$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_REQUEST"], follow);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked16);
}

function watchUnfollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnfollow$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_REQUEST"], unfollow);

        case 2:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked17);
}

function watchLogin() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogin$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_REQUEST"], logIn);

        case 2:
        case "end":
          return _context18.stop();
      }
    }
  }, _marked18);
}

function watchLogOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_REQUEST"], logOut);

        case 2:
        case "end":
          return _context19.stop();
      }
    }
  }, _marked19);
}

function watchSignUp() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignUp$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_REQUEST"], signUp);

        case 2:
        case "end":
          return _context20.stop();
      }
    }
  }, _marked20);
}

function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemoveFollower), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowing), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowers), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchChangeNickname), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUser), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogin), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp)]);

        case 2:
        case "end":
          return _context21.stop();
      }
    }
  }, _marked21);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJyZW1vdmVGb2xsb3dlciIsImxvYWRGb2xsb3dlcnMiLCJsb2FkRm9sbG93aW5ncyIsImNoYW5nZU5pY2tuYW1lIiwibG9hZFVzZXIiLCJmb2xsb3ciLCJ1bmZvbGxvdyIsImxvZ0luIiwibG9nT3V0Iiwic2lnblVwIiwid2F0Y2hSZW1vdmVGb2xsb3dlciIsIndhdGNoTG9hZEZvbGxvd2luZyIsIndhdGNoTG9hZEZvbGxvd2VycyIsIndhdGNoQ2hhbmdlTmlja25hbWUiLCJ3YXRjaExvYWRVc2VyIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuZm9sbG93Iiwid2F0Y2hMb2dpbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ1c2VyU2FnYSIsInJlbW92ZUZvbGxvd2VyQVBJIiwiZGF0YSIsImF4aW9zIiwiYWN0aW9uIiwiY2FsbCIsInJlc3VsdCIsInB1dCIsInR5cGUiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsImNvbnNvbGUiLCJlcnJvciIsIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFIiwicmVzcG9uc2UiLCJsb2FkRm9sbG93ZXJzQVBJIiwiZ2V0IiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJsb2FkRm9sbG93aW5nc0FQSSIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJjaGFuZ2VOaWNrbmFtZUFQSSIsInBhdGNoIiwibmlja25hbWUiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwibG9hZFVzZXJBUEkiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiZm9sbG93QVBJIiwicG9zdCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJ1bmZvbGxvd0FQSSIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwibG9naW5BUEkiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwibG9nb3V0QVBJIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwic2lnblVwQVBJIiwibG9nIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwidGFrZUxhdGVzdCIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfUkVRVUVTVCIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX09VVF9SRVFVRVNUIiwiU0lHTl9VUF9SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBb0NVQSxjO21HQXFCQUMsYTttR0FxQkFDLGM7bUdBcUJBQyxjO21HQXFCQUMsUTttR0FxQkFDLE07bUdBb0JBQyxRO21HQW9CQUMsSzttR0FxQkFDLE07b0dBcUJBQyxNO29HQWdCQUMsbUI7b0dBSUFDLGtCO29HQUlBQyxrQjtvR0FJQUMsbUI7b0dBSUFDLGE7b0dBSUFDLFc7b0dBSUFDLGE7b0dBSUFDLFU7b0dBSUFDLFc7b0dBSUFDLFc7b0dBSWVDLFE7O0FBdlJ6QjtBQUNBO0FBQ0E7O0FBOEJBLFNBQVNDLGlCQUFULENBQTJCQyxJQUEzQixFQUFpQztBQUM3QixTQUFPQyw0Q0FBSyxVQUFMLDBCQUErQkQsSUFBL0IsRUFBUDtBQUNIOztBQUVELFNBQVV0QixjQUFWLENBQXlCd0IsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUd1QixpQkFBTUMscUVBQUksQ0FBQ0osaUJBQUQsRUFBb0JHLE1BQU0sQ0FBQ0YsSUFBM0IsQ0FBVjs7QUFIdkI7QUFHY0ks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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVVcsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWCxpQkFBTXlELG9FQUFHLENBQUMsQ0FDTkMscUVBQUksQ0FBQ3BFLG1CQUFELENBREUsRUFFTm9FLHFFQUFJLENBQUNuRSxrQkFBRCxDQUZFLEVBR05tRSxxRUFBSSxDQUFDbEUsa0JBQUQsQ0FIRSxFQUlOa0UscUVBQUksQ0FBQ2pFLG1CQUFELENBSkUsRUFLTmlFLHFFQUFJLENBQUNoRSxhQUFELENBTEUsRUFNTmdFLHFFQUFJLENBQUMvRCxXQUFELENBTkUsRUFPTitELHFFQUFJLENBQUM5RCxhQUFELENBUEUsRUFRTjhELHFFQUFJLENBQUM3RCxVQUFELENBUkUsRUFTTjZELHFFQUFJLENBQUM1RCxXQUFELENBVEUsRUFVTjRELHFFQUFJLENBQUMzRCxXQUFELENBVkUsQ0FBRCxDQUFUOztBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNmU3OWY4MDBhMWVjZTk5NmJjYzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgZm9yaywgcHV0LCBkZWxheSwgdGFrZUxhdGVzdCwgY2FsbCB9IGZyb20gXCJAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtcclxuICAgIEZPTExPV19GQUlMVVJFLFxyXG4gICAgRk9MTE9XX1JFUVVFU1QsXHJcbiAgICBGT0xMT1dfU1VDQ0VTUyxcclxuICAgIFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICBVTkZPTExPV19SRVFVRVNULFxyXG4gICAgVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgIExPR19JTl9GQUlMVVJFLFxyXG4gICAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBMT0dfSU5fU1VDQ0VTUyxcclxuICAgIExPR19PVVRfRkFJTFVSRSxcclxuICAgIExPR19PVVRfUkVRVUVTVCxcclxuICAgIExPR19PVVRfU1VDQ0VTUyxcclxuICAgIFNJR05fVVBfRkFJTFVSRSxcclxuICAgIFNJR05fVVBfUkVRVUVTVCxcclxuICAgIFNJR05fVVBfU1VDQ0VTUywgIFxyXG4gICAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgIExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXHJcbiAgICBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICAgIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gICAgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsXHJcbiAgICBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG4gICAgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsXHJcbiAgICBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcclxuICAgIExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG4gIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbiAgXHJcbmZ1bmN0aW9uIHJlbW92ZUZvbGxvd2VyQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyL2ZvbGxvd2VyLyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZUZvbGxvd2VyKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUZvbGxvd2VyQVBJLCBhY3Rpb24uZGF0YSk7ICAgIC8vY2FsbOydhCDsk7DrqbQg64+Z6riwLCBmb3Jr66W8IOyTsOuptCDruYTrj5nquLAuIHJlc3VsdOqwkuydhCDrsJvqs6Ag7KeE7ZaJ7ZW07JW8IO2VmOuvgOuhnCBjYWxs7J2EIOyCrOyaqS5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93ZXJzQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2VycycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2VycyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93ZXJzQVBJLCBhY3Rpb24uZGF0YSk7ICAgIC8vY2FsbOydhCDsk7DrqbQg64+Z6riwLCBmb3Jr66W8IOyTsOuptCDruYTrj5nquLAuIHJlc3VsdOqwkuydhCDrsJvqs6Ag7KeE7ZaJ7ZW07JW8IO2VmOuvgOuhnCBjYWxs7J2EIOyCrOyaqS5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEZvbGxvd2luZ3NBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvZm9sbG93aW5ncycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2luZ3MoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2luZ3NBUEksIGFjdGlvbi5kYXRhKTsgICAgLy9jYWxs7J2EIOyTsOuptCDrj5nquLAsIGZvcmvrpbwg7JOw66m0IOu5hOuPmeq4sC4gcmVzdWx06rCS7J2EIOuwm+qzoCDsp4TtlontlbTslbwg7ZWY66+A66GcIGNhbGzsnYQg7IKs7JqpLlxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZU5pY2tuYW1lQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaCgnL3VzZXIvbmlja25hbWUnLCB7IG5pY2tuYW1lOiBkYXRhIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogY2hhbmdlTmlja25hbWUoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY2hhbmdlTmlja25hbWVBUEksIGFjdGlvbi5kYXRhKTsgICAgLy9jYWxs7J2EIOyTsOuptCDrj5nquLAsIGZvcmvrpbwg7JOw66m0IOu5hOuPmeq4sC4gcmVzdWx06rCS7J2EIOuwm+qzoCDsp4TtlontlbTslbwg7ZWY66+A66GcIGNhbGzsnYQg7IKs7JqpLlxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyJylcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRVc2VyKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQVBJLCBhY3Rpb24uZGF0YSk7ICAgIC8vY2FsbOydhCDsk7DrqbQg64+Z6riwLCBmb3Jr66W8IOyTsOuptCDruYTrj5nquLAuIHJlc3VsdOqwkuydhCDrsJvqs6Ag7KeE7ZaJ7ZW07JW8IO2VmOuvgOuhnCBjYWxs7J2EIOyCrOyaqS5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC91c2VyLyR7ZGF0YX0vZm9sbG93YClcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dBUEksIGFjdGlvbi5kYXRhKTsgICAgLy9jYWxs7J2EIOyTsOuptCDrj5nquLAsIGZvcmvrpbwg7JOw66m0IOu5hOuPmeq4sC4gcmVzdWx06rCS7J2EIOuwm+qzoCDsp4TtlontlbTslbwg7ZWY66+A66GcIGNhbGzsnYQg7IKs7JqpLlxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gdW5mb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKVxyXG59XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5mb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dpbkFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9naW5BUEksIGFjdGlvbi5kYXRhKTsgICAgLy9jYWxs7J2EIOyTsOuptCDrj5nquLAsIGZvcmvrpbwg7JOw66m0IOu5hOuPmeq4sC4gcmVzdWx06rCS7J2EIOuwm+qzoCDsp4TtlontlbTslbwg7ZWY66+A66GcIGNhbGzsnYQg7IKs7JqpLlxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dvdXRBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2xvZ291dCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nb3V0QVBJKTsgICAgLy9jYWxs7J2EIOyTsOuptCDrj5nquLAsIGZvcmvrpbwg7JOw66m0IOu5hOuPmeq4sC4gcmVzdWx06rCS7J2EIOuwm+qzoCDsp4TtlontlbTslbwg7ZWY66+A66GcIGNhbGzsnYQg7IKs7JqpLlxyXG4gICAgICAgIHlpZWxkIGNhbGwobG9nb3V0QVBJKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSAgICBcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlRm9sbG93ZXIoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULCByZW1vdmVGb2xsb3dlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dpbmcoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBsb2FkRm9sbG93aW5ncyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dlcnMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRGb2xsb3dlcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hDaGFuZ2VOaWNrbmFtZSgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tuYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkVXNlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVuZm9sbG93KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ2luKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZUZvbGxvd2VyKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2luZyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRGb2xsb3dlcnMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hDaGFuZ2VOaWNrbmFtZSksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRVc2VyKSxcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dpbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcClcclxuICAgIF0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==