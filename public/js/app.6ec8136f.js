(function(t){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],u=0,d=[];u<i.length;u++)s=i[u],a[s]&&d.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9766387b"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=a[t]=[e,r]});e.push(n[2]=r);var o,l=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t),o=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");s.type=r,s.request=o,n[1](s)}a[t]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,l.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",{attrs:{id:"fh5co-header",role:"banner"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"header-inner"},[t._m(0),n("nav",{attrs:{role:"navigation"}},[n("ul",[n("li",{staticClass:"active"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),n("li",[n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("li",[n("router-link",{attrs:{to:"/about"}},[t._v("Fake Link")])],1)])])])])]),n("router-view"),t._m(1)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[n("a",{attrs:{href:"index.html"}},[t._v("PeopleJS")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{attrs:{id:"fh5co-footer",role:"contentinfo"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"col-md-6 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0"},[n("h3",[t._v("Our Services")]),n("ul",{staticClass:"float"},[n("li",[n("a",{attrs:{href:"#"}},[t._v("Web Design")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("Branding & Identity")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("Free HTML5")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("HandCrafted Templates")])])]),n("ul",{staticClass:"float"},[n("li",[n("a",{attrs:{href:"#"}},[t._v("Free Bootstrap Template")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("Free HTML5 Template")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("Free HTML5 & CSS3 Template")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("HandCrafted Templates")])])])]),n("div",{staticClass:"col-md-12 fh5co-copyright text-center"},[n("p",[t._v("© 2016 Free HTML5 template. All Rights Reserved. "),n("span",[t._v("Designed with "),n("i",{staticClass:"icon-heart"}),t._v(" by "),n("a",{attrs:{href:"http://freehtml5.co/",target:"_blank"}},[t._v("FreeHTML5.co")]),t._v(" Demo Images by "),n("a",{attrs:{href:"http://unsplash.com/",target:"_blank"}},[t._v("Unsplash")])])])])])])}],s={data:function(){return{nameFilter:""}}},i=s,l=n("2877"),c=Object(l["a"])(i,a,o,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,p=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"container"},[n("h4",[t._v("Total number of people: "+t._s(t.people.length))]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newPerson.name,expression:"newPerson.name"}],staticClass:"form-control",attrs:{placeholder:"Name",type:"text"},domProps:{value:t.newPerson.name},on:{input:function(e){e.target.composing||t.$set(t.newPerson,"name",e.target.value)}}})])]),n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"form-group"},[n("input",{ref:"fileInput",staticClass:"form-control",attrs:{type:"file"},on:{change:function(e){t.setFile(e)}}})])]),n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"form-group"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newPerson.bio,expression:"newPerson.bio"}],staticClass:"form-control",attrs:{name:"",id:"",cols:"30",rows:"7",placeholder:"Bio"},domProps:{value:t.newPerson.bio},on:{input:function(e){e.target.composing||t.$set(t.newPerson,"bio",e.target.value)}}})])]),n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"form-group"},[n("input",{staticClass:"btn btn-primary",attrs:{value:"Add Person",type:"submit"},on:{click:function(e){t.addPerson()}}})])])])])]),n("div",t._l(t.errors,function(e){return n("li",[t._v(t._s(e))])})),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.nameFilter,expression:"nameFilter"}],staticClass:"form-control",attrs:{list:"names",placeholder:"Search people",type:"text"},domProps:{value:t.nameFilter},on:{input:function(e){e.target.composing||(t.nameFilter=e.target.value)}}})])]),n("div",[n("button",{staticClass:"btn btn-primary",on:{click:function(e){t.setSortAttribute("name")}}},[t._v("Sort by name \n          "),"name"===t.sortAttribute&&1===t.sortAscending?n("span",[n("i",{staticClass:"icon-arrow-up"})]):"name"===t.sortAttribute&&-1===t.sortAscending?n("span",[n("i",{staticClass:"icon-arrow-down"})]):t._e()]),n("button",{staticClass:"btn btn-primary",on:{click:function(e){t.setSortAttribute("bio")}}},[t._v("Sort by bio \n          "),"bio"===t.sortAttribute&&1===t.sortAscending?n("span",[n("i",{staticClass:"icon-arrow-up"})]):"bio"===t.sortAttribute&&-1===t.sortAscending?n("span",[n("i",{staticClass:"icon-arrow-down"})]):t._e()])])]),n("datalist",{attrs:{id:"names"}},t._l(t.people,function(e){return n("option",[t._v(t._s(e.name))])})),n("div",{staticClass:"row"},[t._m(0),n("transition-group",{attrs:{name:"slide-right"}},t._l(t.orderBy(t.filterBy(t.people,t.nameFilter,"name"),t.sortAttribute,t.sortAscending),function(e){return n("div",{key:e.id,staticClass:"col-md-4 text-center item-block"},[n("h3",{on:{click:function(n){t.toggleBioVisible(e)}}},[t._v(t._s(e.name))]),n("p",{class:{strike:!e.bioVisible}},[t._v(t._s(e.bio))]),n("img",{attrs:{src:e.avatar_url,alt:""}}),n("p",[n("a",{staticClass:"btn btn-primary btn-outline with-arrow",on:{click:function(n){t.deletePerson(e)}}},[t._v("Delete "),n("i",{staticClass:"icon-arrow-right"})])])])}))],1)])])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6 col-md-offset-3 text-center fh5co-heading animate-box"},[n("h2",[t._v("Interesting People")])])}],m=(n("7f7f"),n("bc3a")),v={data:function(){return{people:[],newPerson:{name:"",bio:""},errors:[],nameFilter:"",sortAttribute:"name",sortAscending:1,avatar:""}},created:function(){var t=this;m.get("/api/people").then(function(e){console.log(e.data),t.people=e.data})},methods:{setFile:function(t){t.target.files.length>0&&(this.avatar=t.target.files[0])},addPerson:function(){var t=this,e=new FormData;e.append("name",this.newPerson.name),e.append("bio",this.newPerson.bio),e.append("avatar",this.avatar),m.post("/api/people",e).then(function(e){t.people.push(e.data),t.newPerson.name="",t.newPerson.bio="",t.$refs.fileInput.value=""}).catch(function(e){t.errors=e.response.data.errors})},deletePerson:function(t){var e=this;m.delete("/api/people/"+t.id).then(function(n){var r=e.people.indexOf(t);e.people.splice(r,1)})},toggleBioVisible:function(t){t.bioVisible=!t.bioVisible},setSortAttribute:function(t){this.sortAttribute===t?this.sortAscending=-1*this.sortAscending:this.sortAscending=1,this.sortAttribute=t}},computed:{}},h=v,b=(n("cccb"),Object(l["a"])(h,d,f,!1,null,null,null));b.options.__file="Home.vue";var g=b.exports;r["a"].use(p["a"]);var _=new p["a"]({routes:[{path:"/",name:"home",component:g},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),w=n("a7c6"),C=n.n(w);r["a"].config.productionTip=!1,r["a"].use(C.a),new r["a"]({router:_,render:function(t){return t(u)}}).$mount("#app")},"8f59":function(t,e,n){},cccb:function(t,e,n){"use strict";var r=n("8f59"),a=n.n(r);a.a}});
//# sourceMappingURL=app.6ec8136f.js.map