(this["webpackJsonpgame-heroes"]=this["webpackJsonpgame-heroes"]||[]).push([[0],[,,,,,,,,,function(e,c,s){},function(e,c,s){},function(e,c,s){},,function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){"use strict";s.r(c);var t=s(1),n=s.n(t),a=s(4),r=s.n(a),i=(s(9),s(3)),o=(s(10),s(11),s(0)),j=function(e){var c=e.setSearchItems;return Object(o.jsx)("div",{className:"search",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("input",{type:"search",placeholder:"Search Hero",onChange:function(e){c(e.target.value)}})})})},l=(s(13),function(e){var c=e.hero;return Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("img",{src:"".concat("/game-heroes","/img/hero").concat(c.id,".png"),alt:"hero",className:"imageItem"}),Object(o.jsx)("h3",{children:c.name}),Object(o.jsx)("p",{children:c.email})]})})}),h=(s(14),function(e){var c=e.heroes;return Object(o.jsx)("div",{className:"cardlist",children:c.map((function(e){return Object(o.jsx)(l,{hero:e},e.id)}))})});var d=function(){var e=Object(t.useState)(""),c=Object(i.a)(e,2),s=c[0],n=c[1],a=Object(t.useState)([]),r=Object(i.a)(a,2),l=r[0],d=r[1];Object(t.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return d(e)}))}),[]);var m=l.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)("h1",{children:"Game Heroes"}),Object(o.jsx)(j,{setSearchItems:n}),Object(o.jsx)(h,{heroes:m})]})},m=(s(15),function(){return Object(o.jsx)("div",{className:"header",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("img",{src:"".concat("/game-heroes","/img/logo1.png"),alt:"logo",className:"logo"}),Object(o.jsxs)("ul",{className:"categories",children:[Object(o.jsx)("li",{className:"category",children:"Home"}),Object(o.jsx)("li",{className:"category",children:"portfolio"}),Object(o.jsx)("li",{className:"category",children:"Skills"}),Object(o.jsx)("li",{className:"category",children:"about"}),Object(o.jsx)("li",{className:"category",children:"contact"})]})]})})}),b=(s(16),function(){return Object(o.jsx)("div",{className:"footer",children:Object(o.jsxs)("div",{className:"inner",children:[Object(o.jsxs)("div",{className:"info",children:[Object(o.jsx)("span",{children:"Company Number 201-81-21515"}),Object(o.jsx)("span",{children:"Clavis coporate"}),Object(o.jsx)("span",{children:"TEL : 1) 123-456-7890 / FAX : 1) 123-456-7890"}),Object(o.jsx)("span",{children:"CEO : Daniel Song"})]}),Object(o.jsxs)("p",{className:"copyright",children:["\xa9 ",Object(o.jsx)("span",{className:"this-year"})," Daniel Song. All Rights Reserved."]}),Object(o.jsx)("img",{src:"".concat("/game-heroes","/img/logo2.png"),alt:"",className:"logo"})]})})}),u=function(e){var c=e.children;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(m,{}),c,Object(o.jsx)(b,{})]})};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(u,{children:Object(o.jsx)(d,{})})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.4c063030.chunk.js.map