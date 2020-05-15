(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(13),u=t.n(r),o=t(2),l=function(e){var n=e.handleChange,t=e.filter;return c.a.createElement("div",null,"filter shown with name ",c.a.createElement("input",{type:"text",onChange:n,value:t}))},i=function(e){var n=e.text,t=e.handleChange,a=e.value;return c.a.createElement("div",null,n,": ",c.a.createElement("input",{required:!0,type:"text",onChange:t,value:a}))},s=function(e){var n=e.handleSubmit,t=e.handleNameChange,a=e.newName,r=e.handleNumberChange,u=e.newNumber;return c.a.createElement("form",{onSubmit:n},c.a.createElement(i,{text:"name",handleChange:t,value:a}),c.a.createElement(i,{text:"number",handleChange:r,value:u}),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.name,t=e.number,a=e.id,r=e.handleDelete;return c.a.createElement("div",null,n," ",t,c.a.createElement("button",{name:a,type:"button",onClick:r},"Delete"))},f=function(e){var n=e.persons,t=e.handleDelete;return n.map((function(e){return c.a.createElement(m,{name:e.name,number:e.number,key:e.name,id:e.id,handleDelete:t})}))},d=t(3),h=t.n(d),b="http://localhost:3001/api/persons",v=function(){return h.a.get(b).then((function(e){return e.data}))},g=function(e){return h.a.post(b,e).then((function(e){return e.data}))},p=function(e){return h.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},E=function(e,n){return h.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},w=function(e){var n=e.messageObj,t=n.success,a=n.message;return null===a?null:c.a.createElement("div",{className:t?"success message":"error message"},a)},O=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],u=Object(a.useState)(""),i=Object(o.a)(u,2),m=i[0],d=i[1],h=Object(a.useState)(""),b=Object(o.a)(h,2),O=b[0],j=b[1],C=Object(a.useState)(""),N=Object(o.a)(C,2),S=N[0],y=N[1],D=Object(a.useState)({success:!0,message:null}),x=Object(o.a)(D,2),k=x[0],A=x[1],I=Object(a.useState)(!0),J=Object(o.a)(I,2),L=J[0];J[1];Object(a.useEffect)((function(){v().then((function(e){r(e)})).catch((function(e){console.error(e)}))}),[L]);var T=t.filter((function(e){return-1!==e.name.toLowerCase().indexOf(S.toLowerCase())})),q=function(e,n){A({success:!0,message:"".concat(e," ").concat(n)}),setTimeout((function(){A({success:!0,message:null})}),5e3)},B=function(e){A({success:!1,message:"Information of ".concat(e," has already been removed from server")}),setTimeout((function(){A({success:!0,message:null})}),5e3)};return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement(w,{messageObj:k}),c.a.createElement(l,{handleChange:function(e){y(e.target.value)},filter:S}),c.a.createElement("h3",null,"Add a new"),c.a.createElement(s,{handleSubmit:function(e){e.preventDefault();var n={name:m,number:O},a=t.some((function(e){return e.name===m}));if(a){var c="".concat(m," is already added to phonebook, replace the old number with a new one?");if(a&&window.confirm(c)){var u=t.find((function(e){return e.name===m})).id;E(u,n).then((function(e){r(t.map((function(n){return n.id===u?e:n})))})).then((function(){q("Updated",m),d(""),j("")})).catch((function(e){B(m)}))}else;}else g(n).then((function(e){r(t.concat(e))})).then((function(){q("Added",m),d(""),j("")})).catch((function(e){console.error(e)}))},handleNameChange:function(e){d(e.target.value)},newName:m,handleNumberChange:function(e){j(e.target.value)},newNumber:O}),c.a.createElement("h2",null,"Numbers"),c.a.createElement(f,{persons:T,handleDelete:function(e){var n=+e.target.name,a=t.find((function(e){return e.id===n})).name;window.confirm("Delete ".concat(a," ?"))&&p(n).then((function(e){r(t.filter((function(e){return e.id!==n})))})).then((function(){q("Deleted",a)})).catch((function(e){B(a)}))}}))};t(36);u.a.render(c.a.createElement(O,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d76b6802.chunk.js.map