(this["webpackJsonplist_-character"]=this["webpackJsonplist_-character"]||[]).push([[0],{24:function(e,t,a){e.exports={container:"Container_container__3Nc9x"}},3:function(e,t,a){e.exports={containerVisibleComments:"Coments_containerVisibleComments__gpvMr",headerComents:"Coments_headerComents__3TLcp",headerName:"Coments_headerName__q0qyV",name:"Coments_name__3g7ug",headerText:"Coments_headerText__2a1Lw",text:"Coments_text__1uc4U"}},30:function(e,t,a){},5:function(e,t,a){e.exports={form:"CommentForm_form__1H_nA",leableName:"CommentForm_leableName__3FetB",input:"CommentForm_input__38vVK",btn:"CommentForm_btn__2Mmfn"}},59:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(22),c=a.n(s),i=(a(30),a(4)),m=a(12),o=a.n(m),u=a(23),l=a(13),b=a.n(l);function j(){return(j=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/");case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}b.a.defaults.baseURL="https://swapi.dev/api/people/";var h={fetchCharacter:function(){return j.apply(this,arguments)}},_=a(8),d=a.n(_),p=a(24),f=a.n(p),x=a(0);function O(e){var t=e.children;return Object(x.jsx)("div",{className:f.a.container,children:t})}var v=a(25),N=a(5),C=a.n(N);function L(e){var t=e.id,a=e.onSubmit,r=Object(n.useState)(""),s=Object(i.a)(r,2),c=s[0],m=s[1],o=Object(n.useState)(""),u=Object(i.a)(o,2),l=u[0],b=u[1],j=function(e){var t=e.currentTarget,a=t.name,n=t.value;switch(a){case"name":b(n);break;case"comment":m(n)}};var h=d.a.generate(),_=d.a.generate();return Object(x.jsxs)("form",{className:C.a.form,onSubmit:function(e){e.preventDefault(),a({id:t,nameValue:l,commentValue:c}),m(""),b("")},children:[Object(x.jsx)("label",{htmlFor:_,className:C.a.leableName,children:"You name"}),Object(x.jsx)("input",{type:"text",name:"name",id:_,onChange:j,value:l}),Object(x.jsx)("label",{htmlFor:h,className:C.a.leableName,children:"Write a comment"}),Object(x.jsx)("textarea",{name:"comment",id:h,cols:"30",rows:"10",value:c,className:C.a.input,onChange:j}),Object(x.jsx)("button",{type:"submit",className:C.a.btn,children:"Comment"})]})}var g=a(3),y=a.n(g);function U(e){var t=e.userId,a=e.visibleComments;return Object(x.jsxs)("div",{className:y.a.containerVisibleComments,children:[Object(x.jsx)("h2",{className:y.a.headerComents,children:"Comments"}),a(t).map((function(e,t){var a=e.nameValue,n=e.commentValue;return Object(x.jsxs)("div",{className:y.a.containerInfo,children:[Object(x.jsxs)("h3",{className:y.a.name,children:[Object(x.jsx)("span",{className:y.a.headerName,children:"Name:"})," ",a]}),Object(x.jsxs)("p",{className:y.a.text,children:[Object(x.jsx)("span",{className:y.a.headerText,children:"Comment: "}),n]})]},t)}))]})}var V=a(6),w=a.n(V);function F(e){var t=e.charactersList,a=Object(n.useState)([]),r=Object(i.a)(a,2),s=r[0],c=r[1],m=function(e){c([e].concat(Object(v.a)(s)))},o=function(e){return s.filter((function(t){return t.id===e}))};return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("ul",{className:w.a.userContainerList,children:t&&t.map((function(e){var t=e.id,a=e.name,n=e.birth_year;return Object(x.jsxs)("li",{className:w.a.userList,children:[Object(x.jsxs)("div",{className:w.a.containerUserInfo,children:[Object(x.jsxs)("h1",{className:w.a.userName,children:["Name: ",a]}),Object(x.jsxs)("p",{className:w.a.userBirth_year,children:["Birth year: ",n]})]}),s&&Object(x.jsx)(U,{userId:t,visibleComments:o}),Object(x.jsx)(L,{id:t,onSubmit:m})]},t)}))})})}function I(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){h.fetchCharacter().then((function(e){var t=e.results;t.map((function(e){return e.id=d.a.generate()})),r(t)}))}),[]),Object(x.jsx)(O,{children:Object(x.jsx)(F,{charactersList:a})})}c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={userContainerList:"UserList_userContainerList__36Dc1",userList:"UserList_userList__1pUsp",containerUserInfo:"UserList_containerUserInfo__1bE0p",userName:"UserList_userName__2YQbI",userBirth_year:"UserList_userBirth_year__2Va9_"}}},[[59,1,2]]]);
//# sourceMappingURL=main.9f5783d6.chunk.js.map