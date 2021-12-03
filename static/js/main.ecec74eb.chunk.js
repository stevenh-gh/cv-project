(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{12:function(e,t,i){},14:function(e,t,i){"use strict";i.r(t);var s=i(1),n=i.n(s),a=i(7),r=i.n(a),c=(i(12),i(2)),o=i(3),l=i(5),d=i(4),b=i(0),j=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){var e=this.props,t=e.id,i=e.text,s=e.val;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{className:"block uppercase tracking-wide  text-gray-700 text-xs font-bold mb-2",htmlFor:t,children:i}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"appearance-none bg-gray-200 text-gray-700 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500 leading-tight mb-3 py-3 px-4 w-full",type:"text",name:"",id:t,value:s})]}),Object(b.jsx)("br",{})]})}}]),i}(n.a.Component),m=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){var e=this.props,t=e.submit,i=e.isVisible,s=e.info.institution.institution;return Object(b.jsx)("form",{"aria-label":"form",onSubmit:t,className:i?"":"hidden",children:Object(b.jsxs)("div",{className:"grid grid-cols-12 gap-2 mt-4",children:[Object(b.jsx)("div",{className:"col-span-12",children:Object(b.jsx)(j,{id:"institution",text:"Name of institution",val:s})}),Object(b.jsx)("div",{className:"col-span-6",children:Object(b.jsx)(j,{id:"fromYear",text:"From year"})}),Object(b.jsx)("div",{className:"col-span-6",children:Object(b.jsx)(j,{id:"toYear",text:"To year"})}),Object(b.jsx)("div",{className:"col-span-12",children:Object(b.jsx)(j,{id:"degree",text:"Degree"})}),Object(b.jsx)("button",{className:"col-span-2 col-start-6 py-1 bg-green-400 border-green-400 hover:border-green-500 hover:bg-green-500 text-sm border-4 text-white rounded mb-4",type:"submit",children:"Submit"})]})})}}]),i}(n.a.Component),u=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){var e=this.props.eInfo,t=e.institution,i=e.fromYear,s=e.toYear,n=e.degree,a=this.props.visibility;return Object(b.jsxs)("div",{className:a?"hidden":"","data-testid":"educationinfo",children:[Object(b.jsx)("i",{className:"fas fa-edit cursor-pointer",onClick:this.props.edit,"data-testid":"editbtn"}),Object(b.jsx)("div",{children:t}),Object(b.jsxs)("div",{children:[i," - ",s]}),Object(b.jsx)("div",{children:n})]})}}]),i}(n.a.Component),p=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var s;return Object(c.a)(this,i),(s=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),s.setState({formVisible:!s.state.formVisible,educationInfo:{institution:e.target.elements[0].value,fromYear:e.target.elements[1].value,toYear:e.target.elements[2].value,degree:e.target.elements[3].value}})},s.edit=function(){s.setState({formVisible:!s.state.formVisible})},s.state={formVisible:!0,educationInfo:{institution:"",fromYear:"",toYear:"",degree:""}},s}return Object(o.a)(i,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{submit:this.handleSubmit,isVisible:this.state.formVisible,info:this.state.educationInfo}),Object(b.jsx)(u,{eInfo:this.state.educationInfo,visibility:this.state.formVisible,edit:this.edit})]})}}]),i}(n.a.Component),h=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){var e=this.props,t=e.submit,i=e.isVisible,s=e.info.company.company;return Object(b.jsx)("form",{"aria-label":"form",onSubmit:t,className:i?"":"hidden",children:Object(b.jsxs)("div",{className:"grid grid-cols-12 gap-2 mt-4",children:[Object(b.jsx)("div",{className:"col-span-12",children:Object(b.jsx)(j,{id:"company",text:"Company",val:s})}),Object(b.jsx)("div",{className:"col-span-6",children:Object(b.jsx)(j,{id:"position",text:"Position at company"})}),Object(b.jsx)("div",{className:"col-span-6",children:Object(b.jsx)(j,{id:"responsiblities",text:"Responsibilities"})}),Object(b.jsx)("div",{className:"col-span-6",children:Object(b.jsx)(j,{id:"fromYear",text:"From year"})}),Object(b.jsx)("div",{className:"col-span-6",children:Object(b.jsx)(j,{id:"toYear",text:"To year"})}),Object(b.jsx)("button",{className:"col-span-2 col-start-6 py-1 bg-green-400 border-green-400 hover:border-green-500 hover:bg-green-500 text-sm border-4 text-white rounded mb-4",type:"submit",children:"Submit"})]})})}}]),i}(n.a.Component),O=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){var e=this.props.eInfo,t=e.company,i=e.position,s=e.responsibilities,n=e.fromYear,a=e.toYear,r=this.props.visibility;return Object(b.jsxs)("div",{className:r?"hidden":"","data-testid":"educationinfo",children:[Object(b.jsx)("i",{className:"fas fa-edit cursor-pointer",onClick:this.props.edit,"data-testid":"editbtn"}),Object(b.jsx)("div",{children:t}),Object(b.jsx)("div",{children:i}),Object(b.jsx)("div",{children:s}),Object(b.jsxs)("div",{children:[n," - ",a]})]})}}]),i}(n.a.Component),x=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var s;return Object(c.a)(this,i),(s=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),s.setState({formVisible:!s.state.formVisible,experienceInfo:{company:e.target.elements[0].value,position:e.target.elements[1].value,responsibilities:e.target.elements[2].value,fromYear:e.target.elements[3].value,toYear:e.target.elements[4].value}})},s.edit=function(){s.setState({formVisible:!s.state.formVisible})},s.state={formVisible:!0,experienceInfo:{company:"",position:"",responsibilities:"",fromYear:"",toYear:""}},s}return Object(o.a)(i,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{submit:this.handleSubmit,isVisible:this.state.formVisible,info:this.state.experienceInfo}),Object(b.jsx)(O,{eInfo:this.state.experienceInfo,visibility:this.state.formVisible,edit:this.edit})]})}}]),i}(n.a.Component),f=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(b.jsx)("h1",{className:"text-center mb-7 text-3xl",children:"Odin CV Application"})}}]),i}(n.a.Component),v=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){var e=this.props,t=e.submit,i=e.isVisible,s=e.info.firstName.firstName;return Object(b.jsx)("form",{"aria-label":"form",onSubmit:t,className:i?"":"hidden",children:Object(b.jsxs)("div",{className:"grid grid-cols-12 gap-2",children:[Object(b.jsx)("div",{className:"col-span-6",children:Object(b.jsx)(j,{id:"firstName",text:"First name",val:s})}),Object(b.jsx)("div",{className:"col-span-6",children:Object(b.jsx)(j,{id:"lastName",text:"Last name"})}),Object(b.jsx)("div",{className:"col-span-12",children:Object(b.jsx)(j,{id:"addressLineOne",text:"Address line 1"})}),Object(b.jsx)("div",{className:"col-span-12",children:Object(b.jsx)(j,{id:"addressLineTwo",text:"Address line 2"})}),Object(b.jsx)("div",{className:"col-span-4",children:Object(b.jsx)(j,{id:"city",text:"City"})}),Object(b.jsx)("div",{className:"col-span-4",children:Object(b.jsx)(j,{id:"state",text:"State"})}),Object(b.jsx)("div",{className:"col-span-4",children:Object(b.jsx)(j,{id:"postalCode",text:"Postal code"})}),Object(b.jsx)("div",{className:"col-span-6",children:Object(b.jsx)(j,{id:"email",text:"Email"})}),Object(b.jsx)("div",{className:"col-span-6",children:Object(b.jsx)(j,{id:"phone",text:"Phone"})}),Object(b.jsx)("button",{className:"col-span-2 col-start-6 py-1 bg-green-400 border-green-400 hover:border-green-500 hover:bg-green-500 text-sm border-4 text-white rounded mb-4",type:"submit",children:"Submit"})]})})}}]),i}(n.a.Component),g=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){var e=this.props.pInfo,t=e.firstName,i=e.lastName,s=e.addressLineOne,n=e.addressLineTwo,a=e.city,r=e.state,c=e.postalCode,o=e.email,l=e.phone,d=this.props.visibility;return Object(b.jsxs)("div",{className:d?"hidden":"","data-testid":"personalinfo",children:[Object(b.jsx)("i",{className:"fas fa-edit cursor-pointer",onClick:this.props.edit,"data-testid":"editbtn"}),Object(b.jsxs)("div",{children:[t," ",i]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:s}),Object(b.jsx)("div",{children:n}),Object(b.jsxs)("div",{children:[a,", ",r," ",c]})]}),Object(b.jsx)("div",{children:o}),Object(b.jsx)("div",{children:l})]})}}]),i}(n.a.Component),y=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var s;return Object(c.a)(this,i),(s=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),s.setState({formVisible:!s.state.formVisible,personalInfo:{firstName:e.target.elements[0].value,lastName:e.target.elements[1].value,addressLineOne:e.target.elements[2].value,addressLineTwo:e.target.elements[3].value,city:e.target.elements[4].value,state:e.target.elements[5].value,postalCode:e.target.elements[6].value,email:e.target.elements[7].value,phone:e.target.elements[8].value}})},s.edit=function(){s.setState({formVisible:!s.state.formVisible})},s.state={formVisible:!0,personalInfo:{firstName:"",lastName:"",addressLineOne:"",addressLineTwo:"",city:"",state:"",postalCode:"",email:"",phone:""}},s}return Object(o.a)(i,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v,{submit:this.handleSubmit,isVisible:this.state.formVisible,info:this.state.personalInfo}),Object(b.jsx)(g,{pInfo:this.state.personalInfo,visibility:this.state.formVisible,edit:this.edit})]})}}]),i}(n.a.Component),N=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"container mx-auto grid grid-cols-12",children:Object(b.jsxs)("div",{className:"col-span-6 col-start-4",children:[Object(b.jsx)(f,{}),Object(b.jsx)(y,{}),Object(b.jsx)("hr",{}),Object(b.jsx)(p,{}),Object(b.jsx)("hr",{}),Object(b.jsx)(x,{})]})})}}]),i}(n.a.Component),V=N;r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(V,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ecec74eb.chunk.js.map