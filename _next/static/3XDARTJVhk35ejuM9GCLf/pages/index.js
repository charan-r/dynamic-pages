(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/h46":function(e,t,n){n("cHUd")("Map")},LX0d:function(e,t,n){e.exports=n("UDep")},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("YFqc"),a=n.n(i),l=n("TJpk"),s=o.a.createElement;t.default=function(){return s(o.a.Fragment,null,s(l.Helmet,null,s("title",null,"Next JS Project"),s("meta",{"data-react-helmet":"true",content:"yes",name:"apple-mobile-web-app-capable"})),s("div",null,"Go to Blog 11",s(a.a,{href:"/blog",as:"/blog"},s("a",null,"Blog 11"))),s("div",null,"Go to Blog 2",s(a.a,{href:"/blog",as:"/blog"},s("a",null,"Blog 2"))),s("div",null,"Go to Blog 3",s(a.a,{href:"/blog",as:"/blog"},s("a",null,"Blog 3"))))}},UDep:function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),e.exports=n("WEpk").Map},XLbu:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("8+Nu"),o=n("/HRN"),i=n("WaGi"),a=n("ZDA2"),l=n("/+P4"),s=n("N9n2"),u=n("LX0d"),f=n("KI45"),c=n("5Uuq");t.__esModule=!0,t.default=void 0;var p,h=c(n("q1tI")),v=n("CxY0"),d=n("g/15"),g=f(n("nOHt"));function w(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var m=new u,y=window.IntersectionObserver,b={};function k(){return p||(y?p=new y((function(e){e.forEach((function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),m.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var U=function(e){function t(e){var n;return o(this,t),(n=a(this,l(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var a=e(o,i);return t=o,n=i,r=a,a}}((function(e,t){return{href:w(e),as:t?w(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),a=i.href,l=i.as;if(function(e){var t=(0,v.parse)(e,!1,!0),n=(0,v.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var s=window.location.pathname;a=(0,v.resolve)(s,a),l=l?(0,v.resolve)(s,l):a,e.preventDefault();var u=n.props.scroll;null==u&&(u=l.indexOf("#")<0),g.default[n.props.replace?"replace":"push"](a,l,{shallow:n.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return s(t,e),i(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,v.resolve)(e,n);return[o,r?(0,v.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this,n=b[this.getPaths()[0]];this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(e,t){var n=k();return n?(n.observe(e),m.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}m.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths(),n=r(t,2),o=n[0],i=n[1];g.default.prefetch(o,i,e),b[o]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var i=h.Children.only(t),a={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),h.default.cloneElement(i,a)}}]),t}(h.Component);t.default=U},dVTT:function(e,t,n){n("aPfg")("Map")},g33z:function(e,t,n){"use strict";var r=n("Wu5q"),o=n("n3ko");e.exports=n("raTm")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var t=r.getEntry(o(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(o(this,"Map"),0===e?0:e,t)}},r,!0)},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,2,0,3]]]);