(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"9Jkg":function(t,n,e){t.exports=e("oh+g")},kNdM:function(t,n,e){"use strict";e.r(n);var o=e("ln6h"),r=e.n(o),a=e("9Jkg"),s=e.n(a),i=e("q1tI"),c=e.n(i),p=e("vcXL"),u=e.n(p),l=e("TJpk"),d=e.n(l),f=(e("nOHt"),c.a.createElement);function w(t){console.log("props",t);var n=t.jsonData.title;return f("div",null,f(d.a,{title:n,meta:[{name:"author",content:"Charan"},{name:"twitter:title",content:n},{property:"og:title",content:n},{property:"og:type",content:"website"},{property:"og:description",content:n+n},{name:"viewport",content:"width=device-width, maximum-scale=1"},{name:"apple-itunes-app",content:"app-id=1125423676"}]}),f("p",null,s()(t.jsonData)))}w.getInitialProps=function(t){var n,e,o;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return n=t.query,console.log("quesry",n),a.next=4,r.a.awrap(u()("https://jsonplaceholder.typicode.com/todos/".concat(n.blogId)));case 4:return e=a.sent,a.next=7,r.a.awrap(e.json());case 7:return o=a.sent,a.abrupt("return",{jsonData:o});case 9:case"end":return a.stop()}}))},n.default=w},oZQB:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[blogId]",function(){return e("kNdM")}])},"oh+g":function(t,n,e){var o=e("WEpk"),r=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}},vcXL:function(t,n,e){"use strict";var o=self.fetch.bind(self);t.exports=o,t.exports.default=t.exports}},[["oZQB",1,2,0,3]]]);