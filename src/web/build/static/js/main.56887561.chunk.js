(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(e,t,n){e.exports=n(361)},174:function(e,t,n){},175:function(e,t,n){},21:function(e,t){e.exports={api_url:"https://chat-app-bbh.herokuapp.com/api"}},347:function(e,t){},361:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),s=n.n(o),i=(n(174),n(29)),l=n(30),c=n(32),u=n(31),h=n(33),p=(n(175),n(47)),d=n(34),f=n(149),g=n(16),m="START_LOGIN",b="LOGIN_SUCCESSFULL",v="LOGIN_FAIL",S="LOGIN_HANDLE_ERROR",E={startLogin:!1,loginSuccessfull:!1,error:null},y="START_SIGNUP",w="SIGNUP_SUCCESSFULL",k="SIGNUP_FAIL",C="SIGNUP_HANDLE_ERROR",x={startSignup:!1,signupSuccessfull:!1,error:null},O="REQUEST_LIST_USER",j="LIST_USER_FETCH_SUCCESSFULL",I="LIST_USER_FETCH_FAIL",D="LIST_USER_HANDLE_ERROR",_={isLoading:!1,users:[],error:null},L="REQUEST_LIST_CHAT",T="LIST_CHAT_FETCH_SUCCESSFULL",A="LIST_CHAT_FETCH_FAIL",P="LIST_CHAT_HANDLE_ERROR",R={isLoading:!1,chats:[],error:null},U=Object(d.c)({loginData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(g.a)({},e,{startLogin:!0});case b:return Object(g.a)({},e,{startLogin:!1,loginSuccessfull:!0});case v:return Object(g.a)({},e,{startLogin:!1,error:t.err});case S:return Object(g.a)({},e,{error:null});default:return e}},signupData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(g.a)({},e,{startSignup:!0});case w:return Object(g.a)({},e,{startSignup:!1,signupSuccessfull:!0});case k:return Object(g.a)({},e,{startSignup:!1,error:t.err});case C:return Object(g.a)({},e,{error:null});default:return e}},userData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(g.a)({},e,{isLoading:!0});case j:return Object(g.a)({},e,{isLoading:!1,users:t.users});case I:return Object(g.a)({},e,{isLoading:!1,error:t.error});case D:return Object(g.a)({},e,{error:null});default:return e}},chatData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(g.a)({},e,{isLoading:!0});case T:return Object(g.a)({},e,{isLoading:!1,chats:t.chats});case A:return Object(g.a)({},e,{isLoading:!1,error:t.error});case P:return Object(g.a)({},e,{error:null});default:return e}}}),H=Object(d.e)(U,Object(d.d)(Object(d.a)(f.a))),M=n(69),N=n(39),F=n(150),G=n(15),W=n.n(G),z=n(20),J=n(21),B=n.n(J);function K(e){var t=new Headers({"Content-Type":"application/json; charset=utf-8",Accept:"application/json"});return(e=e||q())&&t.append("x-access-token",e),t}n(151);var Q="userToken";function q(){return localStorage.getItem(Q)}function $(e){localStorage.setItem(Q,e)}function V(){return!!q()}var X=function(e){var t=e.component,n=Object(F.a)(e,["component"]);return r.a.createElement(N.b,Object.assign({},n,{render:function(e){return V()?r.a.createElement(t,e):r.a.createElement(N.a,{to:{pathname:"/",state:{from:e.location}}})}}))},Y=n(71);function Z(e,t){return function(n){n({type:m}),function(e,t){return new Promise(function(){var n=Object(z.a)(W.a.mark(function n(a,r){return W.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch(B.a.api_url+"/users/login",{method:"POST",body:JSON.stringify({username:e,password:t})}).then(function(e){return e.json()}).then(function(e){if(0===e.status)return r(e.error.message);var t=e.result.token;localStorage.setItem("userID",e.result.id),localStorage.setItem("userToken",e.result.token),$(t),a(t)}).catch(function(e){return r(e)}));case 1:case"end":return n.stop()}},n)}));return function(e,t){return n.apply(this,arguments)}}())}(e,t).then(function(e){n({type:b})}).catch(function(e){return n(function(e){return{type:v,err:e}}(e))})}}function ee(e,t,n,a){return function(r){r({type:y}),function(e,t,n,a){return new Promise(function(){var r=Object(z.a)(W.a.mark(function r(o,s){return W.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",fetch(B.a.api_url+"/users",{method:"POST",body:JSON.stringify({user:{username:e,password:t,full_name:n,phone:a}})}).then(function(e){return e.json()}).then(function(e){if(console.log(e),0===e.status)return s(e.error.message);o(e.result)}).catch(function(e){return s(e)}));case 1:case"end":return r.stop()}},r)}));return function(e,t){return r.apply(this,arguments)}}())}(e,t,n,a).then(function(e){r({type:w})}).catch(function(e){return r(function(e){return{type:k,err:e}}(e))})}}var te=n(95),ne=n.n(te),ae=n(154),re=n.n(ae),oe=n(158),se=n.n(oe),ie=n(156),le=n.n(ie),ce=n(157),ue=n.n(ce),he=n(155),pe=n.n(he),de=n(153),fe=n.n(de);function ge(e){return r.a.createElement(fe.a,Object.assign({direction:"up"},e))}var me=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!0},n.handleClose=function(){n.setState({open:!1}),n.props.onClose&&n.props.onClose()},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(re.a,{open:this.state.open,TransitionComponent:ge,onClose:this.handleClose,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(pe.a,{id:"alert-dialog-slide-title"},this.props.title),r.a.createElement(le.a,null,r.a.createElement(ue.a,{id:"alert-dialog-slide-description"},this.props.children)),r.a.createElement(se.a,null,r.a.createElement(ne.a,{onClick:this.handleClose,color:"primary"},"Close")))}}]),t}(a.Component),be=n(25),ve=n.n(be),Se=n(72),Ee=n.n(Se),ye=n(48),we=n.n(ye),ke=n(40),Ce=n.n(ke),xe=n(73),Oe=n.n(xe),je=n(74),Ie=n.n(je),De=n(161),_e=n.n(De),Le=n(159),Te=n.n(Le),Ae=n(160),Pe=n.n(Ae),Re={containers:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"92vh"},button:{fontSize:"40px"},rightpage:{display:"inline-block",backgroundColor:"#e6f7ff",height:"calc(100vh)",width:"calc(50vw)",verticalAlign:"top"},leftpage:{position:"relative",display:"inline-block",backgroundColor:"#fcfcfc",height:"calc(100vh)",width:"50vw",verticalAlign:"top"},above:{textAlign:"center"},login:{top:50,margin:"10px 30px",color:"#ffffff",backgroundColor:"#2765aa",width:"15vw",fontSize:20,fontWeight:"bold"},logins:{top:175,margin:"10px 30px",color:"#2765aa",backgroundColor:"#ffffff",width:"25vw",fontSize:20,fontWeight:"bold"},register:{top:50,margin:"10px 30px",color:"#2765aa",backgroundColor:"#ffffff",width:"15vw",fontSize:20,fontWeight:"bold"},registers:{top:100,margin:"10px 30px",color:"#ffffff",backgroundColor:"#2765aa",width:"25vw",fontSize:20,fontWeight:"bold"},textfield:{margin:"10px 30px",backgroundColor:"#ffffff",width:"15vw"},textwhile:{color:"#2765aa"},textwhiles:{color:"#fcfcfc"}},Ue=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={tab:1,username:"",phonenumber:"",password:"",password1:"",showPassword:!1},n.handleChange=function(e){return function(t){n.setState(Object(Y.a)({},e,t.target.value))}},n.handleClickShowPassword=function(){n.setState(function(e){return{showPassword:!e.showPassword}})},n.onClickSignin=function(){var e=n.state,t=e.username,a=e.password;return t?a?void n.props.login(t,a):alert("H\xe3y nh\u1eadp m\u1eadt kh\u1ea9u."):alert("H\xe3y nh\u1eadp t\xean \u0111\u0103ng nh\u1eadp.")},n.onClickSignup=function(){var e=n.state,t=e.username,a=e.password,r=e.password1,o=e.phonenumber;return o?t?a?a!==r?alert("M\u1eadt kh\u1ea9u nh\u1eadp l\u1ea1i kh\xf4ng tr\xf9ng"):void n.props.signup(t,a,o):alert("H\xe3y nh\u1eadp m\u1eadt kh\u1ea9u."):alert("H\xe3y nh\u1eadp t\xean \u0111\u0103ng nh\u1eadp."):alert("H\xe3y nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i.")},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){localStorage.getItem("userToken")&&this.props.history.push("/app")}},{key:"render",value:function(){var e=this;return this.props.loginData.loginSuccessfull&&this.props.history.push("/app"),r.a.createElement("div",null,r.a.createElement("div",{style:Re.leftpage,class:"imagebackgroud"},r.a.createElement("div",{style:Re.containers},r.a.createElement("h1",{style:Re.textwhile}," ",r.a.createElement(Te.a,{style:Re.button})," Join with us "),r.a.createElement("h1",{style:Re.textwhiles}," ",r.a.createElement(Pe.a,{style:Re.button})," Join the conversation with friends "),r.a.createElement("h1",{style:Re.textwhiles}," ",r.a.createElement(_e.a,{style:Re.button})," Share everything"))),r.a.createElement("div",{style:Re.rightpage},r.a.createElement("div",{style:Re.above},r.a.createElement(Ce.a,{variant:"extended","aria-label":"Delete",style:Re.login,onClick:function(){return e.setState({tab:2})}},"\u0110\u0103ng nh\u1eadp"),r.a.createElement(Ce.a,{variant:"extended","aria-label":"Delete",style:Re.register,onClick:function(){return e.setState({tab:3})}},"\u0110\u0103ng k\xfd")),r.a.createElement("div",{style:Re.containers},1===this.state.tab&&r.a.createElement("div",{class:"imagesss"}," "),2===this.state.tab&&r.a.createElement("div",{style:Re.containers},r.a.createElement(ve.a,{style:Re.textfield,id:"outlined-adornment-username",variant:"outlined",label:"T\xean \u0111\u0103ng nh\u1eadp",value:this.state.username,onChange:this.handleChange("username")}),r.a.createElement(ve.a,{style:Re.textfield,id:"outlined-adornment-password",variant:"outlined",type:this.state.showPassword?"text":"password",label:"M\u1eadt kh\u1ea9u",value:this.state.password,onChange:this.handleChange("password"),InputProps:{endAdornment:r.a.createElement(Ee.a,{position:"end"},r.a.createElement(we.a,{"aria-label":"Toggle password visibility",onClick:this.handleClickShowPassword},this.state.showPassword?r.a.createElement(Oe.a,null):r.a.createElement(Ie.a,null)))}}),r.a.createElement(Ce.a,{variant:"extended","aria-label":"Delete",style:Re.logins,onClick:this.onClickSignin,disabled:this.props.loginData.startLogin},"\u0110\u0103ng nh\u1eadp")),3===this.state.tab&&r.a.createElement("div",{style:Re.containers},r.a.createElement(ve.a,{style:Re.textfield,id:"outlined-adornment-phonenumber",variant:"outlined",label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",value:this.state.phonenumber,onChange:this.handleChange("phonenumber")}),r.a.createElement(ve.a,{style:Re.textfield,id:"outlined-adornment-username",variant:"outlined",label:"T\xean \u0111\u0103ng nh\u1eadp",value:this.state.username,onChange:this.handleChange("username")}),r.a.createElement(ve.a,{style:Re.textfield,id:"outlined-adornment-password",variant:"outlined",type:this.state.showPassword?"text":"password",label:"M\u1eadt kh\u1ea9u",value:this.state.password,onChange:this.handleChange("password"),InputProps:{endAdornment:r.a.createElement(Ee.a,{position:"end"},r.a.createElement(we.a,{"aria-label":"Toggle password visibility",onClick:this.handleClickShowPassword},this.state.showPassword?r.a.createElement(Oe.a,null):r.a.createElement(Ie.a,null)))}}),r.a.createElement(ve.a,{style:Re.textfield,id:"outlined-adornment-password1",variant:"outlined",type:this.state.showPassword?"text":"password",label:"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u",value:this.state.password1,onChange:this.handleChange("password1"),InputProps:{endAdornment:r.a.createElement(Ee.a,{position:"end"},r.a.createElement(we.a,{"aria-label":"Toggle password visibility",onClick:this.handleClickShowPassword},this.state.showPassword1?r.a.createElement(Oe.a,null):r.a.createElement(Ie.a,null)))}}),r.a.createElement(Ce.a,{variant:"extended","aria-label":"Delete",style:Re.registers,onClick:this.onClickSignup,disabled:this.props.signupData.startSignup},"\u0110\u0103ng k\xfd")),!!this.props.loginData.error&&r.a.createElement(me,{title:"Error",onClose:this.props.handeErrorLogin},this.props.loginData.error),!!this.props.signupData.error&&r.a.createElement(me,{title:"Error",onClose:this.props.handeErrorSignup},this.props.signupData.error.toString()),this.props.signupData.signupSuccessfull&&r.a.createElement(me,{title:"Successfull",onClose:this.props.handeErrorSignup}," \u0110\u0103ng k\xfd th\xe0ng c\xf4ng!!! "))))}}]),t}(a.Component),He=Object(p.b)(function(e){return{loginData:e.loginData,signupData:e.signupData}},function(e){return{login:function(t,n){return e(Z(t,n))},signup:function(t,n,a){return e(ee(t,n,a))},handeErrorLogin:function(){return e({type:S})},handeErrorSignup:function(){return e({type:C})}}})(Ue),Me=n(168),Ne=n(53);function Fe(){return new Promise(function(){var e=Object(z.a)(W.a.mark(function e(t,n){return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(B.a.api_url+"/chats",{headers:K()}).then(function(e){return e.json()}).then(function(e){if(0===e.status)return n(e.error.message);localStorage.setItem("chatData",e.result),t(e.result)}).catch(function(e){return n(e)}));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}())}function Ge(){return function(e){e({type:L}),Fe().then(function(t){e(function(e){return{type:T,chats:e}}(t))}).catch(function(t){return e({type:A,error:t})})}}function We(){return function(e){e({type:O}),new Promise(function(){var e=Object(z.a)(W.a.mark(function e(t,n){return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(B.a.api_url+"/users",{headers:K()}).then(function(e){return e.json()}).then(function(e){if(0===e.status)return n(e.error.message);t(e.result)}).catch(function(e){return n(e)}));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()).then(function(t){e(function(e){return{type:j,users:e}}(t))}).catch(function(t){return e({type:I,error:t})})}}var ze=n(162),Je=n.n(ze),Be=n(167),Ke=n.n(Be),Qe=n(96),qe=n.n(Qe),$e=n(98),Ve=n.n($e),Xe=n(100),Ye=n.n(Xe),Ze=n(99),et=n.n(Ze),tt=n(75),nt=n.n(tt),at=n(163),rt=n.n(at),ot=n(166),st=n.n(ot),it=n(164),lt=n.n(it),ct=n(165),ut=n.n(ct),ht=n(46),pt=n.n(ht),dt=n(52),ft=n.n(dt),gt={rightpage:{display:"inline-block",backgroundColor:"#f2f2f2",height:"calc(100vh)",width:"calc(75vw - 1px)",verticalAlign:"top"},leftpage:{position:"relative",display:"inline-block",backgroundColor:"#fcfcfc",height:"calc(100vh)",width:"25vw",verticalAlign:"top",borderRight:"1px solid #cccccc"},root:{width:"100%",maxWidth:"25vw",backgroundColor:"#ffffff",top:20},divappbar:{flexGrow:1,margin:"20px 20px"},appbar:{backgroundColor:"#d9d9d9",height:"4vw",flexGrow:1},chatbox:{backgroundColor:"#ffffff",height:"35vw",margin:"10px 10px",flexGrow:1,padding:20,overflow:"auto"},search:{backgroundColor:"#ffffff",width:"25vw",top:28,height:"4vw"},onappbar:{margin:"17px",color:"#3e64a3",fontWeight:"bold"},text:{fontSize:30},button:{margin:"0px 20px",color:"#ffffff",backgroundColor:"#d80f2d",padding:"20px",textAlign:"center",fontSize:"16px",borderRadius:"50%"},inputbox:{fontSize:30,margin:"10px 20px",color:"#ffffff",backgroundColor:"#ffffff",width:"calc(100% - 150px)",bottom:0},signout:{backgroundColor:"#163260",color:"#ffffff",bottom:0,position:"absolute",margin:"20px 20px"},seen:{display:"block",color:"#d10c1c",fontSize:"14px",paddingBottom:"4px",marginLeft:"1100",textAlign:"right"},othersMember:{marginTop:"10px"},currentMember:{textAlign:"right",marginTop:"10px"},containsMessage:{display:"inline-block"},username:{display:"block",color:"#3e64a3",fontSize:"18px",paddingBottom:"4px",fontWeight:"bold"},message:{padding:"10px","max\u01afidth":"400px",margin:0,borderRadius:"12px",backgroundColor:"#cbd0d8",color:"#ffffff",display:"inline-block"}},mt=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).onClickSignout=function(){sessionStorage.removeItem(Q),n.socket.close(),localStorage.clear(),n.props.history.push("/"),window.location.reload()},n.handleSearch=function(){},n.handleToggle=function(e){return function(){var t=n.state.checked,a=t.indexOf(e),r=Object(Me.a)(t);-1===a?r.push(e):r.splice(a,1)}},n.handleScroll=function(){var e=document.getElementById("boxMessage");e.scrollTop=e.scrollHeight},n.handleClickUser=function(e,t){n.setState({choose:e,avt:t}),n.props.history.push({pathname:"/app/chat/"+e.username}),n.setState({tab:2},function(){n.handleScroll()})},n.onFocus=function(){Fe().then(function(e){var t;n.setState({chatsData:e}),n.state.chatsData.map(function(e){e.sender==n.state.choose._id&&e.receiver==localStorage.getItem("userID")&&(t=e._id)}),t&&n.socket.emit("isSeen",{chat_id:t}),console.log("asdasd",t)})},n.props.getListUsers(),n.props.getListChats(),n.socket=null,n.state={status:!1,chatsData:[],seen:"",search:"",message:"",choose:{},avt:"",tab:1,tabuser:1},Fe().then(function(e){if(n.setState({chatsData:e}),e){var t=[];e.map(function(e){e.sender==localStorage.getItem("userID")&&e.receiver==n.state.choose._id&&t.push(e),e.receiver==localStorage.getItem("userID")&&e.sender==n.state.choose._id&&t.push(e)}),t[0]&&(t[t.length-1].isSeen&&t[t.length-1].sender==localStorage.getItem("userID")?n.setState({seen:"SEEN"}):n.setState({seen:""}))}}),n.handleKeyPressSearch=n.handleKeyPressSearch.bind(Object(Ne.a)(Object(Ne.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleKeyPressSearch",value:function(e){"Enter"===e.key&&this.handleSearch()}},{key:"onSubmit",value:function(e){if(this.state.message){this.socket.emit("newMessage",{content:this.state.message,receiver:this.state.choose._id}),console.log("Hieu dep trai"+this.state.choose.username);var t={sender:localStorage.getItem("userID"),receiver:this.state.choose._id,content:this.state.message,_created:Date.now()},n=this.state.chatsData;n.push(t),this.setState({chatsData:n}),this.setState({message:"",seen:""})}e.preventDefault()}},{key:"componentWillMount",value:function(){var e=this,t=localStorage.getItem("userToken");this.socket=Je()("http://localhost:3000/chat",{query:{token:t}}),this.socket.on("newMessage",function(t){e.setState({seen:""}),console.log("Hieu Ml",t),e.setState({chatsData:t})}),this.socket.on("isSeen",function(t){console.log("sda",t);var n=[];t.map(function(t){t.sender==localStorage.getItem("userID")&&t.receiver==e.state.choose._id&&n.push(t),t.receiver==localStorage.getItem("userID")&&t.sender==e.state.choose._id&&n.push(t)}),n[0]&&(n[n.length-1].isSeen&&n[n.length-1].sender==localStorage.getItem("userID")?e.setState({seen:"SEEN"}):e.setState({seen:""}))})}},{key:"render",value:function(){var e=this;return console.log(this.props.userData.users),r.a.createElement("div",null,r.a.createElement("div",{style:gt.leftpage},r.a.createElement(ve.a,{onFocus:function(){return e.setState({tabuser:2})},style:gt.search,id:"outlined-adornment-search",variant:"outlined",label:"T\xecm ki\u1ebfm b\u1ea1n b\xe8",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})},onKeyPress:this.handleKeyPressSearch,InputProps:{endAdornment:r.a.createElement(we.a,{onClick:function(t){return e.handleSearch(t)}},r.a.createElement(rt.a,null))}}),r.a.createElement(qe.a,{dense:!0,style:gt.root},1===this.state.tabuser&&this.props.userData.users.map(function(t,n){return r.a.createElement(Ve.a,{key:t,onClick:function(){return e.handleClickUser(t,n)},button:!0},r.a.createElement(et.a,null,r.a.createElement(nt.a,{alt:"Avatar n\xb0".concat(n+1),src:"/avatar/".concat(n+1,".jpg")})),r.a.createElement(Ye.a,{primary:t.username}))}),2===this.state.tabuser&&this.props.userData.users.map(function(t,n){return r.a.createElement(Ve.a,{key:t,onClick:function(){return e.handleClickUser(t,n)},button:!0},r.a.createElement(et.a,null,r.a.createElement(nt.a,{alt:"Avatar n\xb0".concat(n+1),src:"/avatar/".concat(n+1,".jpg")})),r.a.createElement(Ye.a,{primary:t.username}))})),r.a.createElement(Ce.a,{variant:"extended","aria-label":"Delete",style:gt.signout,onClick:this.onClickSignout},"Tho\xe1t")),r.a.createElement("div",{style:gt.rightpage},r.a.createElement("div",{style:gt.divappbar},1===this.state.tab&&r.a.createElement("div",null," "),2===this.state.tab&&r.a.createElement("div",null,r.a.createElement(lt.a,{position:"static",style:gt.appbar},r.a.createElement(ut.a,{variant:"dense"},r.a.createElement(nt.a,{style:gt.onappbar,alt:"Avatar n\xb0".concat(this.state.avt+1),src:"/avatar/".concat(this.state.avt+1,".jpg")}),r.a.createElement(pt.a,{variant:"h6",color:"inherit",style:gt.onappbar},this.state.choose.username))),r.a.createElement(ft.a,{style:gt.chatbox,elevation:1,id:"boxMessage"},this.state.chatsData.map(function(t){return t.receiver==e.state.choose._id&&t.sender==localStorage.getItem("userID")?e.renderMessage(t.sender,t.content,t._created,"Me"):t.receiver==localStorage.getItem("userID")&&t.sender==e.state.choose._id?e.renderMessage(t.sender,t.content,t._created,e.state.choose.username):void 0}),r.a.createElement("div",{style:gt.seen},this.state.seen)),r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement(ve.a,{style:gt.inputbox,id:"outlined-adornment-message",variant:"outlined",label:"Nh\u1eadp tin nh\u1eafn",value:this.state.message,onChange:function(t){return e.setState({message:t.target.value})},onFocus:this.onFocus}),r.a.createElement("button",{style:gt.button},r.a.createElement(st.a,null)))))))}},{key:"renderMessage",value:function(e,t,n,a){var o;return e==localStorage.getItem("userID")&&(o=gt.currentMember),e==this.state.choose._id&&(o=gt.othersMember),r.a.createElement("div",{style:o},r.a.createElement(Ke.a,{title:n},r.a.createElement("div",null,r.a.createElement("div",{style:gt.containsMessage},r.a.createElement("div",{style:gt.username},a),r.a.createElement("div",{style:gt.message},t)))))}}]),t}(a.Component),bt=Object(p.b)(function(e){return{chatData:e.chatData,userData:e.userData}},function(e){return{getListChats:function(){return e(Ge())},getListUsers:function(){return e(We())}}})(mt),vt=function(){return r.a.createElement(M.a,null,r.a.createElement("div",null,r.a.createElement(N.b,{exact:!0,path:"/",component:He}),r.a.createElement(X,{path:"/app",component:bt})))},St=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{store:H},r.a.createElement(vt,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(St,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[169,1,2]]]);
//# sourceMappingURL=main.56887561.chunk.js.map