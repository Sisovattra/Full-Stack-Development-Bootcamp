(function(e){function t(t){for(var r,o,s=t[0],u=t[1],i=t[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},c={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=n("cf05"),a=n.n(c),o=Object(r["e"])("img",{alt:"Vue logo",src:a.a},null,-1);function s(e,t,n,c,a,s){var u=Object(r["j"])("PostComponent");return Object(r["f"])(),Object(r["c"])(r["a"],null,[o,Object(r["e"])(u)],64)}var u=Object(r["n"])("data-v-67a0ca34");Object(r["h"])("data-v-67a0ca34");var i={class:"container"},l=Object(r["e"])("h1",null,"Latest Tasklist",-1),p={class:"create-post"},f=Object(r["e"])("label",{for:"create-post"},"Say Something...",-1),b=Object(r["e"])("hr",null,null,-1),d={key:0,class:"error"},O={class:"tasklist-container"},j={class:"text"};Object(r["g"])();var v=u((function(e,t,n,c,a,o){return Object(r["f"])(),Object(r["c"])("div",i,[l,Object(r["e"])("div",p,[f,Object(r["m"])(Object(r["e"])("input",{type:"text",id:"create-post","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.text=e}),placeholder:"Create a post"},null,512),[[r["l"],a.text]]),Object(r["e"])("button",{onClick:t[2]||(t[2]=function(){return o.createPost.apply(o,arguments)})},"Post!")]),b,a.error?(Object(r["f"])(),Object(r["c"])("p",d,Object(r["k"])(a.error),1)):Object(r["d"])("",!0),Object(r["e"])("div",O,[(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["i"])(a.tasklist.data,(function(e,t){return Object(r["f"])(),Object(r["c"])("div",{class:"post",item:e,index:t,key:e._id,onDblclick:function(t){return o.deletePost(e._id)}},[Object(r["e"])("p",j,Object(r["k"])(e.task),1)],40,["item","index","onDblclick"])})),128))])])})),h=(n("96cf"),n("1da1")),k=n("d4ec"),g=n("bee2"),m=n("bc3a"),y=n.n(m);y.a.defaults.baseURL="api/tasklist";var x=function(){function e(){Object(k["a"])(this,e)}return Object(g["a"])(e,[{key:"getTasklist",value:function(){return y.a.get("/")}},{key:"insertPost",value:function(e){return y.a.post("/",e)}},{key:"deletePost",value:function(e){return y.a.delete("/".concat(e))}}]),e}(),w=new x,P={name:"PostComponent",data:function(){return{tasklist:[],error:"",text:""}},created:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.getTasklist();case 3:e.tasklist=t.sent,console.log(e.tasklist),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.error=t.t0.message;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},methods:{createPost:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w.insertPost({task:e.text});case 2:return t.next=4,w.getTasklist();case 4:e.tasklist=t.sent;case 5:case"end":return t.stop()}}),t)})))()},deletePost:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,w.deletePost(e);case 2:return n.next=4,w.getTasklist();case 4:t.tasklist=n.sent;case 5:case"end":return n.stop()}}),n)})))()}}};n("aa5d");P.render=v,P.__scopeId="data-v-67a0ca34";var _=P,R={name:"App",components:{PostComponent:_}};n("64be");R.render=s;var S=R;Object(r["b"])(S).mount("#app")},"64be":function(e,t,n){"use strict";n("c894")},aa5d:function(e,t,n){"use strict";n("f77d")},c894:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},f77d:function(e,t,n){}});
//# sourceMappingURL=app.ac9962e5.js.map