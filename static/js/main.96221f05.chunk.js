(this["webpackJsonpcast-api"]=this["webpackJsonpcast-api"]||[]).push([[0],{44:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(15),r=c.n(s),i=c(6),j=c.n(i),o=c(16),l=c(3),u=c(17),b=c.n(u),d=(c(43),c(44),c.p+"static/media/logo2.9f500755.png"),O=c(0),h=function(){return Object(O.jsx)("header",{className:"center",children:Object(O.jsx)("img",{src:d,alt:"Page-logo"})})},x=function(e){var t=e.item;return Object(O.jsx)("div",{className:"card",children:Object(O.jsxs)("div",{className:"card-inner",children:[Object(O.jsx)("div",{className:"card-front",children:Object(O.jsx)("img",{src:t.img,alt:""})}),Object(O.jsxs)("div",{className:"card-back",children:[Object(O.jsx)("h1",{children:t.name}),Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Actor Name:"})," ",t.portrayed]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Nickname:"})," ",t.nickname]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Birthday:"})," ",t.birthday]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Status:"})," ",t.status]})]})]})]})})},m=c(18),p=c.p+"static/media/spinner.11d9cde8.gif",g=function(){return Object(O.jsx)("img",Object(m.a)({src:p,alt:"spinner on loading",style:{width:"30%",margin:"auto",display:"block",boxShadow:"box-shadow: 0 0 5px rgb(63, 148, 115)"}},"alt","Loading..."))},f=function(e){var t=e.items;return e.isLoading?Object(O.jsx)(g,{}):Object(O.jsx)("section",{className:"cards",children:t.map((function(e){return Object(O.jsx)(x,{item:e},e.char_id)}))})},v=function(e){var t=e.getQuery,c=Object(n.useState)(""),a=Object(l.a)(c,2),s=a[0],r=a[1];return Object(O.jsx)("section",{className:"search",children:Object(O.jsx)("form",{children:Object(O.jsx)("input",{type:"text",className:"form-control",placeholder:"Search characters...",value:s,onChange:function(e){return c=e.target.value,r(c),void t(c);var c},autoFocus:!0})})})},N=function(e){for(var t=e.postPerPage,c=e.totalPosts,n=e.paginate,a=[],s=1;s<=Math.ceil(c/t);s++)a.push(s);return Object(O.jsx)("nav",{children:Object(O.jsx)("ul",{className:"pagination",children:a.map((function(e){return Object(O.jsx)("li",{className:"page-item",children:Object(O.jsx)("button",{onClick:function(){return n(e)},className:"page-link",children:e})},e)}))})})},k=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!0),r=Object(l.a)(s,2),i=r[0],u=r[1],d=Object(n.useState)(""),x=Object(l.a)(d,2),m=x[0],p=x[1],g=Object(n.useState)(1),k=Object(l.a)(g,2),w=k[0],y=k[1],S=Object(n.useState)(8),P=Object(l.a)(S,1)[0];Object(n.useEffect)((function(){(function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()("https://www.breakingbadapi.com/api/characters?name=".concat(m));case 2:t=e.sent,a(t.data),u(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m]);var L=w*P,B=L-P,C=c.slice(B,L);return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(h,{}),Object(O.jsx)(v,{getQuery:function(e){return p(e)}}),Object(O.jsx)(N,{postPerPage:P,totalPosts:c.length,paginate:function(e){return y(e)}}),Object(O.jsx)(f,{isLoading:i,items:C})]})};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.96221f05.chunk.js.map