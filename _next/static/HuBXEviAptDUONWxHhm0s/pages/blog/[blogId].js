(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9Jkg":function(t,n,e){t.exports=e("oh+g")},kNdM:function(t,n,e){"use strict";e.r(n);var o=e("ln6h"),r=e.n(o),a=e("9Jkg"),i=e.n(a),s=e("q1tI"),c=e.n(s),p=(e("nOHt"),e("vcXL")),u=e.n(p),l=e("TJpk"),d=e.n(l),f=c.a.createElement;function w(t){console.log("props",t);var n=t.jsonData.title;return f("div",null,f(d.a,{title:n,meta:[{name:"author",content:"Charan"},{name:"twitter:title",content:n},{property:"og:title",content:n},{property:"og:type",content:"website"},{property:"og:description",content:n+n},{name:"viewport",content:"width=device-width, maximum-scale=1"},{name:"apple-itunes-app",content:"app-id=1125423676"}]}),f("p",null,i()(t.jsonData)))}w.getInitialProps=function(t){var n,e;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return console.log("router",t.query),o.next=3,r.a.awrap(u()("https://jsonplaceholder.typicode.com/todos/".concat(t.query.blogId)));case 3:return n=o.sent,o.next=6,r.a.awrap(n.json());case 6:return e=o.sent,o.abrupt("return",{jsonData:e});case 8:case"end":return o.stop()}}))},n.default=w},oZQB:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[blogId]",function(){return e("kNdM")}])},"oh+g":function(t,n,e){var o=e("WEpk"),r=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}},vcXL:function(t,n,e){"use strict";var o=self.fetch.bind(self);t.exports=o,t.exports.default=t.exports}},[["oZQB",1,2,0,3]]]);