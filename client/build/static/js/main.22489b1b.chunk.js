(this.webpackJsonp7blog=this.webpackJsonp7blog||[]).push([[0],{64:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var s=n(9),a=n(0),c=n(21),r=n.n(c),i=n(11),o=n.n(i),l=n(16),j=n(12),u=(n(64),n(100)),b=n(102),d=n(23),h=n(29),O=n(30),p=n.p+"static/media/7BlogLogo.1bf033dc.png",x=n(1),m=function(e){var t=e.isAuth;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(u.a,{className:"mb-3 py-2",bg:"dark",expand:"lg",variant:"dark",children:[Object(x.jsx)(d.LinkContainer,{to:"/",children:Object(x.jsx)(u.a.Brand,{className:"ms-3",children:Object(x.jsxs)("div",{className:"d-flex text-center justify-content-center align-items-center",style:{cusor:"pointer"},children:[Object(x.jsx)("img",{src:p,style:{height:"80px"},alt:"7Blog"}),Object(x.jsx)("h1",{children:"7Blog"})]})})}),Object(x.jsx)(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsx)(u.a.Collapse,{id:"basic-navbar-nav",children:Object(x.jsxs)(b.a,{className:"ms-auto me-3",children:[t?Object(x.jsx)(d.LinkContainer,{to:"/logout",children:Object(x.jsxs)(b.a.Link,{className:"px-3",children:[" ",Object(x.jsx)(h.a,{icon:O.b}),"Logout"]})}):Object(x.jsx)(d.LinkContainer,{to:"/login",children:Object(x.jsxs)(b.a.Link,{className:"px-3",children:[" ",Object(x.jsx)(h.a,{icon:O.b}),"Login"]})}),Object(x.jsx)(d.LinkContainer,{to:"/register",children:Object(x.jsxs)(b.a.Link,{className:"px-3",children:[" ",Object(x.jsx)(h.a,{icon:O.c}),"Register"]})}),Object(x.jsx)(d.LinkContainer,{to:"/add_post",children:Object(x.jsxs)(b.a.Link,{className:"px-3",children:[" ",Object(x.jsx)(h.a,{icon:O.a}),"Add Post"]})})]})})]})})},g=n(96),f=n(97),v=n(57),y=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(g.a,{fluid:!0,className:"bg-dark text-white mt-3 py-4",children:[Object(x.jsxs)(f.a,{className:"my-2 footer-text",children:[Object(x.jsx)(v.a,{children:Object(x.jsx)("p",{children:"Welcome to 7blog. We are the leading Technology blog in the world. Enjoy quality content in the website"})}),Object(x.jsx)(v.a,{children:Object(x.jsx)("p",{children:"We are known for proving best quality reviews, guides, How-to's and other quality articles to make you love technology"})}),Object(x.jsx)(v.a,{children:Object(x.jsxs)("ul",{className:"list-unstyled",children:[Object(x.jsx)("li",{children:Object(x.jsx)("h5",{children:"Our Links"})}),Object(x.jsx)("li",{children:"Home"}),Object(x.jsx)("li",{children:"About"})]})})]}),Object(x.jsx)(f.a,{children:Object(x.jsx)(v.a,{className:"text-center",children:Object(x.jsx)("p",{children:"Copyright \xa9 2021 7Blog"})})})]})})},w=n(8),N=function(e){var t=e.setIsAuth,n=Object(w.k)();return Object(a.useEffect)((function(){localStorage.removeItem("userInfo"),t(!1),n.push("/login")}),[n,t]),Object(x.jsx)(x.Fragment,{children:"Hi"})},k=n(101),S=n(98),C=n(17),I=n.n(C),L=n(18),A=function(e){var t=e.setIsAuth,n=Object(L.d)(),c=Object(a.useState)({name:"",email:"",password:""}),r=Object(j.a)(c,2),i=r[0],u=r[1],b=function(){var e=Object(l.a)(o.a.mark((function e(s){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,I.a.post("/auth/register",{name:i.name,email:i.email,password:i.password});case 4:a=e.sent,localStorage.setItem("userInfo",JSON.stringify(a.data)),201===a.status&&(t(!0),n.show("Registration Successful",{type:"success"})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),c=e.t0.response?e.t0.response.data.message:e.t0,n.show(c,{type:"error"});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h3",{className:"text-center",children:"User Register"}),Object(x.jsxs)(k.a,{className:"w-50 m-auto text-center",onSubmit:b,children:[Object(x.jsxs)(k.a.Group,{controlId:"name",children:[Object(x.jsx)(k.a.Label,{children:"Name"}),Object(x.jsx)(k.a.Control,{type:"text",placeholder:"Enter your Name",value:i.name,onChange:function(e){return u(Object(s.a)(Object(s.a)({},i),{},{name:e.target.value}))}})]}),Object(x.jsxs)(k.a.Group,{controlId:"email",children:[Object(x.jsx)(k.a.Label,{children:"Email address"}),Object(x.jsx)(k.a.Control,{type:"email",placeholder:"Enter email",value:i.email,onChange:function(e){return u(Object(s.a)(Object(s.a)({},i),{},{email:e.target.value}))}}),Object(x.jsx)(k.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(x.jsxs)(k.a.Group,{controlId:"password",children:[Object(x.jsx)(k.a.Label,{children:"Password"}),Object(x.jsx)(k.a.Control,{type:"password",placeholder:"Password",value:i.password,onChange:function(e){return u(Object(s.a)(Object(s.a)({},i),{},{password:e.target.value}))}})]}),Object(x.jsx)(S.a,{className:"mt-3",variant:"primary",type:"submit",children:"Submit"})]})]})},P=n(99),E=function(){return Object(x.jsx)(P.a,{animation:"border",role:"status",style:{margin:"auto",width:"100px",height:"100px",display:"block"},children:Object(x.jsx)("span",{className:"sr-only",children:"Loading..."})})},F=function(e){var t=e.posts,n=e.loading;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{className:" text-center mt-3",children:"Blog Posts"}),n?Object(x.jsx)(E,{}):Object(x.jsx)("div",{children:t.map((function(e){return Object(x.jsxs)("div",{className:"my-4 mx-auto",children:[Object(x.jsx)("h2",{className:"text-primary",children:e.title}),Object(x.jsxs)("p",{children:["Posted on ",e.createdAt.slice(0,10)," at"," ",e.createdAt.split("T")[1].split(".")[0]]}),Object(x.jsx)("br",{}),Object(x.jsx)("p",{children:e.content}),Object(x.jsx)("hr",{})]},e._id)}))})]})})},T=(n(25),function(e){var t=e.postTitles;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h5",{children:"Recent Posts"}),Object(x.jsx)("ul",{children:t.map((function(e){return Object(x.jsx)("li",{children:e},e)}))})]})}),B=function(e){var t=e.postTitles;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{className:"text-center",children:"Sidebar"}),Object(x.jsx)(T,{postTitles:t})]})})},G=function(e){for(var t=e.postsPerPage,n=e.totalPosts,s=e.paginate,a=[],c=1;c<=Math.ceil(n/t);c++)a.push(c);return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("ul",{className:"pagination align-content-center justify-content-center",children:a.map((function(e){return Object(x.jsx)("li",{className:"page-item",children:Object(x.jsx)("a",{href:"!#",onClick:function(t){t.preventDefault(),s(e)},className:"page-link",children:e})},e)}))})})},J=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)([]),r=Object(j.a)(c,2),i=r[0],u=r[1],b=Object(a.useState)(!0),d=Object(j.a)(b,2),h=d[0],O=d[1],p=Object(a.useState)(1),m=Object(j.a)(p,2),g=m[0],f=m[1],v=Object(a.useState)(5),y=Object(j.a)(v,1)[0];Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("/api/fetch_posts");case 3:t=e.sent,h&&(s(t.data),O(!1),u(n.map((function(e){return e.title})).slice(0,6))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,s,h]);var w=g*y,N=w-y,k=n.slice(N,w),S=function(e){f(e)};return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"d-flex content",children:[Object(x.jsxs)("div",{className:"px-5 posts",children:[Object(x.jsx)("div",{children:Object(x.jsx)(G,{postsPerPage:y,totalPosts:n.length,paginate:S})}),Object(x.jsx)(F,{posts:k,loading:h}),Object(x.jsx)(G,{postsPerPage:y,totalPosts:n.length,paginate:S})]}),Object(x.jsx)("div",{className:"sidebar mx-5",children:Object(x.jsx)(B,{postTitles:i})})]})})},_=function(e){var t=e.setIsAuth,n=Object(L.d)(),c=Object(a.useState)({email:"",password:""}),r=Object(j.a)(c,2),i=r[0],u=r[1],b=function(){var e=Object(l.a)(o.a.mark((function e(s){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,I.a.post("/auth/login",{email:i.email,password:i.password});case 4:a=e.sent,localStorage.setItem("userInfo",JSON.stringify(a.data)),201===a.status&&(t(!0),n.show("Login Success",{type:"success"})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),c=e.t0.response?e.t0.response.data.message:e.t0,n.show(c,{type:"error"});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h3",{className:"text-center",children:"User Login"}),Object(x.jsxs)(k.a,{className:"w-50 m-auto text-center",onSubmit:b,children:[Object(x.jsxs)(k.a.Group,{controlId:"email",children:[Object(x.jsx)(k.a.Label,{children:"Email address"}),Object(x.jsx)(k.a.Control,{type:"email",placeholder:"Enter email",value:i.email,onChange:function(e){return u(Object(s.a)(Object(s.a)({},i),{},{email:e.target.value}))}})]}),Object(x.jsxs)(k.a.Group,{controlId:"password",children:[Object(x.jsx)(k.a.Label,{children:"Password"}),Object(x.jsx)(k.a.Control,{type:"password",placeholder:"Password",value:i.password,onChange:function(e){return u(Object(s.a)(Object(s.a)({},i),{},{password:e.target.value}))}})]}),Object(x.jsx)(S.a,{className:"mt-3",variant:"primary",type:"submit",children:"Submit"})]})]})},R=function(){var e=Object(w.k)(),t=Object(L.d)(),n=Object(a.useState)({title:"",content:""}),c=Object(j.a)(n,2),r=c[0],i=c[1];Object(a.useEffect)((function(){JSON.parse(localStorage.getItem("userInfo"))||e.push("/login")}),[e]);var u=function(){var e=Object(l.a)(o.a.mark((function e(n){var s,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),s=JSON.parse(localStorage.getItem("userInfo")),a={headers:{Authorization:"Bearer ".concat(s.token)}},e.prev=3,e.next=6,I.a.post("/api/add_post",{title:r.title,content:r.content},a);case 6:201===e.sent.status&&t.show("Post Added Successfuly",{type:"success"}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),c=e.t0.response?e.t0.response.data.message:e.t0,t.show(c,{type:"error"});case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h3",{className:"text-center",children:"Add new Post"}),Object(x.jsxs)(k.a,{className:"w-75 m-auto text-center",onSubmit:u,children:[Object(x.jsxs)(k.a.Group,{className:"my-2",controlId:"title",children:[Object(x.jsx)(k.a.Label,{children:"Title"}),Object(x.jsx)(k.a.Control,{type:"text",placeholder:"Enter Post Title",value:r.title,onChange:function(e){return i(Object(s.a)(Object(s.a)({},r),{},{title:e.target.value}))}})]}),Object(x.jsxs)(k.a.Group,{className:"my-2",controlId:"content",children:[Object(x.jsx)(k.a.Label,{children:"Content"}),Object(x.jsx)(k.a.Control,{as:"textarea",rows:8,placeholder:"Enter Content",value:r.content,onChange:function(e){return i(Object(s.a)(Object(s.a)({},r),{},{content:e.target.value}))}})]}),Object(x.jsx)(S.a,{className:"mt-3",variant:"primary",type:"submit",children:"Submit"})]})]})},D=n(24);var H=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=JSON.parse(localStorage.getItem("userInfo")),n={headers:{Authorization:"Bearer ".concat(t.token)}},e.next=5,I.a.get("/api/is_auth",n);case 5:a=e.sent,console.log("Hi"),s(a.data.isAuth),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),s(!1);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(x.jsxs)(D.BrowserRouter,{children:[Object(x.jsx)("header",{children:Object(x.jsx)(m,{isAuth:n,setIsAuth:s})}),Object(x.jsx)("main",{children:Object(x.jsxs)(w.g,{children:[Object(x.jsx)(w.d,{exact:!0,path:"/",component:function(){return Object(x.jsx)(J,{})}}),Object(x.jsx)(w.d,{path:"/register",component:function(){return Object(x.jsx)(A,{isAuth:n,setIsAuth:s})}}),Object(x.jsx)(w.d,{path:"/login",component:function(){return Object(x.jsx)(_,{isAuth:n,setIsAuth:s})}}),Object(x.jsx)(w.d,{exact:!0,path:"/add_post",component:function(){return Object(x.jsx)(R,{isAuth:n,setIsAuth:s})}}),Object(x.jsx)(w.d,{exact:!0,path:"/logout",component:function(){return Object(x.jsx)(N,{isAuth:n,setIsAuth:s})}})]})}),Object(x.jsx)("footer",{children:Object(x.jsx)(y,{})})]})},W=n(58),q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,103)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))},z={position:L.b.BOTTOM_CENTER,timeout:5e3,offset:"30px",transition:L.c.SCALE};r.a.render(Object(x.jsx)(L.a,Object(s.a)(Object(s.a)({template:W.a},z),{},{children:Object(x.jsx)(H,{})})),document.getElementById("root")),q()}},[[93,1,2]]]);
//# sourceMappingURL=main.22489b1b.chunk.js.map