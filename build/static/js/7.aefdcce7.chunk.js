(this.webpackJsonpcalftime=this.webpackJsonpcalftime||[]).push([[7],{32:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a(0);var n=a(14),r=a(1);function c(e){return e.href?Object(r.jsx)("a",{href:e.href,className:"btn ".concat(e.color&&"btn-".concat(e.color)," ").concat(e.danger&&"btn-danger"," ").concat(e.inverse&&"btn-inverse"," ").concat(e.block&&"btn-block"," ").concat(e.extraClasses),children:e.children}):e.to?Object(r.jsx)(n.b,{to:e.to,exact:e.exact,className:"btn ".concat(e.color&&"btn-".concat(e.color)," ").concat(e.danger&&"btn-danger"," ").concat(e.inverse&&"btn-inverse"," ").concat(e.block&&"btn-block"," ").concat(e.extraClasses),children:e.children}):Object(r.jsx)("button",{type:e.type,onClick:e.onClick,disabled:e.disabled,className:"btn ".concat(e.color&&"btn-".concat(e.color)," ").concat(e.danger&&"btn-danger"," ").concat(e.inverse&&"btn-inverse"," ").concat(e.block&&"btn-block"," ").concat(e.extraClasses," ").concat(e.disabled&&"btn-disabled"),children:e.children})}},35:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n),c=a(14),i=a(32),s=a(15),o=a(1);function l(){var e=Object(n.useContext)(s.a);return Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{className:"nav-links",children:[e.isLoggedIn&&Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.a,{to:"/cows",children:"COWS"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.a,{onClick:e.logout,children:"LOGOUT"})})]}),!e.isLoggedIn&&Object(o.jsx)("li",{children:Object(o.jsx)(i.a,{to:"/login",children:"LOGIN"})}),!e.isLoggedIn&&Object(o.jsx)("li",{children:Object(o.jsx)(i.a,{to:"/signup",children:"SIGN UP"})})]})})}var u=a.p+"static/media/logo.6237e665.png";function d(e){return Object(o.jsx)("nav",{className:"main-navbar py-1 ".concat(e.fixed&&"navbar-fixed"),children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)(c.b,{to:"/",className:"nav-logo",children:[Object(o.jsx)("img",{className:"logo",src:u,alt:"Logo"}),Object(o.jsx)("h1",{className:"M-heading",children:"Calf Time"})]}),Object(o.jsx)(l,{})]})})}},36:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(39);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},37:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(0);var n=a(1);function r(e){return Object(n.jsxs)("div",{className:"alert-container my-1-5 alert-".concat(e.type),children:[Object(n.jsx)("i",{className:"".concat(function(e){switch(e){case"error":return"fas fa-exclamation-circle";case"info":return"fas fa-info-circle";default:return"fas icon"}}(e.type)," mr-1")}),Object(n.jsxs)("p",{children:[e.message,e.code&&": ".concat(e.code)]})]})}},38:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(33),r=a.n(n),c=a(34),i=a(8),s=a(0),o=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],o=Object(s.useState)(),l=Object(i.a)(o,2),u=l[0],d=l[1];return[a,u,Object(s.useCallback)(Object(c.a)(r.a.mark((function e(){var t,a,c,i,s,o,l=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:"",a=l.length>1&&void 0!==l[1]?l[1]:"GET",c=l.length>2&&void 0!==l[2]?l[2]:null,i=l.length>3&&void 0!==l[3]?l[3]:{},n(!0),e.prev=5,e.next=8,fetch(t,{method:a,body:c,headers:i});case 8:return s=e.sent,e.prev=9,e.next=12,s.json();case 12:o=e.sent,e.next=18;break;case 15:throw e.prev=15,e.t0=e.catch(9),new Error("Something went wrong, please try again.");case 18:if(s.ok){e.next=20;break}throw new Error(o.msg);case 20:return n(!1),e.abrupt("return",o);case 24:throw e.prev=24,e.t1=e.catch(5),d(e.t1.message),n(!1),e.t1;case 29:case"end":return e.stop()}}),e,null,[[5,24],[9,15]])}))),[])]}},39:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},40:function(e,t,a){"use strict";a.d(t,"f",(function(){return n})),a.d(t,"e",(function(){return r})),a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return o})),a.d(t,"g",(function(){return u}));var n=function(){return{type:"REQUIRED"}},r=function(e){return{type:"MIN_LENGTH",length:e}},c=function(e){return{type:"MAX_LENGTH",length:e}},i=function(){return{type:"IS_EMAIL"}},s=function(){return{type:"IS_DATE"}},o=function(e){return{type:"IS_OVER",num:e}},l=/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,u=function(e,t){var a=!0;return t.forEach((function(t){switch(t.type){case"REQUIRED":a=a&&e.trim().length>0;break;case"MIN_LENGTH":a=a&&e.trim().length>=t.length;break;case"MAX_LENGTH":a=a&&e.trim().length<=t.length;break;case"IS_EMAIL":a=a&&/^\S+@\S+\.\S+$/.test(e);break;case"IS_DATE":a=a&&l.test(e);break;case"IS_OVER":a=a&&Number(e)>t.num}})),a}},41:function(e,t,a){"use strict";t.a=a.p+"static/media/cowGrass.2d09bc11.png"},42:function(e,t,a){"use strict";a.d(t,"e",(function(){return s})),a.d(t,"f",(function(){return o})),a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var n=a(47),r=a.n(n),c=/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,i="DD.MM.YYYY",s=function(){return r()().format(i)},o=function(e){if(e&&c.test(e))return r()(e,i).format(i)},l=function(e){if(e&&c.test(e)){var t=r()(e,i);return t.add(283,"days"),t.format(i)}},u=function(e){return e&&c.test(e)?{startDate:r()(e,i).add(18,"days").format(i),endDate:r()(e,i).add(26,"days").format(i)}:{startDate:"",endDate:""}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s();if(e&&c.test(e)){t=r()(o(t),i);var a=r()(o(e),i).subtract(10,"days"),n=r()(o(e),i).add(10,"days");return t.isAfter(a)&&t.isBefore(n)||t.isSame(a)||t.isSame(n)}},b=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s();return e=r()(e,i),t=r()(t,i),(a=r()(a,i)).isAfter(e)&&a.isBefore(t)||a.isSame(e)||a.isSame(t)}},43:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(8),r=a(36),c=a(0),i=a(40),s=a(1),o=function(e,t){switch(t.type){case"CHANGE":return Object(r.a)(Object(r.a)({},e),{},{value:t.value,isValid:t.isValid});case"TOUCH":return Object(r.a)(Object(r.a)({},e),{},{isTouched:!0});default:return e}};function l(e){var t=Object(c.useReducer)(o,{value:e.initialValue||"",isValid:e.initialValid||!1,isTouched:!1}),a=Object(n.a)(t,2),r=a[0],l=a[1],u=e.id,d=e.onInput,b=r.value,j=r.isValid;return Object(c.useEffect)((function(){d(u,b,j)}),[b,j,u,d]),Object(s.jsxs)("div",{className:"form-group my-1-5 center ".concat(!r.isValid&&r.isTouched&&"form-group-invalid"),children:[Object(s.jsx)("label",{htmlFor:e.name,className:"form-label lead",children:e.label}),Object(s.jsx)("input",{type:e.type,value:r.value,name:e.name,id:e.id,onChange:function(t){var a=t.target.value,n=!0;(null===e||void 0===e?void 0:e.validators)&&(n=Object(i.g)(a,e.validators)),e.notRequired&&!a&&(n=!0),l({type:"CHANGE",value:a,isValid:n})},className:"input ".concat(!r.isValid&&r.isTouched&&"input-invalid"),onBlur:function(){return l({type:"TOUCH"})},placeholder:e.placeholder,autoComplete:"off",min:e.min}),!r.isValid&&r.isTouched&&Object(s.jsx)("small",{className:"erorr-text",children:e.errorText})]})}},44:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(8),r=a(39),c=a(36),i=a(0),s=function(e,t){switch(t.type){case"CHANGE":var a=!0;for(var n in e.inputs)a=n!==t.id?a&&e.inputs[n].isValid:a&&t.isValid;return Object(c.a)(Object(c.a)({},e),{},{inputs:Object(c.a)(Object(c.a)({},e.inputs),{},Object(r.a)({},t.id,{value:t.value,isValid:t.isValid})),isFormValid:a});case"SET_DATA":return Object(c.a)(Object(c.a)({},e),{},{inputs:t.newInputs,isFormValid:t.newFormValidity});default:return e}},o=function(e,t){var a=Object(i.useReducer)(s,{inputs:e,isFormValid:t}),r=Object(n.a)(a,2),c=r[0],o=r[1];return[c,Object(i.useCallback)((function(e,t,a){return o({type:"CHANGE",id:e,value:t,isValid:a})}),[]),Object(i.useCallback)((function(e,t){return o({type:"SET_DATA",newInputs:e,newFormValidity:t})}),[])]}},49:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(8),r=a(0),c=a(32),i=a(1);function s(e){var t=Object(r.useState)(),a=Object(n.a)(t,2),s=a[0],o=a[1],l=Object(r.useState)(),u=Object(n.a)(l,2),d=u[0],b=u[1],j=Object(r.useState)(),f=Object(n.a)(j,2),p=f[0],O=f[1],m=Object(r.useState)(),h=Object(n.a)(m,2),v=h[0],g=h[1],x=Object(r.useRef)();Object(r.useEffect)((function(){if(s){var e=new FileReader;e.onload=function(){b(e.result)},e.readAsDataURL(s)}}),[s]);return Object(i.jsxs)("div",{className:"form-group center mb-1",children:[Object(i.jsx)("input",{type:"file",id:e.id,style:{display:"none"},accept:".jpg,.png,.jpeg",ref:x,onChange:function(t){var a,n=p;t.target.files&&1===t.target.files.length?(a=t.target.files[0]).size>5e5?(o(a),g(!0),O(!1),n=!1):(o(a),g(!1),O(!0),n=!0):(O(!1),n=!1),e.onInput(e.id,a,n)}}),Object(i.jsxs)("div",{className:"image-upload center",children:[(d||e.initialUrl)&&Object(i.jsx)("div",{className:"image-upload-preview",children:Object(i.jsx)("img",{src:d||e.initialUrl,alt:"Preview"})}),Object(i.jsx)(c.a,{type:"button",onClick:function(){return x.current.click()},children:"Upload Cow Image"})]}),v&&s&&Object(i.jsx)("p",{className:"error",children:"Image too big."})]})}},51:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a(33),r=a.n(n),c=a(34),i=a(8),s=a(0),o=a(2),l=a(15),u=a(35),d=a(43),b=a(32),j=a(16),f=a(49),p=a(41),O=a(44),m=a(38),h=a(40),v=a(42),g=a(37),x=a(1);function y(){var e=Object(m.a)(),t=Object(i.a)(e,3),a=t[0],n=t[1],y=t[2],D=Object(O.a)({tag:{value:"",isValid:!1},name:{value:"",isValid:!1},birthDate:{value:"",isValid:!0},motherTag:{value:"",isValid:!1},fertDate:{value:"",isValid:!0},antibioticDate:{value:"",isValid:!0},milk:{value:0,isValid:!0},image:{value:null,isValid:!0}},!1),N=Object(i.a)(D,2),w=N[0],V=N[1],T=Object(s.useContext)(l.a),k=Object(o.g)(),E=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={tag:w.inputs.tag.value,name:w.inputs.name.value,bornOn:Object(v.f)(w.inputs.birthDate.value)||Object(v.e)(),mother:w.inputs.motherTag.value,fertDate:Object(v.f)(w.inputs.fertDate.value)||"",dueOn:Object(v.d)(w.inputs.fertDate.value)||"",children:[],checkingDates:Object(v.c)(w.inputs.fertDate.value),milk:w.inputs.milk.value||0,antibioticDate:w.inputs.antibioticDate.value||""},e.prev=2,(n=new FormData).append("cow",JSON.stringify(a)),n.append("image",w.inputs.image.value),e.next=8,y("".concat("https://calf-time.herokuapp.com/api","/cows"),"POST",n,{Authorization:"Bearer ".concat(T.token)});case 8:k.push("/cows"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)(u.a,{}),a&&Object(x.jsx)(j.a,{}),!a&&Object(x.jsx)("div",{className:"container p-1",children:Object(x.jsxs)("form",{className:"form my-4 p-2",onSubmit:E,children:[Object(x.jsxs)("h1",{className:"center L-heading mb-1",children:["Add ",Object(x.jsx)("span",{className:"text-primary",children:"Cow"})]}),n&&Object(x.jsx)(g.a,{message:n,type:"error"}),Object(x.jsx)(d.a,{type:"text",label:"Tag",placeholder:"Enter Tag...",name:"tag",id:"tag",validators:[Object(h.e)(4),Object(h.d)(20)],errorText:"Please Input A Valid Tag",onInput:V}),Object(x.jsx)(d.a,{type:"text",label:"Name",placeholder:"Enter Name...",name:"name",id:"name",validators:[Object(h.f)(),Object(h.d)(20)],errorText:"Please Input A Valid Name",onInput:V}),Object(x.jsx)(d.a,{type:"text",label:"Mother Tag",placeholder:"Enter Tag of Mother...",name:"motherTag",id:"motherTag",validators:[Object(h.e)(4),Object(h.d)(20)],errorText:"Please Input A Valid Tag",onInput:V}),Object(x.jsx)("p",{className:"center my-1",children:"The next fields can be left empty for automatic data."}),Object(x.jsx)(d.a,{type:"text",label:"Birth Date",placeholder:"Enter Date (".concat(Object(v.e)(),")"),name:"birthDate",id:"birthDate",errorText:"Please Input A Valid Birth Date",validators:[Object(h.a)()],notRequired:!0,onInput:V,initialValid:!0}),Object(x.jsx)(d.a,{type:"text",label:"Fertilization Date",placeholder:"Enter Date...",name:"fertDate",id:"fertDate",validators:[Object(h.a)()],notRequired:!0,errorText:"Please Input A Valid Fertilization Date (Leave Empty For None)",onInput:V,initialValid:!0}),Object(x.jsx)(d.a,{type:"text",label:"Antibiotic Date",placeholder:"Enter Date ...",name:"antibioticDate",id:"antibioticDate",validators:[Object(h.a)()],notRequired:!0,errorText:"Please Input A Valid Date (Leave Empty For None)",onInput:V,initialValid:!0}),Object(x.jsx)(d.a,{type:"number",label:"Liters Of Milk",placeholder:"Enter Liters (0)",name:"milk",id:"milk",notRequired:!0,validators:[Object(h.c)(-1)],errorText:"Please Input A Valid Number",onInput:V,min:"0",initialValid:!0}),Object(x.jsx)(f.a,{id:"image",onInput:V}),Object(x.jsx)(b.a,{type:"submit",block:!0,disabled:!w.isFormValid,color:"primary",extraClasses:"my-1",children:"Add Cow"}),Object(x.jsx)("img",{src:p.a,className:"cow-img",alt:"Cow Eating Grass"})]})})]})}}}]);
//# sourceMappingURL=7.aefdcce7.chunk.js.map