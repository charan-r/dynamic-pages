webpackHotUpdate("static/development/pages/blog/[blogId].js",{

/***/ "./pages/blog/[blogId].js":
/*!********************************!*\
  !*** ./pages/blog/[blogId].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/var/nextjs/demo-project/git/pages/blog/[blogId].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function Blogpage(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(); // const title = "title goes here";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props["jsonData"]),
      blogData = _useState[0],
      setBlogData = _useState[1]; // const { title = "sdfdsf" } = props["jsonData"];


  function refresh() {
    var refreshedProps;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function refresh$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("dsfdsfdsf");
            console.log("quesry", router);
            _context.next = 4;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(fetchData());

          case 4:
            refreshedProps = _context.sent;
            console.log("refreshedProps", refreshedProps);
            setBlogData(refreshedProps["jsonData"]);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    refresh();
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, blogData["title"]), __jsx("meta", {
    name: "description",
    content: blogData["title"] + "description goes here",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(blogData)));
}

function fetchData() {
  var res, json;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function fetchData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://jsonplaceholder.typicode.com/todos/1"));

        case 2:
          res = _context2.sent;
          _context2.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(res.json());

        case 5:
          json = _context2.sent;
          return _context2.abrupt("return", {
            jsonData: json
          });

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}

Blogpage.getInitialProps = fetchData;
/* harmony default export */ __webpack_exports__["default"] = (Blogpage);

/***/ })

})
//# sourceMappingURL=[blogId].js.c35ae6bb6763d5b627bc.hot-update.js.map