(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RH4o:function(n,l,u){"use strict";u.r(l);var e=u("keVe"),t=function(){return function(){}}(),o=u("fYis"),i=u("mEgG"),s=u("bb6g"),a=u("1ob4"),r=u("6CUI"),c=u.n(r),b=u("ixZW"),d=u("JLJU"),h=u("4w17"),g=function(){function n(n,l,u,e){this.navigationService=n,this.route=l,this.web3Service=u,this.raidenService=e,this.publishing=!1,this.connections=0,this.maxConnections=25,this.bytesSend=[],this.users=[],this.tokenAddress="0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"}return Object.defineProperty(n.prototype,"mainVideoEl",{set:function(n){this.videoPlayer=n.nativeElement},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){return s.b(this,void 0,void 0,function(){var n;return s.e(this,function(l){switch(l.label){case 0:return this.navigationService.showBackButton=!0,this.id=this.route.snapshot.paramMap.get("id"),this.id?[3,2]:(n=this,[4,this.web3Service.provider.getSigner(0).getAddress()]);case 1:n.id=l.sent(),l.label=2;case 2:return[2]}})})},n.prototype.publish=function(){return s.b(this,void 0,void 0,function(){var n=this;return s.e(this,function(l){return this.peer=new c.a("NUTUBE_NETWORK_"+this.id),this.peer.on("open",function(){}),this.peer.on("error",function(n){console.error(n)}),this.peer.on("open",function(){console.log("PeerID:",n.peer.id)}),this.peer.on("connection",function(n){console.log("connection",n),n.on("data",function(n){console.log("Data from connection",n)})}),this.peer.on("call",function(l){return s.b(n,void 0,void 0,function(){return s.e(this,function(n){return console.log("Income call",l),this.connections++,console.log("New connection",this.connections),this.connections<this.maxConnections?this.handleCall(l):console.log("To many connections. Call declined!",this.connections),[2]})})}),navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,navigator.getUserMedia({video:{width:{min:1024,ideal:1280,max:1920},height:{min:576,ideal:720,max:1080},facingMode:"user"},audio:!0},function(l){n.publishing=!0,n.videoPlayer.srcObject=l,n.videoPlayer.play(),n.stream=l},function(n){console.error("Failed to get local stream",n)}),[2]})})},n.prototype.stop=function(){this.peer.destroy(),this.publishing=!1,this.videoPlayer.pause(),this.stream.getTracks().map(function(n){n.stop()})},n.prototype.initStatus=function(n,l){var u=this;h(l,function(l){u.bytesSend[n]=l.video.bytesSent,console.log("User: "+n+" => "+l.video.bytesSent)},2e3)},n.prototype.handleCall=function(n){return s.b(this,void 0,void 0,function(){var l,u,e=this;return s.e(this,function(t){switch(t.label){case 0:this.users[n.peer]=this.web3Service.messageRecover(this.id,n.metadata),console.log("Address",this.users[n.peer]),t.label=1;case 1:return t.trys.push([1,4,,5]),"maniacs"===this.id?[3,3]:[4,this.raidenService.getChannels(this.tokenAddress,this.users[n.peer])];case 2:l=t.sent(),console.log("channels",l),t.label=3;case 3:return n.answer(this.stream),n.on("stream",function(n){}),n.on("error",function(n){console.log("Error",n),e.connections--}),n.on("close",function(){e.connections--,console.log("The videocall has finished",e.connections)}),this.initStatus(n.peer,n.peerConnection),[3,5];case 4:return u=t.sent(),console.log("Error",u),n.close(),[3,5];case 5:return[2]}})})},n}(),v=u("X+PR"),p=e.lb({encapsulation:0,styles:[[""]],data:{}});function m(n){return e.Bb(0,[e.yb(402653184,1,{mainVideoEl:0}),(n()(),e.nb(1,0,null,null,52,"div",[["class","container mt-4"]],null,null,null,null,null)),(n()(),e.nb(2,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),e.Ab(-1,null,["Start new live stream now:"])),(n()(),e.nb(4,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),e.nb(5,0,null,null,48,"div",[["class","row justify-content-md-center"]],null,null,null,null,null)),(n()(),e.nb(6,0,null,null,47,"div",[["class","col-sm-6"]],null,null,null,null,null)),(n()(),e.nb(7,0,[[1,0],["videoPlayer",1]],null,1,"video",[["controls",""],["height","420"],["width","100%"]],[[8,"hidden",0]],null,null,null,null)),(n()(),e.Ab(-1,null,[" Your browser does not support the video tag. "])),(n()(),e.nb(9,0,null,null,0,"hr",[],[[8,"hidden",0]],null,null,null,null)),(n()(),e.nb(10,0,null,null,43,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,u){var t=!0;return"submit"===l&&(t=!1!==e.wb(n,12).onSubmit(u)&&t),"reset"===l&&(t=!1!==e.wb(n,12).onReset()&&t),t},null,null)),e.mb(11,16384,null,0,i.l,[],null,null),e.mb(12,4210688,null,0,i.g,[[8,null],[8,null]],null,null),e.xb(2048,null,i.a,null,[i.g]),e.mb(14,16384,null,0,i.f,[[4,i.a]],null,null),(n()(),e.nb(15,0,null,null,33,"div",[["class","form-group row"]],null,null,null,null,null)),(n()(),e.nb(16,0,null,null,1,"label",[["class","col-sm-3 col-form-label"],["for","maxConnections"]],null,null,null,null,null)),(n()(),e.Ab(-1,null,["Max. connections"])),(n()(),e.nb(18,0,null,null,30,"div",[["class","col-sm-9"]],null,null,null,null,null)),(n()(),e.nb(19,0,null,null,29,"select",[["class","form-control"],["id","maxConnections"],["name","maxConnections"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(n,l,u){var t=!0,o=n.component;return"change"===l&&(t=!1!==e.wb(n,20).onChange(u.target.value)&&t),"blur"===l&&(t=!1!==e.wb(n,20).onTouched()&&t),"ngModelChange"===l&&(t=!1!==(o.maxConnections=u)&&t),t},null,null)),e.mb(20,16384,null,0,i.j,[e.D,e.k],null,null),e.xb(1024,null,i.c,function(n){return[n]},[i.j]),e.mb(22,671744,null,0,i.h,[[2,i.a],[8,null],[8,null],[6,i.c]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.xb(2048,null,i.d,null,[i.h]),e.mb(24,16384,null,0,i.e,[[4,i.d]],null,null),(n()(),e.nb(25,0,null,null,3,"option",[["value","5"]],null,null,null,null,null)),e.mb(26,147456,null,0,i.i,[e.k,e.D,[2,i.j]],{value:[0,"value"]},null),e.mb(27,147456,null,0,i.n,[e.k,e.D,[8,null]],{value:[0,"value"]},null),(n()(),e.Ab(-1,null,["5"])),(n()(),e.nb(29,0,null,null,3,"option",[["value","10"]],null,null,null,null,null)),e.mb(30,147456,null,0,i.i,[e.k,e.D,[2,i.j]],{value:[0,"value"]},null),e.mb(31,147456,null,0,i.n,[e.k,e.D,[8,null]],{value:[0,"value"]},null),(n()(),e.Ab(-1,null,["10"])),(n()(),e.nb(33,0,null,null,3,"option",[["value","25"]],null,null,null,null,null)),e.mb(34,147456,null,0,i.i,[e.k,e.D,[2,i.j]],{value:[0,"value"]},null),e.mb(35,147456,null,0,i.n,[e.k,e.D,[8,null]],{value:[0,"value"]},null),(n()(),e.Ab(-1,null,["25"])),(n()(),e.nb(37,0,null,null,3,"option",[["value","50"]],null,null,null,null,null)),e.mb(38,147456,null,0,i.i,[e.k,e.D,[2,i.j]],{value:[0,"value"]},null),e.mb(39,147456,null,0,i.n,[e.k,e.D,[8,null]],{value:[0,"value"]},null),(n()(),e.Ab(-1,null,["50"])),(n()(),e.nb(41,0,null,null,3,"option",[["value","100"]],null,null,null,null,null)),e.mb(42,147456,null,0,i.i,[e.k,e.D,[2,i.j]],{value:[0,"value"]},null),e.mb(43,147456,null,0,i.n,[e.k,e.D,[8,null]],{value:[0,"value"]},null),(n()(),e.Ab(-1,null,["100"])),(n()(),e.nb(45,0,null,null,3,"option",[["value","250"]],null,null,null,null,null)),e.mb(46,147456,null,0,i.i,[e.k,e.D,[2,i.j]],{value:[0,"value"]},null),e.mb(47,147456,null,0,i.n,[e.k,e.D,[8,null]],{value:[0,"value"]},null),(n()(),e.Ab(-1,null,["250"])),(n()(),e.nb(49,0,null,null,4,"div",[["class","form-group row"]],null,null,null,null,null)),(n()(),e.nb(50,0,null,null,1,"button",[["class","btn btn-danger btn-lg"],["style","margin: 0 auto;"],["type","button"]],[[8,"hidden",0]],[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.publish()&&e),e},null,null)),(n()(),e.Ab(-1,null,["Start "])),(n()(),e.nb(52,0,null,null,1,"button",[["class","btn btn-dark btn-lg"],["style","margin: 0 auto;"],["type","button"]],[[8,"hidden",0]],[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.stop()&&e),e},null,null)),(n()(),e.Ab(-1,null,["Stop "]))],function(n,l){n(l,22,0,"maxConnections",l.component.maxConnections),n(l,26,0,"5"),n(l,27,0,"5"),n(l,30,0,"10"),n(l,31,0,"10"),n(l,34,0,"25"),n(l,35,0,"25"),n(l,38,0,"50"),n(l,39,0,"50"),n(l,42,0,"100"),n(l,43,0,"100"),n(l,46,0,"250"),n(l,47,0,"250")},function(n,l){var u=l.component;n(l,7,0,!u.publishing),n(l,9,0,!u.publishing),n(l,10,0,e.wb(l,14).ngClassUntouched,e.wb(l,14).ngClassTouched,e.wb(l,14).ngClassPristine,e.wb(l,14).ngClassDirty,e.wb(l,14).ngClassValid,e.wb(l,14).ngClassInvalid,e.wb(l,14).ngClassPending),n(l,19,0,e.wb(l,24).ngClassUntouched,e.wb(l,24).ngClassTouched,e.wb(l,24).ngClassPristine,e.wb(l,24).ngClassDirty,e.wb(l,24).ngClassValid,e.wb(l,24).ngClassInvalid,e.wb(l,24).ngClassPending),n(l,50,0,u.publishing),n(l,52,0,!u.publishing)})}function f(n){return e.Bb(0,[(n()(),e.nb(0,0,null,null,1,"app-publish",[],null,null,null,m,p)),e.mb(1,114688,null,0,g,[a.a,v.a,b.a,d.a],null,null)],function(n,l){n(l,1,0)},null)}var w=e.jb("app-publish",g,f,{},{},[]),C=u("TOqr"),y=u("KMzP"),k=function(){return function(){}}();u.d(l,"PublishModuleNgFactory",function(){return D});var D=e.kb(t,[],function(n){return e.tb([e.ub(512,e.j,e.ab,[[8,[o.a,w]],[3,e.j],e.x]),e.ub(4608,C.i,C.h,[e.u,[2,C.o]]),e.ub(4608,i.m,i.m,[]),e.ub(1073742336,C.b,C.b,[]),e.ub(1073742336,i.k,i.k,[]),e.ub(1073742336,i.b,i.b,[]),e.ub(1073742336,y.f,y.f,[]),e.ub(1073742336,v.n,v.n,[[2,v.t],[2,v.k]]),e.ub(1073742336,k,k,[]),e.ub(1073742336,t,t,[]),e.ub(1024,v.i,function(){return[[{path:"",component:g}]]},[])])})}}]);