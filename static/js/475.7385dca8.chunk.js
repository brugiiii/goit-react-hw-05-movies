"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[475],{9355:function(e,t,n){n.d(t,{V:function(){return h}});var r=n(5861),a=n(5671),c=n(9466),u=n(4687),i=n.n(u),s=n(1243),o="83584156b00a2d23d72a1dbc78073946",d="https://api.themoviedb.org/3/",h=function(){function e(){(0,a.Z)(this,e),this._query="",this._movieId=null}return(0,c.Z)(e,[{key:"fetch",value:function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="trending"===e.t0?3:"byQuery"===e.t0?7:"details"===e.t0?11:"credits"===e.t0?15:"reviews"===e.t0?19:23;break;case 3:return e.next=5,(0,s.Z)("".concat(d,"trending/movie/day?api_key=").concat(o,"&language=en-US"));case 5:case 9:case 21:return n=e.sent,e.abrupt("break",24);case 7:return e.next=9,(0,s.Z)("".concat(d,"search/movie?api_key=").concat(o,"&query=").concat(this._query,"&include_adult=false&language=en-US&page=1"));case 11:return e.next=13,(0,s.Z)("".concat(d,"movie/").concat(this._movieId,"?api_key=").concat(o,"&language=en-US"));case 13:return n=e.sent,e.abrupt("return",n.data);case 15:return e.next=17,(0,s.Z)("".concat(d,"movie/").concat(this._movieId,"/credits?api_key=").concat(o,"&language=en-US"));case 17:return n=e.sent,e.abrupt("return",n.data.cast);case 19:return e.next=21,(0,s.Z)("".concat(d,"movie/").concat(this._movieId,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 23:return e.abrupt("return");case 24:return e.abrupt("return",n.data.results);case 25:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"query",get:function(){return this._query},set:function(e){this._query=e}},{key:"movieId",get:function(){return this._movieId},set:function(e){this._movieId=e}}]),e}()},2475:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(9439),a=n(2791),c=n(9355),u=n(184),i=(0,a.lazy)((function(){return n.e(184).then(n.bind(n,9184))})),s=new c.V,o=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],c=t[1];return(0,a.useEffect)((function(){s.fetch("trending").then(c)}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{children:"Trending today"}),(0,u.jsx)(i,{movies:n})]})}}}]);
//# sourceMappingURL=475.7385dca8.chunk.js.map