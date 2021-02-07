var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function l(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function c(t){t.parentNode.removeChild(t)}function s(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function d(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function m(){return u(" ")}function f(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let h;function g(t){h=t}function y(t){(function(){if(!h)throw new Error("Function called outside component initialization");return h})().$$.on_mount.push(t)}const $=[],b=[],v=[],x=[],w=Promise.resolve();let _=!1;function k(t){v.push(t)}let M=!1;const T=new Set;function H(){if(!M){M=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];g(n),L(n.$$)}for(g(null),$.length=0;b.length;)b.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];T.has(n)||(T.add(n),n())}v.length=0}while($.length);for(;x.length;)x.pop()();_=!1,M=!1,T.clear()}}function L(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const z=new Set;let A;function E(){A={r:0,c:[],p:A}}function S(){A.r||r(A.c),A=A.p}function j(t,n){t&&t.i&&(z.delete(t),t.i(n))}function q(t,n,e,r){if(t&&t.o){if(z.has(t))return;z.add(t),A.c.push((()=>{z.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function B(t){t&&t.c()}function C(t,e,l){const{fragment:i,on_mount:a,on_destroy:c,after_update:s}=t.$$;i&&i.m(e,l),k((()=>{const e=a.map(n).filter(o);c?c.push(...e):r(e),t.$$.on_mount=[]})),s.forEach(k)}function N(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function I(t,n){-1===t.$$.dirty[0]&&($.push(t),_||(_=!0,w.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function O(n,o,l,i,a,s,d=[-1]){const u=h;g(n);const m=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:e(),dirty:d,skip_bound:!1};let f=!1;if(m.ctx=l?l(n,o.props||{},((t,e,...r)=>{const o=r.length?r[0]:e;return m.ctx&&a(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),f&&I(n,t)),e})):[],m.update(),f=!0,r(m.before_update),m.fragment=!!i&&i(m.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);m.fragment&&m.fragment.l(t),t.forEach(c)}else m.fragment&&m.fragment.c();o.intro&&j(n.$$.fragment),C(n,o.target,o.anchor),H()}g(u)}class P{$destroy(){N(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function D(t,n,e){const r=t.slice();return r[3]=n[e],r}function F(t){let n,e,r,o,l,h=t[0],g=[];for(let n=0;n<h.length;n+=1)g[n]=V(D(t,h,n));return{c(){n=d("div"),e=d("h3"),r=u(t[1]),o=m(),l=d("div");for(let t=0;t<g.length;t+=1)g[t].c();f(l,"class","items"),f(n,"class","params")},m(t,c){a(t,n,c),i(n,e),i(e,r),i(n,o),i(n,l);for(let t=0;t<g.length;t+=1)g[t].m(l,null)},p(t,n){if(2&n&&p(r,t[1]),5&n){let e;for(h=t[0],e=0;e<h.length;e+=1){const r=D(t,h,e);g[e]?g[e].p(r,n):(g[e]=V(r),g[e].c(),g[e].m(l,null))}for(;e<g.length;e+=1)g[e].d(1);g.length=h.length}},d(t){t&&c(n),s(g,t)}}}function R(t){let n;return{c(){n=d("sup"),n.textContent="*"},m(t,e){a(t,n,e)},d(t){t&&c(n)}}}function U(t){let n,e,r=t[3].type+"";return{c(){n=d("div"),e=u(r),f(n,"class","type")},m(t,r){a(t,n,r),i(n,e)},p(t,n){1&n&&r!==(r=t[3].type+"")&&p(e,r)},d(t){t&&c(n)}}}function G(t){let n,e,r=t[3].in+"";return{c(){n=d("div"),e=u(r),f(n,"class","in")},m(t,r){a(t,n,r),i(n,e)},p(t,n){1&n&&r!==(r=t[3].in+"")&&p(e,r)},d(t){t&&c(n)}}}function J(t){let n,e,r=t[3].desc+"";return{c(){n=d("div"),e=u(r),f(n,"class","desc")},m(t,r){a(t,n,r),i(n,e)},p(t,n){1&n&&r!==(r=t[3].desc+"")&&p(e,r)},d(t){t&&c(n)}}}function K(t){let n,e,r=t[3].example+"";return{c(){n=d("pre"),e=d("code")},m(t,o){a(t,n,o),i(n,e),e.innerHTML=r},p(t,n){1&n&&r!==(r=t[3].example+"")&&(e.innerHTML=r)},d(t){t&&c(n)}}}function Q(t){let n,e,r=t[2][t[3].ref]+"";return{c(){n=d("pre"),e=d("code")},m(t,o){a(t,n,o),i(n,e),e.innerHTML=r},p(t,n){5&n&&r!==(r=t[2][t[3].ref]+"")&&(e.innerHTML=r)},d(t){t&&c(n)}}}function V(t){let n,e,r,o,l,s,h,g,y,$,b,v,x=t[3].name+"",w=t[3].req&&R(),_=t[3].type&&U(t),k=t[3].in&&G(t),M=t[3].desc&&J(t),T=t[3].example&&K(t),H=t[3].ref&&Q(t);return{c(){n=d("div"),e=d("div"),r=d("h4"),o=u(x),l=m(),w&&w.c(),s=m(),_&&_.c(),h=m(),k&&k.c(),g=m(),y=d("div"),M&&M.c(),$=m(),T&&T.c(),b=m(),H&&H.c(),v=m(),f(e,"class","left label"),f(y,"class","right value"),f(n,"class","item grid")},m(t,c){a(t,n,c),i(n,e),i(e,r),i(r,o),i(r,l),w&&w.m(r,null),i(e,s),_&&_.m(e,null),i(e,h),k&&k.m(e,null),i(n,g),i(n,y),M&&M.m(y,null),i(y,$),T&&T.m(y,null),i(y,b),H&&H.m(y,null),i(n,v)},p(t,n){1&n&&x!==(x=t[3].name+"")&&p(o,x),t[3].req?w||(w=R(),w.c(),w.m(r,null)):w&&(w.d(1),w=null),t[3].type?_?_.p(t,n):(_=U(t),_.c(),_.m(e,h)):_&&(_.d(1),_=null),t[3].in?k?k.p(t,n):(k=G(t),k.c(),k.m(e,null)):k&&(k.d(1),k=null),t[3].desc?M?M.p(t,n):(M=J(t),M.c(),M.m(y,$)):M&&(M.d(1),M=null),t[3].example?T?T.p(t,n):(T=K(t),T.c(),T.m(y,b)):T&&(T.d(1),T=null),t[3].ref?H?H.p(t,n):(H=Q(t),H.c(),H.m(y,null)):H&&(H.d(1),H=null)},d(t){t&&c(n),w&&w.d(),_&&_.d(),k&&k.d(),M&&M.d(),T&&T.d(),H&&H.d()}}}function W(n){let e,r=n[0]&&F(n);return{c(){r&&r.c(),e=u("")},m(t,n){r&&r.m(t,n),a(t,e,n)},p(t,[n]){t[0]?r?r.p(t,n):(r=F(t),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:t,o:t,d(t){r&&r.d(t),t&&c(e)}}}function X(t,n,e){let{data:r}=n,{title:o}=n,{ref:l}=n;return t.$$set=t=>{"data"in t&&e(0,r=t.data),"title"in t&&e(1,o=t.title),"ref"in t&&e(2,l=t.ref)},[r,o,l]}class Y extends P{constructor(t){super(),O(this,t,X,W,l,{data:0,title:1,ref:2})}}function Z(t,n,e){const r=t.slice();return r[1]=n[e],r}function tt(t,n,e){const r=t.slice();return r[1]=n[e],r}function nt(t){let n,e,r,o,l,h,g,y,$,b,v,x,w,_=t[0].title+"",k=t[0].api+"",M=t[0].security+"",T=t[0].paths,H=[];for(let n=0;n<T.length;n+=1)H[n]=at(Z(t,T,n));const L=t=>q(H[t],1,1,(()=>{H[t]=null}));return{c(){n=d("h1"),e=u(_),r=m(),o=d("div"),l=u(k),h=m();for(let t=0;t<H.length;t+=1)H[t].c();g=m(),y=d("div"),$=d("h2"),$.textContent="Security",b=m(),v=d("p"),x=u(M),f(o,"id","api"),f(y,"id","security")},m(t,c){a(t,n,c),i(n,e),a(t,r,c),a(t,o,c),i(o,l),a(t,h,c);for(let n=0;n<H.length;n+=1)H[n].m(t,c);a(t,g,c),a(t,y,c),i(y,$),i(y,b),i(y,v),i(v,x),w=!0},p(t,n){if((!w||1&n)&&_!==(_=t[0].title+"")&&p(e,_),(!w||1&n)&&k!==(k=t[0].api+"")&&p(l,k),1&n){let e;for(T=t[0].paths,e=0;e<T.length;e+=1){const r=Z(t,T,e);H[e]?(H[e].p(r,n),j(H[e],1)):(H[e]=at(r),H[e].c(),j(H[e],1),H[e].m(g.parentNode,g))}for(E(),e=T.length;e<H.length;e+=1)L(e);S()}(!w||1&n)&&M!==(M=t[0].security+"")&&p(x,M)},i(t){if(!w){for(let t=0;t<T.length;t+=1)j(H[t]);w=!0}},o(t){H=H.filter(Boolean);for(let t=0;t<H.length;t+=1)q(H[t]);w=!1},d(t){t&&c(n),t&&c(r),t&&c(o),t&&c(h),s(H,t),t&&c(g),t&&c(y)}}}function et(t){let n;return{c(){n=d("div"),n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-5 7.723v2.277h-2v-2.277c-.595-.347-1-.984-1-1.723 0-1.104.896-2 2-2s2 .896 2 2c0 .738-.404 1.376-1 1.723zm-5-7.723v-4c0-2.206 1.794-4 4-4 2.205 0 4 1.794 4 4v4h-8z"></path></svg>',f(n,"class","locked abs")},m(t,e){a(t,n,e)},d(t){t&&c(n)}}}function rt(t){let n,e,r,o=t[1].updated+"";return{c(){n=d("div"),e=u("Updated: "),r=u(o),f(n,"class","upd mb")},m(t,o){a(t,n,o),i(n,e),i(n,r)},p(t,n){1&n&&o!==(o=t[1].updated+"")&&p(r,o)},d(t){t&&c(n)}}}function ot(t){let n,e,r=t[1].example+"";return{c(){n=d("pre"),e=d("code")},m(t,o){a(t,n,o),i(n,e),e.innerHTML=r},p(t,n){1&n&&r!==(r=t[1].example+"")&&(e.innerHTML=r)},d(t){t&&c(n)}}}function lt(t){let n,e,r=t[0].refs[t[1].ref]+"";return{c(){n=d("pre"),e=d("code")},m(t,o){a(t,n,o),i(n,e),e.innerHTML=r},p(t,n){1&n&&r!==(r=t[0].refs[t[1].ref]+"")&&(e.innerHTML=r)},d(t){t&&c(n)}}}function it(t){let n,e,r,o,l,s,h,g,y,$,b,v,x,w,_,k,M,T,H,L,z,A,E=t[1].req+"",S=t[1].summary+"",I=t[1].desc+"",O=t[1].auth&&et(),P=t[1].updated&&rt(t),D=t[1].example&&ot(t),F=t[1].ref&&lt(t);return T=new Y({props:{data:t[1].params,ref:t[0].refs,title:"Parameters"}}),L=new Y({props:{data:t[1].responses,ref:t[0].refs,title:"Responses"}}),{c(){n=d("details"),e=d("summary"),r=d("h3"),o=u("/"),l=u(E),s=m(),h=d("span"),g=u(S),y=m(),O&&O.c(),$=m(),b=d("div"),v=d("div"),x=u(I),w=m(),P&&P.c(),_=m(),D&&D.c(),k=m(),F&&F.c(),M=m(),B(T.$$.fragment),H=m(),B(L.$$.fragment),f(r,"class","inl path"),f(h,"class","inl summary"),f(e,"class","rel"),f(v,"class","desc mb"),f(b,"class","content"),f(n,"id",z=t[1].id)},m(t,c){a(t,n,c),i(n,e),i(e,r),i(r,o),i(r,l),i(e,s),i(e,h),i(h,g),i(e,y),O&&O.m(e,null),i(n,$),i(n,b),i(b,v),i(v,x),i(b,w),P&&P.m(b,null),i(b,_),D&&D.m(b,null),i(b,k),F&&F.m(b,null),i(b,M),C(T,b,null),i(b,H),C(L,b,null),A=!0},p(t,r){(!A||1&r)&&E!==(E=t[1].req+"")&&p(l,E),(!A||1&r)&&S!==(S=t[1].summary+"")&&p(g,S),t[1].auth?O||(O=et(),O.c(),O.m(e,null)):O&&(O.d(1),O=null),(!A||1&r)&&I!==(I=t[1].desc+"")&&p(x,I),t[1].updated?P?P.p(t,r):(P=rt(t),P.c(),P.m(b,_)):P&&(P.d(1),P=null),t[1].example?D?D.p(t,r):(D=ot(t),D.c(),D.m(b,k)):D&&(D.d(1),D=null),t[1].ref?F?F.p(t,r):(F=lt(t),F.c(),F.m(b,M)):F&&(F.d(1),F=null);const o={};1&r&&(o.data=t[1].params),1&r&&(o.ref=t[0].refs),T.$set(o);const i={};1&r&&(i.data=t[1].responses),1&r&&(i.ref=t[0].refs),L.$set(i),(!A||1&r&&z!==(z=t[1].id))&&f(n,"id",z)},i(t){A||(j(T.$$.fragment,t),j(L.$$.fragment,t),A=!0)},o(t){q(T.$$.fragment,t),q(L.$$.fragment,t),A=!1},d(t){t&&c(n),O&&O.d(),P&&P.d(),D&&D.d(),F&&F.d(),N(T),N(L)}}}function at(t){let n,e,r,o,l,h,g,y,$=t[1].type+"",b=t[1].items,v=[];for(let n=0;n<b.length;n+=1)v[n]=it(tt(t,b,n));const x=t=>q(v[t],1,1,(()=>{v[t]=null}));return{c(){n=d("div"),e=d("h2"),r=u($),o=m(),l=d("div");for(let t=0;t<v.length;t+=1)v[t].c();f(l,"id",h=t[1].type+"Items"),f(n,"id",g=t[1].type)},m(t,c){a(t,n,c),i(n,e),i(e,r),i(n,o),i(n,l);for(let t=0;t<v.length;t+=1)v[t].m(l,null);y=!0},p(t,e){if((!y||1&e)&&$!==($=t[1].type+"")&&p(r,$),1&e){let n;for(b=t[1].items,n=0;n<b.length;n+=1){const r=tt(t,b,n);v[n]?(v[n].p(r,e),j(v[n],1)):(v[n]=it(r),v[n].c(),j(v[n],1),v[n].m(l,null))}for(E(),n=b.length;n<v.length;n+=1)x(n);S()}(!y||1&e&&h!==(h=t[1].type+"Items"))&&f(l,"id",h),(!y||1&e&&g!==(g=t[1].type))&&f(n,"id",g)},i(t){if(!y){for(let t=0;t<b.length;t+=1)j(v[t]);y=!0}},o(t){v=v.filter(Boolean);for(let t=0;t<v.length;t+=1)q(v[t]);y=!1},d(t){t&&c(n),s(v,t)}}}function ct(t){let n,e,r,o,l,s,u,p=t[0]&&t[0].paths&&nt(t);return{c(){n=d("div"),e=d("main"),p&&p.c(),r=m(),o=d("footer"),o.innerHTML='Powered by <a href="https://github.com/timoanttila/Svelte-Doksut">Doksut</a>, created by <a href="https://github.com/timoanttila">Timo Anttila</a>',l=m(),s=d("style"),s.textContent=":root {\n\t\t\t--green: #263927;\n\t\t\t--brown: #362e26;\n\t\t\t--light: #fcf4ea;\n\t\t}\n\t\tbody {\n\t\t\tmargin: 0;\n\t\t\tbox-sizing: border-box;\n\t\t\tfont-weight: 400;\n\t\t\tfont-family: Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI',\n\t\t\t\tRoboto, Helvetica, Arial, sans-serif;\n\t\t\tline-height: 1.5;\n\t\t}\n\t\th1 {\n\t\t\tfont-size: 1.8rem;\n\t\t}\n\t\th1,\n\t\th3,\n\t\th4,\n\t\tp {\n\t\t\tmargin: 0;\n\t\t}\n\t\th2 {\n\t\t\tmargin: 1.5rem 0 0.5rem;\n\t\t}\n\t\tsummary h3 {\n\t\t\tfont-size: 1.4rem;\n\t\t}\n\t\t.params h3 {\n\t\t\tfont-size: 1.6rem;\n\t\t}\n\t\th4 {\n\t\t\tfont-size: 1.2rem;\n\t\t}\n\t\t.grid {\n\t\t\tdisplay: grid;\n\t\t}\n\t\t.block {\n\t\t\tdisplay: block;\n\t\t}\n\t\t.rel {\n\t\t\tposition: relative;\n\t\t}\n\t\t.abs {\n\t\t\tposition: absolute;\n\t\t\ttop: 2px;\n\t\t\tright: 5px;\n\t\t}\n\t\t.mb {\n\t\t\tmargin-bottom: 1rem;\n\t\t}\n\t\tsup {\n\t\t\tline-height: 1;\n\t\t\tcolor: darkred;\n\t\t}\n\t\tmain {\n\t\t\tmax-width: 1000px;\n\t\t\twidth: 90vw;\n\t\t\tmargin: 2rem auto;\n\t\t}\n\t\tdetails {\n\t\t\tpadding: 0.5rem;\n\t\t\tborder: 2px solid var(--green);\n\t\t\tborder-radius: 4px;\n\t\t}\n\t\tdetails + details {\n\t\t\tmargin-top: 8px;\n\t\t}\n\t\tdetails summary {\n\t\t\tcursor: pointer;\n\t\t}\n\t\tdetails summary .inl {\n\t\t\tdisplay: inline-block;\n\t\t\tvertical-align: middle;\n\t\t\tmargin-bottom: -2px;\n\t\t}\n\t\tdetails summary .path {\n\t\t\tmargin-right: 1.5rem;\n\t\t}\n\t\tdetails .content {\n\t\t\tmargin-top: 0.5rem;\n\t\t\tpadding: 1rem;\n\t\t\tborder-top: 2px solid var(--green);\n\t\t}\n\t\tdetails .items {\n\t\t\tmargin-top: 0.5rem;\n\t\t}\n\t\tdetails .item {\n\t\t\tborder-top: 1px solid var(--green);\n\t\t\tpadding-top: 0.8rem;\n\t\t\tgrid-template-columns: 175px 1fr;\n\t\t}\n\t\tdetails .item + .item {\n\t\t\tmargin-top: 0.8rem;\n\t\t}\n\t\t#security {\n\t\t\tmargin-top: 2rem;\n\t\t}\n\t\tfooter {\n\t\t\tbackground-color: var(--brown);\n\t\t\tpadding: 0.5rem 1rem;\n\t\t\tfont-size: 14px;\n\t\t\ttext-align: center;\n\t\t}\n\t\tfooter,\n\t\tfooter a {\n\t\t\tcolor: var(--light);\n\t\t}\n\t\tfooter a {\n\t\t\ttext-decoration: none;\n\t\t}\n\t\t#wrap {\n\t\t\tmin-height: 100vh;\n\t\t\tgrid-template-rows: 1fr 38.66px;\n\t\t}\n\t\t.params + .params {\n\t\t\tmargin-top: 2rem;\n\t\t}",f(e,"class","block"),f(n,"id","wrap"),f(n,"class","grid")},m(t,c){a(t,n,c),i(n,e),p&&p.m(e,null),i(n,r),i(n,o),a(t,l,c),i(document.head,s),u=!0},p(t,[n]){t[0]&&t[0].paths?p?(p.p(t,n),1&n&&j(p,1)):(p=nt(t),p.c(),j(p,1),p.m(e,null)):p&&(E(),q(p,1,1,(()=>{p=null})),S())},i(t){u||(j(p),u=!0)},o(t){q(p),u=!1},d(t){t&&c(n),p&&p.d(),t&&c(l),c(s)}}}function st(t,n,e){let r={};return y((async()=>{const t=await fetch("/docs.json");e(0,r=await t.json())})),[r]}return new class extends P{constructor(t){super(),O(this,t,st,ct,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
