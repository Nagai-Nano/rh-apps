(this["webpackJsonprh-apps"]=this["webpackJsonprh-apps"]||[]).push([[8],{148:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(149);function a(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,a=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done)&&(e.push(o.value),!n||e.length!==n);r=!0);}catch(s){a=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return e}}(t,n)||Object(r.a)(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},149:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(150);function a(t,n){if(t){if("string"===typeof t)return Object(r.a)(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(r.a)(t,n):void 0}}},150:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e.d(n,"a",(function(){return r}))},152:function(t,n,e){"use strict";var r=e(0),a=r.createContext(void 0);n.a=a},154:function(t,n,e){"use strict";var r;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=(r=e(155))&&r.__esModule?r:{default:r};n.default=a,t.exports=a},155:function(t,n,e){"use strict";var r=e(37),a=e(45);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e(0)),o=r(e(156)),c=r(e(59)),s=function(t,n){return i.createElement(c.default,Object.assign({},t,{ref:n,icon:o.default}))};s.displayName="LoadingOutlined";var l=i.forwardRef(s);n.default=l},156:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"}},157:function(t,n,e){"use strict";var r={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},a={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},i=[],o=[];function c(t,n,e){t.addEventListener(n,e,!1)}function s(t,n,e){t.removeEventListener(n,e,!1)}"undefined"!==typeof window&&"undefined"!==typeof document&&function(){var t=document.createElement("div").style;function n(n,e){for(var r in n)if(n.hasOwnProperty(r)){var a=n[r];for(var i in a)if(i in t){e.push(a[i]);break}}}"AnimationEvent"in window||(delete r.animationstart.animation,delete a.animationend.animation),"TransitionEvent"in window||(delete r.transitionstart.transition,delete a.transitionend.transition),n(r,i),n(a,o)}();var l={startEvents:i,addStartEventListener:function(t,n){0!==i.length?i.forEach((function(e){c(t,e,n)})):window.setTimeout(n,0)},removeStartEventListener:function(t,n){0!==i.length&&i.forEach((function(e){s(t,e,n)}))},endEvents:o,addEndEventListener:function(t,n){0!==o.length?o.forEach((function(e){c(t,e,n)})):window.setTimeout(n,0)},removeEndEventListener:function(t,n){0!==o.length&&o.forEach((function(e){s(t,e,n)}))}};n.a=l},159:function(t,n,e){"use strict";var r,a=e(2),i=e.n(a),o=e(4),c=e.n(o),s=e(50),l=e.n(s),u=e(61),d=e.n(u),f=e(0),m=e(1),p=e.n(m),v=e(27),b=e(58),h=e(12),g=e.n(h),y=function t(n){return g()(this,t),new Error("unreachable case: ".concat(JSON.stringify(n)))},E=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(e[r[a]]=t[r[a]])}return e},O=function(t){return f.createElement(b.a,null,(function(n){var e,r=n.getPrefixCls,a=n.direction,o=t.prefixCls,s=t.size,l=t.className,u=E(t,["prefixCls","size","className"]),d=r("btn-group",o),m="";switch(s){case"large":m="lg";break;case"small":m="sm";break;case"middle":case void 0:break;default:console.warn(new y(s))}var v=p()(d,(e={},c()(e,"".concat(d,"-").concat(m),m),c()(e,"".concat(d,"-rtl"),"rtl"===a),e),l);return f.createElement("div",i()({},u,{className:v}))}))},w=e(13),x=e.n(w),S=e(95),k=e.n(S),j=e(14),N=e.n(j),T=e(19),A=e.n(T),C=e(8),P=e.n(C),z=e(10),L=e(157),M=e(42),I=e.n(M),R=0,W={};function _(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=R++,r=n;function a(){(r-=1)<=0?(t(),delete W[e]):W[e]=I()(a)}return W[e]=I()(a),e}function B(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=P()(t);if(n){var a=P()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return A()(this,e)}}function D(t){return!t||null===t.offsetParent}function U(t){var n=(t||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(n&&n[1]&&n[2]&&n[3])||!(n[1]===n[2]&&n[2]===n[3])}_.cancel=function(t){void 0!==t&&(I.a.cancel(W[t]),delete W[t])},_.ids=W;var J=function(t){N()(e,t);var n=B(e);function e(){var t;return g()(this,e),(t=n.apply(this,arguments)).animationStart=!1,t.destroyed=!1,t.onClick=function(n,e){if(!(!n||D(n)||n.className.indexOf("-leave")>=0)){var a=t.props.insertExtraNode;t.extraNode=document.createElement("div");var i=k()(t).extraNode,o=t.context.getPrefixCls;i.className="".concat(o(""),"-click-animating-node");var c=t.getAttributeName();n.setAttribute(c,"true"),r=r||document.createElement("style"),e&&"#ffffff"!==e&&"rgb(255, 255, 255)"!==e&&U(e)&&!/rgba\((?:\d*, ){3}0\)/.test(e)&&"transparent"!==e&&(t.csp&&t.csp.nonce&&(r.nonce=t.csp.nonce),i.style.borderColor=e,r.innerHTML="\n      [".concat(o(""),"-click-animating-without-extra-node='true']::after, .").concat(o(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(e,";\n      }"),document.body.contains(r)||document.body.appendChild(r)),a&&n.appendChild(i),L.a.addStartEventListener(n,t.onTransitionStart),L.a.addEndEventListener(n,t.onTransitionEnd)}},t.onTransitionStart=function(n){if(!t.destroyed){var e=Object(z.findDOMNode)(k()(t));n&&n.target===e&&!t.animationStart&&t.resetEffect(e)}},t.onTransitionEnd=function(n){n&&"fadeEffect"===n.animationName&&t.resetEffect(n.target)},t.bindAnimationEvent=function(n){if(n&&n.getAttribute&&!n.getAttribute("disabled")&&!(n.className.indexOf("disabled")>=0)){var e=function(e){if("INPUT"!==e.target.tagName&&!D(e.target)){t.resetEffect(n);var r=getComputedStyle(n).getPropertyValue("border-top-color")||getComputedStyle(n).getPropertyValue("border-color")||getComputedStyle(n).getPropertyValue("background-color");t.clickWaveTimeoutId=window.setTimeout((function(){return t.onClick(n,r)}),0),_.cancel(t.animationStartId),t.animationStart=!0,t.animationStartId=_((function(){t.animationStart=!1}),10)}};return n.addEventListener("click",e,!0),{cancel:function(){n.removeEventListener("click",e,!0)}}}},t.renderWave=function(n){var e=n.csp,r=t.props.children;return t.csp=e,r},t}return x()(e,[{key:"componentDidMount",value:function(){var t=Object(z.findDOMNode)(this);t&&1===t.nodeType&&(this.instance=this.bindAnimationEvent(t))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var t=this.context.getPrefixCls,n=this.props.insertExtraNode;return"".concat(t(""),n?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(t){if(t&&t!==this.extraNode&&t instanceof Element){var n=this.props.insertExtraNode,e=this.getAttributeName();t.setAttribute(e,"false"),r&&(r.innerHTML=""),n&&this.extraNode&&t.contains(this.extraNode)&&t.removeChild(this.extraNode),L.a.removeStartEventListener(t,this.onTransitionStart),L.a.removeEndEventListener(t,this.onTransitionEnd)}}},{key:"render",value:function(){return f.createElement(b.a,null,this.renderWave)}}]),e}(f.Component);J.contextType=b.b;var V=e(46),Y=e(60),G=e(152),H=e(51),$=e(154),q=e.n($),F=function(){return{width:0,opacity:0,transform:"scale(0)"}},K=function(t){return{width:t.scrollWidth,opacity:1,transform:"scale(1)"}};function Q(t){var n=t.prefixCls,e=!!t.loading;return t.existIcon?f.createElement("span",{className:"".concat(n,"-loading-icon")},f.createElement(q.a,null)):f.createElement(H.a,{visible:e,motionName:"".concat(n,"-loading-icon-motion"),removeOnLeave:!0,onAppearStart:F,onAppearActive:K,onEnterStart:F,onEnterActive:K,onLeaveStart:K,onLeaveActive:F},(function(t,e){var r=t.className,a=t.style;return f.createElement("span",{className:"".concat(n,"-loading-icon"),style:a,ref:e},f.createElement(q.a,{className:p()(r)}))}))}var X=e(20),Z=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(e[r[a]]=t[r[a]])}return e},tt=/^[\u4e00-\u9fa5]{2}$/,nt=tt.test.bind(tt);function et(t){return"text"===t||"link"===t}function rt(t,n){var e=!1,r=[];return f.Children.forEach(t,(function(t){var n=d()(t),a="string"===n||"number"===n;if(e&&a){var i=r.length-1,o=r[i];r[i]="".concat(o).concat(t)}else r.push(t);e=a})),f.Children.map(r,(function(t){return function(t,n){if(null!=t){var e=n?" ":"";return"string"!==typeof t&&"number"!==typeof t&&"string"===typeof t.type&&nt(t.props.children)?Object(X.a)(t,{children:t.props.children.split("").join(e)}):"string"===typeof t?(nt(t)&&(t=t.split("").join(e)),f.createElement("span",null,t)):t}}(t,n)}))}Object(V.a)("default","primary","ghost","dashed","link","text"),Object(V.a)("circle","circle-outline","round"),Object(V.a)("submit","button","reset");var at=function(t,n){var e,r,a=t.loading,o=t.prefixCls,s=t.type,u=t.danger,m=t.shape,h=t.size,g=t.className,y=t.children,E=t.icon,O=t.ghost,w=t.block,x=Z(t,["loading","prefixCls","type","danger","shape","size","className","children","icon","ghost","block"]),S=f.useContext(G.a),k=f.useState(!!a),j=l()(k,2),N=j[0],T=j[1],A=f.useState(!1),C=l()(A,2),P=C[0],z=C[1],L=f.useContext(b.b),M=L.getPrefixCls,I=L.autoInsertSpaceInButton,R=L.direction,W=n||f.createRef(),_=f.useRef(),B=function(){return 1===f.Children.count(y)&&!E&&!et(s)};r="object"===d()(a)&&a.delay?a.delay||!0:!!a,f.useEffect((function(){clearTimeout(_.current),"number"===typeof r?_.current=window.setTimeout((function(){T(r)}),r):T(r)}),[r]),f.useEffect((function(){!function(){if(W&&W.current&&!1!==I){var t=W.current.textContent;B()&&nt(t)?P||z(!0):P&&z(!1)}}()}),[W]);var D=function(n){var e=t.onClick;N||e&&e(n)};Object(Y.a)(!("string"===typeof E&&E.length>2),"Button","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(E,"` at https://ant.design/components/icon")),Object(Y.a)(!(O&&et(s)),"Button","`link` or `text` button can't be a `ghost` button.");var U=M("btn",o),V=!1!==I,H="";switch(h||S){case"large":H="lg";break;case"small":H="sm"}var $=N?"loading":E,q=p()(U,g,(e={},c()(e,"".concat(U,"-").concat(s),s),c()(e,"".concat(U,"-").concat(m),m),c()(e,"".concat(U,"-").concat(H),H),c()(e,"".concat(U,"-icon-only"),!y&&0!==y&&$),c()(e,"".concat(U,"-background-ghost"),O&&!et(s)),c()(e,"".concat(U,"-loading"),N),c()(e,"".concat(U,"-two-chinese-chars"),P&&V),c()(e,"".concat(U,"-block"),w),c()(e,"".concat(U,"-dangerous"),!!u),c()(e,"".concat(U,"-rtl"),"rtl"===R),e)),F=E&&!N?E:f.createElement(Q,{existIcon:!!E,prefixCls:U,loading:!!N}),K=y||0===y?rt(y,B()&&V):null,X=Object(v.a)(x,["htmlType","loading"]);if(void 0!==X.href)return f.createElement("a",i()({},X,{className:q,onClick:D,ref:W}),F,K);var tt=x,at=tt.htmlType,it=Z(tt,["htmlType"]),ot=f.createElement("button",i()({},Object(v.a)(it,["loading"]),{type:at,className:q,onClick:D,ref:W}),F,K);return et(s)?ot:f.createElement(J,null,ot)},it=f.forwardRef(at);it.displayName="Button",it.defaultProps={loading:!1,ghost:!1,block:!1,htmlType:"button"},it.Group=O,it.__ANT_BUTTON=!0;var ot=it;n.a=ot},284:function(t,n,e){t.exports=e.p+"static/media/rock.fedd24bb.png"},285:function(t,n,e){t.exports=e.p+"static/media/paper.34eb362a.png"},286:function(t,n,e){t.exports=e.p+"static/media/scissors.12833d5f.png"},326:function(t,n,e){"use strict";e.r(n);var r=e(148),a=e(0),i=e.n(a),o=e(159),c=e(32),s=e(33);function l(){var t=Object(c.a)(["\n  h3 {\n    text-align: center;\n    font-size: 3rem;\n    height: 8rem;\n    margin: 0;\n    line-height: 8rem;\n    font-weight: bold;\n    letter-spacing: 1px;\n  }\n\n  &.win h3 {\n    color: #52c41a;\n  }\n\n  &.lose h3 {\n    color: #ff4d4f;\n  }\n\n  &.draw h3 {\n    color: #595959;\n  }\n"]);return l=function(){return t},t}function u(){var t=Object(c.a)(["\n  margin-top: 3rem;\n  text-align: center;\n"]);return u=function(){return t},t}function d(){var t=Object(c.a)(["\n  width: 120px;\n  height: 120px;\n  background: transparent;\n  padding: 1rem;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: 0.3s all ease;\n  opacity: 0.7;\n\n  &.active,\n  &:hover {\n    background: #13c2c2;\n    opacity: 1;\n  }\n\n  img {\n    width: 80px;\n    height: 80px;\n  }\n"]);return d=function(){return t},t}function f(){var t=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  .player,\n  .computer {\n    width: 50%;\n    text-align: center;\n    color: #595959;\n\n    .title {\n      font-size: 2.8rem;\n      text-transform: uppercase;\n      font-weight: 700;\n      letter-spacing: 1px;\n    }\n\n    .score {\n      font-size: 5rem;\n    }\n  }\n\n  .computer {\n    .title,\n    .score {\n      color: #ff4d4f;\n    }\n\n    .choices button {\n      pointer-events: none;\n    }\n  }\n\n  .versus {\n    margin: 0 1rem;\n    font-size: 4rem;\n    color: #ccc;\n    opacity: 0.7;\n    font-weight: 700;\n    align-self: center;\n    margin-bottom: 10px;\n  }\n\n  .choices {\n    display: flex;\n    justify-content: center;\n    margin-top: 1.5rem;\n  }\n"]);return f=function(){return t},t}function m(){var t=Object(c.a)(["\n  background: #13c2c2;\n  color: #fff;\n  font-weight: 700;\n  font-size: 3.1rem;\n  padding: 1.5rem 1rem;\n  text-align: center;\n  letter-spacing: 1px;\n  border-radius: 2px;\n  margin-bottom: 2rem;\n"]);return m=function(){return t},t}function p(){var t=Object(c.a)([""]);return p=function(){return t},t}var v=s.b.div(p()),b=s.b.h2(m()),h=s.b.div(f()),g=s.b.button(d()),y=s.b.div(u()),E=s.b.div(l()),O=e(284),w=e.n(O),x=e(285),S=e.n(x),k=e(286),j=e.n(k),N=[{id:1,title:"Paper",imgSrc:S.a,losesId:3},{id:2,title:"Rock",imgSrc:w.a,losesId:1},{id:3,title:"Scissors",imgSrc:j.a,losesId:2}];n.default=function(){var t=Object(a.useState)(null),n=Object(r.a)(t,2),e=n[0],c=n[1],s=Object(a.useState)(null),l=Object(r.a)(s,2),u=l[0],d=l[1],f=Object(a.useState)(0),m=Object(r.a)(f,2),p=m[0],O=m[1],w=Object(a.useState)(0),x=Object(r.a)(w,2),S=x[0],k=x[1],j=Object(a.useState)(""),T=Object(r.a)(j,2),A=T[0],C=T[1],P=function(t,n){return i.a.createElement("div",{className:"choices"},N.map((function(e){return i.a.createElement(g,{key:e.id,className:"".concat(n===e.id?"active":""),style:{margin:2===e.id?"0 2rem":0},onClick:t||A?void 0:z(e)},i.a.createElement("img",{src:e.imgSrc,alt:e.title}))})))},z=function(t){return function(){c(t)}};return i.a.createElement(v,null,i.a.createElement(b,null,"Let's play Paper, Rock, Scissors!"),i.a.createElement(h,null,i.a.createElement("div",{className:"player"},i.a.createElement("div",{className:"title"},"You"),i.a.createElement("div",{className:"score"},p),P(!1,null===e||void 0===e?void 0:e.id)),i.a.createElement("h3",{className:"versus"},"vs"),i.a.createElement("div",{className:"computer"},i.a.createElement("div",{className:"title"},"Computer"),i.a.createElement("div",{className:"score"},S),P(!0,null===u||void 0===u?void 0:u.id))),i.a.createElement(y,null,e&&!A&&i.a.createElement(o.a,{type:"primary",size:"large",onClick:function(){var t=N[~~(Math.random()*N.length)];d(t),t.id===e.id?C("draw"):e.id===t.losesId?(O((function(t){return t+1})),C("win")):(k((function(t){return t+1})),C("lose"))}},"GOOOOOOOOO!!!"),A&&i.a.createElement(o.a,{type:"primary",size:"large",onClick:function(){c(null),d(null),C("")}},"Play Again")),i.a.createElement(E,{className:A},"win"===A&&i.a.createElement("h3",null,"Congrats! You Won"),"lose"===A&&i.a.createElement("h3",null,"Uh Oh! You Lose"),"draw"===A&&i.a.createElement("h3",null,"Drewwwwwww")))}}}]);
//# sourceMappingURL=8.fc108c86.chunk.js.map