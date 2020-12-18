(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, \"SmoothScroll\", function() { return /* binding */ SmoothScroll_SmoothScroll; });\n\n// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js\nvar defineProperty = __webpack_require__(31);\nvar defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);\n\n// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js\nvar classCallCheck = __webpack_require__(0);\nvar classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);\n\n// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js\nvar createClass = __webpack_require__(1);\nvar createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);\n\n// EXTERNAL MODULE: ./node_modules/virtual-scroll/src/index.js\nvar src = __webpack_require__(32);\nvar src_default = /*#__PURE__*/__webpack_require__.n(src);\n\n// EXTERNAL MODULE: ./node_modules/@emotionagency/utils/build/index.js\nvar build = __webpack_require__(2);\n\n// EXTERNAL MODULE: ./src/js/components/SmoothScroll/state.ts\nvar state = __webpack_require__(6);\n\n// CONCATENATED MODULE: ./src/js/components/SmoothScroll/Scrollbar/CreateScrollbar.ts\n\n\nvar CreateScrollbar_CreateScrollbar = /*#__PURE__*/function () {\n  function CreateScrollbar() {\n    classCallCheck_default()(this, CreateScrollbar);\n\n    this.scrollbar = void 0;\n  }\n\n  createClass_default()(CreateScrollbar, [{\n    key: \"create\",\n    value: function create() {\n      this.scrollbar = document.createElement('div');\n      this.scrollbar.innerHTML = '<span class=\"scrollbar__thumb\"></span>';\n\n      if (document.querySelector('.scrollbar')) {\n        this.scrollbar.classList.add('scrollbar', 'block-scrollbar');\n        return this.scrollbar;\n      }\n\n      this.scrollbar.classList.add('scrollbar');\n      return this.scrollbar;\n    }\n  }, {\n    key: \"append\",\n    value: function append($el) {\n      if (!$el) {\n        return;\n      }\n\n      if (!$el.parentElement) {\n        document.body.appendChild(this.scrollbar);\n        return;\n      }\n\n      !$el.parentElement.querySelector('.scrollbar') && $el.parentElement.appendChild(this.scrollbar);\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      this.scrollbar.parentElement.removeChild(this.scrollbar);\n    }\n  }]);\n\n  return CreateScrollbar;\n}();\n// CONCATENATED MODULE: ./src/js/components/SmoothScroll/Scrollbar/Inactivity.ts\n\n\nvar Inactivity_Inactivity = /*#__PURE__*/function () {\n  function Inactivity(cb) {\n    classCallCheck_default()(this, Inactivity);\n\n    this.cb = cb;\n    this.inactiveDelay = 1;\n    this.timer = 0;\n    this.ticker = void 0;\n    this.interval = void 0;\n    this.detect = this.detect.bind(this);\n    this.intervals();\n  }\n\n  createClass_default()(Inactivity, [{\n    key: \"detect\",\n    value: function detect() {\n      this.cb(this.compare);\n    }\n  }, {\n    key: \"intervals\",\n    value: function intervals() {\n      var _this = this;\n\n      this.ticker = setInterval(function () {\n        _this.timer++;\n      }, 1000);\n      this.interval = setInterval(this.detect, 120);\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.timer = 0;\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      clearInterval(this.ticker);\n      clearInterval(this.interval);\n    }\n  }, {\n    key: \"compare\",\n    get: function get() {\n      if (this.timer >= this.inactiveDelay) {\n        return false;\n      }\n\n      return true;\n    }\n  }]);\n\n  return Inactivity;\n}();\n// EXTERNAL MODULE: ./node_modules/gsap/index.js + 2 modules\nvar gsap = __webpack_require__(30);\n\n// CONCATENATED MODULE: ./src/js/utils/math.ts\nvar lerp = function lerp(a, b, n) {\n  return a * (1 - n) + b * n;\n};\nvar clamp = function clamp(num, a, b) {\n  return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));\n};\n// CONCATENATED MODULE: ./src/js/components/SmoothScroll/Scrollbar/ScrollbarDrag.ts\n\n\n\n\n\nvar ScrollbarDrag_ScrollbarDrag = /*#__PURE__*/function () {\n  function ScrollbarDrag(options) {\n    classCallCheck_default()(this, ScrollbarDrag);\n\n    this.options = options;\n    this.events = {\n      start: ['mousedown', 'touchstart'],\n      move: ['mousemove', 'touchmove'],\n      end: ['mouseup', 'touchend']\n    };\n    this.bounds();\n    this.init();\n  }\n\n  createClass_default()(ScrollbarDrag, [{\n    key: \"bounds\",\n    value: function bounds() {\n      var _this = this;\n\n      var methods = ['start', 'update', 'end'];\n      methods.forEach(function (fn) {\n        return _this[fn] = _this[fn].bind(_this);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this2 = this;\n\n      this.events.start.forEach(function (name) {\n        _this2.options.$scrollbar.addEventListener(name, _this2.start, {\n          passive: false\n        });\n      });\n      this.events.end.forEach(function (name) {\n        _this2.options.$scrollbar.parentElement.addEventListener(name, _this2.end, {\n          passive: false\n        });\n      });\n      document.body.addEventListener('mouseleave', this.end);\n      screen.width > 960 && this.options.$scrollbar.addEventListener('click', this.update);\n    }\n  }, {\n    key: \"compute\",\n    value: function compute(o) {\n      var h = this.options.$scrollbar.offsetHeight;\n      state[\"a\" /* state */].scrollbar = true;\n      var target = clamp(this.options.height * (o / h), 0, this.options.max);\n      gsap[\"a\" /* default */].to(state[\"a\" /* state */], {\n        duration: 0.1,\n        target: target,\n        ease: 'none',\n        overwrite: true,\n        onComplete: function onComplete() {\n          state[\"a\" /* state */].scrollbar = false;\n        }\n      });\n    }\n  }, {\n    key: \"update\",\n    value: function update(e) {\n      var o;\n\n      if ('ontouchstart' in document.documentElement) {\n        var b = e.target.getBoundingClientRect();\n        o = e.targetTouches[0].pageY - b.top;\n      } else {\n        o = e.clientY;\n      }\n\n      this.compute(o);\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      var _this3 = this;\n\n      this.events.move.forEach(function (name) {\n        _this3.options.$thumb.classList.add('active');\n\n        _this3.options.$el.parentNode.addEventListener(name, _this3.update);\n      });\n    }\n  }, {\n    key: \"end\",\n    value: function end() {\n      var _this4 = this;\n\n      state[\"a\" /* state */].scrollbar = false;\n      this.options.$thumb.classList.remove('active');\n      this.events.move.forEach(function (name) {\n        _this4.options.$el.parentNode.removeEventListener(name, _this4.update);\n      });\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      var _this5 = this;\n\n      this.events.start.forEach(function (name) {\n        _this5.options.$scrollbar.removeEventListener(name, _this5.start);\n      });\n      this.events.end.forEach(function (name) {\n        _this5.options.$scrollbar.parentElement.removeEventListener(name, _this5.end);\n      });\n      this.events.move.forEach(function (name) {\n        _this5.options.$el.parentNode.removeEventListener(name, _this5.update);\n      });\n      document.body.removeEventListener('mouseleave', this.end);\n      this.options.$scrollbar.removeEventListener('click', this.update);\n    }\n  }]);\n\n  return ScrollbarDrag;\n}();\n// CONCATENATED MODULE: ./src/js/components/SmoothScroll/Scrollbar/ScrollBar.ts\n\n\n\n\n\n\n\n\nvar ScrollBar_Scrollbar = /*#__PURE__*/function () {\n  function Scrollbar($el) {\n    classCallCheck_default()(this, Scrollbar);\n\n    this.$el = $el;\n    this.$scrollbar = void 0;\n    this.$thumb = void 0;\n    this.height = void 0;\n    this.max = void 0;\n    this.createScrollbar = void 0;\n    this.inactivity = void 0;\n    this.onDrag = void 0;\n    this.$el = $el || document.querySelector('#scroll-container');\n    this.bounds();\n    this.createScrollbar = new CreateScrollbar_CreateScrollbar();\n    this.inactivity = new Inactivity_Inactivity(this.setVisibility);\n    this.init();\n  }\n\n  createClass_default()(Scrollbar, [{\n    key: \"bounds\",\n    value: function bounds() {\n      var _this = this;\n\n      var methods = ['setHeight', 'move', 'setVisibility'];\n      methods.forEach(function (fn) {\n        return _this[fn] = _this[fn].bind(_this);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.$scrollbar = this.createScrollbar.create();\n      this.$thumb = this.$scrollbar.querySelector('.scrollbar__thumb');\n      this.createScrollbar.append(this.$el);\n      this.$scrollbar.addEventListener('mouseenter', this.inactivity.reset);\n      build[\"resize\"].on(this.setHeight);\n      build[\"raf\"].on(this.move);\n      this.drag();\n    }\n  }, {\n    key: \"setHeight\",\n    value: function setHeight() {\n      this.height = this.$el.scrollHeight;\n      var wh = window.innerHeight;\n      var thumbH = wh * (wh / this.height);\n      this.max = this.height - wh;\n      if (this.height === wh) thumbH = 0;\n      this.$thumb.style.height = thumbH + 'px';\n    }\n  }, {\n    key: \"setVisibility\",\n    value: function setVisibility(isActive) {\n      if (!isActive) {\n        this.$thumb.classList.remove('scrolling');\n        return;\n      }\n\n      this.$thumb.classList.add('scrolling');\n    }\n  }, {\n    key: \"move\",\n    value: function move() {\n      if (state[\"a\" /* state */].scrolling) {\n        var ch = document.documentElement.clientHeight;\n        this.$thumb.classList.add('scrolling');\n        var scrollPos = state[\"a\" /* state */].scrolled;\n        var percent = 100 * scrollPos / (this.height - ch);\n        this.$thumb.style.top = percent.toFixed(2) + '%';\n        this.$thumb.style.transform = \"translateY(-\".concat(percent.toFixed(2), \"%)\");\n      }\n    }\n  }, {\n    key: \"drag\",\n    value: function drag() {\n      this.onDrag = new ScrollbarDrag_ScrollbarDrag({\n        $el: this.$el,\n        $thumb: this.$thumb,\n        $scrollbar: this.$scrollbar,\n        height: this.height,\n        max: this.max\n      });\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      this.onDrag.destroy();\n      this.$scrollbar.removeEventListener('mouseenter', this.inactivity.reset);\n      this.createScrollbar.destroy();\n      this.inactivity.destroy();\n    }\n  }]);\n\n  return Scrollbar;\n}();\n\n\n// CONCATENATED MODULE: ./src/js/components/SmoothScroll/opts.ts\nvar getOpts = function getOpts(opts) {\n  var _opts$el, _opts$touchMultiplier, _opts$firefoxMultipli, _opts$preventTouch, _opts$scrollbar, _opts$friction, _opts$stepSize, _opts$mobile, _opts$breakpoint;\n\n  return {\n    el: (_opts$el = opts === null || opts === void 0 ? void 0 : opts.el) !== null && _opts$el !== void 0 ? _opts$el : document.querySelector('#scroll-container'),\n    touchMultiplier: (_opts$touchMultiplier = opts === null || opts === void 0 ? void 0 : opts.touchMultiplier) !== null && _opts$touchMultiplier !== void 0 ? _opts$touchMultiplier : 3.8,\n    firefoxMultiplier: (_opts$firefoxMultipli = opts === null || opts === void 0 ? void 0 : opts.firefoxMultiplier) !== null && _opts$firefoxMultipli !== void 0 ? _opts$firefoxMultipli : 40,\n    preventTouch: (_opts$preventTouch = opts === null || opts === void 0 ? void 0 : opts.preventTouch) !== null && _opts$preventTouch !== void 0 ? _opts$preventTouch : true,\n    scrollbar: (_opts$scrollbar = opts === null || opts === void 0 ? void 0 : opts.scrollbar) !== null && _opts$scrollbar !== void 0 ? _opts$scrollbar : true,\n    friction: (_opts$friction = opts === null || opts === void 0 ? void 0 : opts.friction) !== null && _opts$friction !== void 0 ? _opts$friction : 0.08,\n    stepSize: (_opts$stepSize = opts === null || opts === void 0 ? void 0 : opts.stepSize) !== null && _opts$stepSize !== void 0 ? _opts$stepSize : 1,\n    mobile: (_opts$mobile = opts === null || opts === void 0 ? void 0 : opts.mobile) !== null && _opts$mobile !== void 0 ? _opts$mobile : true,\n    breakpoint: (_opts$breakpoint = opts === null || opts === void 0 ? void 0 : opts.breakpoint) !== null && _opts$breakpoint !== void 0 ? _opts$breakpoint : 960\n  };\n};\n// EXTERNAL MODULE: ./src/js/utils/isFixed.ts\nvar isFixed = __webpack_require__(13);\n\n// CONCATENATED MODULE: ./src/js/components/SmoothScroll/SmoothScroll.ts\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar SmoothScroll_SmoothScroll = /*#__PURE__*/function () {\n  function SmoothScroll(opts) {\n    classCallCheck_default()(this, SmoothScroll);\n\n    this.opts = opts;\n    this.max = void 0;\n    this.vs = void 0;\n    this.scrollbar = void 0;\n    this.current = 0;\n    this.min = 0;\n    this.opts = getOpts(opts);\n    this.init();\n  }\n\n  createClass_default()(SmoothScroll, [{\n    key: \"bounds\",\n    value: function bounds() {\n      var _this = this;\n\n      var methods = ['resize', 'animate'];\n      methods.forEach(function (fn) {\n        return _this[fn] = _this[fn].bind(_this);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.bounds();\n      build[\"resize\"].on(this.resize);\n      state[\"a\" /* state */].target = 0;\n      this.max = this.maxValue;\n      this.scroll();\n      build[\"raf\"].on(this.animate);\n      this.scrollbar = this.opts.scrollbar && new ScrollBar_Scrollbar();\n    }\n  }, {\n    key: \"resize\",\n    value: function resize() {\n      if (!this.opts.mobile && window.innerWidth <= this.opts.breakpoint) {\n        this.destroy();\n      }\n    }\n  }, {\n    key: \"scroll\",\n    value: function scroll() {\n      var _this2 = this;\n\n      this.vs = new src_default.a(_objectSpread({}, this.opts));\n      this.vs.on(function (e) {\n        if (_this2.canScroll) {\n          state[\"a\" /* state */].target -= e.deltaY * _this2.opts.stepSize;\n          state[\"a\" /* state */].target = clamp(state[\"a\" /* state */].target, _this2.min, _this2.max);\n        }\n      });\n    }\n  }, {\n    key: \"detectScrolling\",\n    value: function detectScrolling() {\n      var s = state[\"a\" /* state */].scrollbar;\n      var dif = Math.abs(Math.round(state[\"a\" /* state */].target) - Math.round(this.current));\n\n      if (dif >= 1 || s) {\n        state[\"a\" /* state */].scrolling = true;\n      } else {\n        state[\"a\" /* state */].scrolling = false;\n      }\n    }\n  }, {\n    key: \"animate\",\n    value: function animate() {\n      this.detectScrolling();\n\n      if (state[\"a\" /* state */].scrolling) {\n        this.max = this.maxValue;\n        this.current = lerp(this.current, state[\"a\" /* state */].target, this.opts.friction);\n        this.current = Math.round(this.current * 100) / 100;\n        this.opts.el.scrollTop = this.current;\n        state[\"a\" /* state */].scrolled = this.current;\n      }\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      state[\"a\" /* state */].target = 0;\n      this.current = 0;\n      this.opts.el.scrollTop = 0;\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      state[\"a\" /* state */].target = 0;\n      state[\"a\" /* state */].scrolled = 0;\n      state[\"a\" /* state */].scrolling = false;\n      build[\"raf\"].off(this.animate);\n      build[\"resize\"].off(this.animate);\n      this.vs.destroy();\n      this.scrollbar.destroy();\n    }\n  }, {\n    key: \"maxValue\",\n    get: function get() {\n      return this.opts.el.scrollHeight - window.innerHeight;\n    }\n  }, {\n    key: \"canScroll\",\n    get: function get() {\n      return !Object(isFixed[\"a\" /* isFixed */])() && this.opts.el.scrollHeight > window.innerHeight;\n    }\n  }]);\n\n  return SmoothScroll;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9TbW9vdGhTY3JvbGwvU2Nyb2xsYmFyL0NyZWF0ZVNjcm9sbGJhci50cz9hYWY0Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL1Ntb290aFNjcm9sbC9TY3JvbGxiYXIvSW5hY3Rpdml0eS50cz9iZDM2Iiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy9tYXRoLnRzP2ZjOTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvU21vb3RoU2Nyb2xsL1Njcm9sbGJhci9TY3JvbGxiYXJEcmFnLnRzPzdjMDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvU21vb3RoU2Nyb2xsL1Njcm9sbGJhci9TY3JvbGxCYXIudHM/YmYzZCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9TbW9vdGhTY3JvbGwvb3B0cy50cz8xNjEzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL1Ntb290aFNjcm9sbC9TbW9vdGhTY3JvbGwudHM/OTM2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ3JlYXRlU2Nyb2xsYmFyIHtcbiAgc2Nyb2xsYmFyOiBIVE1MRWxlbWVudFxuXG4gIGNyZWF0ZSgpOiBIVE1MRWxlbWVudCB7XG4gICAgdGhpcy5zY3JvbGxiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuc2Nyb2xsYmFyLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cInNjcm9sbGJhcl9fdGh1bWJcIj48L3NwYW4+J1xuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxiYXInKSkge1xuICAgICAgdGhpcy5zY3JvbGxiYXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsYmFyJywgJ2Jsb2NrLXNjcm9sbGJhcicpXG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxiYXJcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbGJhci5jbGFzc0xpc3QuYWRkKCdzY3JvbGxiYXInKVxuICAgIHJldHVybiB0aGlzLnNjcm9sbGJhclxuICB9XG5cbiAgYXBwZW5kKCRlbDogSFRNTEVsZW1lbnQgfCBFbGVtZW50IHwgbnVsbCk6IHZvaWQge1xuICAgIGlmICghJGVsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoISRlbC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc2Nyb2xsYmFyKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgISRlbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxiYXInKSAmJlxuICAgICAgJGVsLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5zY3JvbGxiYXIpXG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc2Nyb2xsYmFyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5zY3JvbGxiYXIpXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgVENyZWF0ZVNjcm9sbGJhciA9IHR5cGVvZiBDcmVhdGVTY3JvbGxiYXIucHJvdG90eXBlXG4iLCJleHBvcnQgY2xhc3MgSW5hY3Rpdml0eSB7XG4gIGluYWN0aXZlRGVsYXkgPSAxXG4gIHRpbWVyID0gMFxuICB0aWNrZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPlxuICBpbnRlcnZhbDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0SW50ZXJ2YWw+XG5cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgY2I6IChpc0FjdGl2ZTogYm9vbGVhbikgPT4gdm9pZCkge1xuICAgIHRoaXMuZGV0ZWN0ID0gdGhpcy5kZXRlY3QuYmluZCh0aGlzKVxuICAgIHRoaXMuaW50ZXJ2YWxzKClcbiAgfVxuXG4gIGdldCBjb21wYXJlKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnRpbWVyID49IHRoaXMuaW5hY3RpdmVEZWxheSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBkZXRlY3QoKTogdm9pZCB7XG4gICAgdGhpcy5jYih0aGlzLmNvbXBhcmUpXG4gIH1cblxuICBpbnRlcnZhbHMoKTogdm9pZCB7XG4gICAgdGhpcy50aWNrZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLnRpbWVyKytcbiAgICB9LCAxMDAwKVxuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLmRldGVjdCwgMTIwKVxuICB9XG5cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy50aW1lciA9IDBcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpY2tlcilcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgVEluYWN0aXZpdHkgPSB0eXBlb2YgSW5hY3Rpdml0eS5wcm90b3R5cGVcbiIsImV4cG9ydCBjb25zdCBsZXJwID0gKGE6IG51bWJlciwgYjogbnVtYmVyLCBuOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICByZXR1cm4gYSAqICgxIC0gbikgKyBiICogblxufVxuXG5leHBvcnQgY29uc3QgY2xhbXAgPSAobnVtOiBudW1iZXIsIGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKG51bSwgTWF0aC5tYXgoYSwgYikpLCBNYXRoLm1pbihhLCBiKSlcbn1cbiIsImltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXG5pbXBvcnQge3N0YXRlfSBmcm9tICcuLi9zdGF0ZSdcbmltcG9ydCB7Y2xhbXB9IGZyb20gJ0AvdXRpbHMvbWF0aCdcblxudHlwZSBURWwgPSBIVE1MRWxlbWVudCB8IEVsZW1lbnQgfCBudWxsXG5cbmludGVyZmFjZSBJRXZlbnQge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbn1cblxuaW50ZXJmYWNlIElPcHRpb25zIHtcbiAgJGVsOiBURWxcbiAgJHNjcm9sbGJhcjogSFRNTEVsZW1lbnRcbiAgJHRodW1iOiBIVE1MRWxlbWVudFxuICBoZWlnaHQ6IG51bWJlclxuICBtYXg6IG51bWJlclxufVxuXG5leHBvcnQgY2xhc3MgU2Nyb2xsYmFyRHJhZyB7XG4gIGV2ZW50cyA9IHtcbiAgICBzdGFydDogWydtb3VzZWRvd24nLCAndG91Y2hzdGFydCddLFxuICAgIG1vdmU6IFsnbW91c2Vtb3ZlJywgJ3RvdWNobW92ZSddLFxuICAgIGVuZDogWydtb3VzZXVwJywgJ3RvdWNoZW5kJ11cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb25zOiBJT3B0aW9ucykge1xuICAgIHRoaXMuYm91bmRzKClcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgYm91bmRzKCk6IHZvaWQge1xuICAgIGNvbnN0IG1ldGhvZHMgPSBbJ3N0YXJ0JywgJ3VwZGF0ZScsICdlbmQnXVxuICAgIG1ldGhvZHMuZm9yRWFjaChmbiA9PiAodGhpc1tmbl0gPSB0aGlzW2ZuXS5iaW5kKHRoaXMpKSlcbiAgfVxuXG4gIGluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5ldmVudHMuc3RhcnQuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIHRoaXMub3B0aW9ucy4kc2Nyb2xsYmFyLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgdGhpcy5zdGFydCwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSlcbiAgICB9KVxuICAgIHRoaXMuZXZlbnRzLmVuZC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdGhpcy5vcHRpb25zLiRzY3JvbGxiYXIucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIHRoaXMuZW5kLCB7XG4gICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmVuZClcblxuICAgIHNjcmVlbi53aWR0aCA+IDk2MCAmJlxuICAgICAgdGhpcy5vcHRpb25zLiRzY3JvbGxiYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVwZGF0ZSlcbiAgfVxuXG4gIGNvbXB1dGUobzogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgaCA9IHRoaXMub3B0aW9ucy4kc2Nyb2xsYmFyLm9mZnNldEhlaWdodFxuICAgIHN0YXRlLnNjcm9sbGJhciA9IHRydWVcblxuICAgIGNvbnN0IHRhcmdldCA9IGNsYW1wKHRoaXMub3B0aW9ucy5oZWlnaHQgKiAobyAvIGgpLCAwLCB0aGlzLm9wdGlvbnMubWF4KVxuXG4gICAgZ3NhcC50byhzdGF0ZSwge1xuICAgICAgZHVyYXRpb246IDAuMSxcbiAgICAgIHRhcmdldCxcbiAgICAgIGVhc2U6ICdub25lJyxcbiAgICAgIG92ZXJ3cml0ZTogdHJ1ZSxcbiAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgc3RhdGUuc2Nyb2xsYmFyID0gZmFsc2VcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlKGU6IElFdmVudCk6IHZvaWQge1xuICAgIGxldCBvOiBudW1iZXJcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBjb25zdCBiID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIG8gPSBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgLSBiLnRvcFxuICAgIH0gZWxzZSB7XG4gICAgICBvID0gZS5jbGllbnRZXG4gICAgfVxuICAgIHRoaXMuY29tcHV0ZShvKVxuICB9XG5cbiAgc3RhcnQoKTogdm9pZCB7XG4gICAgdGhpcy5ldmVudHMubW92ZS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdGhpcy5vcHRpb25zLiR0aHVtYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgdGhpcy5vcHRpb25zLiRlbC5wYXJlbnROb2RlLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgdGhpcy51cGRhdGUpXG4gICAgfSlcbiAgfVxuXG4gIGVuZCgpOiB2b2lkIHtcbiAgICBzdGF0ZS5zY3JvbGxiYXIgPSBmYWxzZVxuICAgIHRoaXMub3B0aW9ucy4kdGh1bWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB0aGlzLmV2ZW50cy5tb3ZlLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbnMuJGVsLnBhcmVudE5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCB0aGlzLnVwZGF0ZSlcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50cy5zdGFydC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdGhpcy5vcHRpb25zLiRzY3JvbGxiYXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCB0aGlzLnN0YXJ0KVxuICAgIH0pXG4gICAgdGhpcy5ldmVudHMuZW5kLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbnMuJHNjcm9sbGJhci5wYXJlbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgdGhpcy5lbmQpXG4gICAgfSlcblxuICAgIHRoaXMuZXZlbnRzLm1vdmUuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIHRoaXMub3B0aW9ucy4kZWwucGFyZW50Tm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIHRoaXMudXBkYXRlKVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmVuZClcbiAgICB0aGlzLm9wdGlvbnMuJHNjcm9sbGJhci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudXBkYXRlKVxuICB9XG59XG5cbmV4cG9ydCB0eXBlIFRTY3JvbGxiYXJEcmFnID0gdHlwZW9mIFNjcm9sbGJhckRyYWcucHJvdG90eXBlXG4iLCJpbXBvcnQge3JhZiwgcmVzaXplfSBmcm9tICdAZW1vdGlvbmFnZW5jeS91dGlscydcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4uL3N0YXRlJ1xuXG5pbXBvcnQge0NyZWF0ZVNjcm9sbGJhciwgVENyZWF0ZVNjcm9sbGJhcn0gZnJvbSAnLi9DcmVhdGVTY3JvbGxiYXInXG5pbXBvcnQge0luYWN0aXZpdHksIFRJbmFjdGl2aXR5fSBmcm9tICcuL0luYWN0aXZpdHknXG5pbXBvcnQge1Njcm9sbGJhckRyYWcsIFRTY3JvbGxiYXJEcmFnfSBmcm9tICcuL1Njcm9sbGJhckRyYWcnXG5cbnR5cGUgVEVsID0gSFRNTEVsZW1lbnQgfCBFbGVtZW50IHwgbnVsbFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxiYXIge1xuICAkc2Nyb2xsYmFyOiBIVE1MRWxlbWVudFxuICAkdGh1bWI6IEhUTUxFbGVtZW50XG4gIGhlaWdodDogbnVtYmVyXG4gIG1heDogbnVtYmVyXG4gIGNyZWF0ZVNjcm9sbGJhcjogVENyZWF0ZVNjcm9sbGJhclxuICBpbmFjdGl2aXR5OiBUSW5hY3Rpdml0eVxuICBvbkRyYWc6IFRTY3JvbGxiYXJEcmFnXG5cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgJGVsPzogVEVsKSB7XG4gICAgdGhpcy4kZWwgPSAkZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njcm9sbC1jb250YWluZXInKVxuICAgIHRoaXMuYm91bmRzKClcblxuICAgIHRoaXMuY3JlYXRlU2Nyb2xsYmFyID0gbmV3IENyZWF0ZVNjcm9sbGJhcigpXG4gICAgdGhpcy5pbmFjdGl2aXR5ID0gbmV3IEluYWN0aXZpdHkodGhpcy5zZXRWaXNpYmlsaXR5KVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGJvdW5kcygpOiB2b2lkIHtcbiAgICBjb25zdCBtZXRob2RzID0gWydzZXRIZWlnaHQnLCAnbW92ZScsICdzZXRWaXNpYmlsaXR5J11cbiAgICBtZXRob2RzLmZvckVhY2goZm4gPT4gKHRoaXNbZm5dID0gdGhpc1tmbl0uYmluZCh0aGlzKSkpXG4gIH1cblxuICBpbml0KCk6IHZvaWQge1xuICAgIHRoaXMuJHNjcm9sbGJhciA9IHRoaXMuY3JlYXRlU2Nyb2xsYmFyLmNyZWF0ZSgpXG4gICAgdGhpcy4kdGh1bWIgPSB0aGlzLiRzY3JvbGxiYXIucXVlcnlTZWxlY3RvcignLnNjcm9sbGJhcl9fdGh1bWInKVxuICAgIHRoaXMuY3JlYXRlU2Nyb2xsYmFyLmFwcGVuZCh0aGlzLiRlbClcblxuICAgIHRoaXMuJHNjcm9sbGJhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5pbmFjdGl2aXR5LnJlc2V0KVxuXG4gICAgcmVzaXplLm9uKHRoaXMuc2V0SGVpZ2h0KVxuICAgIHJhZi5vbih0aGlzLm1vdmUpXG4gICAgdGhpcy5kcmFnKClcbiAgfVxuXG4gIHNldEhlaWdodCgpOiB2b2lkIHtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuJGVsLnNjcm9sbEhlaWdodFxuXG4gICAgY29uc3Qgd2ggPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICBsZXQgdGh1bWJIID0gd2ggKiAod2ggLyB0aGlzLmhlaWdodClcblxuICAgIHRoaXMubWF4ID0gdGhpcy5oZWlnaHQgLSB3aFxuXG4gICAgaWYgKHRoaXMuaGVpZ2h0ID09PSB3aCkgdGh1bWJIID0gMFxuXG4gICAgdGhpcy4kdGh1bWIuc3R5bGUuaGVpZ2h0ID0gdGh1bWJIICsgJ3B4J1xuICB9XG5cbiAgc2V0VmlzaWJpbGl0eShpc0FjdGl2ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgIHRoaXMuJHRodW1iLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGluZycpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy4kdGh1bWIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsaW5nJylcbiAgfVxuXG4gIG1vdmUoKTogdm9pZCB7XG4gICAgaWYgKHN0YXRlLnNjcm9sbGluZykge1xuICAgICAgY29uc3QgY2ggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cbiAgICAgIHRoaXMuJHRodW1iLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGluZycpXG4gICAgICBjb25zdCBzY3JvbGxQb3MgPSBzdGF0ZS5zY3JvbGxlZFxuICAgICAgY29uc3QgcGVyY2VudCA9ICgxMDAgKiBzY3JvbGxQb3MpIC8gKHRoaXMuaGVpZ2h0IC0gY2gpXG5cbiAgICAgIHRoaXMuJHRodW1iLnN0eWxlLnRvcCA9IHBlcmNlbnQudG9GaXhlZCgyKSArICclJ1xuICAgICAgdGhpcy4kdGh1bWIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoLSR7cGVyY2VudC50b0ZpeGVkKDIpfSUpYFxuICAgIH1cbiAgfVxuXG4gIGRyYWcoKTogdm9pZCB7XG4gICAgdGhpcy5vbkRyYWcgPSBuZXcgU2Nyb2xsYmFyRHJhZyh7XG4gICAgICAkZWw6IHRoaXMuJGVsLFxuICAgICAgJHRodW1iOiB0aGlzLiR0aHVtYixcbiAgICAgICRzY3JvbGxiYXI6IHRoaXMuJHNjcm9sbGJhcixcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBtYXg6IHRoaXMubWF4XG4gICAgfSlcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5vbkRyYWcuZGVzdHJveSgpXG4gICAgdGhpcy4kc2Nyb2xsYmFyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmluYWN0aXZpdHkucmVzZXQpXG4gICAgdGhpcy5jcmVhdGVTY3JvbGxiYXIuZGVzdHJveSgpXG4gICAgdGhpcy5pbmFjdGl2aXR5LmRlc3Ryb3koKVxuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIElPcHRzIHtcbiAgZWw/OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRcbiAgdG91Y2hNdWx0aXBsaWVyPzogbnVtYmVyXG4gIGZpcmVmb3hNdWx0aXBsaWVyPzogbnVtYmVyXG4gIHByZXZlbnRUb3VjaD86IGJvb2xlYW5cbiAgc2Nyb2xsYmFyPzogYm9vbGVhblxuICBmcmljdGlvbj86IG51bWJlclxuICBzdGVwU2l6ZT86IG51bWJlclxuICBtb2JpbGU/OiBib29sZWFuXG4gIGJyZWFrcG9pbnQ/OiBudW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IGdldE9wdHMgPSAob3B0czogSU9wdHMgfCB1bmRlZmluZWQpOiBJT3B0cyA9PiB7XG4gIHJldHVybiB7XG4gICAgZWw6IG9wdHM/LmVsID8/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY3JvbGwtY29udGFpbmVyJyksXG4gICAgdG91Y2hNdWx0aXBsaWVyOiBvcHRzPy50b3VjaE11bHRpcGxpZXIgPz8gMy44LFxuICAgIGZpcmVmb3hNdWx0aXBsaWVyOiBvcHRzPy5maXJlZm94TXVsdGlwbGllciA/PyA0MCxcbiAgICBwcmV2ZW50VG91Y2g6IG9wdHM/LnByZXZlbnRUb3VjaCA/PyB0cnVlLFxuICAgIHNjcm9sbGJhcjogb3B0cz8uc2Nyb2xsYmFyID8/IHRydWUsXG4gICAgZnJpY3Rpb246IG9wdHM/LmZyaWN0aW9uID8/IDAuMDgsXG4gICAgc3RlcFNpemU6IG9wdHM/LnN0ZXBTaXplID8/IDEsXG4gICAgbW9iaWxlOiBvcHRzPy5tb2JpbGUgPz8gdHJ1ZSxcbiAgICBicmVha3BvaW50OiBvcHRzPy5icmVha3BvaW50ID8/IDk2MFxuICB9XG59XG4iLCJpbXBvcnQgVmlydHVhbFNjcm9sbCBmcm9tICd2aXJ0dWFsLXNjcm9sbCdcbmltcG9ydCB7cmFmLCByZXNpemV9IGZyb20gJ0BlbW90aW9uYWdlbmN5L3V0aWxzJ1xuXG5pbXBvcnQgU2Nyb2xsQmFyIGZyb20gJy4vU2Nyb2xsYmFyL1Njcm9sbEJhcidcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4vc3RhdGUnXG5cbmltcG9ydCB7Y2xhbXAsIGxlcnB9IGZyb20gJ0AvdXRpbHMvbWF0aCdcbmltcG9ydCB7Z2V0T3B0cywgSU9wdHN9IGZyb20gJy4vb3B0cydcbmltcG9ydCB7aXNGaXhlZH0gZnJvbSAnQC91dGlscy9pc0ZpeGVkJ1xuXG5leHBvcnQgY2xhc3MgU21vb3RoU2Nyb2xsIHtcbiAgbWF4OiBudW1iZXJcbiAgdnM6IHR5cGVvZiBWaXJ0dWFsU2Nyb2xsXG4gIHNjcm9sbGJhcjogdHlwZW9mIFNjcm9sbEJhci5wcm90b3R5cGVcblxuICBjdXJyZW50ID0gMFxuICBtaW4gPSAwXG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG9wdHM/OiBJT3B0cykge1xuICAgIHRoaXMub3B0cyA9IGdldE9wdHMob3B0cylcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgYm91bmRzKCk6IHZvaWQge1xuICAgIGNvbnN0IG1ldGhvZHMgPSBbJ3Jlc2l6ZScsICdhbmltYXRlJ11cbiAgICBtZXRob2RzLmZvckVhY2goZm4gPT4gKHRoaXNbZm5dID0gdGhpc1tmbl0uYmluZCh0aGlzKSkpXG4gIH1cblxuICBpbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYm91bmRzKClcblxuICAgIHJlc2l6ZS5vbih0aGlzLnJlc2l6ZSlcblxuICAgIHN0YXRlLnRhcmdldCA9IDBcbiAgICB0aGlzLm1heCA9IHRoaXMubWF4VmFsdWVcbiAgICB0aGlzLnNjcm9sbCgpXG5cbiAgICByYWYub24odGhpcy5hbmltYXRlKVxuICAgIHRoaXMuc2Nyb2xsYmFyID0gdGhpcy5vcHRzLnNjcm9sbGJhciAmJiBuZXcgU2Nyb2xsQmFyKClcbiAgfVxuXG4gIHJlc2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMub3B0cy5tb2JpbGUgJiYgd2luZG93LmlubmVyV2lkdGggPD0gdGhpcy5vcHRzLmJyZWFrcG9pbnQpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpXG4gICAgfVxuICB9XG5cbiAgZ2V0IG1heFZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMub3B0cy5lbC5zY3JvbGxIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgfVxuXG4gIHNjcm9sbCgpOiB2b2lkIHtcbiAgICB0aGlzLnZzID0gbmV3IFZpcnR1YWxTY3JvbGwoey4uLnRoaXMub3B0c30pXG5cbiAgICB0aGlzLnZzLm9uKChlOiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5jYW5TY3JvbGwpIHtcbiAgICAgICAgc3RhdGUudGFyZ2V0IC09IGUuZGVsdGFZICogdGhpcy5vcHRzLnN0ZXBTaXplXG4gICAgICAgIHN0YXRlLnRhcmdldCA9IGNsYW1wKHN0YXRlLnRhcmdldCwgdGhpcy5taW4sIHRoaXMubWF4KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBnZXQgY2FuU2Nyb2xsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNGaXhlZCgpICYmIHRoaXMub3B0cy5lbC5zY3JvbGxIZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgfVxuXG4gIGRldGVjdFNjcm9sbGluZygpOiB2b2lkIHtcbiAgICBjb25zdCBzID0gc3RhdGUuc2Nyb2xsYmFyXG4gICAgY29uc3QgZGlmID0gTWF0aC5hYnMoTWF0aC5yb3VuZChzdGF0ZS50YXJnZXQpIC0gTWF0aC5yb3VuZCh0aGlzLmN1cnJlbnQpKVxuXG4gICAgaWYgKGRpZiA+PSAxIHx8IHMpIHtcbiAgICAgIHN0YXRlLnNjcm9sbGluZyA9IHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUuc2Nyb2xsaW5nID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICBhbmltYXRlKCk6IHZvaWQge1xuICAgIHRoaXMuZGV0ZWN0U2Nyb2xsaW5nKClcblxuICAgIGlmIChzdGF0ZS5zY3JvbGxpbmcpIHtcbiAgICAgIHRoaXMubWF4ID0gdGhpcy5tYXhWYWx1ZVxuICAgICAgdGhpcy5jdXJyZW50ID0gbGVycCh0aGlzLmN1cnJlbnQsIHN0YXRlLnRhcmdldCwgdGhpcy5vcHRzLmZyaWN0aW9uKVxuICAgICAgdGhpcy5jdXJyZW50ID0gTWF0aC5yb3VuZCh0aGlzLmN1cnJlbnQgKiAxMDApIC8gMTAwXG4gICAgICB0aGlzLm9wdHMuZWwuc2Nyb2xsVG9wID0gdGhpcy5jdXJyZW50XG4gICAgICBzdGF0ZS5zY3JvbGxlZCA9IHRoaXMuY3VycmVudFxuICAgIH1cbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHN0YXRlLnRhcmdldCA9IDBcbiAgICB0aGlzLmN1cnJlbnQgPSAwXG4gICAgdGhpcy5vcHRzLmVsLnNjcm9sbFRvcCA9IDBcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgc3RhdGUudGFyZ2V0ID0gMFxuICAgIHN0YXRlLnNjcm9sbGVkID0gMFxuICAgIHN0YXRlLnNjcm9sbGluZyA9IGZhbHNlXG4gICAgcmFmLm9mZih0aGlzLmFuaW1hdGUpXG4gICAgcmVzaXplLm9mZih0aGlzLmFuaW1hdGUpXG4gICAgdGhpcy52cy5kZXN0cm95KClcbiAgICB0aGlzLnNjcm9sbGJhci5kZXN0cm95KClcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBUU21vb3RoU2Nyb2xsID0gdHlwZW9mIFNtb290aFNjcm9sbC5wcm90b3R5cGVcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBQUE7QUFBQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBNUJBO0FBQUE7QUFBQTtBQStCQTtBQUNBO0FBaENBO0FBQ0E7QUFEQTtBQUFBOzs7O0FDQUE7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFtQkE7QUFDQTtBQXBCQTtBQUFBO0FBQUE7QUFzQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQkE7QUFBQTtBQUFBO0FBOEJBO0FBQ0E7QUEvQkE7QUFBQTtBQUFBO0FBa0NBO0FBQ0E7QUFDQTtBQXBDQTtBQUFBO0FBQUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFoQkE7QUFDQTtBQURBO0FBQUE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7O0FDTkE7QUFDQTtBQUNBO0FBZ0JBO0FBT0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUFBO0FBQUE7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQWZBO0FBQUE7QUFBQTtBQWlCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUVBO0FBRUE7QUFqQ0E7QUFBQTtBQUFBO0FBb0NBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBbERBO0FBQUE7QUFBQTtBQXFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBN0RBO0FBQUE7QUFBQTtBQStEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBcEVBO0FBQUE7QUFBQTtBQXNFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUVBO0FBQUE7QUFBQTtBQThFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBNUZBO0FBQ0E7QUFEQTtBQUFBOzs7O0FDbEJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBU0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBOzs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFRQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQWFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBaEJBO0FBQUE7QUFBQTtBQW1CQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBN0JBO0FBQUE7QUFBQTtBQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQW5DQTtBQUFBO0FBQUE7QUF5Q0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsREE7QUFBQTtBQUFBO0FBeURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpFQTtBQUFBO0FBQUE7QUFvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3RUE7QUFBQTtBQUFBO0FBZ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBbkZBO0FBQUE7QUFBQTtBQXNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0ZBO0FBQUE7QUFBQTtBQXNDQTtBQUNBO0FBdkNBO0FBQUE7QUFBQTtBQXFEQTtBQUNBO0FBdERBO0FBQ0E7QUFEQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///50\n");

/***/ })

}]);