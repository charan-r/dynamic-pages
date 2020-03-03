webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/var/nextjs/demo-project/git/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      jobs = _useState[0],
      setJobs = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getJobs().then(function (res) {
      console.log("jobsjobs", res);
      setJobs(res);
    });
  }, []);

  var getJobs = function getJobs() {
    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://api.lever.co/v0/postings/gojek?limit=10&mode=json").then(function (response) {
      // handle success
      return response.data;
    })["catch"](function (error) {
      console.log(error);
    })["finally"](function () {});
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, jobs.length > 0 && jobs.map(function (job) {
    return __jsx("div", {
      key: job.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, job.text, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "blo/[id]g",
      as: "" + "/blog/".concat(job.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "see more...")));
  }));
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
//# sourceMappingURL=index.js.a7d722ebcc31e0573dc4.hot-update.js.map