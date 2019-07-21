(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(59)},39:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),l=a.n(o),c=(a(39),a(40),a(17)),s=a(3),i=a(9),m=a(10),u=a(13),p=a(11),d=a(12),h=a(27).initializeApp({apiKey:"AIzaSyBXSGOF1XWSzPTrovF8RQ7GjUHWPCX0FM4",authDomain:"notes-4d5bf.firebaseapp.com",databaseURL:"https://notes-4d5bf.firebaseio.com",projectId:"notes-4d5bf",storageBucket:"",messagingSenderId:"149442703685",appId:"1:149442703685:web:9b17d58d1cbfca13"}),b=function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("button",{className:"signOut",onClick:function(){return h.auth().signOut()}},"Sign out"),r.a.createElement("h3",{className:"title"},"React",r.a.createElement("span",null,"x"),"Firebase"))},f=a(29),E=a(19),v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={title:"",note:""},e.createNote=e.createNote.bind(Object(E.a)(e)),e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onChangeHandler",value:function(e,t){this.setState(Object(f.a)({},t,e.target.value))}},{key:"createNote",value:function(){""!==this.state.title&&""!==this.state.note&&h.database().ref("notes").push({title:this.state.title,note:this.state.note})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"noteform"},r.a.createElement("h3",null,"Create New Note"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"noteform-title"},"Title"),r.a.createElement("input",{type:"text",id:"noteform-title",name:"noteform-title",value:this.state.title,onChange:function(t){return e.onChangeHandler(t,"title")}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"noteform-note"},"Note"),r.a.createElement("textarea",{name:"noteform-note",id:"noteform-note",value:this.state.note,onChange:function(t){return e.onChangeHandler(t,"note")}})),r.a.createElement("button",{className:"btn btn-light",onClick:this.createNote},"Create Note"))}}]),t}(n.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"removeNote",value:function(e){h.database().ref("notes").child(e).remove()}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"notes-wrapper"},r.a.createElement("h3",null,"Notes"),r.a.createElement("div",{className:"notes row"},this.props.notes.map(function(t){return r.a.createElement("div",{className:"note col col-12 col-sm-6 col-md-4 col-lg-4",key:t.id},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"note-title"},r.a.createElement("h3",null,t.title),r.a.createElement("div",{className:"remove",onClick:function(){return e.removeNote(t.id)}},"x")),r.a.createElement("div",{className:"note-content"},r.a.createElement("p",null,t.note))))})))}}]),t}(n.Component),N=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={notes:[]},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){document.title="Home page",this.db=h.database(),this.listenForChange()}},{key:"listenForChange",value:function(){var e=this;this.db.ref("notes").on("child_added",function(t){var a={id:t.key,title:t.val().title,note:t.val().note},n=e.state.notes;n.push(a),e.setState({notes:n})}),this.db.ref("notes").on("child_removed",function(t){var a=e.state.notes;a=a.filter(function(e){return e.id!==t.key}),e.setState({notes:a})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement("main",null,r.a.createElement(g,{notes:this.state.notes}),r.a.createElement(v,null)))}}]),t}(n.Component),w=a(14),O=a.n(w),j=a(20),y=a(33),k=r.a.createContext(),C=function(e){var t=e.children,a=Object(n.useState)(null),o=Object(y.a)(a,2),l=o[0],c=o[1];return Object(n.useEffect)(function(){h.auth().onAuthStateChanged(c)},[]),r.a.createElement(k.Provider,{value:{currentUser:l}},t)},x=Object(s.f)(function(e){var t=e.history,a=Object(n.useCallback)(function(){var e=Object(j.a)(O.a.mark(function e(a){var n,r,o;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,r=n.email,o=n.password,e.prev=2,e.next=5,h.auth().signInWithEmailAndPassword(r.value,o.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}},e,null,[[2,8]])}));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(n.useContext)(k).currentUser?r.a.createElement(s.a,{to:"/"}):r.a.createElement("div",{className:"registerContainer"},r.a.createElement("h1",null,"Log in"),r.a.createElement("form",{className:"login",onSubmit:a},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{name:"email",type:"email",placeholder:"Email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-light",type:"submit"},"Log in")),r.a.createElement("div",{className:"form-group"},r.a.createElement(c.b,{to:"/signup"},r.a.createElement("button",{className:"btn btn-dark",type:"submit"},"Sign up")))))}),S=Object(s.f)(function(e){var t=e.history,a=Object(n.useCallback)(function(){var e=Object(j.a)(O.a.mark(function e(a){var n,r,o;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,r=n.email,o=n.password,e.prev=2,e.next=5,h.auth().createUserWithEmailAndPassword(r.value,o.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}},e,null,[[2,8]])}));return function(t){return e.apply(this,arguments)}}(),[t]);return r.a.createElement("div",{className:"registerContainer"},r.a.createElement("h1",null,"Sign up"),r.a.createElement("form",{className:"register",onSubmit:a},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{name:"email",type:"email",placeholder:"Email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-light",type:"submit"},"Sign up")),r.a.createElement("div",{className:"form-group"})))}),F=a(32),P=function(e){var t=e.component,a=Object(F.a)(e,["component"]),o=Object(n.useContext)(k).currentUser;return r.a.createElement(s.b,Object.assign({},a,{render:function(e){return o?r.a.createElement(t,e):r.a.createElement(s.a,{to:"/login"})}}))},A=function(){return r.a.createElement(C,null,r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(P,{exact:!0,path:"/",component:N}),r.a.createElement(s.b,{exact:!0,path:"/login",component:x}),r.a.createElement(s.b,{exact:!0,path:"/signup",component:S}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.07d4e74b.chunk.js.map