(this["webpackJsonpread-thon"]=this["webpackJsonpread-thon"]||[]).push([[13],{271:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n,i=a(13),r=a(14).a.div(n||(n=Object(i.a)(["\nfont-family: SourceSansPro;\n\nfont-size: 40px;\n\nfont-weight: bold;\n\nfont-stretch: normal;\n\nfont-style: normal;\n\nline-height: 0.75;\n\nletter-spacing: normal;\n\ncolor: #000000;\nmargin-bottom: 17px;\n}\n"])))},272:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n,i=a(13),r=a(14).a.div(n||(n=Object(i.a)(["\nfont-family: SourceSansPro;\n\nfont-size: 16px;\n\nfont-weight: normal;\n\nfont-stretch: normal;\n\nfont-style: normal;\n\nline-height: 0.94;\n\nletter-spacing: normal;\n\ncolor: #666666;\n"])))},274:function(e,t,a){"use strict";var n,i=a(19),r=a(0),c=a(13),o=a(14).a.div(n||(n=Object(c.a)(["\n.select-form{\n    margin: 10px 0 0;\n    padding: 20px;\n    border-radius: 7px;\n    border: solid 1px #e5e3e9;\n    background-color: #ffffff;\n    width: 100%;\n    font-family: SourceSansPro;\n    font-size: 17px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 0.88;\n    letter-spacing: normal;\n    color: #bac2cb;\n    &:focus{\n        outline: none\n    }\n}\n\n"]))),u=a(18),l=a(8),d=a(1);t.a=function(e){var t,a=Object(r.useRef)(null),n=Object(r.useState)(e.value||""),c=Object(i.a)(n,2),s=c[0],m=c[1];return Object(r.useEffect)((function(){var t,a,n=null===(t=e.options)||void 0===t?void 0:t.findIndex((function(t){return t[(null===e||void 0===e?void 0:e.label)||""]==s}));m(null===(a=e.options[n])||void 0===a?void 0:a[(null===e||void 0===e?void 0:e.label)||""])}),[e.value]),Object(d.jsxs)("div",{children:[Object(d.jsxs)(u.a,{style:{color:(null===e||void 0===e?void 0:e.required)&&(null===e||void 0===e?void 0:e.error)?"".concat(l.a.colorError):""},children:[e.placeholder," ",(null===e||void 0===e?void 0:e.required)&&"*"]}),Object(d.jsx)(o,{children:Object(d.jsxs)("select",{ref:a,value:s,onBlur:function(t){return(null===e||void 0===e?void 0:e.onBlur)&&e.onBlur(t.target.value)},onChange:function(t){m(t.target.value),e.onChange(t.target.value)},style:{border:(null===e||void 0===e?void 0:e.required)&&(null===e||void 0===e?void 0:e.error)?"1px solid ".concat(l.a.colorError):""},name:"select",id:"select",className:"select-form",children:[Object(d.jsx)("option",{value:"",children:e.placeholder}),null===(t=e.options)||void 0===t?void 0:t.map((function(t){return Object(d.jsx)("option",{value:t[(null===e||void 0===e?void 0:e.label)||""],children:t[e.dispalyName||""]})}))]})}),Object(d.jsx)(u.c,{children:e.error})]})}},278:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return r})),a.d(t,"k",(function(){return c})),a.d(t,"e",(function(){return o})),a.d(t,"h",(function(){return u})),a.d(t,"j",(function(){return l})),a.d(t,"f",(function(){return d})),a.d(t,"i",(function(){return s})),a.d(t,"b",(function(){return m})),a.d(t,"c",(function(){return h})),a.d(t,"g",(function(){return f}));var n=a(66),i=function(e){return n.a.post("/api/add/campaign",e)},r=function(e,t){return"teacherContent."==e?n.a.get("/api/teacher/get/allMyCampaigns"):"studentContent."==e?n.a.get("/api/student/get/campaign/".concat(t)):n.a.get("/api/get/all/campaigns")},c=function(e){return n.a.put("/api/update/campaign/".concat(e.Id),e)},o=function(e){return n.a.delete("/api/delete/campaign/".concat(e))},u=function(e,t){return"teacherContent."==t?n.a.get("/api/teacher/myCampaign/".concat(e)):n.a.get("/api/get/campaign/students/".concat(e))},l=function(e,t){return n.a.post("/api/teacher/sendmail/campaignStudents/".concat(e),t)},d=function(e,t){return n.a.put("/api/delete/campaign/students/".concat(e),t)},s=function(e,t,a){return"teacherContent."==a?n.a.get("/api/teacher/get/studentAchievement/".concat(e,"/").concat(t)):"studentContent."==a?n.a.get("/api/student/get/studentAchievement/".concat(t,"/").concat(e)):n.a.get("/api/organization/get/studentAchievement/".concat(e,"/").concat(t))},m=function(e,t,a,i){return n.a.post("/api/teacher/addAchievement/".concat(e,"/").concat(t),a)},h=function(e,t,a,i){return n.a.post("/api/student/addAchievement/".concat(t,"/").concat(e),a)},f=function(e,t){return n.a.delete("/api/teacher/delete/studentFromCam/".concat(e,"/").concat(t))}},282:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return c}));var n=a(67),i=a.n(n),r=function(e){return e.map((function(e){return{Id:e.Id,organization_id:e.organization_id,question:e.question,campaignTitle:e.title,startDate:i()(e.startDate).format("YYYY-MM-DD"),endDate:i()(e.endDate).format("YYYY-MM-DD"),targetAchievement:e.targetAchievement,actualAchievement:e.actualAchievement,targetDonation:e.targetDonation,collectedDonations:"",targetUnits:e.targetAchievement,actualUnits:e.actualAchievement,campaignType:e.theType,status:e.status,theType:e.theType,title:e.title}}))},c=function(e,t){return e.map((function(e){var a,n,i,r,c,o,u,l,d,s,m,h,f,v,b,j,p;return e={Id:null===(a=e)||void 0===a?void 0:a.Id,firstName:null===(n=e)||void 0===n?void 0:n.fname,lastName:null===(i=e)||void 0===i?void 0:i.lname,fname:null===(r=e)||void 0===r?void 0:r.fname,lname:null===(c=e)||void 0===c?void 0:c.lname,email:null===(o=e)||void 0===o?void 0:o.email,teacher:(null===t||void 0===t||null===(u=t.filter((function(t){var a;return t.Id==(null===(a=e)||void 0===a?void 0:a.teacher_id)})))||void 0===u||null===(l=u[0])||void 0===l?void 0:l.fname)||"",moneyRaised:null===(d=e)||void 0===d||null===(s=d.campaignstudents)||void 0===s?void 0:s.moneyRaised,achievement:null===(m=e)||void 0===m||null===(h=m.campaignstudents)||void 0===h?void 0:h.targetAchievement,compaignStudentId:null===(f=e)||void 0===f||null===(v=f.campaignstudents)||void 0===v?void 0:v.Id,campaignId:null===(b=e)||void 0===b||null===(j=b.campaignstudents)||void 0===j?void 0:j.campaignId,teacher_id:null===(p=e)||void 0===p?void 0:p.teacher_id}}))}},289:function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"a",(function(){return r})),a.d(t,"f",(function(){return c})),a.d(t,"g",(function(){return o})),a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return l})),a.d(t,"e",(function(){return d}));var n=a(66),i=function(){return n.a.get("/api/get/all/teachers")},r=function(e){return e.status="Active",n.a.post("/api/add/teacher",e)},c=function(e){return n.a.put("/api/update/teacher/".concat(e.Id),e)},o=function(e){return n.a.put("/api/update/teacherPassword/".concat(e.id),e)},u=function(e){return n.a.delete("/api/delete/teacher/".concat(e))},l=function(e,t){return n.a.post("/api/assignAndDelete/teacher/".concat(e),t)},d=function(e){return n.a.post("/api/organization/import/teachers",e)}},300:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return o}));var n=a(15),i=a(67),r=a.n(i),c=function(e,t,a,n){return"title"!=e||a?"title"==e&&(a.length<5||a.length>40)?"Campaign Title Must length is between 5 and 40":"theType"!=e||a?"startDate"!=e||a?"startDate"==e&&"add"==n&&r()(a).isBefore(r()())?"Start Date Must Be Greater Than Today":"endDate"!=e||a?"endDate"==e&&"add"==n&&r()(a).isBefore(r()())?"End Date Must Be Greater Than Today":"question"!=e||a?"question"==e&&(a.length<10||a.length>1e4)?"Question Required Enter between 10 and 10000 characters":"targetDonation"!=e||a?"targetAchievement"!=e||a?"":"Target Achievement Required":"Donation Target Required":"Question Required":"End Date Required":"Start Date Required":"Campaign Type Required":"Campaign Title Required"},o=function(e,t){var a,i,c,o,u={};e.title||(u.title="Campaign Title Required"),e.title&&((null===e||void 0===e||null===(a=e.title)||void 0===a?void 0:a.length)<5||(null===e||void 0===e||null===(i=e.title)||void 0===i?void 0:i.length)>40)&&(u.title="Campaign Title Must length is between 5 and 40"),e.theType||(u.theType="Campaign Type Required"),e.startDate||(u.startDate="Start Date Required"),e.startDate&&"add"==t&&r()(e.startDate).isBefore(r()())&&(u.startDate="Start Date Must Be Greater Than Today"),e.endDate||(u.endDate="End Date Required"),e.endDate&&"add"==t&&r()(e.endDate).isBefore(r()())&&(u.endDate="End Date Must Be Greater Than Today"),e.endDate&&r()(e.endDate).isBefore(r()(e.startDate))&&(u.startDate="Start Date Must Be Less Than End Date",u.endDate="Start Date Must Be Less Than End Date"),e.question||(u.question="Question Required"),e.question&&((null===e||void 0===e||null===(c=e.question)||void 0===c?void 0:c.length)<10||(null===e||void 0===e||null===(o=e.question)||void 0===o?void 0:o.length)>1e4)&&(u.question="Question Required Enter between 10 and 10000 characters"),e.targetDonation||(u.targetDonation="Donation Target Required"),e.targetAchievement||(u.targetAchievement="Target Achievement Required");var l=!(u.title||u.theType||u.question||u.targetDonation||u.endDate||u.targetAchievement||u.startDate);return Object(n.a)({valid:l},u)}},334:function(e,t,a){"use strict";a.r(t);var n=a(15),i=a(19),r=a(45),c=a.n(r),o=a(0),u=a(12),l=a(36),d=a(300),s=a(274),m=[{firstName:"Eslam",teacherId:1,id:1,lastName:"Sameh",email:"eslam.sameh1993@gmail.com",teacher:"Samah Samir"},{firstName:"Eslam",teacherId:2,id:2,lastName:"Sameh",email:"eslam.sameh1993@gmail.com",teacher:"Samah Samir"},{firstName:"Eslam",teacherId:3,id:3,lastName:"Sameh",email:"eslam.sameh1993@gmail.com",teacher:"Samah Samir"},{firstName:"Eslam",teacherId:4,id:4,lastName:"Sameh",email:"eslam.sameh1993@gmail.com",teacher:"Samah Samir"},{firstName:"Eslam",teacherId:5,id:5,lastName:"Sameh",email:"eslam.sameh1993@gmail.com",teacher:"Samah Samir"},{firstName:"Eslam",teacherId:6,id:6,lastName:"Sameh",email:"eslam.sameh1993@gmail.com",teacher:"Samah Samir"},{firstName:"Eslam",teacherId:7,id:7,lastName:"Sameh",email:"eslam.sameh1993@gmail.com",teacher:"Samah Samir"},{firstName:"Eslam",teacherId:8,id:8,lastName:"Sameh",email:"eslam.sameh1993@gmail.com",teacher:"Samah Samir"},{firstName:"Eslam",teacherId:9,id:9,lastName:"Sameh",email:"eslam.sameh1993@gmail.com",teacher:"Samah Samir"},{firstName:"Eslam",teacherId:10,id:10,lastName:"Sameh",email:"eslam.sameh1993@gmail.com",teacher:"Samah Samir"},{firstName:"Eslam",teacherId:11,id:11,lastName:"Sameh",email:"eslam.sameh1993@gmail.com",teacher:"Samah Samir"},{firstName:"Eslam",teacherId:12,id:12,lastName:"Sameh",email:"eslam.sameh1993@gmail.com",teacher:"Samah Samir"},{firstName:"Eslam",teacherId:13,id:13,lastName:"Sameh",email:"eslam.sameh1993@gmail.com",teacher:"Samah Samir"},{firstName:"Eslam",teacherId:14,id:14,lastName:"Sameh",email:"eslam.sameh1993@gmail.com",teacher:"Samah Samir"},{firstName:"Eslam",teacherId:15,id:15,lastName:"Sameh",email:"eslam.sameh1993@gmail.com",teacher:"Samah Samir"}],h=a(1),f=function(e){var t=Object(o.useState)(e.value||{}),a=Object(i.a)(t,2),r=a[0],c=a[1],u=Object(o.useState)({}),f=Object(i.a)(u,2),v=f[0],b=f[1];Object(o.useEffect)((function(){console.log(e.value),e.value&&c(e.value)}),[e.value]);var j,p,g,O;return Object(h.jsx)("div",{style:{margin:"0px 40px"},children:Object(h.jsx)("div",{className:"inputSpaces",style:{marginBottom:"20px"},children:(j="studentId",p="Select Student",g="Student",O=!0,Object(h.jsx)(s.a,{value:r[j],state:r[j],error:v[j],placeholder:p,required:O,label:"id",options:m,dispalyName:"firstName",onChange:function(e){return function(e,t,a){c(Object(n.a)(Object(n.a)({},r),{},Object(l.a)({},e,a)))}(j,0,e)},onBlur:function(e){return function(e,t,a){var i=Object(d.b)(e,t,a,"add");b(i?Object(n.a)(Object(n.a)({},v),{},Object(l.a)({},e,i)):Object(n.a)(Object(n.a)({},v),{},Object(l.a)({},e,"")))}(j,g,e)}}))})})},v=a(86),b=function(e,t,a){return"body"!=e||a?"subject"!=e||a?"":"Subject Required":"Body Required"},j=a(85),p=a(53),g=function(e){var t=Object(o.useState)(e.value||{}),a=Object(i.a)(t,2),r=a[0],c=a[1],u=Object(o.useState)({}),d=Object(i.a)(u,2),s=d[0],m=d[1];Object(o.useEffect)((function(){console.log(e.value),e.value&&c(e.value)}),[e.value]);var f=function(e,t,a,i,o,u){return Object(h.jsx)(j.a,{error:s[t],state:r[t],type:e,placeholder:a,value:r[t],icon:o,onChange:function(e){return function(e,t,a){var i=b(e,0,a);m(i?Object(n.a)(Object(n.a)({},s),{},Object(l.a)({},e,i)):Object(n.a)(Object(n.a)({},s),{},Object(l.a)({},e,""))),c(Object(n.a)(Object(n.a)({},r),{},Object(l.a)({},e,a)))}(t,0,e)},required:u,onBlur:function(e){return function(e,t,a){var i=b(e,0,a);m(i?Object(n.a)(Object(n.a)({},s),{},Object(l.a)({},e,i)):Object(n.a)(Object(n.a)({},s),{},Object(l.a)({},e,"")))}(t,0,e)}})};return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{style:{margin:"0px 40px"},children:[Object(h.jsx)("div",{className:"inputSpaces",style:{marginBottom:"20px"},children:f("text","subject","Subject",0,null,!0)}),Object(h.jsx)("div",{className:"inputSpaces",style:{marginBottom:"20px"},children:f("textarea","body","Body",0,null,!0)}),Object(h.jsx)(v.c,{children:Object(h.jsx)(p.a,{className:"btn-save",onClick:function(t){var a=function(e){var t={};e.body||(t.body="Body Required"),e.subject||(t.subject="Subject Required");var a=!t.body&&!t.subject;return Object(n.a)({valid:a},t)}(r);a.valid?e.submit(r):m(Object(n.a)(Object(n.a)({},s),a))},children:"Submit"})})]})})},O=a(271),S=a(273),x=a(272),D=a(275),y=a(54),N=a(281),I=a(278),q=a(289),C=a(282),E=["Id","students","campaignId","compaignStudentId","teacher_id"],T=["Id","students","campaignId","compaignStudentId","teacher_id","teacher"];t.default=function(){var e,t=Object(o.useState)(!1),a=Object(i.a)(t,2),r=a[0],l=a[1],d=Object(o.useState)(!1),s=Object(i.a)(d,2),m=s[0],v=s[1],b=Object(o.useState)(!1),j=Object(i.a)(b,2),p=j[0],B=j[1],A=Object(o.useState)({}),R=Object(i.a)(A,2),w=R[0],M=(R[1],Object(o.useState)([])),_=Object(i.a)(M,2),z=_[0],k=_[1],Y=Object(o.useState)([]),F=Object(i.a)(Y,2),P=F[0],U=F[1],G=Object(o.useState)([]),Q=Object(i.a)(G,2),L=Q[0],J=Q[1],K=Object(o.useState)([]),V=Object(i.a)(K,2),H=V[0],W=V[1],X=Object(o.useState)(""),Z=Object(i.a)(X,2),$=Z[0],ee=Z[1],te=Object(o.useContext)(y.a).user,ae=null===(e=Object(u.i)())||void 0===e?void 0:e.id;Object(o.useEffect)((function(){"teacherContent."==te.content?ne():ie()}),[]),Object(o.useEffect)((function(){z.length&&ne()}),[z.length]),Object(o.useEffect)((function(){re($)}),[L]);var ne=function(){Object(I.h)(ae,te.content).then((function(e){var t,a,n,i,r,c;console.log(e.data.data),U(Object(C.b)((null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.students)||e.data.data,z)),J(Object(C.b)((null===(n=e.data)||void 0===n||null===(i=n.data)||void 0===i?void 0:i.students)||e.data.data,z)),W(Object(C.b)((null===(r=e.data)||void 0===r||null===(c=r.data)||void 0===c?void 0:c.students)||e.data.data,z))}))},ie=function(){Object(q.d)().then((function(e){var t,a;return k(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.map((function(e){return Object(n.a)(Object(n.a)({},e),{},{firstName:e.fname,lastName:e.lname})})))}))},re=function(e){if(e){var t=e.toUpperCase();ee(t),U(L.slice().filter((function(e){var a,n,i;return(null===e||void 0===e||null===(a=e.fname)||void 0===a?void 0:a.toUpperCase().includes(t))||(null===e||void 0===e||null===(n=e.email)||void 0===n?void 0:n.toUpperCase().includes(t))||(null===e||void 0===e||null===(i=e.lname)||void 0===i?void 0:i.toUpperCase().includes(t))})))}else ee(""),U(L)};return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(O.a,{children:"Campaign Students"}),Object(h.jsxs)(x.a,{children:[c()(P.length).format("0,0")," Campaign"]})]}),"teacherContent."==te.content&&Object(h.jsx)(S.a,{style:{padding:"0px 25px"},onClick:function(){return B(!0)},children:"Send Class"})]}),Object(h.jsx)(D.a,{data:P,keyItem:"Id",itemsExceptions:"organizationContent."==te.content?E:T,singleDelete:!0,achivementLink:"/page/studentProgress/".concat(ae),hasAchivement:!0,selectFilter:!("organizationContent."!=te.content),selectFilterArray:z,selectFilterItemKey:"Id",selectFilterItemValue:"firstName",onSelectFilter:function(e){return function(e){if(e&&e.length){var t=e.slice().map((function(e){return e.Id}));t.some((function(e){return 0==e}))?J(H.slice().filter((function(e){return t.includes(e.teacher_id)||!e.teacher_id}))):J(H.slice().filter((function(e){return t.includes(e.teacher_id)})))}else J(H)}(e)},onChangePage:function(){return console.log("page")},onSearch:function(e){return re(e)},onDelete:function(e){return t=e,void("teacherContent."==te.content?Object(I.g)(ae,t).then((function(e){return ne()})):Object(I.f)(ae,{studentId:t}).then((function(e){return ne()})));var t},removeEditButton:!0}),Object(h.jsx)("div",{children:Object(h.jsx)(N.a,{open:r,title:"Add New Student",onShow:function(e){return l(e)},children:Object(h.jsx)(f,{submit:function(){return console.log("add")},importBtn:!1})})}),Object(h.jsx)("div",{children:Object(h.jsx)(N.a,{open:m,title:"Edit Student",onShow:function(e){return v(e)},children:Object(h.jsx)(f,{submit:function(){return console.log("edit")},importBtn:!1,value:w})})}),Object(h.jsx)("div",{children:Object(h.jsx)(N.a,{open:p,title:"Send To Class",onShow:function(e){return B(e)},children:Object(h.jsx)(g,{submit:function(e){return Object(I.j)(ae,e).finally((function(){return B(!1)}))}})})})]})}}}]);
//# sourceMappingURL=13.81df0e07.chunk.js.map