import{S as a,i as e,s as t,o as r,p as s,q as l,v as c,w as i,x as n,a as o,e as f,t as h,g as u,c as g,b as m,d as $,f as p,h as v,k as d,l as b,G as w,I as A,F as E}from"./index.1f26ef1a.js";import{M as x}from"./Meta.e2a6e7d1.js";import{A as j}from"./Article.528b6c68.js";function I(a,e,t){const r=Object.create(a);return r.article=e[t],r}function F(a){let e;const t=new j({props:{article:a.article}});return{c(){r(t.$$.fragment)},l(a){s(t.$$.fragment,a)},m(a,r){l(t,a,r),e=!0},p(a,e){const r={};a.articles&&(r.article=e.article),t.$set(r)},i(a){e||(c(t.$$.fragment,a),e=!0)},o(a){i(t.$$.fragment,a),e=!1},d(a){n(t,a)}}}function L(a){let e,t,j,L,M,q,y,z,N,V,k,B,D,G;const O=new x({props:{title:"Articles",url:"/articles/"}});let S=a.articles,U=[];for(let e=0;e<S.length;e+=1)U[e]=F(I(a,S,e));const C=a=>i(U[a],1,1,()=>{U[a]=null});return{c(){r(O.$$.fragment),e=o(),t=f("main"),j=f("nav"),L=f("ul"),M=f("li"),q=f("a"),y=h("Features"),z=o(),N=f("li"),V=f("a"),k=h("Articles"),B=o(),D=f("div");for(let a=0;a<U.length;a+=1)U[a].c();this.h()},l(a){s(O.$$.fragment,a),e=u(a),t=g(a,"MAIN",{class:!0});var r=m(t);j=g(r,"NAV",{class:!0,"aria-label":!0});var l=m(j);L=g(l,"UL",{});var c=m(L);M=g(c,"LI",{});var i=m(M);q=g(i,"A",{href:!0});var n=m(q);y=$(n,"Features"),n.forEach(p),i.forEach(p),z=u(c),N=g(c,"LI",{class:!0});var o=m(N);V=g(o,"A",{href:!0,"aria-current":!0});var f=m(V);k=$(f,"Articles"),f.forEach(p),o.forEach(p),c.forEach(p),l.forEach(p),B=u(r),D=g(r,"DIV",{class:!0});var h=m(D);for(let a=0;a<U.length;a+=1)U[a].l(h);h.forEach(p),r.forEach(p),this.h()},h(){v(q,"href","/"),v(V,"href","/articles/"),v(V,"aria-current","page"),v(N,"class","is-active"),v(j,"class","breadcrumb"),v(j,"aria-label","breadcrumbs"),v(D,"class","list svelte-120zoox"),v(t,"class","page svelte-120zoox")},m(a,r){l(O,document.head,null),d(a,e,r),d(a,t,r),b(t,j),b(j,L),b(L,M),b(M,q),b(q,y),b(L,z),b(L,N),b(N,V),b(V,k),b(t,B),b(t,D);for(let a=0;a<U.length;a+=1)U[a].m(D,null);G=!0},p(a,e){if(a.articles){let t;for(S=e.articles,t=0;t<S.length;t+=1){const r=I(e,S,t);U[t]?(U[t].p(a,r),c(U[t],1)):(U[t]=F(r),U[t].c(),c(U[t],1),U[t].m(D,null))}for(E(),t=S.length;t<U.length;t+=1)C(t);w()}},i(a){if(!G){c(O.$$.fragment,a);for(let a=0;a<S.length;a+=1)c(U[a]);G=!0}},o(a){i(O.$$.fragment,a),U=U.filter(Boolean);for(let a=0;a<U.length;a+=1)i(U[a]);G=!1},d(a){n(O),a&&p(e),a&&p(t),A(U,a)}}}async function M({params:a,query:e}){const t=await this.fetch("/articles.json");return{articles:(await t.json()).sort((a,e)=>a.weight>e.weight?-1:a.weight<e.weight?1:0)}}function q(a,e,t){let{articles:r}=e;return a.$set=a=>{"articles"in a&&t("articles",r=a.articles)},{articles:r}}export default class extends a{constructor(a){super(),e(this,a,q,L,t,{articles:0})}}export{M as preload};
