(function(e){function t(t){for(var r,o,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)o=c[l],a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-08e89915":"ae8dd7a9","chunk-251b53ea":"e483c4c7"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-08e89915":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-08e89915":"e1600739","chunk-251b53ea":"31d6cfe0"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e),s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},3007:function(e,t,n){"use strict";n("8e6e"),n("ac6a"),n("456d");var r=n("bd86"),o=(n("96cf"),n("3b8d")),a=n("d225"),u=n("b0b4"),c=n("bc3a"),i=n.n(c);function s(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){Object(r["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var f=function(){function e(){Object(a["a"])(this,e)}return Object(u["a"])(e,null,[{key:"getPosts",value:function(e){return new Promise(function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(n,r){var o,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get(e);case 3:o=t.sent,a=o.data,n(a.map(function(e){return l({},e,{createdAt:new Date(e.createdAt)})})),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),r(t.t0);case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e,n){return t.apply(this,arguments)}}())}}]),e}();t["a"]=f},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header2"),n("router-view")],1)},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("Sloenduro-stats")])},c=[],i={data:function(){return{event:"Ajdovscina"}}},s=i,l=n("2877"),f=Object(l["a"])(s,u,c,!1,null,null,null),p=f.exports,d={name:"app",components:{Header2:p}},h=d,v=(n("034f"),Object(l["a"])(h,o,a,!1,null,null,null)),m=v.exports,b=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.events,function(t){return n("div",{key:t._id,staticClass:"post",attrs:{item:t,index:e.text}},[n("a",[n("router-link",{attrs:{to:{name:"event",params:{event:t.event}}}},[e._v(e._s(t.date)+" "+e._s(t.eventName)+" "+e._s(t.year))])],1)])}),0)},y=[],O=(n("96cf"),n("3b8d")),w=n("3007"),j={name:"HomeComponent",data:function(){return{selectedPosts:[],events:[],error:"",text:"",eventsApi:"api/events"}},created:function(){var e=Object(O["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w["a"].getPosts(this.eventsApi);case 3:this.events=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),this.error=e.t0.message;case 9:case"end":return e.stop()}},e,this,[[0,6]])}));function t(){return e.apply(this,arguments)}return t}(),methods:{}},k=j,_=Object(l["a"])(k,g,y,!1,null,null,null),P=_.exports,x=function(){return n.e("chunk-08e89915").then(n.bind(null,"59f4"))},E=function(){return n.e("chunk-251b53ea").then(n.bind(null,"d7e2"))};r["a"].config.productionTip=!1,r["a"].use(b["a"]);var S=[{path:"/",component:P},{path:"/Events/:event",name:"event",component:x},{path:"/Riders/:name",name:"rider",component:E}],A=new b["a"]({mode:"history",routes:S});new r["a"]({router:A,render:function(e){return e(m)}}).$mount("#app")},"64a9":function(e,t,n){}});
//# sourceMappingURL=app.000fd22f.js.map