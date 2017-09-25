webpackJsonp([0],{250:function(t,e,o){o(282);var n=o(8)(o(260),o(295),"data-v-fae728d2",null);t.exports=n.exports},253:function(t,e,o){"use strict";function n(t){var e=void 0,o=void 0;return e=100-100*Math.sin(Math.PI*t/180),o=100-100*Math.cos(Math.PI*t/180),{x:e,y:o}}function s(t){var e=n(t),o=e.x,s=e.y;return t<=180?"M100,100 L100, 0 A100,100 0 0,0 "+o+", "+s+" z":"M100,100  L100, 0 A100,100 0 0,0 100, 200 A100,100 0 0,0 "+o+", "+s+" z"}Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["angle","text"],computed:{path:function(){return s(this.angle)}}}},254:function(t,e,o){e=t.exports=o(247)(!0),e.push([t.i,".bigCircle[data-v-6ebf4868]{fill:gray}.smallCircle[data-v-6ebf4868]{fill:#d3d3d3}.segment[data-v-6ebf4868]{fill:#a9a9a9;opacity:.6}.text[data-v-6ebf4868]{font-size:1em;stroke-width:0;opacity:.9;fill:#000;text-anchor:middle;dominant-baseline:central}","",{version:3,sources:["/Users/chuda/Projects/vuejs/WebDevelopmentUsingVueBootstrap/code/chapter7/3/profitoro/src/components/main/sections/timer/SvgCircleSector.vue"],names:[],mappings:"AACA,4BACE,SAAW,CACZ,AACD,8BACE,YAAgB,CACjB,AACD,0BACE,aAAe,AACf,UAAa,CACd,AACD,uBACE,cAAe,AACf,eAAgB,AAChB,WAAY,AACZ,UAAY,AACZ,mBAAoB,AACpB,yBAA2B,CAC5B",file:"SvgCircleSector.vue",sourcesContent:["\n.bigCircle[data-v-6ebf4868] {\n  fill: gray;\n}\n.smallCircle[data-v-6ebf4868] {\n  fill: lightgray;\n}\n.segment[data-v-6ebf4868] {\n  fill: darkgray;\n  opacity: 0.6;\n}\n.text[data-v-6ebf4868] {\n  font-size: 1em;\n  stroke-width: 0;\n  opacity: .9;\n  fill: black;\n  text-anchor: middle;\n  dominant-baseline: central;\n}\n"],sourceRoot:""}])},255:function(t,e,o){var n=o(254);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(248)("60b1b13e",n,!0)},256:function(t,e,o){o(255);var n=o(8)(o(253),o(257),"data-v-6ebf4868",null);t.exports=n.exports},257:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"circle"},[o("svg",{staticClass:"timer",attrs:{viewBox:"0 0 200 200",preserveAspectRatio:"xMinYMin meet",xmlns:"http://www.w3.org/2000/svg"}},[o("circle",{staticClass:"bigCircle",attrs:{r:"100",cx:"100",cy:"100"}}),t._v(" "),o("circle",{staticClass:"smallCircle",attrs:{r:"90",cx:"100",cy:"100"}}),t._v(" "),o("path",{staticClass:"segment",attrs:{d:t.path}}),t._v(" "),t._t("default"),t._v(" "),""!=t.text?o("text",{staticClass:"text",attrs:{x:"100",y:"100"}},[t._v("\n      "+t._s(t.text)+"\n    ")]):t._e()],2)])},staticRenderFns:[]}},260:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(285),s=o.n(n),a=o(284),i=o.n(a);e.default={components:{PomodoroTimerSettings:s.a,AccountSettings:i.a}}},263:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(20),s=o.n(n),a=o(21);e.default={data:function(){return{displayName:"",email:"",photoURL:"static/tomato.png",showChangeProfilePicInput:!1}},computed:s()({},o.i(a.d)({user:"getUser"})),created:function(){this.displayName=this.user.displayName,this.email=this.user.email,this.photoURL=this.user.photoURL?this.user.photoURL:this.photoURL},methods:s()({},o.i(a.c)(["updateUserName","updateUserEmail","updatePhotoURL"]),{onChangeUserName:function(){this.updateUserName(this.displayName)},onChangeUserEmail:function(){this.updateUserEmail(this.email)},onChangeProfilePic:function(){this.showChangeProfilePicInput=!0},onProfilePicChanged:function(){this.updatePhotoURL(this.photoURL),this.showChangeProfilePicInput=!1}})}},264:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(20),s=o.n(n),a=o(21),i=o(256),r=o.n(i),c=o(287),l=o.n(c);e.default={computed:s()({},o.i(a.d)({config:"getConfig"})),components:{SvgCircleSector:r.a,SetTimer:l.a},methods:s()({},o.i(a.c)(["setWorkingPomodoro","setShortBreak","setLongBreak"]))}},266:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["value"],methods:{onChange:function(t){this.$emit("valueChanged",t.target.value)}}}},267:function(t,e,o){e=t.exports=o(247)(!0),e.push([t.i,".figure-caption[data-v-090f7a32]{text-align:center}","",{version:3,sources:["/Users/chuda/Projects/vuejs/WebDevelopmentUsingVueBootstrap/code/chapter7/3/profitoro/src/components/main/sections/settings/PomodoroTimerSettings.vue"],names:[],mappings:"AACA,iCACE,iBAAmB,CACpB",file:"PomodoroTimerSettings.vue",sourcesContent:["\n.figure-caption[data-v-090f7a32] {\n  text-align: center;\n}\n"],sourceRoot:""}])},268:function(t,e,o){e=t.exports=o(247)(!0),e.push([t.i,".set-timer[data-v-193dcd01]{height:0%;position:relative;background-color:#d3d3d3;width:100%;padding-top:100%;border-radius:50%}.set-timer .text[data-v-193dcd01]{margin:auto;width:80%;height:2em;left:0;right:0;top:0;bottom:0;position:absolute;text-align:center;font-size:1.5em}","",{version:3,sources:["/Users/chuda/Projects/vuejs/WebDevelopmentUsingVueBootstrap/code/chapter7/3/profitoro/src/components/main/sections/timer/SetTimer.vue"],names:[],mappings:"AACA,4BACE,UAAW,AACX,kBAAmB,AACnB,yBAA4B,AAC5B,WAAY,AACZ,iBAAkB,AAClB,iBAAmB,CACpB,AACD,kCACI,YAAa,AACb,UAAW,AACX,WAAY,AACZ,OAAQ,AACR,QAAS,AACT,MAAO,AACP,SAAU,AACV,kBAAmB,AACnB,kBAAmB,AACnB,eAAiB,CACpB",file:"SetTimer.vue",sourcesContent:["\n.set-timer[data-v-193dcd01] {\n  height: 0%;\n  position: relative;\n  background-color: lightgray;\n  width: 100%;\n  padding-top: 100%;\n  border-radius: 50%;\n}\n.set-timer .text[data-v-193dcd01] {\n    margin: auto;\n    width: 80%;\n    height: 2em;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    position: absolute;\n    text-align: center;\n    font-size: 1.5em;\n}\n"],sourceRoot:""}])},273:function(t,e,o){e=t.exports=o(247)(!0),e.push([t.i,"img[data-v-bb94db90]{max-width:50%}figcaption[data-v-bb94db90]{cursor:pointer}","",{version:3,sources:["/Users/chuda/Projects/vuejs/WebDevelopmentUsingVueBootstrap/code/chapter7/3/profitoro/src/components/main/sections/settings/AccountSettings.vue"],names:[],mappings:"AACA,qBACE,aAAe,CAChB,AACD,4BACE,cAAgB,CACjB",file:"AccountSettings.vue",sourcesContent:["\nimg[data-v-bb94db90] {\n  max-width: 50%;\n}\nfigcaption[data-v-bb94db90] {\n  cursor: pointer;\n}\n"],sourceRoot:""}])},274:function(t,e,o){e=t.exports=o(247)(!0),e.push([t.i,".figure-caption[data-v-fae728d2]{text-align:center}","",{version:3,sources:["/Users/chuda/Projects/vuejs/WebDevelopmentUsingVueBootstrap/code/chapter7/3/profitoro/src/components/main/sections/Settings.vue"],names:[],mappings:"AACA,iCACE,iBAAmB,CACpB",file:"Settings.vue",sourcesContent:["\n.figure-caption[data-v-fae728d2] {\n  text-align: center;\n}\n"],sourceRoot:""}])},275:function(t,e,o){var n=o(267);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(248)("6410a6a6",n,!0)},276:function(t,e,o){var n=o(268);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(248)("a8fd7990",n,!0)},281:function(t,e,o){var n=o(273);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(248)("7db9c118",n,!0)},282:function(t,e,o){var n=o(274);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(248)("25ba3e4e",n,!0)},284:function(t,e,o){o(281);var n=o(8)(o(263),o(294),"data-v-bb94db90",null);t.exports=n.exports},285:function(t,e,o){o(275);var n=o(8)(o(264),o(288),"data-v-090f7a32",null);t.exports=n.exports},287:function(t,e,o){o(276);var n=o(8)(o(266),o(289),"data-v-193dcd01",null);t.exports=n.exports},288:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("h2",{staticClass:"text-center mb-5"},[t._v("Set your pomodoro timer")]),t._v(" "),o("div",{staticClass:"mt-5 row justify-content-center align-items-center"},[o("div",{staticClass:"col-md-5 col-sm-8"},[o("set-timer",{attrs:{value:t.config.workingPomodoro},on:{valueChanged:t.setWorkingPomodoro}}),t._v(" "),o("div",{staticClass:"figure-caption"},[t._v("Pomodoro")])],1),t._v(" "),o("div",{staticClass:"col-md-4 col-sm-8"},[o("set-timer",{attrs:{value:t.config.longBreak},on:{valueChanged:t.setLongBreak}}),t._v(" "),o("div",{staticClass:"figure-caption"},[t._v("Long break")])],1),t._v(" "),o("div",{staticClass:"col-md-3 col-sm-8"},[o("set-timer",{attrs:{value:t.config.shortBreak},on:{valueChanged:t.setShortBreak}}),t._v(" "),o("div",{staticClass:"figure-caption"},[t._v("Short break")])],1)])])},staticRenderFns:[]}},289:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"set-timer"},[o("input",{staticClass:"text",attrs:{type:"number"},domProps:{value:t.value},on:{change:t.onChange}})])])},staticRenderFns:[]}},294:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("h2",[t._v("Account settings")]),t._v(" "),o("form",[o("div",{staticClass:"form-group"},[o("figure",{staticClass:"figure"},[o("img",{staticClass:"img-thumbnail",attrs:{src:t.photoURL,alt:"Avatar"}}),t._v(" "),o("figcaption",{staticClass:"figure-caption",on:{click:t.onChangeProfilePic}},[t._v("Change profile picture")]),t._v(" "),o("input",{directives:[{name:"show",rawName:"v-show",value:t.showChangeProfilePicInput,expression:"showChangeProfilePicInput"},{name:"model",rawName:"v-model",value:t.photoURL,expression:"photoURL"}],attrs:{type:"text"},domProps:{value:t.photoURL},on:{change:t.onProfilePicChanged,input:function(e){e.target.composing||(t.photoURL=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.displayName,expression:"displayName"}],staticClass:"form-control rounded-0",attrs:{type:"text",placeholder:"Change your username"},domProps:{value:t.displayName},on:{change:t.onChangeUserName,input:function(e){e.target.composing||(t.displayName=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control rounded-0",attrs:{type:"text",placeholder:"Change your username"},domProps:{value:t.email},on:{change:t.onChangeUserEmail,input:function(e){e.target.composing||(t.email=e.target.value)}}})])])])},staticRenderFns:[]}},295:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-sm-12 col-md-6 col-lg-4"},[o("account-settings")],1),t._v(" "),o("div",{staticClass:"col-sm-12 col-md-6 col-lg-8"},[o("pomodoro-timer-settings")],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=0.158b68793a35e4069c4b.js.map