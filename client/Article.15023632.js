import{S as a,i as t,s as r,e,c as l,b as c,f as i,h as s,k as h,n as o,a as f,t as n,g as v,d as u,l as d,y as g}from"./index.47cb3db4.js";function p(a){let t,r,o,p,E,w,m,I,A,b,G,j,y,P,F,x,D,V,k,z,C=a.article.tags.join(", ")+"",H=a.article.title+"",M=a.article.description+"",N=a.article.source+"";return{c(){t=e("a"),r=e("figure"),o=e("img"),w=f(),m=e("figcaption"),I=n(C),A=f(),b=e("div"),G=e("h3"),j=n(H),y=f(),P=e("p"),F=n(M),x=f(),D=e("p"),V=n("Article by "),k=n(N),this.h()},l(a){t=l(a,"A",{href:!0,target:!0,rel:!0,class:!0});var e=c(t);r=l(e,"FIGURE",{});var s=c(r);o=l(s,"IMG",{alt:!0,loading:!0,src:!0,class:!0}),w=v(s),m=l(s,"FIGCAPTION",{class:!0});var h=c(m);I=u(h,C),h.forEach(i),s.forEach(i),A=v(e),b=l(e,"DIV",{class:!0});var f=c(b);G=l(f,"H3",{class:!0});var n=c(G);j=u(n,H),n.forEach(i),y=v(f),P=l(f,"P",{});var d=c(P);F=u(d,M),d.forEach(i),x=v(f),D=l(f,"P",{class:!0});var g=c(D);V=u(g,"Article by "),k=u(g,N),g.forEach(i),f.forEach(i),e.forEach(i),this.h()},h(){s(o,"alt",p=a.article.title),s(o,"loading","lazy"),o.src!==(E=a.article.image)&&s(o,"src",E),s(o,"class","svelte-1itfw3h"),s(m,"class","svelte-1itfw3h"),s(G,"class","svelte-1itfw3h"),s(D,"class","source svelte-1itfw3h"),s(b,"class","description svelte-1itfw3h"),s(t,"href",z=a.article.url),s(t,"target","_blank"),s(t,"rel","noopener"),s(t,"class","svelte-1itfw3h")},m(a,e){h(a,t,e),d(t,r),d(r,o),d(r,w),d(r,m),d(m,I),d(t,A),d(t,b),d(b,G),d(G,j),d(b,y),d(b,P),d(P,F),d(b,x),d(b,D),d(D,V),d(D,k)},p(a,r){a.article&&p!==(p=r.article.title)&&s(o,"alt",p),a.article&&o.src!==(E=r.article.image)&&s(o,"src",E),a.article&&C!==(C=r.article.tags.join(", ")+"")&&g(I,C),a.article&&H!==(H=r.article.title+"")&&g(j,H),a.article&&M!==(M=r.article.description+"")&&g(F,M),a.article&&N!==(N=r.article.source+"")&&g(k,N),a.article&&z!==(z=r.article.url)&&s(t,"href",z)},d(a){a&&i(t)}}}function E(a){let t,r,o,p,E,w,m,I,A,b,G,j,y,P,F,x,D=a.article.tags.join(", ")+"",V=a.article.title+"",k=a.article.description+"";return{c(){t=e("a"),r=e("figure"),o=e("img"),w=f(),m=e("figcaption"),I=n(D),A=f(),b=e("div"),G=e("h3"),j=n(V),y=f(),P=e("p"),F=n(k),this.h()},l(a){t=l(a,"A",{rel:!0,href:!0,class:!0});var e=c(t);r=l(e,"FIGURE",{});var s=c(r);o=l(s,"IMG",{alt:!0,loading:!0,src:!0,class:!0}),w=v(s),m=l(s,"FIGCAPTION",{class:!0});var h=c(m);I=u(h,D),h.forEach(i),s.forEach(i),A=v(e),b=l(e,"DIV",{class:!0});var f=c(b);G=l(f,"H3",{class:!0});var n=c(G);j=u(n,V),n.forEach(i),y=v(f),P=l(f,"P",{});var d=c(P);F=u(d,k),d.forEach(i),f.forEach(i),e.forEach(i),this.h()},h(){s(o,"alt",p=a.article.title),s(o,"loading","lazy"),o.src!==(E=a.article.image)&&s(o,"src",E),s(o,"class","svelte-1itfw3h"),s(m,"class","svelte-1itfw3h"),s(G,"class","svelte-1itfw3h"),s(b,"class","description svelte-1itfw3h"),s(t,"rel","prefetch"),s(t,"href",x="/articles/"+a.article.slug+"/"),s(t,"class","svelte-1itfw3h")},m(a,e){h(a,t,e),d(t,r),d(r,o),d(r,w),d(r,m),d(m,I),d(t,A),d(t,b),d(b,G),d(G,j),d(b,y),d(b,P),d(P,F)},p(a,r){a.article&&p!==(p=r.article.title)&&s(o,"alt",p),a.article&&o.src!==(E=r.article.image)&&s(o,"src",E),a.article&&D!==(D=r.article.tags.join(", ")+"")&&g(I,D),a.article&&V!==(V=r.article.title+"")&&g(j,V),a.article&&k!==(k=r.article.description+"")&&g(F,k),a.article&&x!==(x="/articles/"+r.article.slug+"/")&&s(t,"href",x)},d(a){a&&i(t)}}}function w(a){let t;function r(a,t){return"wwcd"===t.article.source?E:p}let f=r(0,a),n=f(a);return{c(){t=e("div"),n.c(),this.h()},l(a){t=l(a,"DIV",{class:!0});var r=c(t);n.l(r),r.forEach(i),this.h()},h(){s(t,"class","article svelte-1itfw3h")},m(a,r){h(a,t,r),n.m(t,null)},p(a,e){f===(f=r(0,e))&&n?n.p(a,e):(n.d(1),n=f(e),n&&(n.c(),n.m(t,null)))},i:o,o:o,d(a){a&&i(t),n.d()}}}function m(a,t,r){let{article:e}=t;return a.$set=a=>{"article"in a&&r("article",e=a.article)},{article:e}}class I extends a{constructor(a){super(),t(this,a,m,w,r,{article:0})}}export{I as A};
