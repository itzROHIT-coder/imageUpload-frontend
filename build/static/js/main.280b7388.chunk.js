(this.webpackJsonpclientproject=this.webpackJsonpclientproject||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(17),i=n.n(s),l=(n(23),n(2)),o=n.n(l),u=n(4),j=n(5),d=(n(25),n(6)),p=n.n(d),b="http://localhost:8080/api/",h=function(){var e=Object(u.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post(b+"singleFile",t,n);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get(b+"getSingleFiles");case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post(b+"multipleFiles",t,n);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get(b+"getMultipleFiles");case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),v=n(7),O=(n(44),function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),a=n[0],s=n[1],i=Object(r.useState)(""),l=Object(j.a)(i,2),d=l[0],p=l[1],b=Object(r.useState)(""),f=Object(j.a)(b,2),m=f[0],O=f[1],g=Object(r.useState)(0),N=Object(j.a)(g,2),w=N[0],k=N[1],y=Object(r.useState)(0),S=Object(j.a)(y,2),C=S[0],F=S[1],M={onUploadProgress:function(e){var t=e.loaded,n=e.total,c=Math.floor(t/1e3*100/(n/1e3));k(c)}},L={onUploadProgress:function(e){var t=e.loaded,n=e.total,c=Math.floor(t/1e3*100/(n/1e3));F(c)}},P=function(){var t=Object(u.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("file",a),t.next=4,h(n,M);case 4:e.getsingle();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),U=function(){var t=Object(u.a)(o.a.mark((function t(){var n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for((n=new FormData).append("title",m),c=0;c<d.length;c++)n.append("files",d[c]);return t.next=5,x(n,L);case 5:e.getMultiple();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"row mt-3",children:[Object(c.jsxs)("div",{className:"col-6",children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Select Single File"}),Object(c.jsx)("input",{type:"file",className:"form-control",onChange:function(e){return function(e){s(e.target.files[0]),k(0)}(e)}})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-10",children:Object(c.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return P()},children:"Upload"})}),Object(c.jsx)("div",{className:"col-2",children:Object(c.jsx)(v.a,{value:w,text:"".concat(w,"%"),styles:Object(v.b)({rotation:.25,strokeLinecap:"butt",textSize:"16px",pathTransitionDuration:.5,pathColor:"rgba(255, 136, 136, ".concat(w/100,")"),textColor:"#f88",trailColor:"#d6d6d6",backgroundColor:"#3e98c7"})})})]})]}),Object(c.jsxs)("div",{className:"col-6",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-6",children:[Object(c.jsx)("label",{children:"Title"}),Object(c.jsx)("input",{type:"text",onChange:function(e){return O(e.target.value)},placeholder:"enter title for your gallery",className:"form-control"})]}),Object(c.jsx)("div",{className:"col-6",children:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Select Multiple Files"}),Object(c.jsx)("input",{type:"file",onChange:function(e){return function(e){p(e.target.files),F(0)}(e)},className:"form-control",multiple:!0})]})})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-10",children:Object(c.jsx)("button",{type:"button",onClick:function(){return U()},className:"btn btn-danger",children:"Upload"})}),Object(c.jsx)("div",{className:"col-2",children:Object(c.jsx)(v.a,{value:C,text:"".concat(C,"%"),styles:Object(v.b)({rotation:.25,strokeLinecap:"butt",textSize:"16px",pathTransitionDuration:.5,pathColor:"rgba(255, 136, 136, ".concat(C/100,")"),textColor:"#f88",trailColor:"#d6d6d6",backgroundColor:"#3e98c7"})})})]})]})]})});var g=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)([]),i=Object(j.a)(s,2),l=i[0],d=i[1],p=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m();case 3:t=e.sent,d(t),console.log(l),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){p(),b()}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h3",{className:"text-danger font-weight-bolder border-bottom text-center",children:"Single & Multiple File Upload Using MERN Stack "}),Object(c.jsx)(O,{getsingle:function(){return p()},getMultiple:function(){return b()}})]}),Object(c.jsx)("div",{className:"container-fluid mt-5",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-6",children:[Object(c.jsx)("h4",{className:"text-success font-weight-bold",children:"Single Files List"}),Object(c.jsx)("div",{className:"row",children:n.map((function(e,t){return Object(c.jsx)("div",{className:"col-6",children:Object(c.jsx)("div",{className:"card mb-2 border-0 p-0",children:Object(c.jsx)("img",{src:"http://localhost:8080/".concat(e.filePath),width:"100%",className:"card-img-top img-responsive",alt:"img"})})})}))})]}),Object(c.jsxs)("div",{className:"col-6",children:[Object(c.jsx)("h4",{className:"text-success font-weight-bold",children:"Multiple Files List"}),l.map((function(e,t){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h6",{className:"text-danger font-weight-bold",children:e.title}),Object(c.jsx)("div",{className:"row",children:e.files.map((function(e,t){return Object(c.jsx)("div",{className:"col-6",children:Object(c.jsx)("div",{className:"card mb-2 border-0 p-0",children:Object(c.jsx)("img",{src:"http://localhost:8080/".concat(e.filePath),height:"200",className:"card-img-top img-responsive",alt:"img"})})})}))})]},e._id)}))]})]})})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),N()}},[[45,1,2]]]);
//# sourceMappingURL=main.280b7388.chunk.js.map