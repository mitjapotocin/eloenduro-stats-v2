(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c95c6"],{"598d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("standings")])},s=[],a=(n("ac6a"),n("96cf"),n("3b8d")),c=n("3007"),i={data:function(){return{results:[],events:[]}},created:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].getPosts("/api/results/");case 3:this.results=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),this.error=e.t0.message;case 9:return e.prev=9,e.next=12,c["a"].getPosts("/api/events/");case 12:this.events=e.sent,e.next=18;break;case 15:e.prev=15,e.t1=e["catch"](9),this.error=e.t1.message;case 18:case"end":return e.stop()}},e,this,[[0,6],[9,15]])}));function t(){return e.apply(this,arguments)}return t}(),methods:{filterSloEnduro:function(){var e=[];this.event.forEach(function(t){t.series==SloEnduro&&e.a})},calculatePoints:function(e){return"string"==typeof e?0:e>79?1:e>51?81-e:e>20?90-2*(e-21):e>10?140-5*(e-11):e>4?200-10*(e-5):4==e?220:3==e?250:2==e?300:1==e?400:void 0}},computed:{}},u=i,o=n("2877"),p=Object(o["a"])(u,r,s,!1,null,"3da861a9",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0c95c6.c380f1c2.js.map