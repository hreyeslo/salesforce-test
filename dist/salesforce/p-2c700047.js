let e,t,n,o=!1,s=!1,l=!1,r=!1;const c="undefined"!=typeof window?window:{},a=c.CSS,i=c.document||{head:{}},f={t:0,o:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,o)=>e.addEventListener(t,n,o),rel:(e,t,n,o)=>e.removeEventListener(t,n,o)},u=(()=>(i.head.attachShadow+"").indexOf("[native")>-1)(),$=e=>Promise.resolve(e),p=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),m=new WeakMap,d=e=>"sc-"+e,w={},y=e=>"object"==(e=typeof e)||"function"===e,h=(e,t,...n)=>{let o=null,s=null,l=!1,r=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)o=t[n],Array.isArray(o)?a(o):null!=o&&"boolean"!=typeof o&&((l="function"!=typeof e&&!y(o))&&(o+=""),l&&r?c[c.length-1].s+=o:c.push(l?b(null,o):o),r=l)};if(a(n),t){t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}const i=b(e,null);return i.l=t,c.length>0&&(i.u=c),i.$=s,i},b=(e,t)=>({t:0,p:e,s:t,h:null,u:null,l:null,$:null}),_={},j=(e,t,n,o,s,l)=>{if(n!==o){let c=G(e,t);if(t.toLowerCase(),"class"===t){const t=e.classList,s=R(n),l=R(o);t.remove(...s.filter(e=>e&&!l.includes(e))),t.add(...l.filter(e=>e&&!s.includes(e)))}else{const a=y(o);if((c||a&&null!==o)&&!s)try{if(e.tagName.includes("-"))e[t]=o;else{let s=null==o?"":o;"list"===t?c=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(r){}null==o||!1===o?e.removeAttribute(t):(!c||4&l||s)&&!a&&e.setAttribute(t,o=!0===o?"":o)}}},v=/\s/,R=e=>e?e.split(v):[],k=(e,t,n,o)=>{const s=11===t.h.nodeType&&t.h.host?t.h.host:t.h,l=e&&e.l||w,r=t.l||w;for(o in r)j(s,o,l[o],r[o],n,t.t)},M=(s,r,c,a)=>{let f,u,$,p=r.u[c],m=0;if(o||(l=!0,"slot"===p.p&&(e&&a.classList.add(e+"-s"),p.t|=p.u?2:1)),1&p.t)f=p.h=i.createTextNode("");else if(f=p.h=i.createElement(2&p.t?"slot-fb":p.p),k(null,p,!1),null!=e&&f["s-si"]!==e&&f.classList.add(f["s-si"]=e),p.u)for(m=0;m<p.u.length;++m)u=M(s,p,m,f),u&&f.appendChild(u);return f["s-hn"]=n,3&p.t&&(f["s-sr"]=!0,f["s-cr"]=t,f["s-sn"]=p.$||"",$=s&&s.u&&s.u[c],$&&$.p===p.p&&s.h&&S(s.h,!1)),f},S=(e,t)=>{f.t|=1;const o=e.childNodes;for(let s=o.length-1;s>=0;s--){const e=o[s];e["s-hn"]!==n&&e["s-ol"]&&(U(e).insertBefore(e,g(e)),e["s-ol"].remove(),e["s-ol"]=void 0,l=!0),t&&S(e,t)}f.t&=-2},g=e=>e&&e["s-ol"]||e,U=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,L=e=>{let t,n,o,s,l,r,c=e.childNodes;for(n=0,o=c.length;n<o;n++)if(t=c[n],1===t.nodeType){if(t["s-sr"])for(l=t["s-sn"],t.hidden=!1,s=0;s<o;s++)if(c[s]["s-hn"]!==t["s-hn"])if(r=c[s].nodeType,""!==l){if(1===r&&l===c[s].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==c[s].textContent.trim()){t.hidden=!0;break}L(t)}},C=[],P=e=>{let t,n,o,l,r,c,a=0,i=e.childNodes,f=i.length;for(;a<f;a++){if(t=i[a],t["s-sr"]&&(n=t["s-cr"]))for(o=n.parentNode.childNodes,l=t["s-sn"],c=o.length-1;c>=0;c--)n=o[c],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(T(n,l)?(r=C.find(e=>e._===n),s=!0,n["s-sn"]=n["s-sn"]||l,r?r.j=t:C.push({j:t,_:n}),n["s-sr"]&&C.map(e=>{T(e._,n["s-sn"])&&(r=C.find(e=>e._===n),r&&!e.j&&(e.j=r.j))})):C.some(e=>e._===n)||C.push({_:n}));1===t.nodeType&&P(t)}},T=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,x=(e,t)=>{t&&!e.v&&t["s-p"].push(new Promise(t=>e.v=t))},A=(e,t)=>{if(4&e.t)return void(e.t|=512);const n=e.R,o=()=>E(e,n,t);return x(e,e.k),N(void 0,()=>oe(o))},E=(r,c,a)=>{const $=r.M,p=$["s-rc"];a&&(e=>{const t=e.S,n=e.M,o=t.t,s=((e,t)=>{let n=d(t.g),o=Q.get(n);if(e=11===e.nodeType?e:i,o)if("string"==typeof o){let t,s=m.get(e=e.head||e);s||m.set(e,s=new Set),s.has(n)||(t=i.createElement("style"),t.innerHTML=o,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(o)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]);return n})(u&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&o&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(r),((r,c)=>{const a=r.M,$=r.S,p=r.U||b(null,null),m=(e=>e&&e.p===_)(c)?c:h(null,null,c);if(n=a.tagName,m.p=null,m.t|=4,r.U=m,m.h=p.h=a.shadowRoot||a,e=a["s-sc"],t=a["s-cr"],o=u&&0!=(1&$.t),s=!1,((e,t)=>{const o=t.h=e.h,s=t.u;"slot"===t.p||k(e,t,!1),null!==s&&((e,t,o,s,l,r)=>{let c,a=e["s-cr"]&&e["s-cr"].parentNode||e;for(a.shadowRoot&&a.tagName===n&&(a=a.shadowRoot);l<=r;++l)s[l]&&(c=M(null,o,l,e),c&&(s[l].h=c,a.insertBefore(c,g(null))))})(o,0,t,s,0,s.length-1)})(p,m),f.t|=1,l){let e,t,n,o,s,l;P(m.h);let r=0;for(;r<C.length;r++)e=C[r],t=e._,t["s-ol"]||(n=i.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(r=0;r<C.length;r++)if(e=C[r],t=e._,e.j){for(o=e.j.parentNode,s=e.j.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(l=n["s-nr"],l&&l["s-sn"]===t["s-sn"]&&o===l.parentNode&&(l=l.nextSibling,!l||!l["s-nr"])){s=l;break}(!s&&o!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),o.insertBefore(t,s))}else 1===t.nodeType&&(t.hidden=!0)}s&&L(m.h),f.t&=-2,C.length=0})(r,O(c)),r.t|=2,p&&(p.map(e=>e()),$["s-rc"]=void 0);{const e=$["s-p"],t=()=>F(r);0===e.length?t():(Promise.all(e).then(t),r.t|=4,e.length=0)}},O=e=>{try{e=e.render()}catch(t){I(t)}return e},F=e=>{const t=e.M,n=e.k;64&e.t||(e.t|=64,W(t),e.L(t),n||H()),e.v&&(e.v(),e.v=void 0),512&e.t&&ne(()=>A(e,!1)),e.t&=-517},H=()=>{W(i.documentElement),ne(()=>(e=>{const t=new CustomEvent("appload",{detail:{namespace:"salesforce"}});return e.dispatchEvent(t),t})(c))},N=(e,t)=>e&&e.then?e.then(t):t(),W=e=>e.classList.add("hydrated"),q=(e,t={})=>{const n=[],o=t.exclude||[],s=c.customElements,l=i.head,r=l.querySelector("meta[charset]"),a=i.createElement("style"),$=[];let m,w=!0;Object.assign(f,t),f.o=new URL(t.resourcesUrl||"./",i.baseURI).href,e.map(e=>e[1].map(t=>{const l={t:t[0],g:t[1],C:t[2],P:t[3]};!u&&1&l.t&&(l.t|=8);const r=l.g,c=class extends HTMLElement{constructor(e){super(e),D(e=this,l),1&l.t&&(u?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){m&&(clearTimeout(m),m=null),w?$.push(this):f.jmp(()=>(e=>{if(0==(1&f.t)){const t=V(e),n=t.S,o=()=>{};if(!(1&t.t)){t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=i.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){x(t,t.k=n);break}}(async(e,t,n,o,s)=>{if(0==(32&t.t)){t.t|=32;{if((s=K(n)).then){const e=()=>{};s=await s,e()}const e=()=>{};try{new s(t)}catch(c){I(c)}e()}const e=d(n.g);if(!Q.has(e)&&s.style){const t=()=>{};let o=s.style;8&n.t&&(o=await __sc_import_salesforce("./p-f5bab17b.js").then(t=>t.scopeCss(o,e,!1))),((e,t,n)=>{let o=Q.get(e);p&&n?(o=o||new CSSStyleSheet,o.replace(t)):o=t,Q.set(e,o)})(e,o,!!(1&n.t)),t()}}const l=t.k,r=()=>A(t,!0);l&&l["s-rc"]?l["s-rc"].push(r):r()})(0,t,n)}o()}})(this))}disconnectedCallback(){f.jmp(()=>{})}forceUpdate(){}componentOnReady(){return V(this).T}};l.A=e[0],o.includes(r)||s.get(r)||(n.push(r),s.define(r,c))})),a.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",a.setAttribute("data-styles",""),l.insertBefore(a,r?r.nextSibling:l.firstChild),w=!1,$.length?$.map(e=>e.connectedCallback()):f.jmp(()=>m=setTimeout(H,30))},B=new WeakMap,V=e=>B.get(e),z=(e,t)=>B.set(t.R=e,t),D=(e,t)=>{const n={t:0,M:e,S:t,O:new Map};return n.T=new Promise(e=>n.L=e),e["s-p"]=[],e["s-rc"]=[],B.set(e,n)},G=(e,t)=>t in e,I=e=>console.error(e),J=new Map,K=e=>{const t=e.g.replace(/-/g,"_"),n=e.A,o=J.get(n);return o?o[t]:__sc_import_salesforce(`./${n}.entry.js`).then(e=>(J.set(n,e),e[t]),I)},Q=new Map,X=[],Y=[],Z=(e,t)=>n=>{e.push(n),r||(r=!0,t&&4&f.t?ne(te):f.raf(te))},ee=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){I(t)}e.length=0},te=()=>{ee(X),ee(Y),(r=X.length>0)&&f.raf(te)},ne=e=>$().then(e),oe=Z(Y,!0),se=()=>a&&a.supports&&a.supports("color","var(--c)")?$():__sc_import_salesforce("./p-69b85284.js").then(()=>(f.F=c.__cssshim)?(!1).i():0),le=()=>{f.F=c.__cssshim;const e=Array.from(i.querySelectorAll("script")).find(e=>/\/salesforce(\.esm)?\.js($|\?|#)/.test(e.src)||"salesforce"===e.getAttribute("data-stencil-namespace")),t=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,c.location.href)).href,re(t.resourcesUrl,e),c.customElements?$(t):__sc_import_salesforce("./p-2347dcb6.js").then(()=>t))},re=(e,t)=>{try{c.__sc_import_salesforce=Function("w",`return import(w);//${Math.random()}`)}catch(n){const o=new Map;c.__sc_import_salesforce=n=>{const s=new URL(n,e).href;let l=o.get(s);if(!l){const e=i.createElement("script");e.type="module",e.crossOrigin=t.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.__sc_import_salesforce.m = m;`],{type:"application/javascript"})),l=new Promise(t=>{e.onload=()=>{t(c.__sc_import_salesforce.m),e.remove()}}),o.set(s,l),i.head.appendChild(e)}return l}}};export{_ as H,se as a,q as b,h,le as p,z as r}