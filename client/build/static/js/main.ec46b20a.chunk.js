(this["webpackJsonpsimple-mern-passport"]=this["webpackJsonpsimple-mern-passport"]||[]).push([[0],{113:function(e,t,a){e.exports=a(265)},142:function(e,t,a){},145:function(e,t,a){e.exports=a.p+"static/media/2022.663ddf88.png"},265:function(e,t,a){"use strict";a.r(t);a(114),a(115),a(66);var n=a(0),r=a.n(n),c=a(105),s=a.n(c),o=a(4),i=a(5),l=a(8),m=a(6),u=a(7),d=a(2),p=a(22),h=a(14),f=a.n(h),g=a(21),b=f.a.create({baseURL:"/"}),E=function(){return new Promise((function(e,t){b.post("/user/logout").then((function(t){e(t)})).catch((function(e){t(e)}))}))},v=function(e){var t=e.CityID;return new Promise((function(e,a){b.post("/user/addFriendCity",{CityID:t}).then((function(t){console.log("response",t),e(t)})).catch((function(e){a(e)}))}))},y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state;(function(e){var t=e.username,a=e.password,n=e.name;return new Promise((function(e,r){b.post("/user/signup",{username:t,password:a,name:n}).then((function(t){var a=t.data;e(a)})).catch((function(e){r(e)}))}))})({username:t.username,password:t.password,name:t.name}).then((function(e){a.props.updateUser({loggedIn:!0,user:e}),null!=a.state.CityID?a.addCity():a.setState({redirectTo:"/"})})).catch((function(e){console.log(e)}))},a.addCity=function(){var e=a.state.CityID;v({CityID:e}).then((function(e){a.setState({redirectTo:"/"})})).catch((function(e){console.log(e)}))},a.state={username:"",password:"",confirmPassword:"",name:"",redirectTo:null,CityID:a.props.match.params.CityID||null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.redirectTo?r.a.createElement(p.a,{to:{pathname:this.state.redirectTo}}):r.a.createElement("div",{className:"container"},r.a.createElement("h4",null,"Sign up"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("label",{htmlFor:"username"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",autoComplete:"username",id:"username",name:"username","aria-describedby":"emailHelp",value:this.state.username,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",id:"name",name:"name","aria-describedby":"emailHelp",className:"form-control",value:this.state.name,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",autoComplete:"new-password",className:"form-control",id:"password",name:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.handleSubmit},"Sign Up")))}}]),t}(n.Component),C=a(33),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).addCity=function(){var e=a.state.cityID;v({cityID:e}).then((function(e){a.setState({redirectTo:"/"})})).catch((function(e){console.log(e)}))},a.state={username:"",password:"",redirectTo:null,cityID:a.props.match.params.cityID||null},a.handleSubmit=a.handleSubmit.bind(Object(C.a)(a)),a.handleChange=a.handleChange.bind(Object(C.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state;(function(e){var t=e.username,a=e.password;return new Promise((function(e,n){b.post("/user/login",{username:t,password:a}).then((function(t){var a=t.data;e(a)})).catch((function(e){n(e)}))}))})({username:a.username,password:a.password}).then((function(e){t.props.updateUser({loggedIn:!0,user:e}),null!=t.state.cityID?t.addCity():t.setState({redirectTo:"/"})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return console.log("1",this.props.match.params.cityID,this.state.redirectTo),this.state.redirectTo?r.a.createElement(p.a,{to:{pathname:this.state.redirectTo}}):r.a.createElement("div",{className:"container"},r.a.createElement("h4",null,"Login"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("label",{htmlFor:"username"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"username",autoComplete:"username",name:"username","aria-describedby":"emailHelp",value:this.state.username,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",autoComplete:"current-password",className:"form-control",id:"password",name:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.handleSubmit},"Login")))}}]),t}(n.Component),w=(a(142),a(9)),N=a(10),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).logout=function(e){e.preventDefault(),E().then((function(e){200===e.status&&(a.props.updateUser({loggedIn:!1,user:null}),a.setState({redirectTo:"/"}))})).catch((function(e){console.log(e)}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.loggedIn,t=this.props.user;return r.a.createElement("nav",{className:"navbar navbar-expand-lg"},r.a.createElement(d.b,{to:"/",className:"btn"},r.a.createElement(w.a,{icon:N.f,size:"2x"})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav"},e?r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/cities",className:"btn"},r.a.createElement(w.a,{icon:N.a,size:"2x"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/user/".concat(t._id),className:"btn"},r.a.createElement(w.a,{icon:N.h,size:"2x"})))):r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/signup",className:"btn"},r.a.createElement("span",{className:""},"Sign up"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/login",className:"btn"},r.a.createElement("span",{className:""},"Login"))))))}}]),t}(n.Component),j=a(108),U=(a(145),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){j.a.timeline({loop:!1}).add({targets:".logo .word",scale:[14,1],opacity:[0,1],easing:"cubicBezier(.5, .05, .1, .3)",duration:300,delay:function(e,t){return 300*t}})},a.state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-left p-4 logo"},r.a.createElement("h1",{class:"logo1 word"},"Brandy's"),r.a.createElement("h1",{class:"logo2 word"},"Remote"),r.a.createElement("h1",{class:"logo3 word"},"Year"))}}]),t}(n.Component)),S=function(e){var t=e.state.user,a=e.state.cities;return r.a.createElement("div",null,t&&r.a.createElement("div",{className:"container text-center"},r.a.createElement("h1",null,"Hello, ",t.name),a&&r.a.createElement("div",null,a.map((function(e){return r.a.createElement(d.b,{to:"/city/".concat(e._id)},r.a.createElement("h4",null,e.title))})))))},k=a(26),I=a.n(k),D=f.a.create({baseURL:"/city"}),P=function(e){var t=e.title,a=e.description,n=e.imageUrl;return new Promise((function(e,r){D.post("/add",{title:t,description:a,imageUrl:n}).then((function(t){var a=t.data.data.city;e(a)})).catch((function(e){r(e)}))}))},T=function(e){return new Promise((function(t,a){D.get("/".concat(e)).then((function(e){t(e.data.data.city[0])})).catch((function(e){console.log("Cities",e)}))}))},z=a(45),L=a(19),M=function(e,t){var a=L.Util.withSnakeCaseKeys(e);window.cloudinary.openUploadWidget(a,t)};var A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).beginUpload=function(e,t){e.preventDefault(),M({cloudName:"dz3ipymey",tags:[t,"anImage"],uploadPreset:"e3kxwxiy",folder:"remoteyear"},(function(e,t){e?console.log(e):"success"===t.event&&(console.log(JSON.stringify(t)),a.setState({imageUrl:t.info.url}))}))},a.handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){var t,n,r,c;return I.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:e.preventDefault(),t=a.state,n=t.title,r=t.description,c=t.imageUrl,P({title:n,description:r,imageUrl:c}).then((function(e){a.props.history.push("/city/".concat(e.title))})).catch((function(e){console.log(e)}));case 3:case"end":return s.stop()}}))},a.state={title:"",description:"",imageUrl:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{class:"container"},r.a.createElement("h1",null,"New City"),r.a.createElement("form",null,r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"City-name"},"City Name"),r.a.createElement("input",{type:"text",class:"form-control",id:"City-name",name:"title","aria-describedby":"Cityname",placeholder:"Enter City Name",value:this.state.title,onChange:this.handleChange})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"description"},"Description"),r.a.createElement("textarea",{class:"form-control",name:"description",id:"exampleFormControlTextarea1",rows:"3",value:this.state.description,onChange:this.handleChange})),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement(z.CloudinaryContext,{cloudName:"dz3ipymey"},r.a.createElement("div",{className:"App"},r.a.createElement("button",{class:"btn btn-outline-warning",onClick:function(t){return e.beginUpload(t,"image")}},"Choose Image"))))),r.a.createElement("button",{type:"submit",class:"btn btn-outline-warning",onClick:this.handleSubmit},"Submit")))}}]),t}(n.Component),_=f.a.create({baseURL:"/post"}),F=function(e){var t=e.link,a=e.description,n=e.type,r=e.city,c=e.imageUrl;return new Promise((function(e,s){_.post("/add",{link:t,description:a,type:n,city:r,imageUrl:c}).then((function(t){var a=t.data.data;e(a)})).catch((function(e){s(e)}))}))},R=function(e){var t=e.commentId,a=e.commentText;return new Promise((function(e,n){_.post("/addComment",{commentId:t,commentText:a}).then((function(t){var a=t.data.data;e(a)})).catch((function(e){n(e)}))}))},H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.loadCity(),a.loadPosts()},a.loadPosts=function(){var e;(e=a.props.match.params.title,new Promise((function(t,a){_.get("/posts/".concat(e)).then((function(e){t(e.data.data.post)})).catch((function(e){console.log("Cities",e)}))}))).then((function(e){a.setState({posts:e})})).catch((function(e){console.log(e)}))},a.loadCity=function(){T(a.props.match.params.title).then((function(e){a.setState({cityInfo:e})})).catch((function(e){console.log(e)}))},a.addNewPost=function(e){a.setState({type:e,showModal:!0})},a.closeModal=function(){a.setState({showModal:!1,link:"",description:""})},a.beginUpload=function(e,t){e.preventDefault(),M({cloudName:"dz3ipymey",tags:[t,"anImage"],uploadPreset:"e3kxwxiy",folder:"remoteyear"},(function(e,t){e?console.log(e):"success"===t.event&&(console.log(JSON.stringify(t)),a.setState({imageUrl:t.info.url}))}))},a.handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.handlePostSubmit=function(e){var t,n,r,c,s,o;return I.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:e.preventDefault(),t=a.state,n=t.description,r=t.link,c=t.type,s=t.imageUrl,o=a.state.cityInfo.title,F({description:n,link:r,type:c,city:o,imageUrl:s}).then((function(e){a.closeModal(),a.loadPosts()})).catch((function(e){console.log(e)}));case 4:case"end":return i.stop()}}))},a.handleCommentSubmit=function(e){var t,n,r;return I.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:e.preventDefault(),t=a.state,n=t.commentId,r=t.commentText,R({commentId:n,commentText:r}).then((function(e){a.setState({commentId:""}),a.loadPosts()})).catch((function(e){console.log(e)}));case 3:case"end":return c.stop()}}))},a.openComments=function(e){a.setState({commentId:e})},a.state={cityInfo:[],posts:[],type:"",showModal:!1,link:"",description:"",imageUrl:"",fileName:"",commentId:"",commentText:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this,a=this.state.cityInfo,n=this.state.posts,c=this.state.showModal,s=this.state.type;return e=this.state.imageUrl?r.a.createElement("p",{class:"d-inline ml-4"},this.state.imageUrl.slice(this.state.imageUrl.lastIndexOf("/")+1)):r.a.createElement("p",{class:"d-inline ml-4"},"No file selected"),r.a.createElement("div",{className:"posts mb-5"},r.a.createElement("div",{className:"text-center"},a&&r.a.createElement("div",null,r.a.createElement("h1",{className:"mt-4 cityTitle"},a.title),r.a.createElement("div",{class:"container"},r.a.createElement("button",{className:"p-4 btn buttonWrap",onClick:function(){return t.addNewPost("image")}},r.a.createElement(w.a,{icon:N.b,size:"2x"}),r.a.createElement("p",{class:"buttonDesc"},"Add a photo")),r.a.createElement("button",{className:"p-4 btn buttonWrap",onClick:function(){return t.addNewPost("article")}},r.a.createElement("span",{class:"buttonDesc"},"Add an article"),r.a.createElement(w.a,{icon:N.c,size:"2x"})),r.a.createElement("button",{className:"p-4 btn buttonWrap",onClick:function(){return t.addNewPost("note")}},r.a.createElement("span",{class:"buttonDesc"},"Add a note"),r.a.createElement(w.a,{icon:N.e,size:"2x"})))),n&&r.a.createElement("div",{class:"row justify-content"},n.map((function(e){return"article"==e.postType?r.a.createElement("div",{class:"col-md-4 mt-4 article card1"},r.a.createElement("a",{href:e.url,target:"_blank"},r.a.createElement("h4",{class:"text-dark text-left mt-3 title"},e.title),r.a.createElement("p",{class:"text-left url"},e.url.match(/^https?:\/\/[^#?\/]+/).toString().replace("https://","")),r.a.createElement("img",{src:e.imagePreview,class:"w-100"})),e.description&&r.a.createElement("p",{class:" text-left pt-2 mt-2 desc"},e.description),r.a.createElement("button",{class:"btn d-block"},r.a.createElement("p",{onClick:function(){return t.openComments(e._id)},class:"mt-2 text-dark text-left"},1==e.comment.length?e.comment.length+" Comment":e.comment.length+" Comments"," ",r.a.createElement(w.a,{className:"mt-1 text-right text-dark",icon:N.d,size:"1x"}))),t.state.commentId==e._id&&r.a.createElement("div",null,e.comment&&r.a.createElement("div",{class:""},e.comment.map((function(e){return r.a.createElement("div",{class:"border-bottom"},r.a.createElement("p",{class:"text-left text-dark mt-2 mb-0"},e.comment),r.a.createElement("p",{class:"text-right name"},e.user.name))}))),r.a.createElement("form",{class:"form-group text-right"},r.a.createElement("textarea",{onChange:t.handleChange,class:"form-control",rows:"3",type:"text",id:"commentText",name:"commentText"}),r.a.createElement("button",{type:"submit",class:"mt-2 btn btn-outline-warning",onClick:t.handleCommentSubmit},"Add")))):"image"==e.postType?r.a.createElement("div",{class:"col-md-4 mt-4 image card1"},r.a.createElement("h4",{class:"text-left mt-3 text-dark title"},e.description),r.a.createElement("img",{"data-toggle":"modal","data-target":"#img"+e._id,src:e.imageUrl,class:"w-100"}),r.a.createElement("div",{id:"img"+e._id,class:"modal fade bd-example-modal-lg",tabindex:"-1",role:"dialog","aria-labelledby":"myLargeModalLabel","aria-hidden":"true"},r.a.createElement("div",{class:"modal-dialog modal-lg"},r.a.createElement("div",{class:"modal-content"},r.a.createElement("img",{src:e.imageUrl,class:""})))),r.a.createElement("button",null,r.a.createElement(w.a,{icon:N.d,size:"1x"}))):"note"==e.postType?r.a.createElement("div",{class:"col-md-4 card1 mt-4 note"},r.a.createElement("h3",{class:"text-center"},e.description),r.a.createElement("button",null,r.a.createElement(w.a,{icon:N.d,size:"1x"}))):void 0})))),c&&r.a.createElement("div",{class:"modal1",id:"modal1"},r.a.createElement("div",{class:"content"},r.a.createElement("div",{class:"text-right"},r.a.createElement("button",{class:"toggle-button btn",onClick:this.closeModal},r.a.createElement(w.a,{icon:N.g,size:"1x"}))),r.a.createElement("h2",{class:"text-center pb-3"},"ADD ",s.toUpperCase()),r.a.createElement("form",null,"article"==s&&r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"link"},"Link"),r.a.createElement("input",{type:"text",class:"form-control",id:"link",name:"link",placeholder:"Enter Link",value:this.state.link,onChange:this.handleChange})),"image"==s&&r.a.createElement("div",{className:"form-group"},r.a.createElement(z.CloudinaryContext,{cloudName:"dz3ipymey"},r.a.createElement("div",{className:"App"},r.a.createElement("button",{class:"btn btn-outline-warning",onClick:function(e){return t.beginUpload(e,"image")}},"Choose Image"),e))),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"description"},"Description"),r.a.createElement("textarea",{class:"form-control",name:"description",id:"description",rows:"6",value:this.state.description,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",class:"btn btn-outline-warning",onClick:this.handlePostSubmit},"Submit")))))}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.getCities()},a.getCities=function(){new Promise((function(e,t){D.get("/getUserCities").then((function(t){e(t.data.data.city)})).catch((function(e){console.log("User Cities",e)}))})).then((function(e){a.setState({cities:e})})).catch((function(e){console.log(e)}))},a.state={cities:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.cities,t={position:"relative",textAlign:"center",color:"white",height:"300px",overflow:"hidden"},a={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"45px",textShadow:"rgb(0 0 0) 5px 0px 5px, rgb(0 0 0) 1px 1px 0px, rgb(0 0 0) 1px -1px 0px, rgb(0 0 0) -1px -1px 0px",color:"white"};return r.a.createElement("div",null,r.a.createElement("div",{className:"container text-center"},e&&r.a.createElement("div",{class:"row"},e.map((function(e){return r.a.createElement("div",{class:"col-md-6",style:t},r.a.createElement(d.b,{to:"/city/".concat(e.title)},r.a.createElement("h4",{style:a},e.title),r.a.createElement("img",{src:e.imageUrl,class:"w-100 mt-4"})))}))),r.a.createElement(d.b,{to:"/city/new",className:"btn mt-5"},r.a.createElement(w.a,{icon:N.d,size:"5x"}))))}}]),t}(n.Component),J=a(111),B=a(110),q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.loadCity()},a.loadCity=function(){T(a.props.match.params.id).then((function(e){a.setState({city:e})})).catch((function(e){console.log(e)}))},a.addDescription=function(e,t){var n=Object(J.a)(a.state.imageUrl);n[t].description=e.target.value;"Date.now()".imageUploadTime=Date.now(),a.setState({imageUrl:n})},a.addPhotos=function(){var e,t;(e=a.state.imageUrl.concat(a.state.city.imageUrl),t=a.props.match.params.id,new Promise((function(a,n){D.post("/".concat(t,"/edit"),{photos:e}).then((function(e){a(e.data.data.city)})).catch((function(e){console.log("Cities",e)}))}))).then((function(e){a.props.history.push("/city/".concat(a.state.city._id))})).catch((function(e){console.log(e)}))},a.handleUploadImages=function(e){a.setState({imageStatus:"Loading..."});var t=[],n=e.map((function(e){var n=new FormData;return n.append("file",e),n.append("upload_preset","e3kxwxiy"),n.append("api_key","676778632785877"),n.append("timestamp",Date.now()/1e3|0),f.a.post("https://api.cloudinary.com/v1_1/dz3ipymey/image/upload",n,{headers:{"X-Requested-With":"XMLHttpRequest"}}).then((function(e){t.push({image:e.data.url}),a.setState({imageUrl:t})}))}));f.a.all(n).then((function(){a.setState({imageStatus:"Done"}),a.setState({imageUrl:t}),console.log("Images have all being uploaded",n)}))},a.state={city:[],imageUrl:[],imageStatus:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.city;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center"},"Your City"),r.a.createElement(B.a,{onDrop:this.handleUploadImages},(function(e){var t=e.getRootProps,a=e.getInputProps;return r.a.createElement("div",t(),r.a.createElement("input",a()),r.a.createElement("strong",null,r.a.createElement("p",{className:"border p-3"},"Drag and Drop Photos or Click to Add")))})),r.a.createElement("div",{class:"container"},t.imageUrl&&r.a.createElement("div",{class:"row"},this.state.imageUrl.map((function(t,a){return r.a.createElement("div",{class:"col-lg-4"},r.a.createElement("img",{class:"w-100",alt:"city",src:t.image}),r.a.createElement("textarea",{rows:"4",className:"w-100",placeholder:"Add a description",onChange:function(t){e.addDescription(t,a)}}))}))),this.state.imageUrl.length>0&&r.a.createElement("button",{class:"btn btn-lg btn-success d-block mx-auto",type:"submit",onClick:this.addPhotos},"Add To City")))}}]),t}(n.Component),G=a(112),X=function(e){var t=e.user,a=e.render,n=e.component,c=Object(G.a)(e,["user","render","component"]);return r.a.createElement(p.b,Object.assign({},c,{render:function(e){return t?"function"===typeof a?a(e):"undefined"!==typeof n?r.a.createElement(n,e):void 0:r.a.createElement(p.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},Y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.getUser()},a.updateUser=function(e){a.setState(e)},a.getUser=function(){f.a.get("/user/").then((function(e){e.data.user?(console.log("Get User: There is a user saved in the server session"),a.setState({loggedIn:!0,user:e.data.user,userLoaded:!0})):(console.log("Get user: no user"),a.setState({loggedIn:!1,user:null,userLoaded:!0}))}))},a.state={loggedIn:!1,user:null,userLoaded:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement(O,{updateUser:this.updateUser,user:this.state.user,loggedIn:this.state.loggedIn}),this.state.userLoaded&&r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",user:this.state.user,render:function(t){return r.a.createElement(U,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(p.b,{exact:!0,path:"/login",render:function(t){return r.a.createElement(x,Object.assign({},t,{updateUser:e.updateUser}))}}),r.a.createElement(p.b,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(y,Object.assign({},t,{updateUser:e.updateUser}))}}),r.a.createElement(X,{path:"/user/:id",user:this.state.user,render:function(t){return r.a.createElement(S,Object.assign({},t,{state:e.state}))}}),r.a.createElement(X,{path:"/cities",user:this.state.user,render:function(t){return r.a.createElement(W,Object.assign({},t,{state:e.state}))}}),r.a.createElement(X,{path:"/city/new",exact:!0,user:this.state.user,render:function(t){return r.a.createElement(A,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(X,{path:"/city/:title/edit",user:this.state.user,render:function(t){return r.a.createElement(q,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(X,{path:"/city/:title",user:this.state.user,render:function(t){return r.a.createElement(H,Object.assign({},t,{user:e.state.user}))}})))}}]),t}(n.Component),K=a(11),Q=Object(K.a)();s.a.render(r.a.createElement(d.a,null,r.a.createElement(Y,{history:Q})),document.getElementById("root"))},66:function(e,t,a){}},[[113,1,2]]]);
//# sourceMappingURL=main.ec46b20a.chunk.js.map