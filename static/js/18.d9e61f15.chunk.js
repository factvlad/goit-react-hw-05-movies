"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[18],{4018:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(5861),a=r(885),i=r(4687),s=r.n(i),c=r(501),u=r(6871),o=r(2791),p=r(2993),l="MovieDetails_container__ot48h",v="MovieDetails_details__N84li",f="MovieDetails_details_poster__x-KcM",d="MovieDetails_list__k0RDM",h="MovieDetails_list_Link__ClriN",m="MovieDetails_active__vYC56",x="MovieDetails_content__oa8bg",_=r(7809),g=r(184),w=function(){var e=(0,u.UO)().id,t=(0,o.useState)({}),r=(0,a.Z)(t,2),i=r[0],w=r[1];(0,o.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.O5)(e).then((function(e){w(e)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e&&t()}),[e]);var j=i.poster_path,k=i.original_title,b=i.overview,N=i.genres,M=i.release_date,y=i.vote_average;return(0,g.jsxs)("div",{children:[(0,g.jsx)(_.zx,{}),(0,g.jsxs)("div",{className:l,children:[(0,g.jsxs)("div",{className:v,children:[(0,g.jsx)("div",{className:f,children:(0,g.jsx)("img",{src:j?"https://image.tmdb.org/t/p/original/".concat(j):"https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg",alt:""})}),(0,g.jsxs)("div",{className:x,children:[(0,g.jsxs)("h2",{children:[k," (",Number.parseInt(M),")"]}),(0,g.jsxs)("p",{children:["User Score: ",(10*y).toFixed(0)," %"]}),(0,g.jsx)("h3",{children:"Overview"}),(0,g.jsx)("p",{children:b}),(0,g.jsx)("h4",{children:"Genres"}),(0,g.jsx)("p",{children:null===N||void 0===N?void 0:N.map((function(e){return e.name+" "}))})]})]}),(0,g.jsxs)("ul",{className:d,children:[(0,g.jsx)("li",{children:(0,g.jsx)(c.OL,{className:function(e){return e.isActive?"".concat(h," ").concat(m):"".concat(h)},to:"Cast",children:"Cast"})}),(0,g.jsx)("li",{children:(0,g.jsx)(c.OL,{className:function(e){return e.isActive?"".concat(h," ").concat(m):"".concat(h)},to:"Reviews",children:"Reviews"})})]})]}),(0,g.jsx)(u.j3,{})]})}},2993:function(e,t,r){r.d(t,{GC:function(){return v},IQ:function(){return p},Jh:function(){return l},O5:function(){return o},Oq:function(){return u}});var n=r(5861),a=r(4687),i=r.n(a),s=r(4569),c=r.n(s);c().defaults.baseURL="https://api.themoviedb.org/3",c().defaults.params={api_key:"9408f4ad1863a9d272018e8be0447604"};var u=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/trending/movie/week",{params:{page:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/movie/".concat(t,"&language=en-US"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(i().mark((function e(t,r){var n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/search/movie",{params:{query:t,page:r}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=18.d9e61f15.chunk.js.map