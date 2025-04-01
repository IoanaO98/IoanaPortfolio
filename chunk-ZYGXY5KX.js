import{c as P,g as w,h as M}from"./chunk-KXOLKH6K.js";import{Ca as l,Fa as r,Ga as f,Ha as a,Ia as s,Ja as c,Ka as u,La as _,Na as d,Ra as m,Ta as b,Ua as C,V as g,Wa as h,qb as x,ra as i,rb as y,sb as k,ub as v}from"./chunk-YL24DNLL.js";var B=e=>({space:e});function E(e,p){e&1&&c(0,"br")}function I(e,p){if(e&1&&(a(0,"span",8),m(1),s()),e&2){let t=d(),n=t.$implicit,o=t.index;f("animation-delay",o*15+"ms"),r("ngClass",h(4,B,n===" ")),i(),b(" ",n," ")}}function T(e,p){if(e&1&&(u(0),l(1,E,1,0,"br",6)(2,I,2,6,"span",7),_()),e&2){let t=p.$implicit,n=d();i(),r("ngIf",n.isBr(t)),i(),r("ngIf",!n.isBr(t))}}var S=(()=>{class e{title=`This is a fully responsive Bookstore web application developed using ASP.NET MVC, SQL Server Management Studio (SSMS), JavaScript, and CSS.<br>
  The main page showcases a dynamic list of books fetched from a backend database, styled with custom CSS for a clean and modern user interface.<br>
  Each book is displayed as a card component, featuring the title, author, pricing details (including discounts), and a call-to-action button for more details.<br>
  The layout is structured using a grid system that ensures responsiveness across different screen sizes.`;titleLetters=[];constructor(){let t=this.title.split(/<br>/g);t.forEach((n,o)=>{n.split("").forEach(O=>this.titleLetters.push(O)),o<t.length-1&&this.titleLetters.push({br:!0})})}isBr(t){return typeof t!="string"&&"br"in t}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=g({type:e,selectors:[["app-bookstore-page"]],standalone:!0,features:[C],decls:8,vars:1,consts:[[1,"py-section","section-page"],[1,"books-cards-grid"],[1,"books-app-info"],[2,"color","aliceblue"],[1,"slide-in-text"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"animationDelay","ngClass",4,"ngIf"],[3,"ngClass"]],template:function(n,o){n&1&&(a(0,"div",0),c(1,"div",1),a(2,"div",2)(3,"p",3),m(4,"Bookstore Project Overview"),s(),a(5,"p",4),l(6,T,3,2,"ng-container",5),s()()(),c(7,"router-outlet")),n&2&&(i(6),r("ngForOf",o.titleLetters))},dependencies:[w,P,v,x,y,k],styles:[".section-page[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:row;gap:10rem;padding:2rem}.py-section[_ngcontent-%COMP%]{padding-top:10rem}.books-cards-grid[_ngcontent-%COMP%]{background-color:transparent;background-image:url(/assets/images/01.webp);border-radius:1rem;padding:2rem;text-align:center;box-shadow:0 4px 10px #f4f3f6;transition:transform .3s ease;height:300px;width:500px;background-size:cover}.books-app-info[_ngcontent-%COMP%]{background-color:transparent;border-radius:1rem;padding:2rem;text-align:center;transition:transform .3s ease;height:300px;width:500px}.slide-in-text[_ngcontent-%COMP%]{overflow:visible;white-space:normal;position:relative;top:auto;text-align:center;width:100%;color:#f0f8ff}.slide-in-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;transform:none;opacity:0;animation:_ngcontent-%COMP%_slideIn .2s ease-out forwards;word-wrap:break-word}.slide-in-text[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%]{width:.5em}@keyframes _ngcontent-%COMP%_slideIn{0%{transform:translate(-50%);opacity:0}to{transform:translate(0);opacity:1}}"]})}return e})();var A=[{path:"",component:M},{path:"bookstore-page",component:S}];export{A as projectsRoutes};
