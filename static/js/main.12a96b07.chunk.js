(this["webpackJsonprh-apps"]=this["webpackJsonprh-apps"]||[]).push([[3],{133:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(10),o=t.n(l),i=(t(101),t(57)),c=t(9),u=t(135),m=t(137),p=t(139),s=t(140),d=t(141),b=t(142),f=t(143),h=t(144),g=t(145),k=t(146),E=t(147),y=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(6),t.e(18)]).then(t.bind(null,322))})),x=Object(a.lazy)((function(){return t.e(14).then(t.bind(null,323))})),v=Object(a.lazy)((function(){return Promise.all([t.e(7),t.e(16)]).then(t.bind(null,324))})),j=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(13)]).then(t.bind(null,316))})),w=Object(a.lazy)((function(){return t.e(8).then(t.bind(null,326))})),O=Object(a.lazy)((function(){return Promise.all([t.e(10),t.e(17)]).then(t.bind(null,321))})),C=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(20),t.e(19)]).then(t.bind(null,327))})),z=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(2),t.e(12),t.e(15)]).then(t.bind(null,319))})),P=Object(a.lazy)((function(){return Promise.all([t.e(9),t.e(11)]).then(t.bind(null,320))})),S=[{key:"markdown-editor",title:"Markdown Editor",path:"/markdown-editor",icon:r.a.createElement(p.a,null),Component:y},{key:"countdown",title:"Countdown",path:"/countdown",icon:r.a.createElement(s.a,null),Component:x},{key:"gen-pass",title:"Gen Pass",path:"/gen-pass",icon:r.a.createElement(d.a,null),Component:v},{key:"text-converter",title:"Text Converter",path:"/text-converter",icon:r.a.createElement(b.a,null),Component:j},{key:"paper-rock-scissors",title:"Paper, Rock, Scissors",path:"/paper-rock-scissors",icon:r.a.createElement(f.a,null),Component:w},{key:"infinite-kittens",title:"Infinite Kittens",path:"/infinite-kittens",icon:r.a.createElement(h.a,null),Component:O},{key:"text-to-speech",title:"Text To Speech",path:"/text-to-speech",icon:r.a.createElement(g.a,null),Component:C},{key:"movie-seat-booking",title:"Movie Seat Booking",path:"/movie-seat-booking",icon:r.a.createElement(k.a,null),Component:z},{key:"memory-cards",title:"Memory Cards",path:"/memory-cards",icon:r.a.createElement(E.a,null),Component:P}],I=t(32),M=t(33),T=t(138);function B(){var e=Object(I.a)(["\n  background: transparent !important;\n  border-right: none;\n\n  li {\n    padding: 0 10px !important;\n  }\n"]);return B=function(){return e},e}function H(){var e=Object(I.a)(["\n  display: flex;\n  align-items: center;\n\n  img {\n    width: 60px;\n    margin-left: 7px;\n  }\n\n  h2 {\n    margin: 0;\n    padding-top: 3px;\n    font-weight: 700;\n  }\n"]);return H=function(){return e},e}function J(){var e=Object(I.a)(["\n  padding: 1rem;\n  background: #fff;\n  margin: 2rem;\n  border-radius: 2px;\n  box-shadow: 0 0 12px #f0f1f2;\n"]);return J=function(){return e},e}function K(){var e=Object(I.a)(["\n  text-align: right;\n  background: #fff;\n  box-shadow: 0 2px 8px #f0f1f2;\n"]);return K=function(){return e},e}function N(){var e=Object(I.a)(["\n  overflow: auto;\n  position: fixed;\n  left: 0;\n  height: 100vh;\n  padding: 12px;\n  background: #fff;\n  box-shadow: 0 2px 8px #f0f1f2;\n"]);return N=function(){return e},e}var R=Object(M.b)(u.a.Sider)(N()),F=Object(M.b)(u.a.Header)(K()),G=Object(M.b)(u.a.Content)(J()),L=M.b.div(H()),q=Object(M.b)(T.a)(B());var A=function(){return r.a.createElement(F,null,"header")},D=t(136),Q=t(93),U=t.n(Q);var V=function(){var e=Object(c.g)().pathname;return r.a.createElement(R,null,r.a.createElement(L,null,r.a.createElement("img",{src:U.a,alt:"react-logo"}),r.a.createElement("h2",null,"Rh-apps")),r.a.createElement(D.a,null),r.a.createElement(q,{mode:"inline",defaultSelectedKeys:[e.slice(1)]},S.map((function(e){var n=e.key,t=e.title,a=e.path,l=e.icon;return r.a.createElement(q.Item,{key:n,icon:l,title:t},r.a.createElement(i.b,{exact:!0,to:a},t))}))))};var W=function(e){var n=e.children;return r.a.createElement(G,null,n)};var X=function(){return r.a.createElement(i.a,null,r.a.createElement(u.a,{style:{minHeight:"100vh"}},r.a.createElement(V,null),r.a.createElement(u.a,{style:{marginLeft:200}},r.a.createElement(A,null),r.a.createElement(W,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(m.a,{className:"spin-center"})},r.a.createElement(c.d,null,S.map((function(e){var n=e.key,t=e.path,a=e.Component;return r.a.createElement(c.b,{exact:!0,key:n,path:t,component:a})})),r.a.createElement(c.b,{render:function(){return r.a.createElement(c.a,{to:"/markdown-editor"})}})))))))};function Y(){var e=Object(I.a)(["\n  body {\n    font-family: 'Nunito', sans-serif;\n    background: #e9ebee;\n    color: rgba(0, 0, 0, 0.85);\n  }\n\n  .spin-center {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  &::-webkit-scrollbar {\n    width: 12px;\n    height: 10px;\n    background: #fff;\n  }\n\n  &::-webkit-scrollbar-button {\n    width: 0;\n    height: 0;\n    display: none;\n  }\n\n  &::-webkit-scrollbar-corner {\n    background: transparent;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    height: 6px;\n    border: 2px solid transparent;\n    background-clip: padding-box;\n    border-radius: 7px;\n    background-color: #8c8c8c;\n  }\n"]);return Y=function(){return e},e}var Z=Object(M.a)(Y());o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null),r.a.createElement(X,null)),document.getElementById("root"))},93:function(e,n,t){e.exports=t.p+"static/media/logo.f8868b95.svg"},96:function(e,n,t){e.exports=t(133)}},[[96,4,5]]]);
//# sourceMappingURL=main.12a96b07.chunk.js.map