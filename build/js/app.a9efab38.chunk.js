(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{"./src/js/app.ts":
/*!***********************!*\
  !*** ./src/js/app.ts ***!
  \***********************/
/*! no exports provided */function(e,t,n){"use strict";n.r(t);var s=n(/*! @dogstudio/highway */"./node_modules/@dogstudio/highway/build/highway.module.js"),o=n(/*! @/core/renderers */"./src/js/core/renderers/index.ts"),r=n(/*! @/core/transitions */"./src/js/core/transitions/index.ts"),i=n(/*! @/core/render */"./src/js/core/render.ts"),c=n(/*! ../serviceWorker */"./src/serviceWorker.ts"),u=new s.default.Core({renderers:{home:o.home,about:o.about,production:o.production,product:o.product,contacts:o.contacts,error:o.error},transitions:{default:r.Basic}});Object(i.render)(u),c.unregister()},"./src/js/components/Dropdown.ts":
/*!***************************************!*\
  !*** ./src/js/components/Dropdown.ts ***!
  \***************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var s=n(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js"),o=n.n(s),r=n(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js"),i=n.n(r),c=function(){function e(t){var n=this,s=t.btn,r=t.items,i=t.parent;o()(this,e),this.btn=void 0,this.items=void 0,this.parent=void 0,this.itemsSelector=void 0,this.btnSelector=void 0,this.mql=void 0,this.state=void 0,this.events=void 0,this.btn=document.querySelectorAll(s),this.items=document.querySelectorAll(r),this.parent=document.querySelectorAll(i),this.itemsSelector=r,this.btnSelector=s,this.mql=window.matchMedia("(max-width: 960px)"),this.state=!1,this.events={click:{elem:function(e){return n.toggle(e)},body:function(e){e.target.classList.contains(n.btnSelector.slice(1))||(n.close(),n.state=!1)}},mouseenter:function(e){return n.open(e)},mouseleave:function(){return n.close()}}}return i()(e,[{key:"init",value:function(){this.mql.addListener(this.mqHandler.bind(this)),this.mqHandler()}},{key:"toggle",value:function(e){this.state?this.close():this.open(e)}},{key:"open",value:function(e){var t=e.target.parentElement.querySelector(this.itemsSelector).scrollHeight;e.target.parentElement.style.setProperty("--h",t+"px"),this.close(),e.target.parentElement.querySelector(this.btnSelector).classList.add("opened"),e.target.parentElement.querySelector(this.itemsSelector).classList.add("opened"),e.target.parentElement.style.zIndex=1e3,this.state=!0}},{key:"close",value:function(){this.btn.forEach((function(e){return e.classList.remove("opened")})),this.items.forEach((function(e){return e.classList.remove("opened")})),this.parent.forEach((function(e){return e.style.zIndex="auto"})),this.state=!1}},{key:"mqHandler",value:function(){var e=this;this.mql.matches?(this.btn.forEach((function(t){return t.addEventListener("click",e.events.click.elem)})),document.addEventListener("click",this.events.click.body),this.btn.forEach((function(t){return t.removeEventListener("mouseenter",e.events.mouseenter)})),this.btn.forEach((function(t){return t.removeEventListener("mouseleave",e.events.mouseleave)})),this.items.forEach((function(t){return t.addEventListener("click",e.events.click.elem)})),this.items.forEach((function(t){return t.removeEventListener("mouseenter",e.events.mouseenter)})),this.items.forEach((function(t){return t.removeEventListener("mouseleave",e.events.mouseleave)}))):(this.btn.forEach((function(t){return t.addEventListener("mouseenter",e.events.mouseenter)})),this.btn.forEach((function(t){return t.addEventListener("mouseleave",e.events.mouseleave)})),this.btn.forEach((function(t){return t.removeEventListener("click",e.events.click.elem)})),document.removeEventListener("click",this.events.click.body),this.items.forEach((function(t){return t.addEventListener("mouseenter",e.events.mouseenter)})),this.items.forEach((function(t){return t.addEventListener("mouseleave",e.events.mouseleave)})),this.items.forEach((function(t){return t.removeEventListener("click",e.events.click.elem)})))}}]),e}()},"./src/js/components/Nav.ts":
/*!**********************************!*\
  !*** ./src/js/components/Nav.ts ***!
  \**********************************/
/*! exports provided: Nav */function(e,t,n){"use strict";n.r(t),n.d(t,"Nav",(function(){return c}));var s=n(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js"),o=n.n(s),r=n(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js"),i=n.n(r),c=function(){function e(){o()(this,e),this.$els=void 0,this.$nav=document.querySelector(".navbar__mobile-nav"),this.$burger=document.querySelector(".navbar__burger"),this.isOpen=!1,this.$els=this.$nav.querySelectorAll(".navbar__li a"),this.bounds(),this.init()}return i()(e,[{key:"bounds",value:function(){var e=this;["toggle","close"].forEach((function(t){return e[t]=e[t].bind(e)}))}},{key:"init",value:function(){var e=this;this.$burger.addEventListener("click",this.toggle),this.$els.forEach((function(t){return t.addEventListener("click",e.close)}))}},{key:"toggle",value:function(){this.isOpen?this.close():this.open()}},{key:"open",value:function(){this.$nav.classList.add("open"),this.$burger.classList.add("active"),this.isOpen=!0,document.body.classList.add("e-fixed")}},{key:"close",value:function(){this.$nav.classList.remove("open"),this.$burger.classList.remove("active"),this.isOpen=!1,document.body.classList.remove("e-fixed")}},{key:"destroy",value:function(){var e=this;this.$burger.removeEventListener("click",this.toggle),this.$els.forEach((function(t){return t.removeEventListener("click",e.close)}))}}]),e}()},"./src/js/components/loaders/Loader.ts":
/*!*********************************************!*\
  !*** ./src/js/components/loaders/Loader.ts ***!
  \*********************************************/
/*! exports provided: Loader */function(e,t,n){"use strict";n.r(t),n.d(t,"Loader",(function(){return d}));var s=n(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js"),o=n.n(s),r=n(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js"),i=n.n(r),c=n(/*! imagesloaded */"./node_modules/imagesloaded/imagesloaded.js"),u=n.n(c),a=n(/*! gsap */"./node_modules/gsap/index.js"),l=n(/*! @/state */"./src/js/state.ts"),d=function(){function e(t){o()(this,e),this.cb=t,this.$el=document.querySelector("#loader"),this.init()}return i()(e,[{key:"init",value:function(){var e=this;u()("#scroll-container",{background:!0},(function(){return e.hideLoader()}))}},{key:"hideLoader",value:function(){var e=this;a.default.timeline({onComplete:function(){e.cb&&e.cb(),e.$el.parentElement.removeChild(e.$el),l.state.isLoaded=!0}}).to(this.$el,{duration:.5,opacity:0})}}]),e}()},"./src/js/core/Hooks.ts":
/*!******************************!*\
  !*** ./src/js/core/Hooks.ts ***!
  \******************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var s=n(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js"),o=n.n(s),r=n(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js"),i=n.n(r),c=function(){function e(t){o()(this,e),this.H=void 0,this.H=t}return i()(e,[{key:"useLoad",value:function(e){window.addEventListener("load",(function(){e&&e()}))}},{key:"useNavigateIn",value:function(e){this.H.on("NAVIGATE_IN",(function(){e&&e()}))}},{key:"useNavigateEnd",value:function(e){this.H.on("NAVIGATE_END",(function(){e&&e()}))}},{key:"useNavigateOut",value:function(e){this.H.on("NAVIGATE_OUT",(function(){e&&e()}))}},{key:"useBoth",value:function(e){this.useLoad(e),this.useNavigateEnd(e)}},{key:"useBothStart",value:function(e){this.useLoad(e),this.useNavigateIn(e)}}]),e}()},"./src/js/core/render.ts":
/*!*******************************!*\
  !*** ./src/js/core/render.ts ***!
  \*******************************/
/*! exports provided: render */function(e,t,n){"use strict";n.r(t),n.d(t,"render",(function(){return w}));var s=n(/*! @babel/runtime/regenerator */"./node_modules/@babel/runtime/regenerator/index.js"),o=n.n(s),r=n(/*! @babel/runtime/helpers/asyncToGenerator */"./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),i=n.n(r),c=n(/*! @babel/runtime/helpers/toConsumableArray */"./node_modules/@babel/runtime/helpers/toConsumableArray.js"),u=n.n(c),a=(n(/*! @/libs/ie-detect */"./src/js/libs/ie-detect.ts"),n(/*! @/libs/sayHello */"./src/js/libs/sayHello.ts"),n(/*! @/libs/testWebP */"./src/js/libs/testWebP.ts")),l=n(/*! @/libs/moveEl */"./src/js/libs/moveEl.ts"),d=n(/*! @core/Hooks */"./src/js/core/Hooks.ts"),f=n(/*! @/state */"./src/js/state.ts"),m=n(/*! @/utils/bgWebP */"./src/js/utils/bgWebP.ts"),h=n(/*! @emotionagency/utils */"./node_modules/@emotionagency/utils/build/index.js"),v=n(/*! @/utils/winH */"./src/js/utils/winH.ts"),b=n(/*! @/utils/navbarPos */"./src/js/utils/navbarPos.ts"),p=n(/*! @/components/Dropdown */"./src/js/components/Dropdown.ts"),y=n(/*! @/components/Nav */"./src/js/components/Nav.ts"),g=n(/*! @/utils/intersectionOvserver */"./src/js/utils/intersectionOvserver.ts"),j=n(/*! @/components/loaders/Loader */"./src/js/components/loaders/Loader.ts"),w=function(e){Object(a.default)();var t,s=new d.default(e);s.useNavigateOut((function(){f.state.isLoaded=!1})),s.useNavigateEnd((function(){f.state.isLoaded=!0})),s.useBothStart((function(){Object(m.default)(),Object(l.default)(),[].concat(u()(document.querySelectorAll("header")),u()(document.querySelectorAll(".section")),u()(document.querySelectorAll("footer"))).forEach((function(e){Object(g.intersectionOvserver)(e).on()})),t&&t.reset()})),s.useLoad((function(){h.resize.on(v.winH),new j.Loader(i()(o.a.mark((function e(){var s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return new p.default({btn:".dropdown__btn",items:".dropdown__content",parent:".dropdown"}).init(),new y.Nav,e.next=5,Promise.resolve().then(n.t.bind(null,/*! @emotionagency/smoothscroll */"./node_modules/@emotionagency/smoothscroll/build/index.js",7));case 5:s=e.sent,r=s.SmoothScroll,t=new r,(new b.default).init();case 10:case"end":return e.stop()}}),e)}))))}));var r=document.querySelectorAll("nav a");s.useBoth(i()(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(/*! import() | form */"vendors~form").then(n.t.bind(null,/*! @emotionagency/form */"./node_modules/@emotionagency/form/build/index.js",7));case 2:t=e.sent,new(0,t.default)("#form",{URL:"http://localhost:8080/api/mail.php"}),r.forEach((function(e){e.classList.remove("is-active"),e.href===location.href&&e.classList.add("is-active")}));case 6:case"end":return e.stop()}}),e)}))))}},"./src/js/core/renderers/index.ts":
/*!****************************************!*\
  !*** ./src/js/core/renderers/index.ts ***!
  \****************************************/
/*! exports provided: home, about, production, product, contacts, error */function(e,t,n){"use strict";n.r(t),n.d(t,"home",(function(){return s})),n.d(t,"about",(function(){return o})),n.d(t,"production",(function(){return r})),n.d(t,"product",(function(){return i})),n.d(t,"contacts",(function(){return c})),n.d(t,"error",(function(){return u}));var s=function(){return Promise.all(/*! import() | home */[n.e("about~home~product~production"),n.e("about~home"),n.e("home")]).then(n.bind(null,/*! ./Home */"./src/js/core/renderers/Home.ts"))},o=function(){return Promise.all(/*! import() | about */[n.e("about~home~product~production"),n.e("about~home"),n.e("about")]).then(n.bind(null,/*! ./About */"./src/js/core/renderers/About.ts"))},r=function(){return Promise.all(/*! import() | production */[n.e("about~home~product~production"),n.e("production")]).then(n.bind(null,/*! ./Production */"./src/js/core/renderers/Production.ts"))},i=function(){return Promise.all(/*! import() | product */[n.e("vendors~product"),n.e("about~home~product~production"),n.e("product")]).then(n.bind(null,/*! ./Product */"./src/js/core/renderers/Product.ts"))},c=function(){return n.e(/*! import() | contacts */"contacts").then(n.bind(null,/*! ./Contacts */"./src/js/core/renderers/Contacts.ts"))},u=function(){return n.e(/*! import() | error */"error").then(n.bind(null,/*! ./Error */"./src/js/core/renderers/Error.ts"))}},"./src/js/core/transitions/Basic.ts":
/*!******************************************!*\
  !*** ./src/js/core/transitions/Basic.ts ***!
  \******************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var s=n(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js"),o=n.n(s),r=n(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js"),i=n.n(r),c=n(/*! @babel/runtime/helpers/inherits */"./node_modules/@babel/runtime/helpers/inherits.js"),u=n.n(c),a=n(/*! @babel/runtime/helpers/possibleConstructorReturn */"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),l=n.n(a),d=n(/*! @babel/runtime/helpers/getPrototypeOf */"./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),f=n.n(d),m=n(/*! @dogstudio/highway */"./node_modules/@dogstudio/highway/build/highway.module.js"),h=n(/*! gsap */"./node_modules/gsap/index.js");function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=f()(e);if(t){var o=f()(this).constructor;n=Reflect.construct(s,arguments,o)}else n=s.apply(this,arguments);return l()(this,n)}}var b=function(e){u()(n,e);var t=v(n);function n(){return o()(this,n),t.apply(this,arguments)}return i()(n,[{key:"in",value:function(e){var t=e.to,n=e.from,s=e.done;h.default.set(t,{opacity:0}),n.remove(),h.default.to(t,{duration:.3,opacity:1,ease:"power2.out",onComplete:function(){document.body.classList.remove("e-fixed"),s()}})}},{key:"out",value:function(e){var t=e.done,n=e.from;document.body.classList.add("e-fixed"),h.default.to(n,{duration:.3,opacity:0,y:-60,ease:"power2.out",onComplete:t})}}]),n}(m.default.Transition);t.default=b},"./src/js/core/transitions/index.ts":
