(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__3ogB_",label:"ContactForm_label__tbenc",input:"ContactForm_input__1kMQL",number:"ContactForm_number__1CrgS",btn:"ContactForm_btn__29grN"}},function(t,e,n){t.exports={list:"ContactList_list__IqUbc",item:"ContactList_item__10Uro",box:"ContactList_box__uV2mW",name:"ContactList_name__bTbip",number:"ContactList_number__qLqS_",btn:"ContactList_btn__3W2rA"}},,,,,,function(t,e,n){t.exports={label:"Filter_label__3YV0D",input:"Filter_input__2GpRO"}},,function(t,e,n){t.exports={title:"title_title__vJE8n"}},,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),s=n.n(r),i=(n(18),n(19),n(13)),o=n(4),l=n(5),u=n(7),b=n(6),m=n(24),j=n(11),h=n.n(j),d=n(0),_=function(t){var e=t.title;return Object(d.jsx)("h2",{className:h.a.title,children:e})},f=n(12),p=n(2),C=n.n(p),O=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.handleBtnSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(d.jsxs)("form",{onSubmit:this.handleBtnSubmit,className:C.a.form,autoComplete:"off",children:[Object(d.jsxs)("label",{className:C.a.label,children:["Name",Object(d.jsx)("input",{autoFocus:!0,type:"text",name:"name",value:e,onChange:this.handleInputChange,className:C.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(d.jsxs)("label",{className:C.a.label,children:["Number",Object(d.jsx)("input",{type:"tel",name:"number",value:n,onChange:this.handleInputChange,className:C.a.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(d.jsx)("button",{type:"submit",className:C.a.btn,children:"Add contact"})]})}}]),n}(a.Component),x=O,v=n(9),g=n.n(v),N=function(t){var e=t.value,n=t.onChange;return Object(d.jsxs)("label",{className:g.a.label,children:["Find contacts by name",Object(d.jsx)("input",{type:"text",value:e,onChange:n,className:g.a.input})]})},y=n(3),S=n.n(y),F=function(t){var e=t.onDeleteContact,n=t.visibleContacts;return Object(d.jsx)("ul",{className:S.a.list,children:n.map((function(t){var n=t.id,a=t.name,c=t.number;return Object(d.jsx)("li",{className:S.a.item,children:Object(d.jsxs)("div",{className:S.a.box,children:[Object(d.jsxs)("p",{className:S.a.name,children:[a,":"]}),Object(d.jsx)("p",{className:S.a.number,children:c}),Object(d.jsx)("button",{className:S.a.btn,onClick:function(){return e(n)},children:"Delete"})]})},n)}))})},k=(n(21),function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(m.a)(),name:n,number:a};t.setState((function(t){return{contacts:[c].concat(Object(i.a)(t.contacts))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContact=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.addContact,n=this.changeFilter,a=this.getVisibleContact(),c=this.deleteContact;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"visually_hidden",children:"Phonebook"}),Object(d.jsx)(_,{title:"Phonebook"}),Object(d.jsx)(x,{onSubmit:e}),Object(d.jsx)(_,{title:"Contacts"}),Object(d.jsx)(N,{value:t,onChange:n}),Object(d.jsx)(F,{visibleContacts:a,onDeleteContact:c})]})}}]),n}(a.Component)),L=k;s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.5b4836f7.chunk.js.map