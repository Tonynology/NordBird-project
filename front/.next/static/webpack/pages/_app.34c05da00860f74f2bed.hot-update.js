webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  loadUserLoading: false,
  //유저 정보 가져오기 시도중
  loadUserDone: false,
  loadUserError: null,
  followLoading: false,
  //팔로우 시도중
  followDone: false,
  followError: null,
  unfollowLoading: false,
  //언팔로우 시도중
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false,
  //로그인 시도중
  logInDone: false,
  logInError: null,
  //로그아웃 시도중
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  //닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  loadFollowingsLoading: false,
  loadFollowingsDone: false,
  loadFollowingsError: null,
  loadFollowersLoading: false,
  loadFollowersDone: false,
  loadFollowersError: null,
  removeFollowerLoading: false,
  removeFollowerDone: false,
  removeFollowerError: null,
  me: null,
  signUpData: {},
  loginData: {}
};
var LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
var LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
var LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
var CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
var CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
var FOLLOW_REQUEST = 'FOLLOW_REQUEST';
var FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
var FOLLOW_FAILURE = 'FOLLOW_FAILURE';
var UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
var UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
var UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
var REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
var REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
var REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
var LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
var LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
var LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
var LOAD_FOLLOWERS_REQUEST = 'UNFOLLOW_REQUEST';
var LOAD_FOLLOWERS_SUCCESS = 'UNFOLLOW_SUCCESS';
var LOAD_FOLLOWERS_FAILURE = 'UNFOLLOW_FAILURE';
var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME'; // const dummyUser = (data) => ({
//     ...data,
//     nickname: 'tony',
//     id: 1,
//     Posts: [{ id: 1},],
//     Followings: [{ nickname: 'tm' }, { nickname: 'tty' }],
//     Followers: [{ nickname: 'tm' }, { nickname: 'tty' }],
// });

