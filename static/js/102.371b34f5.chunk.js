"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[102],{9355:function(e,t,n){n.d(t,{V:function(){return f}});var r=n(5861),a=n(5671),u=n(9466),i=n(4687),c=n.n(i),s=n(1243),o="83584156b00a2d23d72a1dbc78073946",h="https://api.themoviedb.org/3/",f=function(){function e(){(0,a.Z)(this,e),this._query="",this._movieId=null}return(0,u.Z)(e,[{key:"fetch",value:function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="trending"===e.t0?3:"byQuery"===e.t0?7:"details"===e.t0?11:"credits"===e.t0?15:"reviews"===e.t0?19:23;break;case 3:return e.next=5,(0,s.Z)("".concat(h,"trending/movie/day?api_key=").concat(o,"&language=en-US"));case 5:case 9:case 21:return n=e.sent,e.abrupt("break",24);case 7:return e.next=9,(0,s.Z)("".concat(h,"search/movie?api_key=").concat(o,"&query=").concat(this._query,"&include_adult=false&language=en-US&page=1"));case 11:return e.next=13,(0,s.Z)("".concat(h,"movie/").concat(this._movieId,"?api_key=").concat(o,"&language=en-US"));case 13:return n=e.sent,e.abrupt("return",n.data);case 15:return e.next=17,(0,s.Z)("".concat(h,"movie/").concat(this._movieId,"/credits?api_key=").concat(o,"&language=en-US"));case 17:return n=e.sent,e.abrupt("return",n.data.cast);case 19:return e.next=21,(0,s.Z)("".concat(h,"movie/").concat(this._movieId,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 23:return e.abrupt("return");case 24:return e.abrupt("return",n.data.results);case 25:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"query",get:function(){return this._query},set:function(e){this._query=e}},{key:"movieId",get:function(){return this._movieId},set:function(e){this._movieId=e}}]),e}()},8102:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r,a,u,i=n(9439),c=n(2791),s=n(1087),o=n(4221),h=(n(1138),n(168)),f=n(7647),d=f.Z.input(r||(r=(0,h.Z)(["\n  width: 300px;\n  height: 30px;\n  border-radius: 8px;\n  font-size: 20px;\n"]))),p=f.Z.form(a||(a=(0,h.Z)(["\n  margin: 10px;\n"]))),g=f.Z.button(u||(u=(0,h.Z)(["\n  cursor: pointer;\n  height: 30px;\n  width: 70px;\n  margin-left: 5px;\n"]))),l=n(9355),v=n(184),y=(0,c.lazy)((function(){return n.e(184).then(n.bind(n,9184))})),m=new l.V,_=function(){var e=(0,c.useState)([]),t=(0,i.Z)(e,2),n=t[0],r=t[1],a=(0,c.useState)(""),u=(0,i.Z)(a,2),h=u[0],f=u[1],l=(0,s.lr)(),_=(0,i.Z)(l,2),x=_[0],b=_[1];(0,c.useEffect)((function(){x.get("query")&&(m.query=x.get("query"),m.fetch("byQuery").then((function(e){if(0===e.length)return o.fn.error("Enter valid query","Error query",3e3);r(e)})))}),[x]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(p,{onSubmit:function(e){if(e.preventDefault(),!h)return o.fn.error("Enter something","Error query",3e3);b({query:h}),f("")},children:[(0,v.jsx)(d,{onChange:function(e){return f(e.target.value)},value:h}),(0,v.jsx)(g,{type:"submit",children:"Search"})]}),0!==n.length&&(0,v.jsx)(y,{movies:n}),(0,v.jsx)(o.mh,{})]})}}}]);
//# sourceMappingURL=102.371b34f5.chunk.js.map