import{S as $,i as ee,s as te,e as N,t as U,c as L,a as v,h as O,d as g,b as p,g as x,G as o,R as C,j as ae,k as R,m as j,H as Y,P as se,T as le,U as re}from"./vendor-ef5fcfed.js";function Z(e,t,a){const l=e.slice();return l[12]=t[a],l}function G(e){let t,a,l=e[12]+1+"",_,b,d,A;function h(){return e[7](e[12])}return{c(){t=N("li"),a=N("button"),_=U(l),this.h()},l(i){t=L(i,"LI",{});var m=v(t);a=L(m,"BUTTON",{type:!0,class:!0});var S=v(a);_=O(S,l),S.forEach(g),m.forEach(g),this.h()},h(){p(a,"type","button"),p(a,"class",b="btn "+(e[0]==e[12]?"btn-primary":"btn-outline-primary"))},m(i,m){x(i,t,m),o(t,a),o(a,_),d||(A=C(a,"click",h),d=!0)},p(i,m){e=i,m&2&&l!==(l=e[12]+1+"")&&ae(_,l),m&3&&b!==(b="btn "+(e[0]==e[12]?"btn-primary":"btn-outline-primary"))&&p(a,"class",b)},d(i){i&&g(t),d=!1,A()}}}function ne(e){let t,a,l,_,b,d,A,h,i,m,S,y,T,E,c,I,P,k,M,q,H,D,w,B=e[1],u=[];for(let s=0;s<B.length;s+=1)u[s]=G(Z(e,B,s));return{c(){t=N("ul"),a=N("li"),l=N("button"),_=U("\xAB"),d=R(),A=N("li"),h=N("button"),i=U("<"),S=R();for(let s=0;s<u.length;s+=1)u[s].c();y=R(),T=N("li"),E=N("button"),c=U(">"),P=R(),k=N("li"),M=N("button"),q=U("\xBB"),this.h()},l(s){t=L(s,"UL",{class:!0});var r=v(t);a=L(r,"LI",{});var n=v(a);l=L(n,"BUTTON",{class:!0,"aria-label":!0});var F=v(l);_=O(F,"\xAB"),F.forEach(g),n.forEach(g),d=j(r),A=L(r,"LI",{});var z=v(A);h=L(z,"BUTTON",{class:!0,"aria-label":!0});var J=v(h);i=O(J,"<"),J.forEach(g),z.forEach(g),S=j(r);for(let V=0;V<u.length;V+=1)u[V].l(r);y=j(r),T=L(r,"LI",{});var K=v(T);E=L(K,"BUTTON",{class:!0,"aria-label":!0});var Q=v(E);c=O(Q,">"),Q.forEach(g),K.forEach(g),P=j(r),k=L(r,"LI",{});var W=v(k);M=L(W,"BUTTON",{class:!0,"aria-label":!0});var X=v(M);q=O(X,"\xBB"),X.forEach(g),W.forEach(g),r.forEach(g),this.h()},h(){p(l,"class","btn btn-outline-primary"),p(l,"aria-label","first"),l.disabled=b=e[0]<=0,p(h,"class","btn btn-outline-primary"),p(h,"aria-label","previous"),h.disabled=m=e[0]<=0,p(E,"class","btn btn-outline-primary"),p(E,"aria-label","next"),E.disabled=I=e[0]>=e[1].length-1,p(M,"class","btn btn-outline-primary"),p(M,"aria-label","last"),M.disabled=H=e[0]>=e[1].length-1,p(t,"class","pagination")},m(s,r){x(s,t,r),o(t,a),o(a,l),o(l,_),o(t,d),o(t,A),o(A,h),o(h,i),o(t,S);for(let n=0;n<u.length;n+=1)u[n].m(t,null);o(t,y),o(t,T),o(T,E),o(E,c),o(t,P),o(t,k),o(k,M),o(M,q),D||(w=[C(l,"click",e[5]),C(h,"click",e[6]),C(E,"click",e[8]),C(M,"click",e[9])],D=!0)},p(s,[r]){if(r&1&&b!==(b=s[0]<=0)&&(l.disabled=b),r&1&&m!==(m=s[0]<=0)&&(h.disabled=m),r&7){B=s[1];let n;for(n=0;n<B.length;n+=1){const F=Z(s,B,n);u[n]?u[n].p(F,r):(u[n]=G(F),u[n].c(),u[n].m(t,y))}for(;n<u.length;n+=1)u[n].d(1);u.length=B.length}r&3&&I!==(I=s[0]>=s[1].length-1)&&(E.disabled=I),r&3&&H!==(H=s[0]>=s[1].length-1)&&(M.disabled=H)},i:Y,o:Y,d(s){s&&g(t),se(u,s),D=!1,le(w)}}}function ie(e,t,a){let l,{numberItems:_}=t,{perPage:b=10}=t,{currentPage:d=0}=t;const A=re();function h(c,I){for(var P=[],k=0;k<Math.ceil(c/I);k++)P.push(k);return d>P.length-1&&a(0,d=P.length-1),P}function i(c){a(0,d=c),A("pageChanged")}const m=()=>{i(0)},S=()=>{i(d-1)},y=c=>{i(c)},T=()=>{i(d+1)},E=()=>{i(l.length-1)};return e.$$set=c=>{"numberItems"in c&&a(3,_=c.numberItems),"perPage"in c&&a(4,b=c.perPage),"currentPage"in c&&a(0,d=c.currentPage)},e.$$.update=()=>{e.$$.dirty&24&&a(1,l=h(_,b))},[d,l,i,_,b,m,S,y,T,E]}class ce extends ${constructor(t){super();ee(this,t,ie,ne,te,{numberItems:3,perPage:4,currentPage:0})}}var f=(e=>(e[e.MALE=0]="MALE",e[e.FEMALE=1]="FEMALE",e))(f||{});const ue=[{firstName:"Bob",lastName:"Schmidt",age:22,gender:f.MALE,adress:{street:""},parents:["Hans"]},{firstName:"Mario",lastName:"Schmidt",age:21,gender:f.MALE,adress:{street:""},parents:[]},{firstName:"Hans",lastName:"Schmidt",age:22,gender:f.MALE,adress:{street:""},parents:[]},{firstName:"Andy",lastName:"Schmidt",age:22,gender:f.MALE,adress:{street:""},parents:[]},{firstName:"Lea",lastName:"Schmidt",age:22,gender:f.FEMALE,adress:{street:""},parents:["Luigi","Francisca"]},{firstName:"Lukas",lastName:"Schmidt",age:22,gender:f.MALE,adress:{street:""},parents:[]},{firstName:"Victor",lastName:"Schmidt",age:22,gender:f.MALE,adress:{street:""},parents:[]},{firstName:"Hilda",lastName:"Schmidt",age:22,gender:f.FEMALE,adress:{street:""},parents:[]},{firstName:"Robin",lastName:"Schmidt",age:22,gender:f.FEMALE,adress:{street:""},parents:[]},{firstName:"Peter",lastName:"Schmidt",age:22,gender:f.MALE,adress:{street:""},parents:[]},{firstName:"Anna",lastName:"Schmidt",age:22,gender:f.FEMALE,adress:{street:""},parents:[]},{firstName:"Chris",lastName:"Schmidt",age:22,gender:f.MALE,adress:{street:""},parents:[]}];export{ce as P,ue as u};