(this["webpackJsonpproduct-stepping"]=this["webpackJsonpproduct-stepping"]||[]).push([[0],{188:function(e,t,a){e.exports=a(336)},322:function(e,t,a){},336:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),c=a.n(o),s=(a(193),a(24)),u=a(351),l=a(346),i=a(10),m=a(60),p=a.n(m),d=a(108),f=a(12),E=a.n(f),h=function(e){return function(){var t=Object(d.a)(p.a.mark((function t(a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"Setlogintrue",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){var t=e().loginstate.token,a={headers:{"Content-Type":"application/json"}};return t&&(a.headers.Authorization="Token ".concat(t)),a},g=a(8);function b(){var e=Object(g.f)(),t=Object(i.b)(),a=Object(i.c)((function(e){return e.loginstate.state})),o=Object(i.c)((function(e){return e.loginstate.username})),c=Object(n.useState)(""),m=Object(s.a)(c,2),f=m[0];m[1];return r.a.createElement("div",{className:"navbar"},r.a.createElement(u.a,{secondary:!0,inverted:!0},r.a.createElement(u.a.Item,{name:"home",active:"home"===f,onClick:function(){return e.push("/")}}),r.a.createElement(u.a.Item,{name:"post new course",active:"post new course"===f,onClick:function(){return e.push("/post-course")}}),a&&r.a.createElement(u.a.Item,{name:"Welcome,".concat(o)}),r.a.createElement(u.a.Menu,{position:"right"},r.a.createElement(u.a.Item,null,r.a.createElement(l.a,{icon:"search",placeholder:"Search..."})),a&&r.a.createElement(u.a.Item,{name:"logout",active:"logout"===f,onClick:function(){return t(function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"Setloginfalse"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}),!a&&r.a.createElement(u.a.Item,{name:"login",active:"logout"===f,onClick:function(){return e.push("/login")}}))))}var v=a(350);function j(e){var t=e.title,a=e.from,n=e.desc,o=e.slug,c=(e.id,Object(g.f)());return r.a.createElement("div",null,r.a.createElement(v.a,{header:t,meta:a,description:n.length>140?n.slice(0,140)+"...":n,onClick:function(e){return c.push("/course/".concat(o))}}))}var y=a(352);function C(){var e=Object(i.c)((function(e){return e.Course.courses}));return r.a.createElement("div",{className:"content"},r.a.createElement(y.a,{doubling:!0,columns:5},e.map((function(e){return r.a.createElement(y.a.Column,{key:e.id},r.a.createElement(j,{title:e.title,from:e._from,desc:e.desc,link:e.link,username:e.username,slug:e.slug,key:e.id}))}))))}a(322);var S=a(76),w=a(32),k=a(9),_=a(348),T=a(337);function N(){var e=Object(n.useState)({username:"Visitor",password:"asdfgh",email:"",password2:""}),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)("login"),u=Object(s.a)(c,2),l=u[0],m=u[1],p=Object(i.b)(),d=Object(g.f)(),f=function(e,t){var a=t.name,n=t.value;o((function(e){return Object(k.a)(Object(k.a)({},e),{},Object(w.a)({},a,n))}))};return r.a.createElement("div",{className:"login-form"},"login"===l&&r.a.createElement(_.a,null,r.a.createElement(_.a.Input,{placeholder:"User name",onChange:f,name:"username",value:a.username}),r.a.createElement(_.a.Input,{placeholder:"Password",onChange:f,name:"password",type:"password",value:a.password}),r.a.createElement(T.a,{type:"submit",onClick:function(){var e=a.username,t=a.password,n=JSON.stringify({username:e,password:t});E.a.post("/api/auth/login",n,{headers:{"Content-Type":"application/json"}}).then((function(e){p(h({token:e.data.token,username:e.data.user.username})),localStorage.setItem("token",e.data.token),d.push("/")})).catch((function(e){return alert(JSON.stringify(e.response.data))}))}},"Login"),r.a.createElement(T.a,{type:"submit",onClick:function(){m("register"),o({username:"",password:"",email:"",password2:""})}},"Register")),"register"===l&&r.a.createElement(_.a,null,r.a.createElement(_.a.Input,{placeholder:"User name",onChange:f,name:"username"}),r.a.createElement(_.a.Input,{placeholder:"Email",onChange:f,name:"email"}),r.a.createElement(_.a.Input,{placeholder:"Password",onChange:f,name:"password",type:"password"}),r.a.createElement(_.a.Input,{placeholder:"Re-enter password",onChange:f,name:"password2",type:"password"}),r.a.createElement(T.a,{type:"submit",onClick:function(){var e=a.username,t=a.email,n=a.password,r=JSON.stringify({username:e,email:t,password:n});if(n!==a.password2)return alert("password do not match"),0;E.a.post("/api/auth/register",r,{headers:{"Content-Type":"application/json"}}).then((function(e){p(h({token:e.data.token,username:e.data.user.username})),localStorage.setItem("token",e.data.token),d.push("/")})).catch((function(e){return alert(JSON.stringify(e.response.data))}))}},"Register"),r.a.createElement(T.a,{type:"submit",onClick:function(){m("login"),o({username:"Visitor",password:"asdfgh",email:"",password2:""})}},"Login")))}var M=a(347),R=function(e){return{type:"CREATE_MESSAGE",payload:e}},I=function(e,t){return{type:"GET_ERRORS",payload:{msg:e,status:t}}},D=function(e,t){return{type:"CLEAR_MESSAGE",payload:{msg:e,status:t}}};function A(){var e=Object(g.f)(),t=Object(i.c)((function(e){return e.Message})),a=Object(i.b)(),o=Object(g.g)().slug,c=Object(n.useState)({title:"",_from:"",desc:"",link:""}),u=Object(s.a)(c,2),m=u[0],p=u[1];Object(n.useEffect)((function(){o&&E.a.get("/api/v1/course/".concat(o,"/?format=json")).then((function(e){return p(e.data)}))}),[]),Object(n.useEffect)((function(){400===t.status?alert(JSON.stringify(t.msg)):(t.postcourse||t.updatecourse)&&(p({title:"",_from:"",desc:"",link:""}),e.push("/")),a(D())}),[t]);var d=function(e,t){var a=t.name,n=t.value;p((function(e){return Object(k.a)(Object(k.a)({},e),{},Object(w.a)({},a,n))}))};return r.a.createElement("div",{className:"new-course-form"},r.a.createElement(_.a,null,r.a.createElement(_.a.Group,{widths:"equal"},r.a.createElement(_.a.Field,{id:"form-input-control-first-name",control:l.a,label:"Course name",placeholder:"Course name",name:"title",onChange:d,value:m.title}),r.a.createElement(_.a.Field,{id:"form-input-control-last-name",control:l.a,label:"From",placeholder:"From",name:"_from",onChange:d,value:m._from})),r.a.createElement(_.a.Field,{id:"form-textarea-control-opinion",control:M.a,label:"Description",placeholder:"Description",name:"desc",onChange:d,value:m.desc}),r.a.createElement(_.a.Field,{id:"form-input-control-error-email",control:l.a,label:"Link",placeholder:"https://",name:"link",onChange:d,value:m.link}),r.a.createElement(_.a.Field,{id:"form-button-control-public",control:T.a,content:"Submit",onClick:function(){var e,t=JSON.stringify(m);if(o)a(function(e,t){return function(a,n){E.a.patch("/api/v1/course/".concat(e,"/"),t,O(n)).then((function(e){a(R({updatecourse:"course updated"})),a({type:"DELETE_COURSE",payload:e.data}),a({type:"POST_COURSE",payload:e.data})})).catch((function(e){return a(I(e.response.data,e.response.status))}))}}(o,t));else{var n=a((e=t,function(t,a){E.a.post("/api/v1/course/",e,O(a)).then((function(e){t(R({postcourse:"course posted"})),t({type:"POST_COURSE",payload:e.data})})).catch((function(e){return t(I(e.response.data,e.response.status))}))}));console.log(n)}}})))}var L=a(349),U=a(353);function G(){var e=Object(g.f)(),t=Object(i.c)((function(e){return e.Comment.comments})),a=Object(i.c)((function(e){return e.loginstate.username})),o=Object(i.c)((function(e){return e.Message})),c=Object(i.b)(),u=Object(n.useState)({review:""}),l=Object(s.a)(u,2),m=l[0],p=l[1],d=Object(g.g)().slug,f=Object(n.useState)({}),h=Object(s.a)(f,2),b=h[0],v=h[1];Object(n.useEffect)((function(){E.a.get("/api/v1/course/".concat(d,"/?format=json")).then((function(e){return v(e.data)})),c(function(e){return function(t){E.a.get("/api/v1/comment/?course=".concat(e,"&format=json")).then((function(e){t({type:"GET_COMMENTS",payload:e.data})})).catch((function(e){return t(I(e.response.data,e.response.status))}))}}(d))}),[]),Object(n.useEffect)((function(){400===o.status?alert(JSON.stringify(o.msg)):o.deletecourse?e.push("/"):p({review:""}),c(D())}),[o]);return r.a.createElement("div",{className:"course-page"},r.a.createElement("h2",null,b.title),r.a.createElement("p",{style:{color:"gray"}},"By: ",b._from),r.a.createElement("p",null,b.desc),r.a.createElement(T.a,{onClick:function(){return window.open(b.link,"_blank")},size:"mini"},"Visit"),a===b.username&&r.a.createElement(T.a,{onClick:function(t){return e.push("/edit/".concat(d))},size:"mini"},"Edit"),a===b.username&&r.a.createElement(T.a,{onClick:function(e){return c(function(e){return function(t,a){E.a.delete("/api/v1/course/".concat(e),O(a)).then((function(e){t(R({deletecourse:"course deleted"})),t({type:"DELETE_COURSE",payload:e.data})})).catch((function(e){return t(I(e.response.data,e.response.status))}))}}(d))},size:"mini"},"Delete"),r.a.createElement(L.a.Group,null,r.a.createElement(U.a,{as:"h3"},"Comments"),r.a.createElement(_.a,null,r.a.createElement(_.a.TextArea,{value:m.review,name:"review",onChange:function(e,t){var a=t.name,n=t.value;p((function(e){return Object(k.a)(Object(k.a)({},e),{},Object(w.a)({},a,n))}))}}),r.a.createElement(_.a.Button,{primary:!0,onClick:function(){var e;c((e={comment:m.review,course:b.slug},function(t,a){E.a.post("/api/v1/comment/",e,O(a)).then((function(e){t(R({postcomment:"comment posted"})),t({type:"POST_COMMENT",payload:e.data})})).catch((function(e){return t(I(e.response.data,e.response.status))}))}))}},"Submit")),t.map((function(e){return r.a.createElement(L.a,null,r.a.createElement(L.a.Content,{className:"comment"},r.a.createElement(L.a.Author,{as:"a"},e.username),r.a.createElement(L.a.Metadata,null,r.a.createElement("div",null,new Date(e.datetime).toDateString())),r.a.createElement(L.a.Text,null,e.comment),r.a.createElement(L.a.Actions,null,a===e.username&&r.a.createElement(L.a.Action,{onClick:function(t){var a;c((a=e.id,function(e,t){E.a.delete("/api/v1/comment/".concat(a,"/"),O(t)).then((function(t){e(R({deletecomment:"comment deleted"})),console.log(t.data),e({type:"DELETE_COMMENT",payload:t.data})})).catch((function(t){return e(I(t.response.data,t.response.status))}))}))}},"Delete"))))}))))}var x=function(){var e=Object(i.b)();return Object(n.useEffect)((function(){e((function(e){E.a.get("/api/v1/course/?format=json").then((function(t){e({type:"GET_COURSES",payload:t.data})})).catch((function(t){return e(I(t.response.data,t.response.status))}))}));var t=localStorage.getItem("token"),a={headers:{Authorization:"Token ".concat(t)}};t&&E.a.get("/api/auth/user",a).then((function(a){e(h({token:t,username:a.data.username}))})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(S.a,null,r.a.createElement(b,null),r.a.createElement(n.Fragment,null,r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",component:C}),r.a.createElement(g.a,{exact:!0,path:"/login",component:N}),r.a.createElement(g.a,{exact:!0,path:"/post-course",component:A}),r.a.createElement(g.a,{exact:!0,path:"/edit/:slug",component:A}),r.a.createElement(g.a,{exact:!0,path:"/course/:slug",component:G})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=a(33),F=a(175),P=a(58),z={comments:[]},V={courses:[]},B=Object(J.c)({loginstate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{state:!1,token:"",username:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Setlogintrue":return{state:!0,token:t.payload.token,username:t.payload.username};case"Setloginfalse":return localStorage.removeItem("token"),{state:!1,token:"",username:""};default:return e}},Course:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_COURSES":return Object(k.a)(Object(k.a)({},e),{},{courses:t.payload});case"DELETE_COURSE":return Object(k.a)(Object(k.a)({},e),{},{courses:e.courses.filter((function(e){return e.id!==t.payload.id}))});case"POST_COURSE":case"DELETE_COURSE":return Object(k.a)(Object(k.a)({},e),{},{courses:[].concat(Object(P.a)(e.courses),[t.payload])});default:return e}},Comment:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_COMMENTS":return Object(k.a)(Object(k.a)({},e),{},{comments:t.payload});case"DELETE_COMMENT":return Object(k.a)(Object(k.a)({},e),{},{comments:e.comments.filter((function(e){return e.id!==t.payload.id}))});case"POST_COMMENT":return Object(k.a)(Object(k.a)({},e),{},{comments:[].concat(Object(P.a)(e.comments),[t.payload])});case"DELETE_COMMENT":return Object(k.a)(Object(k.a)({},e),{},{comments:[]});default:return e}},Message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_MESSAGE":case"GET_ERRORS":return t.payload;case"CLEAR_MESSAGE":return"";default:return e}}}),X=[F.a],W=Object(J.e)(B,{},Object(J.d)(J.a.apply(void 0,X),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:W},r.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[188,1,2]]]);
//# sourceMappingURL=main.a9e535a8.chunk.js.map