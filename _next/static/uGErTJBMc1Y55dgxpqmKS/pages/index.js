(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/h46":function(t,n,e){e("cHUd")("Map")},"8iia":function(t,n,e){var r=e("QMMT"),o=e("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},LX0d:function(t,n,e){t.exports=e("UDep")},RNiq:function(t,n,e){"use strict";e.r(n);var r=e("q1tI"),o=e.n(r),i=e("YFqc"),a=e.n(i),s=e("TJpk"),u=o.a.createElement;n.default=function(){return u(o.a.Fragment,null,u(s.Helmet,null,u("title",null,"Next JS Project"),u("meta",{"data-react-helmet":"true",content:"yes",name:"apple-mobile-web-app-capable"})),u("div",null,"Go to Blog 1",u(a.a,{href:"/blog/[blogId]",as:"/dynamic-pages/blog/1"},u("a",null,"Blog 1`"))),u("div",null,"Go to Blog 2",u(a.a,{href:"/blog/[blogId]",as:"/dynamic-pages/blog/2"},u("a",null,"Blog 2"))),u("div",null,"Go to Blog 3",u(a.a,{href:"/blog/[blogId]",as:"/dynamic-pages/blog/3"},u("a",null,"Blog 3"))))}},"RRc/":function(t,n,e){var r=e("oioR");t.exports=function(t,n){var e=[];return r(t,!1,e.push,e,n),e}},UDep:function(t,n,e){e("wgeU"),e("FlQf"),e("bBy9"),e("g33z"),e("XLbu"),e("/h46"),e("dVTT"),t.exports=e("WEpk").Map},Wu5q:function(t,n,e){"use strict";var r=e("2faE").f,o=e("oVml"),i=e("XJU/"),a=e("2GTP"),s=e("EXMj"),u=e("oioR"),f=e("MPFp"),l=e("UO39"),c=e("TJWN"),p=e("jmDH"),h=e("6/1s").fastKey,v=e("n3ko"),d=p?"_s":"size",g=function(t,n){var e,r=h(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,f){var l=t((function(t,r){s(t,l,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=r&&u(r,e,t[f],t)}));return i(l.prototype,{clear:function(){for(var t=v(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var e=v(this,n),r=g(e,t);if(r){var o=r.n,i=r.p;delete e._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),e._f==r&&(e._f=o),e._l==r&&(e._l=i),e[d]--}return!!r},forEach:function(t){v(this,n);for(var e,r=a(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!g(v(this,n),t)}}),p&&r(l.prototype,"size",{get:function(){return v(this,n)[d]}}),l},def:function(t,n,e){var r,o,i=g(t,n);return i?i.v=e:(t._l=i={i:o=h(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[d]++,"F"!==o&&(t._i[o]=i)),t},getEntry:g,setStrong:function(t,n,e){f(t,n,(function(t,e){this._t=v(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?l(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,l(1))}),e?"entries":"values",!e,!0),c(n)}}},XLbu:function(t,n,e){var r=e("Y7ZC");r(r.P+r.R,"Map",{toJSON:e("8iia")("Map")})},YFqc:function(t,n,e){t.exports=e("cTJO")},cTJO:function(t,n,e){"use strict";var r=e("8+Nu"),o=e("/HRN"),i=e("WaGi"),a=e("ZDA2"),s=e("/+P4"),u=e("N9n2"),f=e("LX0d"),l=e("KI45"),c=e("5Uuq");n.__esModule=!0,n.default=void 0;var p,h=c(e("q1tI")),v=e("CxY0"),d=e("g/15"),g=l(e("nOHt"));function _(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var y=new f,m=window.IntersectionObserver,k={};function w(){return p||(m?p=new m((function(t){t.forEach((function(t){if(y.has(t.target)){var n=y.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(p.unobserve(t.target),y.delete(t.target),n())}}))}),{rootMargin:"200px"}):void 0)}var b=function(t){function n(t){var e;return o(this,n),(e=a(this,s(n).call(this,t))).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var n=null,e=null,r=null;return function(o,i){if(r&&o===n&&i===e)return r;var a=t(o,i);return n=o,e=i,r=a,a}}((function(t,n){return{href:_(t),as:n?_(n):n}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),a=i.href,s=i.as;if(function(t){var n=(0,v.parse)(t,!1,!0),e=(0,v.parse)((0,d.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===e.protocol&&n.host===e.host}(a)){var u=window.location.pathname;a=(0,v.resolve)(u,a),s=s?(0,v.resolve)(u,s):a,t.preventDefault();var f=e.props.scroll;null==f&&(f=s.indexOf("#")<0),g.default[e.props.replace?"replace":"push"](a,s,{shallow:e.props.shallow}).then((function(t){t&&f&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return u(n,t),i(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as),e=n.href,r=n.as,o=(0,v.resolve)(t,e);return[o,r?(0,v.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var n=this,e=k[this.getPaths()[0]];this.p&&m&&t&&t.tagName&&(this.cleanUpListeners(),e||(this.cleanUpListeners=function(t,n){var e=w();return e?(e.observe(t),y.set(t,n),function(){try{e.unobserve(t)}catch(n){console.error(n)}y.delete(t)}):function(){}}(t,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var n=this.getPaths(),e=r(n,2),o=e[0],i=e[1];g.default.prefetch(o,i,t),k[o]=!0}}},{key:"render",value:function(){var t=this,n=this.props.children,e=this.formatUrls(this.props.href,this.props.as),r=e.href,o=e.as;"string"===typeof n&&(n=h.default.createElement("a",null,n));var i=h.Children.only(n),a={ref:function(n){t.handleRef(n),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(n):"object"===typeof i.ref&&(i.ref.current=n))},onMouseEnter:function(n){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(n),t.prefetch({priority:!0})},onClick:function(n){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(n),n.defaultPrevented||t.linkClicked(n)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),h.default.cloneElement(i,a)}}]),n}(h.Component);n.default=b},dVTT:function(t,n,e){e("aPfg")("Map")},g33z:function(t,n,e){"use strict";var r=e("Wu5q"),o=e("n3ko");t.exports=e("raTm")("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var n=r.getEntry(o(this,"Map"),t);return n&&n.v},set:function(t,n){return r.def(o(this,"Map"),0===t?0:t,n)}},r,!0)},vlRD:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("RNiq")}])}},[["vlRD",1,2,0,3]]]);