var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: LOG_OUT_REQUEST
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case REMOVE_FOLLOWER_REQUEST:
        draft.removeFollowerLoading = true;
        draft.removeFollowerError = null, draft.removeFollowerDone = false;
        break;

      case REMOVE_FOLLOWER_SUCCESS:
        draft.removeFollowerLoading = false;
        draft.me.Followers = draft.me.Followers.filter(function (v) {
          return v.id !== action.data.UserId;
        });
        draft.removeFollowerDone = true;
        break;

      case REMOVE_FOLLOWER_FAILURE:
        draft.removeFollowerloading = false;
        draft.removeFollowerError = action.error;
        break;

      case LOAD_FOLLOWINGS_REQUEST:
        draft.loadFollowingsLoading = true;
        draft.loadFollowingsError = null, draft.loadFollowingsDone = false;
        break;

      case LOAD_FOLLOWINGS_SUCCESS:
        draft.loadFollowingsLoading = false;
        draft.me.Followings = action.data;
        draft.loadFollowingsDone = true;
        break;

      case LOAD_FOLLOWINGS_FAILURE:
        draft.loadFollowingsloading = false;
        draft.loadFollowingsError = action.error;
        break;

      case LOAD_FOLLOWERS_REQUEST:
        draft.loadFollowersLoading = true;
        draft.loadFollowersError = null, draft.loadFollowersDone = false;
        break;

      case LOAD_FOLLOWERS_SUCCESS:
        draft.loadFollowersLoading = false;
        draft.me.Followers = action.data;
        draft.loadFollowersDone = true;
        break;

      case LOAD_FOLLOWERS_FAILURE:
        draft.loadFollowersloading = false;
        draft.loadFollowersError = action.error;
        break;

      case LOAD_MY_INFO_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserError = null, draft.loadUserDone = false;
        break;

      case LOAD_MY_INFO_SUCCESS:
        draft.loadUserLoading = false;
        draft.me = action.data;
        draft.loadUserDone = true;
        break;

      case LOAD_MY_INFO_FAILURE:
        draft.loadUserloading = false;
        draft.loadUserError = action.error;
        break;

      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followError = null, draft.followDone = false;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.me.Followings.push({
          id: action.data.UserId
        });
        draft.followDone = true;
        break;

      case FOLLOW_FAILURE:
        draft.followloading = false;
        draft.followError = action.error;
        break;

      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowError = null, draft.unfollowDone = false;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.me.Followings = draft.me.Followings.filter(function (v) {
          return v.id !== action.data.UserId;
        });
        draft.unfollowDone = true;
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null, draft.logInDone = false;
        break;
      // return {
      //     ...state,
      //     loginLoading: true,
      //     logInError: null,
      //     logInDone: false,
      // };

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.me = action.data;
        draft.logInDone = true;
        break;
      // return {
      //     ...state,
      //     logInLoading: false,
      //     logInDone: true,
      //     me: dummyUser(action.data),
      // };

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      // return {
      //     ...state,
      //     logInLoading: false,
      //     logInError: action.error,
      // };

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      // return {
      //     ...state,
      //     logOutLoading: true,
      //     logOutDone: false,
      //     logOutError: null,
      // };

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;
      // return {
      //     ...state,
      //     logOutLoading: false,
      //     logOutDone: true,
      //     me: null,
      // };

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      // return {
      //     ...state,
      //     logOutLoading: false,
      //     logOutError: action.error,
      // };

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      // return {
      //     ...state,
      //     signUpLoading: true,
      //     signUpDone: false,
      //     signUpError: null,
      // };

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      // return {
      //     ...state,
      //     signUpLoading: false,
      //     signUpDone: true,
      // };

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      // return {
      //     ...state,
      //     signUpLoading: false,
      //     signUpError: action.error,
      // };

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;
      // return {
      //     ...state,
      //     changeNicknameLoading: true,
      //     changeNicknameDone: false,
      //     changeNicknameError: null,
      // };

      case CHANGE_NICKNAME_SUCCESS:
        draft.me.nickname = action.data.nickname;
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;
      // return {
      //     ...state,
      //     changeNicknameLoading: false,
      //     changeNicknameDone: true,
      // };

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;
      // return {
      //     ...state,
      //     changeNicknameLoading: false,
      //     changeNicknameError: action.error,
      // };

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;
      // return {
      //     ...state,
      //     me: {
      //         ...state.me,
      //         Posts: [{ id: action.data }, ...state.me.Posts]
      //     },
      // };

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(function (v) {
          return v.id !== action.data;
        });
        break;
      // return {
      //     ...state,
      //     me: {
      //         ...state.me,
      //         Posts: state.me.Posts.filter((v) => v.id === action.data),
      //     },
      // };

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibG9hZEZvbGxvd2luZ3NMb2FkaW5nIiwibG9hZEZvbGxvd2luZ3NEb25lIiwibG9hZEZvbGxvd2luZ3NFcnJvciIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJyZW1vdmVGb2xsb3dlckxvYWRpbmciLCJyZW1vdmVGb2xsb3dlckRvbmUiLCJyZW1vdmVGb2xsb3dlckVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFIiwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyIsIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFIiwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCIsIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsIkZvbGxvd2VycyIsImZpbHRlciIsInYiLCJpZCIsIlVzZXJJZCIsInJlbW92ZUZvbGxvd2VybG9hZGluZyIsImVycm9yIiwiRm9sbG93aW5ncyIsImxvYWRGb2xsb3dpbmdzbG9hZGluZyIsImxvYWRGb2xsb3dlcnNsb2FkaW5nIiwibG9hZFVzZXJsb2FkaW5nIiwicHVzaCIsImZvbGxvd2xvYWRpbmciLCJuaWNrbmFtZSIsIlBvc3RzIiwidW5zaGlmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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NGMwNWRhMDA4NjBmNzRmMmJlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxvYWRVc2VyTG9hZGluZzogZmFsc2UsIC8v7Jyg7KCAIOygleuztCDqsIDsoLjsmKTquLAg7Iuc64+E7KSRXHJcbiAgICBsb2FkVXNlckRvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFVzZXJFcnJvcjogbnVsbCwgXHJcbiAgICBmb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy/tjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIGZvbGxvd0Vycm9yOiBudWxsLCBcclxuICAgIHVuZm9sbG93TG9hZGluZzogZmFsc2UsIC8v7Ja47YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gICAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIHVuZm9sbG93RXJyb3I6IG51bGwsIFxyXG4gICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy/roZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCwgLy/roZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgIGxvZ091dEVycm9yOiBudWxsLCBcclxuICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLCBcclxuICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3I6IG51bGwsIFxyXG4gICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgIC8v64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcclxuICAgIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLCBcclxuICAgIGxvYWRGb2xsb3dpbmdzTG9hZGluZzogZmFsc2UsICBcclxuICAgIGxvYWRGb2xsb3dpbmdzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93aW5nc0Vycm9yOiBudWxsLCBcclxuICAgIGxvYWRGb2xsb3dlcnNMb2FkaW5nOiBmYWxzZSwgIFxyXG4gICAgbG9hZEZvbGxvd2Vyc0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2Vyc0Vycm9yOiBudWxsLCBcclxuICAgIHJlbW92ZUZvbGxvd2VyTG9hZGluZzogZmFsc2UsICBcclxuICAgIHJlbW92ZUZvbGxvd2VyRG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVGb2xsb3dlckVycm9yOiBudWxsLCBcclxuXHJcbiAgICBtZTogbnVsbCxcclxuICAgIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgbG9naW5EYXRhOiB7fSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gJ0xPQURfTVlfSU5GT19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCA9ICdSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyA9ICdSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSA9ICdSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG4vLyBjb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuLy8gICAgIC4uLmRhdGEsXHJcbi8vICAgICBuaWNrbmFtZTogJ3RvbnknLFxyXG4vLyAgICAgaWQ6IDEsXHJcbi8vICAgICBQb3N0czogW3sgaWQ6IDF9LF0sXHJcbi8vICAgICBGb2xsb3dpbmdzOiBbeyBuaWNrbmFtZTogJ3RtJyB9LCB7IG5pY2tuYW1lOiAndHR5JyB9XSxcclxuLy8gICAgIEZvbGxvd2VyczogW3sgbmlja25hbWU6ICd0bScgfSwgeyBuaWNrbmFtZTogJ3R0eScgfV0sXHJcbi8vIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gICh7XHJcbiAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkgeyAgICBcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gbnVsbCxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGRyYWZ0Lm1lLkZvbGxvd2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlcmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgICBcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gbnVsbCxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzbG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAgIFxyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBudWxsLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc2xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAgIFxyXG4gICAgICAgICAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBudWxsLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VybG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAgIFxyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IG51bGwsXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93bG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCApO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbCxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxvZ2luTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBsb2dJbkVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxvZ0luRG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBtZTogZHVtbXlVc2VyKGFjdGlvbi5kYXRhKSxcclxuICAgICAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBsb2dJbkVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxvZ091dExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxvZ091dERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxvZ091dEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHNpZ25VcExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHNpZ25VcERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHNpZ25VcEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY2hhbmdlTmlja25hbWVEb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1lOiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBQb3N0czogW3sgaWQ6IGFjdGlvbi5kYXRhIH0sIC4uLnN0YXRlLm1lLlBvc3RzXVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBtZToge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgUG9zdHM6IHN0YXRlLm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9