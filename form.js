import"./assets/styles-Bt3aN3b1.js";const m="feedback-form-data";let e={email:"",message:""};const a=document.querySelector(".feedback-form"),r=document.querySelector("[name = 'email']"),n=document.querySelector("[name = 'message']"),s=localStorage.getItem(m);s&&(e=JSON.parse(s),r.value=e.email||"",n.value=e.message||"");a.addEventListener("input",t=>{const{name:l,value:o}=t.target;l in e&&(e[l]=o,localStorage.setItem(m,JSON.stringify(e)))});a.addEventListener("submit",t=>{if(t.preventDefault(),!e.email.trim()||!e.message.trim()){alert("Plese, fill all fields!");return}console.log(e),localStorage.removeItem(m),e={email:"",message:""},a.reset()});
//# sourceMappingURL=form.js.map