/*!******************************************!*\
  !*** ./src/js/core/transitions/index.ts ***!
  \******************************************/
/*! exports provided: Basic */function(e,t,n){"use strict";n.r(t);var s=n(/*! ./Basic */"./src/js/core/transitions/Basic.ts");n.d(t,"Basic",(function(){return s.default}))},"./src/js/libs/ie-detect.ts":
/*!**********************************!*\
  !*** ./src/js/libs/ie-detect.ts ***!
  \**********************************/
/*! no static exports found */function(e,t){var n=!1,s=window.navigator.userAgent,o=s.indexOf("MSIE "),r=s.indexOf("Trident/");(o>-1||r>-1)&&(n=!0),n&&(document.body.innerHTML='Sorry, your browser is not supported. Please install a more modern browser, for example&nbsp;<span style="text-decoration: underline"><a href="https://www.google.ru/intl/ru/chrome/?brand=CHBD&gclid=EAIaIQobChMI1KWB8svn6AIVGqmaCh2wxgN9EAAYASAAEgIPl_D_BwE&gclsrc=aw.ds"> Google Chrome</a></span>',document.body.style.display="flex",document.body.style.justifyContent="center",document.body.style.alignItems="center",document.body.style.height="100vh",document.body.style.paddingLeft="30px",document.body.style.paddingRight="30px",document.body.style.pointerEvents="auto")},"./src/js/libs/moveEl.ts":
/*!*******************************!*\
  !*** ./src/js/libs/moveEl.ts ***!
  \*******************************/
