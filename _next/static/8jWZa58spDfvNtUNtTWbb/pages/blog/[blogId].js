(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+iuc":function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),t.exports=n("WEpk").Set},"/0+H":function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r(e,"__esModule",{value:!0});var a=o(n("q1tI")),u=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery;return n||o&&(void 0!==a&&a)}e.isInAmpMode=i,e.useAmp=function(){return i(a.default.useContext(u.AmpStateContext))}},"0tVQ":function(t,e,n){n("FlQf"),n("VJsP"),t.exports=n("WEpk").Array.from},"2PDY":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(t,e,n){"use strict";var r=n("ttDY"),o=n("hfKm"),a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};o(e,"__esModule",{value:!0});var u=a(n("q1tI")),i=a(n("Xuae")),c=n("lwAK"),s=n("FYa8"),f=n("/0+H");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[u.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),e}function d(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===u.default.Fragment?t.concat(u.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=l;var p=["name","httpEquiv","charSet","itemProp"];function v(t,e){return t.reduce((function(t,e){var n=u.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(d,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new r,e=new r,n=new r,o={};return function(a){var u=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);t.has(i)?u=!1:t.add(i)}switch(a.type){case"title":case"base":e.has(a.type)?u=!1:e.add(a.type);break;case"meta":for(var c=0,s=p.length;c<s;c++){var f=p[c];if(a.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?u=!1:n.add(f);else{var l=a.props[f],d=o[f]||new r;d.has(l)?u=!1:(d.add(l),o[f]=d)}}}return u}}()).reverse().map((function(t,e){var n=t.key||e;return u.default.cloneElement(t,{key:n})}))}var h=i.default();function m(t){var e=t.children;return u.default.createElement(c.AmpStateContext.Consumer,null,(function(t){return u.default.createElement(s.HeadManagerContext.Consumer,null,(function(n){return u.default.createElement(h,{reduceComponentsToState:v,handleStateChange:n,inAmpMode:f.isInAmpMode(t)},e)}))}))}m.rewind=h.rewind,e.default=m},"9Jkg":function(t,e,n){t.exports=n("oh+g")},B9jh:function(t,e,n){"use strict";var r=n("Wu5q"),o=n("n3ko");t.exports=n("raTm")("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},FYa8:function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var a=o(n("q1tI"));e.HeadManagerContext=a.createContext(null)},IP1Z:function(t,e,n){"use strict";var r=n("2faE"),o=n("rr1i");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},PQJW:function(t,e,n){var r=n("d04V"),o=n("yLu3");t.exports=function(t){if(o(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}},TbGu:function(t,e,n){var r=n("fGSI"),o=n("PQJW"),a=n("2PDY");t.exports=function(t){return r(t)||o(t)||a()}},"V+O7":function(t,e,n){n("aPfg")("Set")},VJsP:function(t,e,n){"use strict";var r=n("2GTP"),o=n("Y7ZC"),a=n("JB68"),u=n("sNwI"),i=n("NwJ3"),c=n("tEej"),s=n("IP1Z"),f=n("fNZA");o(o.S+o.F*!n("TuGD")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,l,d=a(t),p="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,m=void 0!==h,y=0,w=f(d);if(m&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==w||p==Array&&i(w))for(n=new p(e=c(d.length));e>y;y++)s(n,y,m?h(d[y],y):d[y]);else for(l=w.call(d),n=new p;!(o=l.next()).done;y++)s(n,y,m?u(l,h,[o.value,y],!0):o.value);return n.length=y,n}})},Xuae:function(t,e,n){"use strict";var r=n("/HRN"),o=n("ZDA2"),a=n("/+P4"),u=n("K47E"),i=n("WaGi"),c=n("N9n2"),s=n("TbGu"),f=n("ttDY");n("hfKm")(e,"__esModule",{value:!0});var l=n("q1tI"),d=!1;e.default=function(){var t,e=new f;function n(n){t=n.props.reduceComponentsToState(s(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(s){function f(t){var i;return r(this,f),i=o(this,a(f).call(this,t)),d&&(e.add(u(i)),n(u(i))),i}return c(f,s),i(f,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),i(f,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(l.Component)}},d04V:function(t,e,n){t.exports=n("0tVQ")},dL40:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},fGSI:function(t,e,n){var r=n("p0XB");t.exports=function(t){if(r(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},kNdM:function(t,e,n){"use strict";n.r(e);var r=n("9Jkg"),o=n.n(r),a=n("ln6h"),u=n.n(a),i=n("q1tI"),c=n.n(i),s=n("vcXL"),f=n.n(s),l=(n("TJpk"),n("nOHt")),d=n("8Kt/"),p=n.n(d),v=c.a.createElement;function h(t){var e=Object(i.useState)(t.jsonData),n=e[0],r=e[1];return Object(i.useEffect)((function(){!function(){var t;u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("dsfdsfdsf"),e.next=3,u.a.awrap(m());case 3:t=e.sent,console.log("refreshedProps",t),r(t.jsonData);case 6:case"end":return e.stop()}}))}()}),[]),v("div",null,v(p.a,null,v("title",null,n.title),v("meta",{name:"description",content:n.title+"description goes here"})),v("p",null,o()(n)))}function m(){var t,e;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("quesry",l.useRouter),n.next=3,u.a.awrap(f()("https://jsonplaceholder.typicode.com/todos/1"));case 3:return t=n.sent,n.next=6,u.a.awrap(t.json());case 6:return e=n.sent,n.abrupt("return",{jsonData:e});case 8:case"end":return n.stop()}}))}h.getInitialProps=m,e.default=h},lwAK:function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var a=o(n("q1tI"));e.AmpStateContext=a.createContext({})},oZQB:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[blogId]",function(){return n("kNdM")}])},"oh+g":function(t,e,n){var r=n("WEpk"),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},ttDY:function(t,e,n){t.exports=n("+iuc")},vcXL:function(t,e,n){"use strict";var r=self.fetch.bind(self);t.exports=r,t.exports.default=t.exports},xvv9:function(t,e,n){n("cHUd")("Set")}},[["oZQB",1,2,0,3]]]);