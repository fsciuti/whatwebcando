import{a as r,b as e,c as t,d as a,i as s,e as c,S as i,s as n,v as l,w as o,x as f,A as u,B as h,C as v,g,f as m,t as p,m as $,h as A,j as d,k as E,l as w,o as x,q as b,r as j,D as L,L as I,P as z,W as M,K as H}from"./index.95ec79ca.js";import{_ as P}from"./index.02a02c24.js";import{M as S}from"./Meta.ebcaa035.js";import{A as D}from"./Article.c4a645a5.js";import{P as T}from"./PromoBox.62345c00.js";import{P as k}from"./prism.a51cb016.js";function V(r,e,t){var a=Object.create(r);return a.article=e[t],a}function y(r){var e,t=new D({props:{article:r.article}});return{c:function(){l(t.$$.fragment)},l:function(r){o(t.$$.fragment,r)},m:function(r,a){f(t,r,a),e=!0},p:function(r,e){var a={};r.otherArticles&&(a.article=e.article),t.$set(a)},i:function(r){e||(u(t.$$.fragment,r),e=!0)},o:function(r){h(t.$$.fragment,r),e=!1},d:function(r){v(t,r)}}}function B(r){for(var e,t,a,s,c,i,n,M,P,D,k,B,q,F,N,U,C,K,O,W,Y,_,G,J,Q,R,X,Z,rr,er,tr,ar,sr,cr,ir,nr=r.article.title+"",lr=r.article.title+"",or=r.article.html+"",fr=r.article.author+"",ur=new S({props:{title:r.article.title,url:"/articles/"+r.article.slug+"/",description:r.article.description,image:r.article.image}}),hr=new T({}),vr=r.otherArticles,gr=[],mr=0;mr<vr.length;mr+=1)gr[mr]=y(V(r,vr,mr));var pr=function(r){return h(gr[r],1,1,(function(){gr[r]=null}))};return{c:function(){l(ur.$$.fragment),e=g(),t=m("div"),a=m("main"),s=m("nav"),c=m("ul"),i=m("li"),n=m("a"),M=p("Features"),P=g(),D=m("li"),k=m("a"),B=p("Articles"),q=g(),F=m("li"),N=m("a"),U=p(nr),K=g(),O=m("h1"),W=p(lr),Y=g(),_=m("div"),G=g(),J=m("div"),Q=g(),R=m("aside"),l(hr.$$.fragment),X=g(),Z=m("h2"),rr=p("See also"),er=g();for(var r=0;r<gr.length;r+=1)gr[r].c();tr=g(),ar=m("p"),sr=m("a"),cr=p("See all"),this.h()},l:function(r){o(ur.$$.fragment,r),e=$(r),t=A(r,"DIV",{class:!0});var l=d(t);a=A(l,"MAIN",{class:!0});var f=d(a);s=A(f,"NAV",{class:!0,"aria-label":!0});var u=d(s);c=A(u,"UL",{});var h=d(c);i=A(h,"LI",{});var v=d(i);n=A(v,"A",{href:!0});var g=d(n);M=E(g,"Features"),g.forEach(w),v.forEach(w),P=$(h),D=A(h,"LI",{});var m=d(D);k=A(m,"A",{href:!0});var p=d(k);B=E(p,"Articles"),p.forEach(w),m.forEach(w),q=$(h),F=A(h,"LI",{class:!0});var x=d(F);N=A(x,"A",{href:!0,"aria-current":!0});var b=d(N);U=E(b,nr),b.forEach(w),x.forEach(w),h.forEach(w),u.forEach(w),K=$(f),O=A(f,"H1",{});var j=d(O);W=E(j,lr),j.forEach(w),Y=$(f),_=A(f,"DIV",{class:!0}),d(_).forEach(w),G=$(f),J=A(f,"DIV",{class:!0}),d(J).forEach(w),f.forEach(w),Q=$(l),R=A(l,"ASIDE",{class:!0});var L=d(R);o(hr.$$.fragment,L),X=$(L),Z=A(L,"H2",{class:!0});var I=d(Z);rr=E(I,"See also"),I.forEach(w),er=$(L);for(var z=0;z<gr.length;z+=1)gr[z].l(L);tr=$(L),ar=A(L,"P",{class:!0});var H=d(ar);sr=A(H,"A",{href:!0,class:!0});var S=d(sr);cr=E(S,"See all"),S.forEach(w),H.forEach(w),L.forEach(w),l.forEach(w),this.h()},h:function(){x(n,"href","/"),x(k,"href","/articles/"),x(N,"href",C="/articles/"+r.article.slug+"/"),x(N,"aria-current","page"),x(F,"class","is-active"),x(s,"class","breadcrumb"),x(s,"aria-label","breadcrumbs"),x(_,"class","content language-javascript svelte-nzu3si"),x(J,"class","author svelte-nzu3si"),x(a,"class","svelte-nzu3si"),x(Z,"class","svelte-nzu3si"),x(sr,"href","/articles/"),x(sr,"class","button"),x(ar,"class","text-center see-all svelte-nzu3si"),x(R,"class","svelte-nzu3si"),x(t,"class","container svelte-nzu3si")},m:function(r,l){f(ur,document.head,null),b(r,e,l),b(r,t,l),j(t,a),j(a,s),j(s,c),j(c,i),j(i,n),j(n,M),j(c,P),j(c,D),j(D,k),j(k,B),j(c,q),j(c,F),j(F,N),j(N,U),j(a,K),j(a,O),j(O,W),j(a,Y),j(a,_),_.innerHTML=or,j(a,G),j(a,J),J.innerHTML=fr,j(t,Q),j(t,R),f(hr,R,null),j(R,X),j(R,Z),j(Z,rr),j(R,er);for(var o=0;o<gr.length;o+=1)gr[o].m(R,null);j(R,tr),j(R,ar),j(ar,sr),j(sr,cr),ir=!0},p:function(r,e){var t={};if(r.article&&(t.title=e.article.title),r.article&&(t.url="/articles/"+e.article.slug+"/"),r.article&&(t.description=e.article.description),r.article&&(t.image=e.article.image),ur.$set(t),ir&&!r.article||nr===(nr=e.article.title+"")||L(U,nr),(!ir||r.article&&C!==(C="/articles/"+e.article.slug+"/"))&&x(N,"href",C),ir&&!r.article||lr===(lr=e.article.title+"")||L(W,lr),ir&&!r.article||or===(or=e.article.html+"")||(_.innerHTML=or),ir&&!r.article||fr===(fr=e.article.author+"")||(J.innerHTML=fr),r.otherArticles){var a;for(vr=e.otherArticles,a=0;a<vr.length;a+=1){var s=V(e,vr,a);gr[a]?(gr[a].p(r,s),u(gr[a],1)):(gr[a]=y(s),gr[a].c(),u(gr[a],1),gr[a].m(R,tr))}for(H(),a=vr.length;a<gr.length;a+=1)pr(a);I()}},i:function(r){if(!ir){u(ur.$$.fragment,r),u(hr.$$.fragment,r);for(var e=0;e<vr.length;e+=1)u(gr[e]);ir=!0}},o:function(r){h(ur.$$.fragment,r),h(hr.$$.fragment,r),gr=gr.filter(Boolean);for(var e=0;e<gr.length;e+=1)h(gr[e]);ir=!1},d:function(r){v(ur),r&&w(e),r&&w(t),v(hr),z(gr,r)}}}var q=function(r){return function(e){return r.tags.filter((function(r){return e.tags.includes(r)})).length}};function F(r){var e,t,a,s,c,i,n;return P.async((function(l){for(;;)switch(l.prev=l.next){case 0:return e=r.params,r.query,l.prev=1,l.next=4,P.awrap(this.fetch("/articles/".concat(e.slug,".json")));case 4:if((t=l.sent).ok){l.next=7;break}throw t;case 7:return l.next=9,P.awrap(t.json());case 9:return a=l.sent,l.next=12,P.awrap(this.fetch("/articles.json"));case 12:return s=l.sent,l.next=15,P.awrap(s.json());case 15:return c=l.sent,i=q(a),n=c.filter((function(r){return r.slug!==a.slug})).sort((function(r,e){var t=i(r),a=i(e);return t>a?-1:t<a?1:r.weight>e.weight?-1:r.weight<e.weight?1:0})),l.abrupt("return",{article:a,otherArticles:n.slice(0,3)});case 21:l.prev=21,l.t0=l.catch(1),499===l.t0.status?this.error("You're offline","This content was not cached for offline use. Please return while connected to the network."):this.error(l.t0.status||"500",l.t0.message||"Unexpected error");case 24:case"end":return l.stop()}}),null,this,[[1,21]])}function N(r,e,t){var a=e.article,s=e.otherArticles;return M((function(){k.highlightAll({async:!0})})),r.$set=function(r){"article"in r&&t("article",a=r.article),"otherArticles"in r&&t("otherArticles",s=r.otherArticles)},{article:a,otherArticles:s}}var U=function(l){function o(r){var i;return e(this,o),i=t(this,a(o).call(this)),s(c(i),r,N,B,n,{article:0,otherArticles:0}),i}return r(o,i),o}();export default U;export{F as preload};
