var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function c(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function m(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function f(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let h;function g(t){h=t}function $(t){(function(){if(!h)throw new Error("Function called outside component initialization");return h})().$$.on_mount.push(t)}const y=[],b=[],v=[],x=[],w=Promise.resolve();let k=!1;function _(t){v.push(t)}let z=!1;const T=new Set;function E(){if(!z){z=!0;do{for(let t=0;t<y.length;t+=1){const n=y[t];g(n),M(n.$$)}for(g(null),y.length=0;b.length;)b.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];T.has(n)||(T.add(n),n())}v.length=0}while(y.length);for(;x.length;)x.pop()();k=!1,z=!1,T.clear()}}function M(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const A=new Set;let H;function N(){H={r:0,c:[],p:H}}function j(){H.r||r(H.c),H=H.p}function q(t,n){t&&t.i&&(A.delete(t),t.i(n))}function B(t,n,e,r){if(t&&t.o){if(A.has(t))return;A.add(t),H.c.push((()=>{A.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function C(t){t&&t.c()}function L(t,e,i){const{fragment:l,on_mount:a,on_destroy:s,after_update:c}=t.$$;l&&l.m(e,i),_((()=>{const e=a.map(n).filter(o);s?s.push(...e):r(e),t.$$.on_mount=[]})),c.forEach(_)}function S(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function O(t,n){-1===t.$$.dirty[0]&&(y.push(t),k||(k=!0,w.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function P(n,o,i,l,a,c,m=[-1]){const u=h;g(n);const d=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:e(),dirty:m,skip_bound:!1};let p=!1;if(d.ctx=i?i(n,o.props||{},((t,e,...r)=>{const o=r.length?r[0]:e;return d.ctx&&a(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),p&&O(n,t)),e})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!l&&l(d.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);d.fragment&&d.fragment.l(t),t.forEach(s)}else d.fragment&&d.fragment.c();o.intro&&q(n.$$.fragment),L(n,o.target,o.anchor),E()}g(u)}class D{$destroy(){S(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function I(n){let e,r,o,i,c,u;return{c(){e=m("details"),r=m("summary"),r.innerHTML="<strong>Example</strong>",o=d(),i=m("div"),c=m("pre"),u=m("code"),p(i,"class","content"),p(e,"class","example mb")},m(t,s){a(t,e,s),l(e,r),l(e,o),l(e,i),l(i,c),l(c,u),u.innerHTML=n[0]},p(t,[n]){1&n&&(u.innerHTML=t[0])},i:t,o:t,d(t){t&&s(e)}}}function U(t,n,e){let{item:r}=n;return t.$$set=t=>{"item"in t&&e(0,r=t.item)},[r]}class F extends D{constructor(t){super(),P(this,t,U,I,i,{item:0})}}function R(t,n,e){const r=t.slice();return r[3]=n[e],r}function G(t){let n,e,r,o,i,h,g=t[0],$=[];for(let n=0;n<g.length;n+=1)$[n]=Y(R(t,g,n));const y=t=>B($[t],1,1,(()=>{$[t]=null}));return{c(){n=m("div"),e=m("h3"),r=u(t[1]),o=d(),i=m("div");for(let t=0;t<$.length;t+=1)$[t].c();p(i,"class","items"),p(n,"class","params")},m(t,s){a(t,n,s),l(n,e),l(e,r),l(n,o),l(n,i);for(let t=0;t<$.length;t+=1)$[t].m(i,null);h=!0},p(t,n){if((!h||2&n)&&f(r,t[1]),5&n){let e;for(g=t[0],e=0;e<g.length;e+=1){const r=R(t,g,e);$[e]?($[e].p(r,n),q($[e],1)):($[e]=Y(r),$[e].c(),q($[e],1),$[e].m(i,null))}for(N(),e=g.length;e<$.length;e+=1)y(e);j()}},i(t){if(!h){for(let t=0;t<g.length;t+=1)q($[t]);h=!0}},o(t){$=$.filter(Boolean);for(let t=0;t<$.length;t+=1)B($[t]);h=!1},d(t){t&&s(n),c($,t)}}}function J(t){let n;return{c(){n=m("sup"),n.textContent="*"},m(t,e){a(t,n,e)},d(t){t&&s(n)}}}function K(t){let n,e,r=t[3].type+"";return{c(){n=m("div"),e=u(r),p(n,"class","type")},m(t,r){a(t,n,r),l(n,e)},p(t,n){1&n&&r!==(r=t[3].type+"")&&f(e,r)},d(t){t&&s(n)}}}function Q(t){let n,e,r=t[3].in+"";return{c(){n=m("div"),e=u(r),p(n,"class","in")},m(t,r){a(t,n,r),l(n,e)},p(t,n){1&n&&r!==(r=t[3].in+"")&&f(e,r)},d(t){t&&s(n)}}}function V(t){let n,e,r=t[3].desc+"";return{c(){n=m("div"),e=u(r),p(n,"class","desc")},m(t,r){a(t,n,r),l(n,e)},p(t,n){1&n&&r!==(r=t[3].desc+"")&&f(e,r)},d(t){t&&s(n)}}}function W(t){let n,e;return n=new F({props:{item:t[3].example}}),{c(){C(n.$$.fragment)},m(t,r){L(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.item=t[3].example),n.$set(r)},i(t){e||(q(n.$$.fragment,t),e=!0)},o(t){B(n.$$.fragment,t),e=!1},d(t){S(n,t)}}}function X(t){let n,e;return n=new F({props:{item:t[2][t[3].ref]}}),{c(){C(n.$$.fragment)},m(t,r){L(n,t,r),e=!0},p(t,e){const r={};5&e&&(r.item=t[2][t[3].ref]),n.$set(r)},i(t){e||(q(n.$$.fragment,t),e=!0)},o(t){B(n.$$.fragment,t),e=!1},d(t){S(n,t)}}}function Y(t){let n,e,r,o,i,c,h,g,$,y,b,v,x,w=t[3].name+"",k=t[3].req&&J(),_=t[3].type&&K(t),z=t[3].in&&Q(t),T=t[3].desc&&V(t),E=t[3].example&&W(t),M=t[3].ref&&X(t);return{c(){n=m("div"),e=m("div"),r=m("h4"),o=u(w),i=d(),k&&k.c(),c=d(),_&&_.c(),h=d(),z&&z.c(),g=d(),$=m("div"),T&&T.c(),y=d(),E&&E.c(),b=d(),M&&M.c(),v=d(),p(e,"class","left label"),p($,"class","right value"),p(n,"class","item grid")},m(t,s){a(t,n,s),l(n,e),l(e,r),l(r,o),l(r,i),k&&k.m(r,null),l(e,c),_&&_.m(e,null),l(e,h),z&&z.m(e,null),l(n,g),l(n,$),T&&T.m($,null),l($,y),E&&E.m($,null),l($,b),M&&M.m($,null),l(n,v),x=!0},p(t,n){(!x||1&n)&&w!==(w=t[3].name+"")&&f(o,w),t[3].req?k||(k=J(),k.c(),k.m(r,null)):k&&(k.d(1),k=null),t[3].type?_?_.p(t,n):(_=K(t),_.c(),_.m(e,h)):_&&(_.d(1),_=null),t[3].in?z?z.p(t,n):(z=Q(t),z.c(),z.m(e,null)):z&&(z.d(1),z=null),t[3].desc?T?T.p(t,n):(T=V(t),T.c(),T.m($,y)):T&&(T.d(1),T=null),t[3].example?E?(E.p(t,n),1&n&&q(E,1)):(E=W(t),E.c(),q(E,1),E.m($,b)):E&&(N(),B(E,1,1,(()=>{E=null})),j()),t[3].ref?M?(M.p(t,n),1&n&&q(M,1)):(M=X(t),M.c(),q(M,1),M.m($,null)):M&&(N(),B(M,1,1,(()=>{M=null})),j())},i(t){x||(q(E),q(M),x=!0)},o(t){B(E),B(M),x=!1},d(t){t&&s(n),k&&k.d(),_&&_.d(),z&&z.d(),T&&T.d(),E&&E.d(),M&&M.d()}}}function Z(t){let n,e,r=t[0]&&G(t);return{c(){r&&r.c(),n=u("")},m(t,o){r&&r.m(t,o),a(t,n,o),e=!0},p(t,[e]){t[0]?r?(r.p(t,e),1&e&&q(r,1)):(r=G(t),r.c(),q(r,1),r.m(n.parentNode,n)):r&&(N(),B(r,1,1,(()=>{r=null})),j())},i(t){e||(q(r),e=!0)},o(t){B(r),e=!1},d(t){r&&r.d(t),t&&s(n)}}}function tt(t,n,e){let{data:r}=n,{title:o}=n,{ref:i}=n;return t.$$set=t=>{"data"in t&&e(0,r=t.data),"title"in t&&e(1,o=t.title),"ref"in t&&e(2,i=t.ref)},[r,o,i]}class nt extends D{constructor(t){super(),P(this,t,tt,Z,i,{data:0,title:1,ref:2})}}function et(t,n,e){const r=t.slice();return r[1]=n[e],r}function rt(t,n,e){const r=t.slice();return r[1]=n[e],r}function ot(t,n,e){const r=t.slice();return r[6]=n[e],r}function it(t){let n,e,r,o,i,h,g,$,y,b,v,x,w,k,_,z,T,E,M=t[0].title+"",A=t[0].api+"",H=t[0].updated+"",C=t[0].security+"",L=t[0].creator&&lt(t),S=t[0].paths,O=[];for(let n=0;n<S.length;n+=1)O[n]=ht(et(t,S,n));const P=t=>B(O[t],1,1,(()=>{O[t]=null}));return{c(){n=m("h1"),e=u(M),r=d(),o=m("div"),i=m("strong"),h=u(A),g=d(),$=m("div"),y=u(H),b=d(),L&&L.c(),v=d();for(let t=0;t<O.length;t+=1)O[t].c();x=d(),w=m("div"),k=m("h2"),k.textContent="Security",_=d(),z=m("p"),T=u(C),p(o,"id","api"),p($,"class","updated mb"),p(w,"id","security")},m(t,s){a(t,n,s),l(n,e),a(t,r,s),a(t,o,s),l(o,i),l(i,h),a(t,g,s),a(t,$,s),l($,y),a(t,b,s),L&&L.m(t,s),a(t,v,s);for(let n=0;n<O.length;n+=1)O[n].m(t,s);a(t,x,s),a(t,w,s),l(w,k),l(w,_),l(w,z),l(z,T),E=!0},p(t,n){if((!E||1&n)&&M!==(M=t[0].title+"")&&f(e,M),(!E||1&n)&&A!==(A=t[0].api+"")&&f(h,A),(!E||1&n)&&H!==(H=t[0].updated+"")&&f(y,H),t[0].creator?L?L.p(t,n):(L=lt(t),L.c(),L.m(v.parentNode,v)):L&&(L.d(1),L=null),1&n){let e;for(S=t[0].paths,e=0;e<S.length;e+=1){const r=et(t,S,e);O[e]?(O[e].p(r,n),q(O[e],1)):(O[e]=ht(r),O[e].c(),q(O[e],1),O[e].m(x.parentNode,x))}for(N(),e=S.length;e<O.length;e+=1)P(e);j()}(!E||1&n)&&C!==(C=t[0].security+"")&&f(T,C)},i(t){if(!E){for(let t=0;t<S.length;t+=1)q(O[t]);E=!0}},o(t){O=O.filter(Boolean);for(let t=0;t<O.length;t+=1)B(O[t]);E=!1},d(t){t&&s(n),t&&s(r),t&&s(o),t&&s(g),t&&s($),t&&s(b),L&&L.d(t),t&&s(v),c(O,t),t&&s(x),t&&s(w)}}}function lt(t){let n,e,r,o,i,c,h,g=t[0].creator.name+"",$=t[0].creator.company+"",y=t[0].creator.email+"";return{c(){n=m("div"),e=u(g),r=u(", "),o=u($),i=m("br"),c=d(),h=u(y),p(n,"class","name mb")},m(t,s){a(t,n,s),l(n,e),l(n,r),l(n,o),l(n,i),l(n,c),l(n,h)},p(t,n){1&n&&g!==(g=t[0].creator.name+"")&&f(e,g),1&n&&$!==($=t[0].creator.company+"")&&f(o,$),1&n&&y!==(y=t[0].creator.email+"")&&f(h,y)},d(t){t&&s(n)}}}function at(t){let n;return{c(){n=m("div"),n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-5 7.723v2.277h-2v-2.277c-.595-.347-1-.984-1-1.723 0-1.104.896-2 2-2s2 .896 2 2c0 .738-.404 1.376-1 1.723zm-5-7.723v-4c0-2.206 1.794-4 4-4 2.205 0 4 1.794 4 4v4h-8z"></path></svg>',p(n,"class","locked abs")},m(t,e){a(t,n,e)},d(t){t&&s(n)}}}function st(t){let n,e,r=t[0].users[t[6]]+"";return{c(){n=m("span"),e=u(r),p(n,"class","user")},m(t,r){a(t,n,r),l(n,e)},p(t,n){1&n&&r!==(r=t[0].users[t[6]]+"")&&f(e,r)},d(t){t&&s(n)}}}function ct(t){let n,e,r=t[1].updated+"";return{c(){n=u("| Updated: "),e=u(r)},m(t,r){a(t,n,r),a(t,e,r)},p(t,n){1&n&&r!==(r=t[1].updated+"")&&f(e,r)},d(t){t&&s(n),t&&s(e)}}}function mt(t){let n,e;return n=new F({props:{item:t[1].example}}),{c(){C(n.$$.fragment)},m(t,r){L(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.item=t[1].example),n.$set(r)},i(t){e||(q(n.$$.fragment,t),e=!0)},o(t){B(n.$$.fragment,t),e=!1},d(t){S(n,t)}}}function ut(t){let n,e;return n=new F({props:{item:t[0].refs[t[1].ref]}}),{c(){C(n.$$.fragment)},m(t,r){L(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.item=t[0].refs[t[1].ref]),n.$set(r)},i(t){e||(q(n.$$.fragment,t),e=!0)},o(t){B(n.$$.fragment,t),e=!1},d(t){S(n,t)}}}function dt(t){let n,e;return n=new nt({props:{data:t[1].params,ref:t[0].refs,title:"Parameters"}}),{c(){C(n.$$.fragment)},m(t,r){L(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.data=t[1].params),1&e&&(r.ref=t[0].refs),n.$set(r)},i(t){e||(q(n.$$.fragment,t),e=!0)},o(t){B(n.$$.fragment,t),e=!1},d(t){S(n,t)}}}function pt(t){let n,e;return n=new nt({props:{data:t[1].responses,ref:t[0].refs,title:"Responses"}}),{c(){C(n.$$.fragment)},m(t,r){L(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.data=t[1].responses),1&e&&(r.ref=t[0].refs),n.$set(r)},i(t){e||(q(n.$$.fragment,t),e=!0)},o(t){B(n.$$.fragment,t),e=!1},d(t){S(n,t)}}}function ft(t){let n,e,r,o,i,h,g,$,y,b,v,x,w,k,_,z,T,E,M,A,H,C,L=t[1].req+"",S=t[1].summary+"",O=t[1].desc+"",P=t[1].auth&&at(),D=t[1].users,I=[];for(let n=0;n<D.length;n+=1)I[n]=st(ot(t,D,n));let U=t[1].updated&&ct(t),F=t[1].example&&mt(t),R=t[1].ref&&ut(t),G=t[1].params&&dt(t),J=t[1].responses&&pt(t);return{c(){n=m("details"),e=m("summary"),r=m("h3"),o=u(L),i=d(),h=m("span"),g=u(S),$=d(),P&&P.c(),y=d(),b=m("div"),v=m("div"),x=u(O),w=d(),k=m("div"),_=u("Users:\n\t\t\t\t\t\t\t\t\t\t");for(let t=0;t<I.length;t+=1)I[t].c();z=d(),U&&U.c(),T=d(),F&&F.c(),E=d(),R&&R.c(),M=d(),G&&G.c(),A=d(),J&&J.c(),p(r,"class","inl path"),p(h,"class","inl summary"),p(e,"class","rel main"),p(v,"class","desc mb"),p(k,"class","upd mb"),p(b,"class","content main"),p(n,"id",H=t[1].id),p(n,"class","main")},m(t,s){a(t,n,s),l(n,e),l(e,r),l(r,o),l(e,i),l(e,h),l(h,g),l(e,$),P&&P.m(e,null),l(n,y),l(n,b),l(b,v),l(v,x),l(b,w),l(b,k),l(k,_);for(let t=0;t<I.length;t+=1)I[t].m(k,null);l(k,z),U&&U.m(k,null),l(b,T),F&&F.m(b,null),l(b,E),R&&R.m(b,null),l(b,M),G&&G.m(b,null),l(b,A),J&&J.m(b,null),C=!0},p(t,r){if((!C||1&r)&&L!==(L=t[1].req+"")&&f(o,L),(!C||1&r)&&S!==(S=t[1].summary+"")&&f(g,S),t[1].auth?P||(P=at(),P.c(),P.m(e,null)):P&&(P.d(1),P=null),(!C||1&r)&&O!==(O=t[1].desc+"")&&f(x,O),1&r){let n;for(D=t[1].users,n=0;n<D.length;n+=1){const e=ot(t,D,n);I[n]?I[n].p(e,r):(I[n]=st(e),I[n].c(),I[n].m(k,z))}for(;n<I.length;n+=1)I[n].d(1);I.length=D.length}t[1].updated?U?U.p(t,r):(U=ct(t),U.c(),U.m(k,null)):U&&(U.d(1),U=null),t[1].example?F?(F.p(t,r),1&r&&q(F,1)):(F=mt(t),F.c(),q(F,1),F.m(b,E)):F&&(N(),B(F,1,1,(()=>{F=null})),j()),t[1].ref?R?(R.p(t,r),1&r&&q(R,1)):(R=ut(t),R.c(),q(R,1),R.m(b,M)):R&&(N(),B(R,1,1,(()=>{R=null})),j()),t[1].params?G?(G.p(t,r),1&r&&q(G,1)):(G=dt(t),G.c(),q(G,1),G.m(b,A)):G&&(N(),B(G,1,1,(()=>{G=null})),j()),t[1].responses?J?(J.p(t,r),1&r&&q(J,1)):(J=pt(t),J.c(),q(J,1),J.m(b,null)):J&&(N(),B(J,1,1,(()=>{J=null})),j()),(!C||1&r&&H!==(H=t[1].id))&&p(n,"id",H)},i(t){C||(q(F),q(R),q(G),q(J),C=!0)},o(t){B(F),B(R),B(G),B(J),C=!1},d(t){t&&s(n),P&&P.d(),c(I,t),U&&U.d(),F&&F.d(),R&&R.d(),G&&G.d(),J&&J.d()}}}function ht(t){let n,e,r,o,i,h,g,$,y=t[1].type+"",b=t[1].items,v=[];for(let n=0;n<b.length;n+=1)v[n]=ft(rt(t,b,n));const x=t=>B(v[t],1,1,(()=>{v[t]=null}));return{c(){n=m("div"),e=m("h2"),r=u(y),o=d(),i=m("div");for(let t=0;t<v.length;t+=1)v[t].c();p(i,"id",h=t[1].type+"Items"),p(n,"id",g=t[1].type)},m(t,s){a(t,n,s),l(n,e),l(e,r),l(n,o),l(n,i);for(let t=0;t<v.length;t+=1)v[t].m(i,null);$=!0},p(t,e){if((!$||1&e)&&y!==(y=t[1].type+"")&&f(r,y),1&e){let n;for(b=t[1].items,n=0;n<b.length;n+=1){const r=rt(t,b,n);v[n]?(v[n].p(r,e),q(v[n],1)):(v[n]=ft(r),v[n].c(),q(v[n],1),v[n].m(i,null))}for(N(),n=b.length;n<v.length;n+=1)x(n);j()}(!$||1&e&&h!==(h=t[1].type+"Items"))&&p(i,"id",h),(!$||1&e&&g!==(g=t[1].type))&&p(n,"id",g)},i(t){if(!$){for(let t=0;t<b.length;t+=1)q(v[t]);$=!0}},o(t){v=v.filter(Boolean);for(let t=0;t<v.length;t+=1)B(v[t]);$=!1},d(t){t&&s(n),c(v,t)}}}function gt(t){let n,e,r,o,i,c,u,f=t[0]&&t[0].paths&&it(t);return{c(){n=m("div"),e=m("main"),f&&f.c(),r=d(),o=m("footer"),o.innerHTML='Powered by\n\t\t<a href="https://github.com/timoanttila/Svelte-Doksut">Doksut</a>,\n\t\tcreated by <a href="https://github.com/timoanttila">Timo Anttila</a>',i=d(),c=m("style"),c.textContent=":root {\n\t\t\t--green: #263927;\n\t\t\t--brown: #362e26;\n\t\t\t--blue: #20a3cb;\n\t\t\t--light: #fcf4ea;\n\t\t}\n\t\t*:focus {\n\t\t\toutline: none;\n\t\t}\n\t\tbody {\n\t\t\tmargin: 0;\n\t\t\tbox-sizing: border-box;\n\t\t\tfont-weight: 400;\n\t\t\tfont-family: Arial, Helvetica, sans-serif;\n\t\t\tline-height: 1.5;\n\t\t}\n\t\th1,\n\t\th2,\n\t\th3,\n\t\th4,\n\t\tstrong {\n\t\t\tfont-weight: 700;\n\t\t}\n\t\th1 {\n\t\t\tfont-size: 1.8rem;\n\t\t}\n\t\th1,\n\t\th3,\n\t\th4,\n\t\tp {\n\t\t\tmargin: 0;\n\t\t}\n\t\th2 {\n\t\t\tmargin: 1.5rem 0 0.5rem;\n\t\t}\n\t\tsummary h3,\n\t\t.params h3 {\n\t\t\tfont-size: 1.4rem;\n\t\t}\n\t\th4 {\n\t\t\tfont-size: 1.2rem;\n\t\t}\n\t\t.grid {\n\t\t\tdisplay: grid;\n\t\t}\n\t\t.block {\n\t\t\tdisplay: block;\n\t\t}\n\t\t.rel {\n\t\t\tposition: relative;\n\t\t}\n\t\t.abs {\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tright: 1rem;\n\t\t}\n\t\t.mb {\n\t\t\tmargin-bottom: 1rem;\n\t\t}\n\t\tsup {\n\t\t\tline-height: 1;\n\t\t\tcolor: darkred;\n\t\t}\n\t\t#wrap {\n\t\t\tmin-height: 100vh;\n\t\t\tgrid-template-rows: 1fr 38.66px;\n\t\t}\n\t\tmain {\n\t\t\tmax-width: 1000px;\n\t\t\twidth: 90vw;\n\t\t\tmargin: 2rem auto;\n\t\t}\n\t\tdetails.main {\n\t\t\tpadding: 0.5rem 0.5rem 0.7rem;\n\t\t\tborder: 2px solid var(--green);\n\t\t\tborder-radius: 4px;\n\t\t}\n\t\tdetails + details {\n\t\t\tmargin-top: 8px;\n\t\t}\n\t\tsummary.main {\n\t\t\tlist-style: none;\n\t\t\tpadding: 0 1rem;\n\t\t}\n\t\tsummary.main::-webkit-details-marker {\n\t\t\tdisplay: none;\n\t\t}\n\t\tsummary.main:hover .path {\n\t\t\tcolor: var(--blue);\n\t\t}\n\t\tsummary.main:hover .locked svg {\n\t\t\tfill: var(--blue);\n\t\t}\n\t\tsummary {\n\t\t\tcursor: pointer;\n\t\t\tline-height: 1;\n\t\t}\n\t\t.path::after {\n\t\t\tcontent: '►';\n\t\t\tmargin-left: 10px;\n\t\t\tmargin-top: -2px;\n\t\t\tfont-size: 0.8rem;\n\t\t\tdisplay: inline-block;\n\t\t\tvertical-align: middle;\n\t\t}\n\t\tdetails[open] .path:after {\n\t\t\tcontent: '▼';\n\t\t}\n\t\tsummary.main .inl {\n\t\t\tdisplay: inline-block;\n\t\t\tvertical-align: middle;\n\t\t}\n\t\tsummary.main .path {\n\t\t\tmargin-right: 1.5rem;\n\t\t}\n\t\tsummary.main .summary {\n\t\t\tmargin-top: 4px;\n\t\t}\n\t\t.content.main {\n\t\t\tmargin-top: 0.7rem;\n\t\t\tpadding: 1rem;\n\t\t\tborder-top: 2px solid var(--green);\n\t\t}\n\t\t.items {\n\t\t\tmargin-top: 0.5rem;\n\t\t}\n\t\t.item {\n\t\t\tborder-top: 1px solid var(--green);\n\t\t\tpadding-top: 0.8rem;\n\t\t\tgrid-template-columns: 125px 1fr;\n\t\t}\n\t\t.user + .user:before {\n\t\t\tcontent: ', ';\n\t\t}\n\t\t.item + .item {\n\t\t\tmargin-top: 0.8rem;\n\t\t}\n\t\t.params + .params {\n\t\t\tmargin-top: 2rem;\n\t\t}\n\t\t.desc {\n\t\t\tmargin-bottom: 15px;\n\t\t}\n\t\t#security {\n\t\t\tmargin-top: 2rem;\n\t\t}\n\t\tfooter {\n\t\t\tbackground-color: var(--brown);\n\t\t\tpadding: 0.5rem 1rem;\n\t\t\tfont-size: 14px;\n\t\t\ttext-align: center;\n\t\t}\n\t\tfooter,\n\t\tfooter a {\n\t\t\tcolor: var(--light);\n\t\t}\n\t\tfooter a {\n\t\t\ttext-decoration: none;\n\t\t}\n\t\t@media screen and (min-width: 750px) {\n\t\t\tsummary.main .path {\n\t\t\t\tmargin-bottom: -2px;\n\t\t\t}\n\t\t}\n\t\t@media screen and (max-width: 750px) {\n\t\t\tsummary.main .inl {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t\tsummary.main .path {\n\t\t\t\tmargin-bottom: 4px;\n\t\t\t}\n\t\t}",p(e,"class","block"),p(n,"id","wrap"),p(n,"class","grid")},m(t,s){a(t,n,s),l(n,e),f&&f.m(e,null),l(n,r),l(n,o),a(t,i,s),l(document.head,c),u=!0},p(t,[n]){t[0]&&t[0].paths?f?(f.p(t,n),1&n&&q(f,1)):(f=it(t),f.c(),q(f,1),f.m(e,null)):f&&(N(),B(f,1,1,(()=>{f=null})),j())},i(t){u||(q(f),u=!0)},o(t){B(f),u=!1},d(t){t&&s(n),f&&f.d(),t&&s(i),s(c)}}}function $t(t,n,e){let r={};return $((async()=>{const t=await fetch("/docs.json");e(0,r=await t.json())})),[r]}return new class extends D{constructor(t){super(),P(this,t,$t,gt,i,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=doksut.js.map
