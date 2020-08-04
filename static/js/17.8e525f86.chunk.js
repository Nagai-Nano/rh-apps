(this["webpackJsonprh-apps"]=this["webpackJsonprh-apps"]||[]).push([[17],{321:function(n,e,t){"use strict";t.r(e);var r=t(287),a=t.n(r),c=t(160),o=t(289),i=t(148),u=t(0),l=t.n(u),s=t(290),f=t(137),p=t(328),b=t(32),d=t(33);function m(){var n=Object(b.a)(["\n  margin-top: 3rem;\n  text-align: center;\n  font-size: 1.5rem;\n  color: #ff4d4f;\n\n  svg {\n    font-size: 2rem;\n  }\n\n  p {\n    font-size: 1rem;\n  }\n"]);return m=function(){return n},n}function g(){var n=Object(b.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  svg {\n    color: #ff4d4f;\n    font-size: 2rem;\n  }\n\n  p {\n    margin-top: 10px;\n    margin-bottom: 0;\n    color: #ff4d4f;\n  }\n"]);return g=function(){return n},n}function v(){var n=Object(b.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return v=function(){return n},n}function h(){var n=Object(b.a)(["\n  padding: 7px;\n  border: 1px solid rgba(0, 0, 0, 0.07);\n  border-radius: 2px;\n  transition: all 0.2s linear;\n  position: relative;\n\n  &.clickable {\n    cursor: pointer;\n  }\n\n  &.hoverable {\n    &:hover {\n      box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);\n    }\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: 2px;\n  }\n"]);return h=function(){return n},n}function j(){var n=Object(b.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-auto-rows: 270px;\n  grid-gap: 1rem;\n"]);return j=function(){return n},n}var O=d.b.div(j()),x=d.b.div(h()),E=Object(d.b)(f.a)(v()),w=d.b.div(g()),k=d.b.div(m());var y=function(n){var e=n.src,t=n.alt,r=n.onImageClick,a=Object(u.useState)(!0),c=Object(i.a)(a,2),o=c[0],s=c[1],f=Object(u.useState)(!1),b=Object(i.a)(f,2),d=b[0],m=b[1],g=Object(u.useRef)(null);Object(u.useEffect)((function(){var n=new Image;n.src=e,n.onload=v,n.onerror=h}),[e]);var v=function(){g&&g.current&&(g.current.src=e,m(!1),s(!1))},h=function(){m(!0),s(!1)};return l.a.createElement(x,{className:!o&&!d&&"hoverable clickable",onClick:o||d||!r?void 0:function(n){r(n)}},o&&l.a.createElement(E,null),d&&l.a.createElement(w,null,l.a.createElement(p.a,null),l.a.createElement("p",null,"Failed to load this image")),l.a.createElement("img",{ref:g,alt:t}))},S="HBdMIYOqT71UZMpYnUPCHgzTDzCWg9_lsUqr3N3_Noc";e.default=function(){var n=Object(u.useState)(!1),e=Object(i.a)(n,2),t=e[0],r=e[1],b=Object(u.useState)([]),d=Object(i.a)(b,2),m=d[0],g=d[1],v=Object(u.useState)(1),h=Object(i.a)(v,2),j=h[0],x=h[1],E=Object(u.useState)(0),w=Object(i.a)(E,2),z=w[0],_=w[1];Object(u.useEffect)((function(){var n=!0;return C(n),function(){n=!1}}),[j]);var C=function(){var n=Object(o.a)(a.a.mark((function n(e){var t,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.unsplash.com/search/photos?page=".concat(j,"&query=kitten&client_id=").concat(S,"&per_page=15"));case 3:return t=n.sent,n.next=6,t.json();case 6:o=n.sent,e&&(_(o.total_pages),g((function(n){return[].concat(Object(c.a)(n),Object(c.a)(o.results))}))),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),e&&r(!0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}();return l.a.createElement(s.a,{dataLength:m.length,next:t?void 0:function(){return x((function(n){return n+1}))},hasMore:j<z,loader:t?void 0:l.a.createElement(f.a,{style:{width:"100%",margin:"2.5rem 0"}})},l.a.createElement(O,null,m.map((function(n){var e=n.id,t=n.alt_description,r=n.urls;return l.a.createElement(y,{key:e,src:r.regular,alt:t})}))),t&&l.a.createElement(k,null,l.a.createElement(p.a,null),l.a.createElement("p",null,"Error! Something went wrong")))}}}]);
//# sourceMappingURL=17.8e525f86.chunk.js.map