(this.webpackJsonpcalftime=this.webpackJsonpcalftime||[]).push([[4],{32:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(0);var n=a(14),i=a(1);function r(e){return e.href?Object(i.jsx)("a",{href:e.href,className:"btn ".concat(e.color&&"btn-".concat(e.color)," ").concat(e.danger&&"btn-danger"," ").concat(e.inverse&&"btn-inverse"," ").concat(e.block&&"btn-block"," ").concat(e.extraClasses),children:e.children}):e.to?Object(i.jsx)(n.b,{to:e.to,exact:e.exact,className:"btn ".concat(e.color&&"btn-".concat(e.color)," ").concat(e.danger&&"btn-danger"," ").concat(e.inverse&&"btn-inverse"," ").concat(e.block&&"btn-block"," ").concat(e.extraClasses),children:e.children}):Object(i.jsx)("button",{type:e.type,onClick:e.onClick,disabled:e.disabled,className:"btn ".concat(e.color&&"btn-".concat(e.color)," ").concat(e.danger&&"btn-danger"," ").concat(e.inverse&&"btn-inverse"," ").concat(e.block&&"btn-block"," ").concat(e.extraClasses," ").concat(e.disabled&&"btn-disabled"),children:e.children})}},35:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),i=a.n(n),r=a(14),c=a(32),s=a(15),l=a(1);function o(){var e=Object(n.useContext)(s.a);return Object(l.jsx)("div",{children:Object(l.jsxs)("ul",{className:"nav-links",children:[e.isLoggedIn&&Object(l.jsxs)(i.a.Fragment,{children:[Object(l.jsx)("li",{children:Object(l.jsx)(c.a,{to:"/cows",children:"COWS"})}),Object(l.jsx)("li",{children:Object(l.jsx)(c.a,{onClick:e.logout,children:"LOGOUT"})})]}),!e.isLoggedIn&&Object(l.jsx)("li",{children:Object(l.jsx)(c.a,{to:"/login",children:"LOGIN"})}),!e.isLoggedIn&&Object(l.jsx)("li",{children:Object(l.jsx)(c.a,{to:"/signup",children:"SIGN UP"})})]})})}var u=a.p+"static/media/logo.6237e665.png";function d(e){return Object(l.jsx)("nav",{className:"main-navbar py-1 ".concat(e.fixed&&"navbar-fixed"),children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)(r.b,{to:"/",className:"nav-logo",children:[Object(l.jsx)("img",{className:"logo",src:u,alt:"Logo"}),Object(l.jsx)("h1",{className:"M-heading",children:"Calf Time"})]}),Object(l.jsx)(o,{})]})})}},36:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(39);function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},37:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a(0);var n=a(1);function i(e){return Object(n.jsxs)("div",{className:"alert-container my-1-5 alert-".concat(e.type),children:[Object(n.jsx)("i",{className:"".concat(function(e){switch(e){case"error":return"fas fa-exclamation-circle";case"info":return"fas fa-info-circle";default:return"fas icon"}}(e.type)," mr-1")}),Object(n.jsxs)("p",{children:[e.message,e.code&&": ".concat(e.code)]})]})}},38:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(33),i=a.n(n),r=a(34),c=a(8),s=a(0),l=function(){var e=Object(s.useState)(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],l=Object(s.useState)(),o=Object(c.a)(l,2),u=o[0],d=o[1];return[a,u,Object(s.useCallback)(Object(r.a)(i.a.mark((function e(){var t,a,r,c,s,l,o=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",a=o.length>1&&void 0!==o[1]?o[1]:"GET",r=o.length>2&&void 0!==o[2]?o[2]:null,c=o.length>3&&void 0!==o[3]?o[3]:{},n(!0),e.prev=5,e.next=8,fetch(t,{method:a,body:r,headers:c});case 8:return s=e.sent,e.prev=9,e.next=12,s.json();case 12:l=e.sent,e.next=18;break;case 15:throw e.prev=15,e.t0=e.catch(9),new Error("Something went wrong, please try again.");case 18:if(s.ok){e.next=20;break}throw new Error(l.msg);case 20:return n(!1),e.abrupt("return",l);case 24:throw e.prev=24,e.t1=e.catch(5),d(e.t1.message),n(!1),e.t1;case 29:case"end":return e.stop()}}),e,null,[[5,24],[9,15]])}))),[])]}},39:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},40:function(e,t,a){"use strict";a.d(t,"f",(function(){return n})),a.d(t,"e",(function(){return i})),a.d(t,"d",(function(){return r})),a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return l})),a.d(t,"g",(function(){return u}));var n=function(){return{type:"REQUIRED"}},i=function(e){return{type:"MIN_LENGTH",length:e}},r=function(e){return{type:"MAX_LENGTH",length:e}},c=function(){return{type:"IS_EMAIL"}},s=function(){return{type:"IS_DATE"}},l=function(e){return{type:"IS_OVER",num:e}},o=/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,u=function(e,t){var a=!0;return t.forEach((function(t){switch(t.type){case"REQUIRED":a=a&&e.trim().length>0;break;case"MIN_LENGTH":a=a&&e.trim().length>=t.length;break;case"MAX_LENGTH":a=a&&e.trim().length<=t.length;break;case"IS_EMAIL":a=a&&/^\S+@\S+\.\S+$/.test(e);break;case"IS_DATE":a=a&&o.test(e);break;case"IS_OVER":a=a&&Number(e)>t.num}})),a}},41:function(e,t,a){"use strict";t.a=a.p+"static/media/cowGrass.2d09bc11.png"},42:function(e,t,a){"use strict";a.d(t,"e",(function(){return s})),a.d(t,"f",(function(){return l})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var n=a(47),i=a.n(n),r=/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,c="DD.MM.YYYY",s=function(){return i()().format(c)},l=function(e){if(e&&r.test(e))return i()(e,c).format(c)},o=function(e){if(e&&r.test(e)){var t=i()(e,c);return t.add(283,"days"),t.format(c)}},u=function(e){return e&&r.test(e)?{startDate:i()(e,c).add(18,"days").format(c),endDate:i()(e,c).add(26,"days").format(c)}:{startDate:"",endDate:""}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s();if(e&&r.test(e)){t=i()(l(t),c);var a=i()(l(e),c).subtract(10,"days"),n=i()(l(e),c).add(10,"days");return t.isAfter(a)&&t.isBefore(n)||t.isSame(a)||t.isSame(n)}},b=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s();return e=i()(e,c),t=i()(t,c),(a=i()(a,c)).isAfter(e)&&a.isBefore(t)||a.isSame(e)||a.isSame(t)}},43:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(8),i=a(36),r=a(0),c=a(40),s=a(1),l=function(e,t){switch(t.type){case"CHANGE":return Object(i.a)(Object(i.a)({},e),{},{value:t.value,isValid:t.isValid});case"TOUCH":return Object(i.a)(Object(i.a)({},e),{},{isTouched:!0});default:return e}};function o(e){var t=Object(r.useReducer)(l,{value:e.initialValue||"",isValid:e.initialValid||!1,isTouched:!1}),a=Object(n.a)(t,2),i=a[0],o=a[1],u=e.id,d=e.onInput,b=i.value,j=i.isValid;return Object(r.useEffect)((function(){d(u,b,j)}),[b,j,u,d]),Object(s.jsxs)("div",{className:"form-group my-1-5 center ".concat(!i.isValid&&i.isTouched&&"form-group-invalid"),children:[Object(s.jsx)("label",{htmlFor:e.name,className:"form-label lead",children:e.label}),Object(s.jsx)("input",{type:e.type,value:i.value,name:e.name,id:e.id,onChange:function(t){var a=t.target.value,n=!0;(null===e||void 0===e?void 0:e.validators)&&(n=Object(c.g)(a,e.validators)),e.notRequired&&!a&&(n=!0),o({type:"CHANGE",value:a,isValid:n})},className:"input ".concat(!i.isValid&&i.isTouched&&"input-invalid"),onBlur:function(){return o({type:"TOUCH"})},placeholder:e.placeholder,autoComplete:"off",min:e.min}),!i.isValid&&i.isTouched&&Object(s.jsx)("small",{className:"erorr-text",children:e.errorText})]})}},44:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(8),i=a(39),r=a(36),c=a(0),s=function(e,t){switch(t.type){case"CHANGE":var a=!0;for(var n in e.inputs)a=n!==t.id?a&&e.inputs[n].isValid:a&&t.isValid;return Object(r.a)(Object(r.a)({},e),{},{inputs:Object(r.a)(Object(r.a)({},e.inputs),{},Object(i.a)({},t.id,{value:t.value,isValid:t.isValid})),isFormValid:a});case"SET_DATA":return Object(r.a)(Object(r.a)({},e),{},{inputs:t.newInputs,isFormValid:t.newFormValidity});default:return e}},l=function(e,t){var a=Object(c.useReducer)(s,{inputs:e,isFormValid:t}),i=Object(n.a)(a,2),r=i[0],l=i[1];return[r,Object(c.useCallback)((function(e,t,a){return l({type:"CHANGE",id:e,value:t,isValid:a})}),[]),Object(c.useCallback)((function(e,t){return l({type:"SET_DATA",newInputs:e,newFormValidity:t})}),[])]}},46:function(e,t,a){"use strict";t.a=a.p+"static/media/placeholderCow.dc244408.png"},49:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(8),i=a(0),r=a(32),c=a(1);function s(e){var t=Object(i.useState)(),a=Object(n.a)(t,2),s=a[0],l=a[1],o=Object(i.useState)(),u=Object(n.a)(o,2),d=u[0],b=u[1],j=Object(i.useState)(),p=Object(n.a)(j,2),f=p[0],m=p[1],O=Object(i.useState)(),h=Object(n.a)(O,2),v=h[0],g=h[1],x=Object(i.useRef)();Object(i.useEffect)((function(){if(s){var e=new FileReader;e.onload=function(){b(e.result)},e.readAsDataURL(s)}}),[s]);return Object(c.jsxs)("div",{className:"form-group center mb-1",children:[Object(c.jsx)("input",{type:"file",id:e.id,style:{display:"none"},accept:".jpg,.png,.jpeg",ref:x,onChange:function(t){var a,n=f;t.target.files&&1===t.target.files.length?(a=t.target.files[0]).size>5e5?(l(a),g(!0),m(!1),n=!1):(l(a),g(!1),m(!0),n=!0):(m(!1),n=!1),e.onInput(e.id,a,n)}}),Object(c.jsxs)("div",{className:"image-upload center",children:[(d||e.initialUrl)&&Object(c.jsx)("div",{className:"image-upload-preview",children:Object(c.jsx)("img",{src:d||e.initialUrl,alt:"Preview"})}),Object(c.jsx)(r.a,{type:"button",onClick:function(){return x.current.click()},children:"Upload Cow Image"})]}),v&&s&&Object(c.jsx)("p",{className:"error",children:"Image too big."})]})}},53:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var n=a(36),i=a(33),r=a.n(i),c=a(34),s=a(8),l=a(0),o=a(2),u=a(35),d=a(43),b=a(32),j=a(16),p=a(41),f=a(44),m=a(38),O=a(40),h=a(42),v=a(37),g=a(15),x=a(49),y=a(46),V=a(1);function w(){var e=Object(l.useState)(),t=Object(s.a)(e,2),a=t[0],i=t[1],w=Object(m.a)(),D=Object(s.a)(w,3),k=D[0],N=D[1],T=D[2],E=Object(f.a)({tag:{value:"",isValid:!1},name:{value:"",isValid:!1},birthDate:{value:"",isValid:!0},motherTag:{value:"",isValid:!1},fertDate:{value:"",isValid:!0},antibioticDate:{value:"",isValid:!0},milk:{value:0,isValid:!0},image:{value:null,isValid:!0}},!1),I=Object(s.a)(E,3),C=I[0],S=I[1],A=I[2],P=Object(l.useContext)(g.a),L=Object(o.g)(),R=Object(o.h)().cowId;Object(l.useEffect)((function(){(function(){var e=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T("".concat("https://calf-time.herokuapp.com/api","/cows/").concat(R),"GET",null,{Authorization:"Bearer ".concat(P.token)});case 3:t=e.sent,a=t.cow,A({tag:{value:a.tag,isValid:!0},name:{value:a.name,isValid:!0},birthDate:{value:a.bornOn,isValid:!0},motherTag:{value:a.mother,isValid:!0},fertDate:{value:a.fertDate,isValid:!0},antibioticDate:{value:a.antibioticDate,isValid:!0},milk:{value:a.milk,isValid:!0},image:{value:null,isValid:!0}},!0),i(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[P.token,R,T,A]);var G=function(){var e=Object(c.a)(r.a.mark((function e(t){var i,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),i=Object(n.a)(Object(n.a)({},a),{},{tag:C.inputs.tag.value,name:C.inputs.name.value,bornOn:Object(h.f)(C.inputs.birthDate.value)||Object(h.e)(),mother:C.inputs.motherTag.value,fertDate:Object(h.f)(C.inputs.fertDate.value),antibioticDate:Object(h.f)(C.inputs.antibioticDate.value),milk:C.inputs.milk.value||0}),e.prev=2,(c=new FormData).append("cow",JSON.stringify(i)),c.append("image",C.inputs.image.value),e.next=8,T("".concat("https://calf-time.herokuapp.com/api","/cows/").concat(R),"PATCH",c,{Authorization:"Bearer ".concat(P.token)});case 8:L.push("/cows"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(V.jsxs)("div",{children:[Object(V.jsx)(u.a,{}),k&&Object(V.jsx)(j.a,{}),!a&&!k&&Object(V.jsx)("h1",{className:"center my-2",children:"No Cow Found."}),a&&!k&&Object(V.jsx)("div",{className:"container p-1",children:Object(V.jsxs)("form",{className:"form my-4 p-2",onSubmit:G,children:[Object(V.jsxs)("h1",{className:"center L-heading mb-1",children:["Edit ",Object(V.jsx)("span",{className:"text-primary",children:"Cow"})]}),N&&Object(V.jsx)(v.a,{message:N,type:"error"}),Object(V.jsx)(d.a,{type:"text",label:"Tag",placeholder:"Enter Tag...",name:"tag",id:"tag",validators:[Object(O.e)(4),Object(O.d)(20)],errorText:"Please Input A Valid Tag",onInput:S,initialValue:C.inputs.tag.value,initialValid:C.inputs.tag.isValid}),Object(V.jsx)(d.a,{type:"text",label:"Name",placeholder:"Enter Name...",name:"name",id:"name",validators:[Object(O.f)(),Object(O.d)(20)],errorText:"Please Input A Valid Name",onInput:S,initialValue:C.inputs.name.value,initialValid:C.inputs.name.isValid}),Object(V.jsx)(d.a,{type:"text",label:"Mother Tag",placeholder:"Enter Tag of Mother...",name:"motherTag",id:"motherTag",validators:[Object(O.e)(4),Object(O.d)(20)],errorText:"Please Input A Valid Tag",onInput:S,initialValue:C.inputs.motherTag.value,initialValid:C.inputs.motherTag.isValid}),Object(V.jsx)("p",{className:"center my-1",children:"The next fields can be left empty for automatic data."}),Object(V.jsx)(d.a,{type:"text",label:"Birth Date",placeholder:"Enter Date (".concat(Object(h.e)(),")"),name:"birthDate",id:"birthDate",errorText:"Please Input A Valid Birth Date",validators:[Object(O.a)()],notRequired:!0,onInput:S,initialValid:!0,initialValue:C.inputs.birthDate.value}),Object(V.jsx)(d.a,{type:"text",label:"Fertilization Date",placeholder:"Ente Date...",name:"fertDate",id:"fertDate",validators:[Object(O.a)()],notRequired:!0,errorText:"Please Input A Valid Date (Leave Empty For None)",onInput:S,initialValid:!0,initialValue:C.inputs.fertDate.value}),Object(V.jsx)(d.a,{type:"text",label:"Antibiotic Date",placeholder:"Enter Date...",name:"antibioticDate",id:"antibioticDate",validators:[Object(O.a)()],notRequired:!0,errorText:"Please Input A Valid Date (Leave Empty For None)",onInput:S,initialValid:!0,initialValue:C.inputs.antibioticDate.value}),Object(V.jsx)(d.a,{type:"number",label:"Liters Of Milk",placeholder:"Enter Liters (0)",name:"milk",id:"milk",notRequired:!0,validators:[Object(O.c)(-1)],errorText:"Please Input A Valid Number",onInput:S,min:"0",initialValid:C.inputs.milk.isValid,initialValue:C.inputs.milk.value}),Object(V.jsx)(x.a,{id:"image",onInput:S,initialUrl:a.image?"".concat("https://calf-time.herokuapp.com/api","/cows/image/").concat(a.image):y.a}),Object(V.jsx)(b.a,{type:"submit",block:!0,disabled:!C.isFormValid,color:"primary",extraClasses:"my-1",children:"Edit Cow"}),Object(V.jsx)("img",{src:p.a,className:"cow-img",alt:"Cow Eating Grass"})]})})]})}}}]);
//# sourceMappingURL=4.62f5f3e0.chunk.js.map