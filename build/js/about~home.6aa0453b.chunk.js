(window.webpackJsonp=window.webpackJsonp||[]).push([["about~home"],{"./src/js/components/Parallax.ts":
/*!***************************************!*\
  !*** ./src/js/components/Parallax.ts ***!
  \***************************************/
/*! exports provided: Parallax */function(e,s,t){"use strict";t.r(s),t.d(s,"Parallax",(function(){return c}));var i=t(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js"),n=t.n(i),a=t(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js"),o=t.n(a),l=t(/*! @emotionagency/utils */"./node_modules/@emotionagency/utils/build/index.js"),c=function(){function e(){n()(this,e),this.$els=document.querySelectorAll("[data-parallax]"),this.$sections=document.querySelectorAll("[data-section-parallax]"),this.$sc=document.querySelector("#scroll-container"),this.sizes=[],this.init()}return o()(e,[{key:"init",value:function(){this.bounds(),l.resize.on(this.resize)}},{key:"bounds",value:function(){var e=this;["animate","resize"].forEach((function(s){e[s]=e[s].bind(e)}))}},{key:"move",value:function(e,s){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=e,n=i.closest(".js-in-view");if(i.classList.contains("js-in-view")||n){var a="matrix3d(".concat(t,", 0, 0, 0,\n        0, ").concat(t,", 0, 0,\n        0, 0, 1, 0,\n        0, ").concat(s,", 0, 1)");e.style.transform=a,e.style.willChange="transform"}}},{key:"els",value:function(){var e=this;this.$els.length&&this.$els.forEach((function(s,t){var i=+s.dataset.parallax,n=e.sizes[t]-e.sizes[t]*(1+i),a=e.$sc.scrollTop*i,o=s.dataset.scale?+s.dataset.scale:1;e.move(s,n+a,o)}))}},{key:"sections",value:function(){var e=this;this.$sections.length&&this.$sections.forEach((function(s){var t=+s.dataset.sectionParallax,i=e.$sc.scrollTop*t;e.move(s,i)}))}},{key:"getSize",value:function(e,s){e.length&&e.forEach((function(e){var t=e.getBoundingClientRect(),i=t.top-t.height/2;s.push(i)}))}},{key:"resize",value:function(){this.sizes=[],this.getSize(this.$els,this.sizes),window.innerWidth>1024?l.raf.on(this.animate):l.raf.off(this.animate)}},{key:"animate",value:function(){this.els(),this.sections()}},{key:"destroy",value:function(){var e=this;l.resize.off(this.resize),l.raf.off(this.animate),this.$sections.length&&this.$sections.forEach((function(s){e.move(s,0)})),this.$els.length&&this.$els.forEach((function(s){e.move(s,0,1)}))}}]),e}()}}]);