/*! exports provided: default */function(e,t,n){"use strict";function s(){var e,t=[],n=document.querySelectorAll("[data-move]"),s=[],o=[];if(n.length>0){for(var r=0,i=0;i<n.length;i++){var c=n[i],u=c.getAttribute("data-move");if(""!==u){var a=u.split(","),l=a[1]?a[1].trim():"last",d=a[2]?a[2].trim():"767",f="min"===a[3]?a[3].trim():"max",m=document.querySelector("."+a[0].trim());a.length>0&&m&&(c.setAttribute("data-move-index",r.toString()),t[r]={parent:c.parentNode,index:j(c)},s[r]={element:c,destination:document.querySelector("."+a[0].trim()),place:l,breakpoint:d,type:f},r++)}}(e=s).sort((function(e,t){return e.breakpoint>t.breakpoint?-1:1})),e.sort((function(e,t){return e.place>t.place?1:-1}));for(var h=0;h<s.length;h++){var v=s[h],b=v.breakpoint,p=v.type;o.push(window.matchMedia("("+p+"-width: "+b+"px)")),o[h].addListener(y)}}function y(){for(var e=0;e<s.length;e++){var t=s[e],n=t.element,r=t.destination,i=t.place,c="_dynamic_adapt_"+t.breakpoint;if(o[e].matches){if(!n.classList.contains(c)){var u=w(r)[i];"first"===i?u=w(r)[0]:"last"===i&&(u=w(r)[w(r).length]),r.insertBefore(n,r.children[u]),n.classList.add(c)}}else n.classList.contains(c)&&(g(n),n.classList.remove(c))}}function g(e){var n=e.getAttribute("data-move-index"),s=t[n],o=s.parent,r=s.index,i=w(o,!0)[r];o.insertBefore(e,o.children[i])}function j(e){return Array.prototype.slice.call(e.parentNode.children).indexOf(e)}function w(e,t){for(var n=e.children,s=[],o=0;o<n.length;o++){var r=n[o];(t||null==r.getAttribute("data-move"))&&s.push(o)}return s}y()}n.r(t),n.d(t,"default",(function(){return s}))},"./src/js/libs/sayHello.ts":
/*!*********************************!*\
  !*** ./src/js/libs/sayHello.ts ***!
  \*********************************/
