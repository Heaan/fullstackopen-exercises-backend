(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),u=t.n(c),o=t(2),l=function(e){var n=e.handleChange,t=e.filter;return r.a.createElement("div",null,"filter shown with name ",r.a.createElement("input",{type:"text",onChange:n,value:t}))},i=function(e){var n=e.text,t=e.handleChange,a=e.value;return r.a.createElement("div",null,n,": ",r.a.createElement("input",{required:!0,type:"text",onChange:t,value:a}))},s=function(e){var n=e.handleSubmit,t=e.handleNameChange,a=e.newName,c=e.handleNumberChange,u=e.newNumber;return r.a.createElement("form",{onSubmit:n},r.a.createElement(i,{text:"name",handleChange:t,value:a}),r.a.createElement(i,{text:"number",handleChange:c,value:u}),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.name,t=e.number,a=e.id,c=e.handleDelete;return r.a.createElement("div",null,n," ",t,r.a.createElement("button",{name:a,type:"button",onClick:c},"Delete"))},f=function(e){var n=e.persons,t=e.handleDelete;return n.map((function(e){return r.a.createElement(m,{name:e.name,number:e.number,key:e.name,id:e.id,handleDelete:t})}))},d=t(3),h=t.n(d),b="/api/persons",p=function(){return h.a.get(b).then((function(e){return e.data}))},v=function(e){return h.a.post(b,e).then((function(e){return e.data}))},g=function(e){return h.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},E=function(e,n){return h.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},w=function(e){var n=e.messageObj,t=n.success,a=n.message;return null===a?null:r.a.createElement("div",{className:t?"success message":"error message"},a)},O=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),i=Object(o.a)(u,2),m=i[0],d=i[1],h=Object(a.useState)(""),b=Object(o.a)(h,2),O=b[0],j=b[1],C=Object(a.useState)(""),N=Object(o.a)(C,2),y=N[0],S=N[1],D=Object(a.useState)({success:!0,message:null}),x=Object(o.a)(D,2),k=x[0],A=x[1],I=Object(a.useState)(!0),J=Object(o.a)(I,2),L=J[0];J[1];Object(a.useEffect)((function(){p().then((function(e){c(e)})).catch((function(e){console.error(e)}))}),[L]);var T=t.filter((function(e){return-1!==e.name.toLowerCase().indexOf(y.toLowerCase())})),q=function(e,n){A({success:!0,message:"".concat(e," ").concat(n)}),setTimeout((function(){A({success:!0,message:null})}),5e3)},B=function(e){var n="string"===typeof e?"Information of ".concat(e," has already been removed from server"):e.error;A({success:!1,message:n}),setTimeout((function(){A({success:!0,message:null})}),5e3)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(w,{messageObj:k}),r.a.createElement(l,{handleChange:function(e){S(e.target.value)},filter:y}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(s,{handleSubmit:function(e){e.preventDefault();var n={name:m,number:O},a=t.some((function(e){return e.name===m}));if(a){var r="".concat(m," is already added to phonebook, replace the old number with a new one?");if(a&&window.confirm(r)){var u=t.find((function(e){return e.name===m})).id;E(u,n).then((function(e){c(t.map((function(n){return n.id===u?e:n})))})).then((function(){q("Updated",m),d(""),j("")})).catch((function(e){404===e.response.status?B(m):400===e.response.status&&B(e.response.data)}))}else;}else v(n).then((function(e){c(t.concat(e))})).then((function(){q("Added",m),d(""),j("")})).catch((function(e){B(e.response.data)}))},handleNameChange:function(e){d(e.target.value)},newName:m,handleNumberChange:function(e){j(e.target.value)},newNumber:O}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(f,{persons:T,handleDelete:function(e){var n=e.target.name,a=t.find((function(e){return e.id===n})).name;window.confirm("Delete ".concat(a," ?"))&&g(n).then((function(e){c(t.filter((function(e){return e.id!==n})))})).then((function(){q("Deleted",a)})).catch((function(e){B(a)}))}}))};t(36);u.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5418a958.chunk.js.map