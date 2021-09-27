(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(8),i=s.n(c),r=(s(14),s(15),s(2)),l=s(3),o=s(5),d=s(4),u=s(0),j=function(e){var t=e.elements;return Object(u.jsxs)("div",{id:"cv_work",className:"cv_work",children:[Object(u.jsxs)("h1",{className:"company",children:[t.company," "]}),Object(u.jsx)("h2",{className:"city",children:t.city}),Object(u.jsx)("h3",{className:"role",children:t.role}),Object(u.jsx)("p",{className:"period",children:t.date}),Object(u.jsx)("p",{className:"task",children:t.task})]})},h=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).updateCompany=function(t){e.setState({company:t.target.value}),console.log(e.state.first)},e.updateRole=function(t){e.setState({role:t.target.value})},e.updateCity=function(t){e.setState({city:t.target.value})},e.updateDate=function(t){e.setState({date:t.target.value})},e.updateTask=function(t){e.setState({task:t.target.value})},e.state={company:"",role:"",city:"",date:"",task:""},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this.state,t=e.company,s=e.role,a=e.city,n=e.date,c=e.task,i=this.props,r=i.id,l=i.onDelete;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("form",{className:"work_container",children:[Object(u.jsx)("input",{type:"text",onChange:this.updateCompany,value:t,placeholder:"Company"}),Object(u.jsx)("input",{type:"text",onChange:this.updateRole,value:s,placeholder:"Role"}),Object(u.jsx)("input",{type:"text",onChange:this.updateCity,value:a,placeholder:"City"}),Object(u.jsx)("input",{type:"text",onChange:this.updateDate,value:n,placeholder:"Starting (Month,YYYY) - Ending (Month,YYYY) Date"}),Object(u.jsx)("input",{type:"text",onChange:this.updateTask,value:c,placeholder:"Describe tasks accomplished",maxLength:"120"}),Object(u.jsx)("button",{type:"submit",className:"delete",onClick:function(){return l(r)},children:"Delete"})]}),Object(u.jsx)("div",{className:"cv",children:Object(u.jsx)(j,{elements:this.state})})]})}}]),s}(a.Component),p=s(6),b=s.n(p),m=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).onDelete=function(t){e.setState({items:e.state.items.filter((function(e){return e.id!==t}))})},e.resetItem=function(){e.setState({item:{ele:"",id:b()()}})},e.changeItems=function(){e.setState({items:e.state.items.concat(e.state.item)}),console.log(e.state.items,"items"),e.resetItem()},e.pressAddBtn=function(t){e.setState({item:{ele:Object(u.jsx)(h,{id:e.state.item.id,onDelete:e.onDelete},e.state.item.id),id:e.state.item.id}}),console.log(e.state.item.id,"i"),e.changeItems()},e.state={item:{ele:null,id:b()()},items:[]},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.state.items.map((function(t){return Object(u.jsx)(h,{id:t.id,onDelete:e.onDelete},t.id)}));return Object(u.jsxs)("div",{className:"Work",children:[Object(u.jsx)("h1",{className:"title",children:"Work"}),Object(u.jsxs)("div",{className:"work_sub",children:[console.log(Object(u.jsx)(h,{})),t]}),Object(u.jsx)("button",{type:"submit",className:"add",onClick:this.pressAddBtn,children:" Add"})]})}}]),s}(a.Component),O=function(e){var t=e.elements;return Object(u.jsxs)("div",{id:"cv_edu",className:"cv_edu",children:[Object(u.jsxs)("h1",{className:"institute",children:[t.institute," "]}),Object(u.jsx)("h2",{className:"city",children:t.city}),Object(u.jsxs)("h3",{className:"degree",children:[t.degree," "]}),Object(u.jsxs)("h3",{className:"gpa",children:["CGPA : ",t.gpa]}),Object(u.jsx)("p",{className:"period",children:t.start})]})},x=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).updateInstitute=function(e){a.setState({institute:e.target.value}),console.log(a.state.institute)},a.updateDegree=function(e){a.setState({degree:e.target.value})},a.updateCity=function(e){a.setState({city:e.target.value})},a.updateStart=function(e){a.setState({start:e.target.value})},a.updateGPA=function(e){a.setState({gpa:e.target.value})},a.state={institute:"",degree:"",city:"",start:"",gpa:""},a}return Object(l.a)(s,[{key:"render",value:function(){var e=this.state,t=e.institute,s=e.city,a=e.degree,n=e.start,c=e.gpa,i=this.props,r=i.id,l=i.onDelete;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("form",{className:"edu_container",children:[Object(u.jsx)("input",{type:"text",onChange:this.updateInstitute,value:t,placeholder:"Institute Name"}),Object(u.jsx)("input",{type:"text",onChange:this.updateCity,value:s,placeholder:"City"}),Object(u.jsx)("input",{type:"text",onChange:this.updateDegree,value:a,placeholder:"Degree and Major"}),Object(u.jsx)("input",{type:"text",onChange:this.updateStart,value:n,placeholder:"Start(Month,YYYY) - End Date(Month,YYYY)"}),Object(u.jsx)("input",{type:"number",onChange:this.updateGPA,value:c,placeholder:"CGPA"}),Object(u.jsx)("button",{type:"submit",className:"delete",onClick:function(){return l(r)},children:"Delete"})]}),Object(u.jsx)("div",{className:"cv",children:Object(u.jsx)(O,{elements:this.state})})]})}}]),s}(a.Component),v=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).onDelete=function(t){e.setState({items:e.state.items.filter((function(e){return e.id!==t}))})},e.resetItem=function(){e.setState({item:{ele:"",id:b()()}})},e.changeItems=function(){e.setState({items:e.state.items.concat(e.state.item)}),console.log(e.state.items,"items"),e.resetItem()},e.pressAddBtn=function(t){e.setState({item:{ele:Object(u.jsx)(x,{id:e.state.item.id,onDelete:e.onDelete},e.state.item.id),id:e.state.item.id}}),console.log(e.state.item.id,"i"),e.changeItems()},e.state={item:{ele:null,id:b()()},items:[]},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.state.items.map((function(t){return Object(u.jsx)(x,{id:t.id,onDelete:e.onDelete},t.id)}));return Object(u.jsxs)("div",{className:"education",children:[Object(u.jsx)("h1",{className:"title",children:"Education"}),Object(u.jsxs)("div",{children:[console.log(Object(u.jsx)(x,{})),t]}),Object(u.jsx)("button",{type:"submit",className:"add",onClick:this.pressAddBtn,children:" Add"})]})}}]),s}(a.Component),f=function(e){var t=e.elements;return Object(u.jsxs)("div",{id:"cv_basic",className:"cv_basic",children:[Object(u.jsxs)("h1",{className:"name",children:[t.first," ",t.last]}),Object(u.jsx)("div",{className:"title_wrapper",children:Object(u.jsx)("h2",{className:"title",children:t.title})}),Object(u.jsxs)("p",{className:"address",children:[Object(u.jsx)("strong",{children:"ADDRESS"})," ",Object(u.jsx)("br",{}),t.address]}),Object(u.jsx)("h2",{className:"profile",children:"Profile"}),Object(u.jsxs)("p",{className:"description",children:["  ",t.description]}),Object(u.jsxs)("h2",{className:"email",children:[" ",Object(u.jsx)("strong",{children:"EMAIL"})," ",Object(u.jsx)("br",{}),t.email]}),Object(u.jsxs)("h3",{className:"number",children:[" ",Object(u.jsx)("strong",{children:"PHONE"}),Object(u.jsx)("br",{}),t.phoneNumber]}),Object(u.jsx)("img",{src:t.photo,className:"photo",alt:"Avatar"})]})},g=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).updateFirst=function(t){e.setState({first:t.target.value}),console.log(e.state.first)},e.updateLast=function(t){e.setState({last:t.target.value})},e.updateAddress=function(t){e.setState({address:t.target.value})},e.updateDescription=function(t){e.setState({description:t.target.value})},e.updateEmail=function(t){e.setState({email:t.target.value})},e.updatePhone=function(t){e.setState({phoneNumber:t.target.value})},e.updatePhoto=function(t){e.setState({photo:t.target.value})},e.updateTitle=function(t){e.setState({title:t.target.value.toUpperCase()})},e.state={first:"",last:"",address:"",description:"",phoneNumber:"",email:"",photo:"",title:""},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this.state,t=e.first,s=e.last,a=e.address,n=e.description,c=e.phoneNumber,i=e.email,r=e.photo,l=e.title;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Personal Info"}),Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{type:"text",onChange:this.updateFirst,value:t,placeholder:"First name"}),Object(u.jsx)("input",{type:"text",onChange:this.updateLast,value:s,placeholder:"Surname"}),Object(u.jsx)("input",{type:"text",onChange:this.updatePhoto,value:r,placeholder:"Photo"}),Object(u.jsx)("input",{type:"text",onChange:this.updateTitle,value:l,placeholder:"title"}),Object(u.jsx)("input",{type:"text",onChange:this.updateAddress,value:a,placeholder:"Address"}),Object(u.jsx)("input",{type:"text",onChange:this.updateEmail,value:i,placeholder:"Email"}),Object(u.jsx)("input",{type:"text",onChange:this.updatePhone,value:c,placeholder:"Phone number"}),Object(u.jsx)("input",{type:"text",onChange:this.updateDescription,value:n,placeholder:"Description",maxLength:"400"})]}),Object(u.jsxs)("div",{className:"cv",children:[Object(u.jsx)("h1",{children:"Personal Info"}),Object(u.jsx)(f,{elements:this.state})]})]})}}]),s}(a.Component),y=s(9),N=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("footer",{id:"footer",className:"footer",children:[Object(u.jsx)("p",{children:"Copyright \xa9 ParvathyUK \xa0 "}),Object(u.jsx)("a",{href:"https://github.com/poverty149",className:"fab fa-github",children:Object(u.jsx)(y.a,{})})]})}}]),s}(a.Component),C=N,S=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(u.jsx)("h1",{id:"header",className:"header",children:"CV Generator"})}}]),s}(a.Component),k=S;var D=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(k,{}),Object(u.jsxs)("div",{id:"main",className:"Main",children:[Object(u.jsx)(g,{}),Object(u.jsx)("h1",{id:"title_edu",className:"cv",children:"Education"}),Object(u.jsx)(v,{}),Object(u.jsx)("h1",{id:"title_work",className:"cv",children:"Work"}),Object(u.jsx)(m,{})]}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(C,{})})]})};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(D,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.0438f29d.chunk.js.map