"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[663],{9355:function(e,t,n){n.d(t,{V:function(){return h}});var a=n(5861),r=n(5671),c=n(9466),i=n(4687),u=n.n(i),s=n(1243),o="83584156b00a2d23d72a1dbc78073946",d="https://api.themoviedb.org/3/",h=function(){function e(){(0,r.Z)(this,e),this._query="",this._movieId=null}return(0,c.Z)(e,[{key:"fetch",value:function(){var e=(0,a.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="trending"===e.t0?3:"byQuery"===e.t0?7:"details"===e.t0?11:"credits"===e.t0?15:"reviews"===e.t0?19:23;break;case 3:return e.next=5,(0,s.Z)("".concat(d,"trending/movie/day?api_key=").concat(o,"&language=en-US"));case 5:case 9:case 21:return n=e.sent,e.abrupt("break",24);case 7:return e.next=9,(0,s.Z)("".concat(d,"search/movie?api_key=").concat(o,"&query=").concat(this._query,"&include_adult=false&language=en-US&page=1"));case 11:return e.next=13,(0,s.Z)("".concat(d,"movie/").concat(this._movieId,"?api_key=").concat(o,"&language=en-US"));case 13:return n=e.sent,e.abrupt("return",n.data);case 15:return e.next=17,(0,s.Z)("".concat(d,"movie/").concat(this._movieId,"/credits?api_key=").concat(o,"&language=en-US"));case 17:return n=e.sent,e.abrupt("return",n.data.cast);case 19:return e.next=21,(0,s.Z)("".concat(d,"movie/").concat(this._movieId,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 23:return e.abrupt("return");case 24:return e.abrupt("return",n.data.results);case 25:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"query",get:function(){return this._query},set:function(e){this._query=e}},{key:"movieId",get:function(){return this._movieId},set:function(e){this._movieId=e}}]),e}()},6663:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a,r,c=n(9439),i=n(2791),u=n(7689),s=n(9355),o=n(168),d=n(7647),h=d.Z.img(a||(a=(0,o.Z)(["\n  width: 150px;\n  heigth: 200px;\n"]))),p=d.Z.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n"]))),l=n(184),v=new s.V,f=function(){var e=(0,i.useState)([]),t=(0,c.Z)(e,2),n=t[0],a=t[1],r=(0,u.UO)().movieId;return(0,i.useEffect)((function(){v.movieId=r,v.fetch("credits").then(a)}),[r]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(p,{children:0!==n.length?n.map((function(e){var t=e.id,n=e.profile_path,a=e.name,r=e.character;return(0,l.jsxs)("li",{children:[(0,l.jsx)(h,{src:n?"https://image.tmdb.org/t/p/w500"+n:"https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg",alt:a}),(0,l.jsx)("p",{children:a}),(0,l.jsx)("p",{children:r})]},t)})):(0,l.jsx)("div",{children:"We dont have any cast for this movie."})})})}}}]);
//# sourceMappingURL=663.ddbe6c82.chunk.js.map