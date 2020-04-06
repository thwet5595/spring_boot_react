(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,a,t){e.exports=t(63)},40:function(e,a,t){},41:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(31),l=t.n(r),c=(t(40),t(41),t(32)),m=t(9),o=t(7),u=t(8),i=t(11),d=t(10),h=t(4),p=t(12),f=t(14),E=t.n(f),N="http://localhost:8080/users",g=new(function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,[{key:"fetchUsers",value:function(){return E.a.get(N)}},{key:"fetchUserById",value:function(e){return E.a.get(N+"/"+e)}},{key:"deleteUser",value:function(e){return E.a.delete(N+"/"+e)}},{key:"addUser",value:function(e){return E.a.post(""+N,e)}},{key:"editUser",value:function(e){return E.a.put(N+"/"+e.id,e)}}]),e}()),b=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(d.a)(a).call(this,e))).state={users:[],message:null},t.deleteUser=t.deleteUser.bind(Object(h.a)(t)),t.editUser=t.editUser.bind(Object(h.a)(t)),t.addUser=t.addUser.bind(Object(h.a)(t)),t.reloadUserList=t.reloadUserList.bind(Object(h.a)(t)),t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.reloadUserList()}},{key:"reloadUserList",value:function(){var e=this;g.fetchUsers().then(function(a){e.setState({users:a.data.result})})}},{key:"deleteUser",value:function(e){var a=this;g.deleteUser(e).then(function(t){a.setState({message:"User deleted successfully."}),a.setState({users:a.state.users.filter(function(a){return a.id!==e})})})}},{key:"editUser",value:function(e){window.localStorage.setItem("userId",e),this.props.history.push("/edit-user")}},{key:"addUser",value:function(){window.localStorage.removeItem("userId"),this.props.history.push("/add-user")}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h2",{className:"text-center"},"User Details"),s.a.createElement("button",{className:"btn btn-danger",style:{width:"100px"},onClick:function(){return e.addUser()}}," Add User"),s.a.createElement("table",{className:"table table-striped"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{className:"hidden"},"Id"),s.a.createElement("th",null,"FirstName"),s.a.createElement("th",null,"LastName"),s.a.createElement("th",null,"UserName"),s.a.createElement("th",null,"Age"),s.a.createElement("th",null,"Salary"))),s.a.createElement("tbody",null,this.state.users.map(function(a){return s.a.createElement("tr",{key:a.id},s.a.createElement("td",null,a.firstName),s.a.createElement("td",null,a.lastName),s.a.createElement("td",null,a.username),s.a.createElement("td",null,a.age),s.a.createElement("td",null,a.salary),s.a.createElement("td",null,s.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.deleteUser(a.id)}}," Delete"),s.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.editUser(a.id)},style:{marginLeft:"20px"}}," Edit")))}))))}}]),a}(n.Component),v=t(16),y=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(d.a)(a).call(this,e))).saveUser=function(e){e.preventDefault();var a={username:t.state.username,password:t.state.password,firstName:t.state.firstName,lastName:t.state.lastName,age:t.state.age,salary:t.state.salary};g.addUser(a).then(function(e){t.setState({message:"User added successfully."}),t.props.history.push("/users")})},t.onChange=function(e){return t.setState(Object(v.a)({},e.target.name,e.target.value))},t.state={username:"",password:"",firstName:"",lastName:"",age:"",salary:"",message:null},t.saveUser=t.saveUser.bind(Object(h.a)(t)),t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h2",{className:"text-center"},"Add User"),s.a.createElement("form",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"User Name:"),s.a.createElement("input",{type:"text",placeholder:"username",name:"username",className:"form-control",value:this.state.username,onChange:this.onChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Password:"),s.a.createElement("input",{type:"password",placeholder:"password",name:"password",className:"form-control",value:this.state.password,onChange:this.onChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"First Name:"),s.a.createElement("input",{placeholder:"First Name",name:"firstName",className:"form-control",value:this.state.firstName,onChange:this.onChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Last Name:"),s.a.createElement("input",{placeholder:"Last name",name:"lastName",className:"form-control",value:this.state.lastName,onChange:this.onChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Age:"),s.a.createElement("input",{type:"number",placeholder:"age",name:"age",className:"form-control",value:this.state.age,onChange:this.onChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Salary:"),s.a.createElement("input",{type:"number",placeholder:"salary",name:"salary",className:"form-control",value:this.state.salary,onChange:this.onChange})),s.a.createElement("button",{className:"btn btn-success",onClick:this.saveUser},"Save")))}}]),a}(n.Component),U=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(d.a)(a).call(this,e))).onChange=function(e){return t.setState(Object(v.a)({},e.target.name,e.target.value))},t.saveUser=function(e){e.preventDefault();var a={id:t.state.id,password:t.state.password,firstName:t.state.firstName,lastName:t.state.lastName,age:t.state.age,salary:t.state.salary};g.editUser(a).then(function(e){t.setState({message:"User added successfully."}),t.props.history.push("/users")})},t.state={id:"",firstName:"",lastName:"",age:"",salary:""},t.saveUser=t.saveUser.bind(Object(h.a)(t)),t.loadUser=t.loadUser.bind(Object(h.a)(t)),t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"loadUser",value:function(){var e=this;g.fetchUserById(window.localStorage.getItem("userId")).then(function(a){var t=a.data.result;e.setState({id:t.id,username:t.username,firstName:t.firstName,lastName:t.lastName,age:t.age,salary:t.salary})})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h2",{className:"text-center"},"Edit User"),s.a.createElement("form",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"User Name:"),s.a.createElement("input",{type:"text",placeholder:"username",name:"username",className:"form-control",readonly:"true",defaultValue:this.state.username})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"First Name:"),s.a.createElement("input",{placeholder:"First Name",name:"firstName",className:"form-control",value:this.state.firstName,onChange:this.onChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Last Name:"),s.a.createElement("input",{placeholder:"Last name",name:"lastName",className:"form-control",value:this.state.lastName,onChange:this.onChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Age:"),s.a.createElement("input",{type:"number",placeholder:"age",name:"age",className:"form-control",value:this.state.age,onChange:this.onChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Salary:"),s.a.createElement("input",{type:"number",placeholder:"salary",name:"salary",className:"form-control",value:this.state.salary,onChange:this.onChange})),s.a.createElement("button",{className:"btn btn-success",onClick:this.saveUser},"Save")))}}]),a}(n.Component);var C={color:"red",margin:"10px"},j=function(){return s.a.createElement("div",{className:"container"},s.a.createElement(c.a,null,s.a.createElement("div",{className:"col-md-6"},s.a.createElement("h1",{className:"text-center",style:C},"React User Application"),s.a.createElement(m.c,null,s.a.createElement(m.a,{path:"/",exact:!0,component:b}),s.a.createElement(m.a,{path:"/users",component:b}),s.a.createElement(m.a,{path:"/add-user",component:y}),s.a.createElement(m.a,{path:"/edit-user",component:U})))))};l.a.render(s.a.createElement(j,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.7b1f6a4d.chunk.js.map