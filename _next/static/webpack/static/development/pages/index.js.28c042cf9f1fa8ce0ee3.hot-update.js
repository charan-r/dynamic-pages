webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/var/nextjs/demo-project/git/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Next JS Project"), __jsx("meta", {
    "data-react-helmet": "true",
    content: "yes",
    name: "apple-mobile-web-app-capable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Go to Blog 11", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "blo/[id]g",
    as: "/blog/af441641-cd2a-48d1-b978-b6345295930d",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Blog 11"))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Go to Blog 2", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "blog/[id]",
    as: "/blog/a53b3233-6dcf-43e6-af14-71e34d7fe0e1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Blog 2"))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Go to Blog 3", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "blog/[id]",
    as: "/blog/9fb49962-2641-4d92-b6b8-ecaf50e9e420",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Blog 3"))));
}); // import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { Helmet } from "react-helmet";
// import Axios from "axios";
// export default () => {
//   // const [jobs, setJobs] = useState([]);
//   // useEffect(() => {
//   //   getJobs().then(res => {
//   //     console.log("jobsjobs", res);
//   //     setJobs(res);
//   //   });
//   // }, []);
//   // const getJobs = () => {
//   //   return Axios.get(
//   //     "https://api.lever.co/v0/postings/gojek?limit=10&mode=json"
//   //   )
//   //     .then(function(response) {
//   //       // handle success
//   //       return response.data;
//   //     })
//   //     .catch(function(error) {
//   //       console.log(error);
//   //     })
//   //     .finally(function() {});
//   // };
//   return (
//     <React.Fragment>
//       {/* {jobs.map(job => {
//         return (
//           <div>
//             {job.text}
//             <Link
//               href="blo/[id]g"
//               as={
//                 process.env.BACKEND_URL +
//                 `/blog/${job.id}`
//               }
//             >
//               <a>see more...</a>
//             </Link>
//           </div>
//         );
//       })} */}
//     </React.Fragment>
//   );
// };

/***/ })

})
//# sourceMappingURL=index.js.28c042cf9f1fa8ce0ee3.hot-update.js.map