/*! no static exports found */function(e,t){if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){window.console.log.apply(console,["\n %c ⚒ by emotiON: %c https://emotion-agency.com %c %c \n\n","color: #fff; background: #a03adb; padding:5px 0;","color: #fff; background: #ffffff; padding:5px 0;","background: #fff; padding:5px 0;","color: #b0976d; background: #fff; padding:5px 0;"])}else window.console&&window.console.log("Made by emotiON: https://emotion-agency.com")},"./src/js/libs/testWebP.ts":
/*!*********************************!*\
  !*** ./src/js/libs/testWebP.ts ***!
  \*********************************/
/*! exports provided: default */function(e,t,n){"use strict";function s(){var e,t;e=function(e){!0===e?document.querySelector("body").classList.add("webp"):document.querySelector("body").classList.add("no-webp")},(t=new Image).onload=t.onerror=function(){e(2===t.height)},t.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}n.r(t),n.d(t,"default",(function(){return s}))},"./src/js/state.ts":
/*!*************************!*\
  !*** ./src/js/state.ts ***!
  \*************************/
/*! exports provided: state */function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return s}));var s={isLoaded:!1}},"./src/js/utils/bgWebP.ts":
/*!********************************!*\
  !*** ./src/js/utils/bgWebP.ts ***!
  \********************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);t.default=function(){document.querySelectorAll("[data-bg]").forEach((function(e){var t=e.getAttribute("data-bg");document.body.classList.contains("webp")?(e.style.backgroundImage="url(".concat(t.slice(0,-3),"webp)"),e.setAttribute("data-bg","".concat(t.slice(0,-3),"webp"))):(e.style.backgroundImage="url(".concat(t,")"),e.setAttribute("data-bg",t))}))}},"./src/js/utils/intersectionOvserver.ts":
/*!**********************************************!*\
  !*** ./src/js/utils/intersectionOvserver.ts ***!
  \**********************************************/
