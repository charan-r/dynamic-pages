(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+iuc":function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),t.exports=n("WEpk").Set},"/0+H":function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r(e,"__esModule",{value:!0});var i=o(n("q1tI")),u=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery;return n||o&&(void 0!==i&&i)}e.isInAmpMode=a,e.useAmp=function(){return a(i.default.useContext(u.AmpStateContext))}},"/h46":function(t,e,n){n("cHUd")("Map")},"0tVQ":function(t,e,n){n("FlQf"),n("VJsP"),t.exports=n("WEpk").Array.from},"2Eek":function(t,e,n){t.exports=n("W7oM")},"2PDY":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"4mXO":function(t,e,n){t.exports=n("7TPF")},"7TPF":function(t,e,n){n("AUvm"),t.exports=n("WEpk").Object.getOwnPropertySymbols},"7m0m":function(t,e,n){var r=n("Y7ZC"),o=n("uplh"),i=n("NsO/"),u=n("vwuL"),a=n("IP1Z");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,r=i(t),f=u.f,c=o(r),s={},l=0;c.length>l;)void 0!==(n=f(r,e=c[l++]))&&a(s,e,n);return s}})},"8Kt/":function(t,e,n){"use strict";var r=n("ttDY"),o=n("hfKm"),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};o(e,"__esModule",{value:!0});var u=i(n("q1tI")),a=i(n("Xuae")),f=n("lwAK"),c=n("FYa8"),s=n("/0+H");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[u.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),e}function p(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===u.default.Fragment?t.concat(u.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=l;var h=["name","httpEquiv","charSet","itemProp"];function v(t,e){return t.reduce((function(t,e){var n=u.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(p,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new r,e=new r,n=new r,o={};return function(i){var u=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var a=i.key.slice(i.key.indexOf("$")+1);t.has(a)?u=!1:t.add(a)}switch(i.type){case"title":case"base":e.has(i.type)?u=!1:e.add(i.type);break;case"meta":for(var f=0,c=h.length;f<c;f++){var s=h[f];if(i.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?u=!1:n.add(s);else{var l=i.props[s],p=o[s]||new r;p.has(l)?u=!1:(p.add(l),o[s]=p)}}}return u}}()).reverse().map((function(t,e){var n=t.key||e;return u.default.cloneElement(t,{key:n})}))}var d=a.default();function y(t){var e=t.children;return u.default.createElement(f.AmpStateContext.Consumer,null,(function(t){return u.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return u.default.createElement(d,{reduceComponentsToState:v,handleStateChange:n,inAmpMode:s.isInAmpMode(t)},e)}))}))}y.rewind=d.rewind,e.default=y},"8iia":function(t,e,n){var r=n("QMMT"),o=n("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},B9jh:function(t,e,n){"use strict";var r=n("Wu5q"),o=n("n3ko");t.exports=n("raTm")("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},FYa8:function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var i=o(n("q1tI"));e.HeadManagerContext=i.createContext(null)},IP1Z:function(t,e,n){"use strict";var r=n("2faE"),o=n("rr1i");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},LX0d:function(t,e,n){t.exports=n("UDep")},PQJW:function(t,e,n){var r=n("d04V"),o=n("yLu3");t.exports=function(t){if(o(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}},"RRc/":function(t,e,n){var r=n("oioR");t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},TbGu:function(t,e,n){var r=n("fGSI"),o=n("PQJW"),i=n("2PDY");t.exports=function(t){return r(t)||o(t)||i()}},UDep:function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),t.exports=n("WEpk").Map},"V+O7":function(t,e,n){n("aPfg")("Set")},VJsP:function(t,e,n){"use strict";var r=n("2GTP"),o=n("Y7ZC"),i=n("JB68"),u=n("sNwI"),a=n("NwJ3"),f=n("tEej"),c=n("IP1Z"),s=n("fNZA");o(o.S+o.F*!n("TuGD")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,l,p=i(t),h="function"==typeof this?this:Array,v=arguments.length,d=v>1?arguments[1]:void 0,y=void 0!==d,m=0,_=s(p);if(y&&(d=r(d,v>2?arguments[2]:void 0,2)),void 0==_||h==Array&&a(_))for(n=new h(e=f(p.length));e>m;m++)c(n,m,y?d(p[m],m):p[m]);else for(l=_.call(p),n=new h;!(o=l.next()).done;m++)c(n,m,y?u(l,d,[o.value,m],!0):o.value);return n.length=m,n}})},W7oM:function(t,e,n){n("nZgG");var r=n("WEpk").Object;t.exports=function(t,e){return r.defineProperties(t,e)}},Wu5q:function(t,e,n){"use strict";var r=n("2faE").f,o=n("oVml"),i=n("XJU/"),u=n("2GTP"),a=n("EXMj"),f=n("oioR"),c=n("MPFp"),s=n("UO39"),l=n("TJWN"),p=n("jmDH"),h=n("6/1s").fastKey,v=n("n3ko"),d=p?"_s":"size",y=function(t,e){var n,r=h(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,c){var s=t((function(t,r){a(t,s,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=r&&f(r,n,t[c],t)}));return i(s.prototype,{clear:function(){for(var t=v(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var n=v(this,e),r=y(n,t);if(r){var o=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),n._f==r&&(n._f=o),n._l==r&&(n._l=i),n[d]--}return!!r},forEach:function(t){v(this,e);for(var n,r=u(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!y(v(this,e),t)}}),p&&r(s.prototype,"size",{get:function(){return v(this,e)[d]}}),s},def:function(t,e,n){var r,o,i=y(t,e);return i?i.v=n:(t._l=i={i:o=h(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[d]++,"F"!==o&&(t._i[o]=i)),t},getEntry:y,setStrong:function(t,e,n){c(t,e,(function(t,n){this._t=v(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?s(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,s(1))}),n?"entries":"values",!n,!0),l(e)}}},XLbu:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},XoMD:function(t,e,n){t.exports=n("hYAz")},Xuae:function(t,e,n){"use strict";var r=n("/HRN"),o=n("ZDA2"),i=n("/+P4"),u=n("K47E"),a=n("WaGi"),f=n("N9n2"),c=n("TbGu"),s=n("ttDY");n("hfKm")(e,"__esModule",{value:!0});var l=n("q1tI"),p=!1;e.default=function(){var t,e=new s;function n(n){t=n.props.reduceComponentsToState(c(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(c){function s(t){var a;return r(this,s),a=o(this,i(s).call(this,t)),p&&(e.add(u(a)),n(u(a))),a}return f(s,c),a(s,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),a(s,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(l.Component)}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("8+Nu"),o=n("/HRN"),i=n("WaGi"),u=n("ZDA2"),a=n("/+P4"),f=n("N9n2"),c=n("LX0d"),s=n("KI45"),l=n("5Uuq");e.__esModule=!0,e.default=void 0;var p,h=l(n("q1tI")),v=n("CxY0"),d=n("g/15"),y=s(n("nOHt"));function m(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var _=new c,g=window.IntersectionObserver,w={};function b(){return p||(g?p=new g((function(t){t.forEach((function(t){if(_.has(t.target)){var e=_.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(p.unobserve(t.target),_.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var k=function(t){function e(t){var n;return o(this,e),(n=u(this,a(e).call(this,t))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var u=t(o,i);return e=o,n=i,r=u,u}}((function(t,e){return{href:m(t),as:e?m(e):e}})),n.linkClicked=function(t){var e=t.currentTarget,r=e.nodeName,o=e.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),u=i.href,a=i.as;if(function(t){var e=(0,v.parse)(t,!1,!0),n=(0,v.parse)((0,d.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(u)){var f=window.location.pathname;u=(0,v.resolve)(f,u),a=a?(0,v.resolve)(f,a):u,t.preventDefault();var c=n.props.scroll;null==c&&(c=a.indexOf("#")<0),y.default[n.props.replace?"replace":"push"](u,a,{shallow:n.props.shallow}).then((function(t){t&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==t.prefetch,n}return f(e,t),i(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,v.resolve)(t,n);return[o,r?(0,v.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this,n=w[this.getPaths()[0]];this.p&&g&&t&&t.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(t,e){var n=b();return n?(n.observe(t),_.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}_.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths(),n=r(e,2),o=n[0],i=n[1];y.default.prefetch(o,i,t),w[o]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=h.default.createElement("a",null,e));var i=h.Children.only(e),u={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(u.href=o||r),h.default.cloneElement(i,u)}}]),e}(h.Component);e.default=k},d04V:function(t,e,n){t.exports=n("0tVQ")},dL40:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},dVTT:function(t,e,n){n("aPfg")("Map")},fGSI:function(t,e,n){var r=n("p0XB");t.exports=function(t){if(r(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},g33z:function(t,e,n){"use strict";var r=n("Wu5q"),o=n("n3ko");t.exports=n("raTm")("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=r.getEntry(o(this,"Map"),t);return e&&e.v},set:function(t,e){return r.def(o(this,"Map"),0===t?0:t,e)}},r,!0)},hYAz:function(t,e,n){n("7m0m"),t.exports=n("WEpk").Object.getOwnPropertyDescriptors},kNdM:function(t,e,n){"use strict";n.r(e);var r=n("hfKm"),o=n.n(r),i=n("2Eek"),u=n.n(i),a=n("XoMD"),f=n.n(a),c=n("Jo+v"),s=n.n(c),l=n("4mXO"),p=n.n(l),h=n("pLtp"),v=n.n(h),d=n("ln6h"),y=n.n(d);function m(t,e,n){return e in t?o()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(t,r.key,r)}}var g=n("XVgq"),w=n.n(g),b=n("Z7t5"),k=n.n(b);function x(t){return(x="function"===typeof k.a&&"symbol"===typeof w.a?function(t){return typeof t}:function(t){return t&&"function"===typeof k.a&&t.constructor===k.a&&t!==k.a.prototype?"symbol":typeof t})(t)}function E(t){return(E="function"===typeof k.a&&"symbol"===x(w.a)?function(t){return x(t)}:function(t){return t&&"function"===typeof k.a&&t.constructor===k.a&&t!==k.a.prototype?"symbol":x(t)})(t)}function M(t,e){return!e||"object"!==E(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}var P=n("Bhuq"),C=n.n(P),O=n("TRZx"),S=n.n(O);function T(t){return(T=S.a?C.a:function(t){return t.__proto__||C()(t)})(t)}var A=n("SqZg"),j=n.n(A);function D(t,e){return(D=S.a||function(t,e){return t.__proto__=e,t})(t,e)}var I=n("q1tI"),U=n.n(I),q=n("YFqc"),K=n.n(q),N=n("8Kt/"),W=n.n(N),Z=n("vcXL"),X=n.n(Z);n.d(e,"default",(function(){return L}));var Y=U.a.createElement;function F(t,e){var n=v()(t);if(p.a){var r=p()(t);e&&(r=r.filter((function(e){return s()(t,e).enumerable}))),n.push.apply(n,r)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach((function(e){m(t,e,n[e])})):f.a?u()(t,f()(n)):F(Object(n)).forEach((function(e){o()(t,e,s()(n,e))}))}return t}var L=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),M(this,T(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=j()(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&D(t,e)}(e,t),n=e,o=[{key:"getInitialProps",value:function(t){var e,n;return y.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("qyeryss",t.asPath.split("/")[2]),r.next=3,y.a.awrap(X()("https://jsonplaceholder.typicode.com/posts/".concat(t.asPath.split("/")[2])));case 3:return e=r.sent,r.next=6,y.a.awrap(e.json());case 6:return n=r.sent,r.abrupt("return",J({},n));case 8:case"end":return r.stop()}}))}}],(r=[{key:"render",value:function(){var t=this.props,e=t.title,n=t.body,r=void 0===n?"default body gettins":n;return Y("main",null,Y(W.a,null,Y("title",null,e),Y("meta",{name:"description",content:r})),Y("h1",null,e),Y("p",null,r),Y(K.a,{href:"/"},Y("a",null,"Go back to home")))}}])&&_(n.prototype,r),o&&_(n,o),e}(I.Component)},lwAK:function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var i=o(n("q1tI"));e.AmpStateContext=i.createContext({})},nZgG:function(t,e,n){var r=n("Y7ZC");r(r.S+r.F*!n("jmDH"),"Object",{defineProperties:n("fpC5")})},oZQB:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[blogId]",function(){return n("kNdM")}])},ttDY:function(t,e,n){t.exports=n("+iuc")},uplh:function(t,e,n){var r=n("ar/p"),o=n("mqlF"),i=n("5K7Z"),u=n("5T2Y").Reflect;t.exports=u&&u.ownKeys||function(t){var e=r.f(i(t)),n=o.f;return n?e.concat(n(t)):e}},vcXL:function(t,e,n){"use strict";var r=self.fetch.bind(self);t.exports=r,t.exports.default=t.exports},xvv9:function(t,e,n){n("cHUd")("Set")}},[["oZQB",1,2,0]]]);