/*! exports provided: intersectionOvserver */function(e,t,n){"use strict";n.r(t),n.d(t,"intersectionOvserver",(function(){return r}));var s=n(/*! ./noop */"./src/js/utils/noop.ts"),o=n(/*! @emotionagency/utils */"./node_modules/@emotionagency/utils/build/index.js"),r=function e(t,n){var r;n=null!==(r=n)&&void 0!==r?r:s.default;var i=t.getBoundingClientRect();return i.top<window.innerHeight&&-i.top<=i.height?t.classList.contains("js-in-view")||(t.classList.add("js-in-view"),n()):t.classList.contains("js-in-view")&&t.classList.remove("js-in-view"),{on:function(){return o.raf.on(e.bind(null,t,n))},off:function(){return o.raf.off(e.bind(null,t,n))}}}},"./src/js/utils/isFixed.ts":
/*!*********************************!*\
  !*** ./src/js/utils/isFixed.ts ***!
  \*********************************/
/*! exports provided: isFixed */function(e,t,n){"use strict";n.r(t),n.d(t,"isFixed",(function(){return s}));var s=function(){return document.body.classList.contains("e-fixed")}},"./src/js/utils/navbarPos.ts":
/*!***********************************!*\
  !*** ./src/js/utils/navbarPos.ts ***!
  \***********************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var s=n(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js"),o=n.n(s),r=n(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js"),i=n.n(r),c=n(/*! @emotionagency/smoothscroll */"./node_modules/@emotionagency/smoothscroll/build/index.js"),u=n(/*! @emotionagency/utils */"./node_modules/@emotionagency/utils/build/index.js"),a=n(/*! ./isFixed */"./src/js/utils/isFixed.ts"),l=function(){function e(){var t=this;o()(this,e),this.mouseFunc=void 0,this.scrollPos=void 0,this.mouseFunc=function(e){t.mouseHandler(e)}}return i()(e,[{key:"init",value:function(){this.scrollPos=0,u.raf.on(this.scrollNav.bind(this))}},{key:"mouseHandler",value:function(e){e.screenY<=document.querySelector(".navbar").scrollHeight+100?document.body.classList.remove("nav-hidden"):document.body.classList.add("nav-hidden")}},{key:"scrollNav",value:function(){var e=-c.state.scrolled;e>this.scrollPos||Object(a.isFixed)()?(document.body.classList.remove("nav-hidden"),document.removeEventListener("mousemove",this.mouseFunc)):e<this.scrollPos&&this.scrollPos<=0?(document.body.classList.add("nav-hidden"),document.querySelector(".navbar").classList.remove("remove-bg"),document.addEventListener("mousemove",this.mouseFunc)):0===this.scrollPos&&document.querySelector(".navbar").classList.add("remove-bg"),this.scrollPos=-c.state.scrolled}},{key:"destroy",value:function(){this.scrollPos=0,u.raf.off(this.scrollNav.bind(this))}}]),e}()},"./src/js/utils/noop.ts":
/*!******************************!*\
  !*** ./src/js/utils/noop.ts ***!
  \******************************/
/*! exports provided: default */function(e,t,n){"use strict";function s(){}n.r(t),n.d(t,"default",(function(){return s}))},"./src/js/utils/winH.ts":
/*!******************************!*\
  !*** ./src/js/utils/winH.ts ***!
  \******************************/
/*! exports provided: winH */function(e,t,n){"use strict";n.r(t),n.d(t,"winH",(function(){return s}));var s=function(){var e=window.innerHeight;document.body.style.setProperty("--vh","".concat(e,"px"))}},"./src/serviceWorker.ts":
/*!******************************!*\
  !*** ./src/serviceWorker.ts ***!
  \******************************/
/*! exports provided: register, unregister */function(e,t,n){"use strict";n.r(t),n.d(t,"register",(function(){return s})),n.d(t,"unregister",(function(){return o}));var s=function(){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/sw.js").then((function(){console.log("Service Worker Registered")}))}))},o=function(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}}},[["./src/js/app.ts","runtime-app","vendors~app"]]]);