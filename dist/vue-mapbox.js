(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mapbox-gl"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["mapbox-gl", "vue"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("mapbox-gl"), require("vue")) : factory(root["mapbox-gl"], root["vue"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_27__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({ name: 'mglMessageBus' }));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(26),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/soal/dev/HM/vue-mapbox/src/components/GeojsonLayer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] GeojsonLayer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e8c1490a", Component.options)
  } else {
    hotAPI.reload("data-v-e8c1490a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(24),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/soal/dev/HM/vue-mapbox/src/components/GlMap.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] GlMap.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65e7c7e4", Component.options)
  } else {
    hotAPI.reload("data-v-65e7c7e4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(20),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/soal/dev/HM/vue-mapbox/src/components/UI/AttributionControl.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AttributionControl.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-311f8626", Component.options)
  } else {
    hotAPI.reload("data-v-311f8626", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(25),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/soal/dev/HM/vue-mapbox/src/components/UI/FullscreenControl.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FullscreenControl.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66943bec", Component.options)
  } else {
    hotAPI.reload("data-v-66943bec", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(23),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/soal/dev/HM/vue-mapbox/src/components/UI/GeolocateControl.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] GeolocateControl.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64495e42", Component.options)
  } else {
    hotAPI.reload("data-v-64495e42", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(22),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/soal/dev/HM/vue-mapbox/src/components/UI/NavigationControl.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] NavigationControl.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5605dbde", Component.options)
  } else {
    hotAPI.reload("data-v-5605dbde", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(21),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/soal/dev/HM/vue-mapbox/src/components/UI/ScaleControl.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ScaleControl.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4afaf47b", Component.options)
  } else {
    hotAPI.reload("data-v-4afaf47b", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mglMessageBus__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_layerEvents__ = __webpack_require__(17);
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    sourceId: {
      type: String
    },
    source: {
      type: [Object, String]
    },

    // mapbox layer style properties
    layerId: {
      type: String,
      required: true
    },
    type: {
      validator: function validator(value) {
        var allowedValues = ['fill', 'line', 'symbol', 'circle', 'fill-extrusion', 'raster', 'background'];
        return typeof value === 'string' && allowedValues.indexOf(value) !== -1 || value === undefined;
      },

      default: 'fill'
    },
    metadata: Object,
    refLayer: String,
    'source-layer': String,
    minzoom: Number,
    maxzoom: Number,
    filter: Object,
    layout: Object,
    paint: Object,

    // mapbox layer options
    before: Object,

    // custom options for component
    listenUserEvents: {
      type: Boolean,
      default: false
    },
    clearSource: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    },
    replaceSource: {
      type: Boolean,
      default: false
    },
    replace: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      initial: true,
      map: undefined
    };
  },
  mounted: function mounted() {
    var _this = this;

    // We wait for "load" event from map component to ensure mapbox is loaded and map created
    __WEBPACK_IMPORTED_MODULE_0__mglMessageBus__["a" /* default */].$on('mgl-load', function (map) {
      _this.map = map;
      _this.map.on('dataloading', _this.watchSourceLoading);
      if (_this.source) {
        try {
          _this.map.addSource(_this.sourceId, {
            type: 'geojson',
            data: _this.source
          });
        } catch (err) {
          if (_this.replaceSource) {
            _this.map.removeSource(_this.sourceId);
            _this.map.addSource(_this.sourceId, {
              type: 'geojson',
              data: _this.source
            });
          } else {
            _this.$emit('mgl-layer-source-error', err);
            __WEBPACK_IMPORTED_MODULE_0__mglMessageBus__["a" /* default */].$emit('mgl-layer-source-error', err);
          }
        }
      }
      _this.addLayer();
      if (_this.listenUserEvents) {
        _this.bindEvents(__WEBPACK_IMPORTED_MODULE_1__lib_layerEvents__["a" /* default */]);
      }
      _this.initial = false;
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.map) {
      this.map.removeLayer(this.layerId);
      if (this.clearSource) {
        try {
          this.map.removeSource(this.sourceId);
        } catch (error) {
          this.$emit('mgl-source-does-not-exist', error);
          __WEBPACK_IMPORTED_MODULE_0__mglMessageBus__["a" /* default */].$emit('mgl-source-does-not-exist', error);
        }
      }
    }
  },


  computed: {
    sourceLoaded: function sourceLoaded() {
      return this.map.isSourceLoaded(this.sourceId);
    }
  },

  watch: {
    source: function source(data) {
      if (this.initial) return;
      this.map.getSource(this.sourceId).setData(data);
    },
    filter: function filter(_filter) {
      if (this.initial) return;
      this.map.setFilter(this.layerId, _filter);
    },
    minzoom: function minzoom(val) {
      if (this.initial) return;
      this.map.setLayerZoomRange(this.layerId, val, this.maxzoom);
    },
    maxzoom: function maxzoom(val) {
      if (this.initial) return;
      this.map.setLayerZoomRange(this.layerId, this.minzoom, val);
    },
    paint: function paint(val) {
      var _this2 = this;

      // FIXME: save initial state and replace only changed fields?
      if (this.initial) return;
      val.keys().forEach(function (key) {
        _this2.map.setPaintProperty(_this2.layerId, key, val);
      });
    },
    layout: function layout(val) {
      var _this3 = this;

      // FIXME: save initial state and replace only changed fields?
      if (this.initial) return;
      val.keys().forEach(function (key) {
        _this3.map.setPaintProperty(_this3.layerId, key, val);
      });
    },
    listenedEvents: function listenedEvents(val) {
      if (this.initial) return;
      if (val) {
        this.bindEvents(__WEBPACK_IMPORTED_MODULE_1__lib_layerEvents__["a" /* default */]);
      } else {
        this.unBindEvents(__WEBPACK_IMPORTED_MODULE_1__lib_layerEvents__["a" /* default */]);
      }
    }
  },

  methods: {
    bindEvents: function bindEvents(events) {
      var _this4 = this;

      events.forEach(function (eventName) {
        _this4.map.on(eventName, _this4.layerId, function (event) {
          _this4.$emit('mgl-' + event, event);
        });
      });
    },
    unBindEvents: function unBindEvents(events) {
      var _this5 = this;

      events.forEach(function (eventName) {
        _this5.map.off(eventName, _this5.layerId);
      });
    },
    watchSourceLoading: function watchSourceLoading(data) {
      if (data.dataType === 'source' && data.sourceId === this.sourceId) {
        this.$emit('mgl-layer-source-loading', this.sourceId);
        __WEBPACK_IMPORTED_MODULE_0__mglMessageBus__["a" /* default */].$emit('mgl-layer-source-loading', this.sourceId);
        this.map.off('dataloading', this.watchSourceLoading);
      }
    },
    addLayer: function addLayer() {
      var existed = this.map.getLayer(this.layerId);
      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId);
        } else {
          this.$emit('mgl-layer-exists', this.layerId);
          __WEBPACK_IMPORTED_MODULE_0__mglMessageBus__["a" /* default */].$emit('mgl-layer-exists', this.layerId);
          return existed;
        }
      }
      var layer = {
        id: this.layerId,
        source: this.sourceId
      };
      if (this.refLayer) {
        layer.ref = this.refLayer;
      } else {
        layer.type = this.type ? this.type : 'fill';
        layer.source = this.sourceId;
        if (this['source-layer']) {
          layer['source-layer'] = this['source-layer'];
        }
        if (this.minzoom) layer.minzoom = this.minzoom;
        if (this.maxzoom) layer.maxzoom = this.maxzoom;
        if (this.layout) {
          layer.layout = this.layout;
        }
        if (this.filter) layer.filter = this.filter;
      }
      layer.paint = this.paint ? this.paint : { 'fill-color': 'rgba(' + 12 * (this.layerId.length * 3) + ',153,80,0.55)' };
      layer.metadata = this.metadata;

      this.map.addLayer(layer, this.before);
      this.$emit('mgl-layer-added', this.layerId);
      __WEBPACK_IMPORTED_MODULE_0__mglMessageBus__["a" /* default */].$emit('mgl-layer-added', this.layerId);
    },
    move: function move(beforeId) {
      this.map.moveLayer(this.layerId, beforeId);
    }
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mapbox_gl__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mapbox_gl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mapbox_gl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mglMessageBus__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_options__ = __webpack_require__(18);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//




// import events from '../lib/events';


/* harmony default export */ __webpack_exports__["default"] = ({
  props: __WEBPACK_IMPORTED_MODULE_2__lib_options__["a" /* default */],

  data: function data() {
    return {
      map: undefined
    };
  },
  mounted: function mounted() {
    var _this = this;

    // bus.$on('layer-source-error', err => console.log(err))
    this.loadMap().then(function (map) {
      _this.map = map;
      _this.$emit('mgl-load', map);
      __WEBPACK_IMPORTED_MODULE_1__mglMessageBus__["a" /* default */].$emit('mgl-load', map);
    });
  },


  methods: {
    // We wait in promise to ensure map is loaded and other components will receive map object
    loadMap: function loadMap() {
      var _this2 = this;

      return new Promise(function (resolve) {
        if (_this2.accessToken) __WEBPACK_IMPORTED_MODULE_0_mapbox_gl___default.a.accessToken = _this2.accessToken;
        var map = new __WEBPACK_IMPORTED_MODULE_0_mapbox_gl___default.a.Map(_extends({}, _this2._props, {
          style: _this2.mapStyle
        }));
        map.on('load', function () {
          return resolve(map);
        });
      });
    },
    resize: function resize() {
      this.map.resize();
    }
  }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mapbox_gl__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mapbox_gl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mapbox_gl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mglMessageBus__ = __webpack_require__(0);
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    compact: {
      type: Boolean,
      default: true
    }
  },

  data: function data() {
    return {
      control: undefined,
      map: undefined
    };
  },
  created: function created() {
    this.control = new __WEBPACK_IMPORTED_MODULE_0_mapbox_gl___default.a.AttributionControl({ compact: this.compact });
    __WEBPACK_IMPORTED_MODULE_1__mglMessageBus__["a" /* default */].$on('mgl-load', this.deferredMount);
  },
  beforeDestroy: function beforeDestroy() {
    this.map.removeControl(this.control);
  },


  methods: {
    deferredMount: function deferredMount(map) {
      this.map = map;
      this.map.addControl(this.control);
      this.$emit('mgl-attribution-control-added', this.control);
      __WEBPACK_IMPORTED_MODULE_1__mglMessageBus__["a" /* default */].$emit('mgl-attribution-control-added', this.control);
    }
  }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mapbox_gl__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mapbox_gl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mapbox_gl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mglMessageBus__ = __webpack_require__(0);
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MglFullscreenControl',

  props: {
    position: {
      type: String,
      default: 'top-right'
    }
  },

  data: function data() {
    return {
      control: undefined,
      map: undefined
    };
  },
  created: function created() {
    this.control = new __WEBPACK_IMPORTED_MODULE_0_mapbox_gl___default.a.FullscreenControl();
    __WEBPACK_IMPORTED_MODULE_1__mglMessageBus__["a" /* default */].$on('mgl-load', this.deferredMount);
  },
  beforeDestroy: function beforeDestroy() {
    this.map.removeControl(this.control);
  },


  methods: {
    deferredMount: function deferredMount(map) {
      this.map = map;
      this.map.addControl(this.control, this.position);
      this.$emit('mgl-fullscreen-control-added', this.control);
      __WEBPACK_IMPORTED_MODULE_1__mglMessageBus__["a" /* default */].$emit('mgl-fullscreen-control-added', this.control);
    }
  }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mapbox_gl__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mapbox_gl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mapbox_gl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mglMessageBus__ = __webpack_require__(0);
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MglGeolocateControl',

  props: {
    position: {
      type: String,
      default: 'top-right'
    },
    positionOptions: {
      type: Object,
      default: function _default() {
        return {
          enableHighAccuracy: false,
          timeout: 6000
        };
      }
    },
    watchPosition: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      control: undefined,
      map: undefined
    };
  },
  created: function created() {
    var _this = this;

    this.control = new __WEBPACK_IMPORTED_MODULE_0_mapbox_gl___default.a.GeolocateControl(this._props);

    this.control.on('error', function (err) {
      _this.$emit('geolocate-error', err);
      __WEBPACK_IMPORTED_MODULE_1__mglMessageBus__["a" /* default */].$emit('geolocate-error', err);
    });
    this.control.on('geolocate', function (position) {
      _this.$emit('geolocate', position);
      __WEBPACK_IMPORTED_MODULE_1__mglMessageBus__["a" /* default */].$emit('geolocate-error', position);
    });
    __WEBPACK_IMPORTED_MODULE_1__mglMessageBus__["a" /* default */].$on('mgl-load', this.deferredMount);
  },
  beforeDestroy: function beforeDestroy() {
    this.map.removeControl(this.control);
  },


  methods: {
    deferredMount: function deferredMount(map) {
      this.map = map;
      this.map.addControl(this.control);
      this.$emit('mgl-geolocate-control-added', this.control);
      __WEBPACK_IMPORTED_MODULE_1__mglMessageBus__["a" /* default */].$emit('mgl-geolocate-control-added', this.control);
    }
  }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mapbox_gl__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mapbox_gl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mapbox_gl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mglMessageBus__ = __webpack_require__(0);
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MglNavigationControl',

  props: {
    position: {
      type: String,
      default: 'top-right'
    }
  },

  data: function data() {
    return {
      control: undefined,
      map: undefined
    };
  },
  created: function created() {
    this.control = new __WEBPACK_IMPORTED_MODULE_0_mapbox_gl___default.a.NavigationControl();
    __WEBPACK_IMPORTED_MODULE_1__mglMessageBus__["a" /* default */].$on('mgl-load', this.deferredMount);
  },
  beforeDestroy: function beforeDestroy() {
    this.map.removeControl(this.control);
  },


  methods: {
    deferredMount: function deferredMount(map) {
      this.map = map;
      this.map.addControl(this.control, this.position);
      this.$emit('mgl-nav-control-added', this.control);
      __WEBPACK_IMPORTED_MODULE_1__mglMessageBus__["a" /* default */].$emit('mgl-nav-control-added', this.control);
    }
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mapbox_gl__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mapbox_gl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mapbox_gl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mglMessageBus__ = __webpack_require__(0);
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MglScaleControl',

  props: {
    maxWidth: {
      type: Number,
      default: 150
    },
    unit: {
      type: String,
      default: 'metric'
    }
  },

  data: function data() {
    return {
      control: undefined,
      map: undefined
    };
  },
  created: function created() {
    this.control = new __WEBPACK_IMPORTED_MODULE_0_mapbox_gl___default.a.ScaleControl(this._props);
    __WEBPACK_IMPORTED_MODULE_1__mglMessageBus__["a" /* default */].$on('mgl-load', this.deferredMount);
  },
  beforeDestroy: function beforeDestroy() {
    this.map.removeControl(this.control);
  },


  methods: {
    deferredMount: function deferredMount(map) {
      this.map = map;
      try {
        this.map.addControl(this.control);
      } catch (err) {
        console.log(err);
      }
      this.$emit('mgl-scale-control-added', this.control);
      __WEBPACK_IMPORTED_MODULE_1__mglMessageBus__["a" /* default */].$emit('mgl-scale-control-added', this.control);
    }
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (['mousedown', 'mouseup', 'click', 'dblclick', 'mousemove', 'mouseenter', 'mouseleave', 'mouseover', 'mouseout', 'contextmenu', 'touchstart', 'touchend', 'touchcancel']);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  container: {
    type: [String, HTMLElement],
    default: function _default() {
      return 'map';
    }
  },
  accessToken: {
    type: String,
    default: null
  },
  minZoom: {
    type: Number,
    default: 0
  },
  maxZoom: {
    type: Number,
    default: 22
  },
  mapStyle: {
    type: [String, Object],
    required: true
  },
  hash: {
    type: Boolean,
    default: false
  },
  interactive: {
    type: Boolean,
    default: true
  },
  bearingSnap: {
    type: Number,
    default: 7
  },
  classes: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  attributionControl: {
    type: Boolean,
    default: true
  },
  logoPosition: {
    type: String,
    default: 'bottom-left'
  },
  failIfMajorPerformanceCaveat: {
    type: Boolean,
    default: false
  },
  preserveDrawingBuffer: {
    type: Boolean,
    default: false
  },
  refreshExpiredTiles: {
    type: Boolean,
    default: false
  },
  maxBounds: {
    type: Array,
    default: function _default() {
      return undefined;
    }
  },
  scrollZoom: {
    type: [Boolean, Object],
    default: function _default() {
      return true;
    }
  },
  boxZoom: {
    type: Boolean,
    default: true
  },
  dragRotate: {
    type: Boolean,
    default: true
  },
  dragPan: {
    type: Boolean,
    default: true
  },
  keyboard: {
    type: Boolean,
    default: true
  },
  doubleClickZoom: {
    type: Boolean,
    default: true
  },
  touchZoomRotate: {
    type: [Boolean, Object],
    default: function _default() {
      return true;
    }
  },
  trackResize: {
    type: Boolean,
    default: true
  },
  center: {
    type: Array,
    default: function _default() {
      return [0, 0];
    }
  },
  zoom: {
    type: Number,
    default: 0
  },
  bearing: {
    type: Number,
    default: 0
  },
  pitch: {
    type: Number,
    default: 0
  },
  renderWorldCopies: {
    type: Boolean,
    default: true
  }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_GlMap_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_GlMap_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_GlMap_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_UI_NavigationControl_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_UI_NavigationControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_UI_NavigationControl_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_UI_GeolocateControl_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_UI_GeolocateControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_UI_GeolocateControl_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_UI_FullscreenControl_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_UI_FullscreenControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_UI_FullscreenControl_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_UI_AttributionControl_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_UI_AttributionControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_UI_AttributionControl_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_UI_ScaleControl_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_UI_ScaleControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_UI_ScaleControl_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_GeojsonLayer_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_GeojsonLayer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_GeojsonLayer_vue__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MglMap", function() { return MglMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MglNavigationControl", function() { return MglNavigationControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MglGeolocateControl", function() { return MglGeolocateControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MglFullscreenControl", function() { return MglFullscreenControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MglAttributionControl", function() { return MglAttributionControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MglScaleControl", function() { return MglScaleControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MglGeojsonLayer", function() { return MglGeojsonLayer; });
// exports.MglMap = require('./components/GlMap.vue');
// exports.MglNavigationControl = require('./components/controls/MglNavigationControl.vue');









var MglMap = __WEBPACK_IMPORTED_MODULE_0__components_GlMap_vue___default.a;
var MglNavigationControl = __WEBPACK_IMPORTED_MODULE_1__components_UI_NavigationControl_vue___default.a;
var MglGeolocateControl = __WEBPACK_IMPORTED_MODULE_2__components_UI_GeolocateControl_vue___default.a;
var MglFullscreenControl = __WEBPACK_IMPORTED_MODULE_3__components_UI_FullscreenControl_vue___default.a;
var MglAttributionControl = __WEBPACK_IMPORTED_MODULE_4__components_UI_AttributionControl_vue___default.a;
var MglScaleControl = __WEBPACK_IMPORTED_MODULE_5__components_UI_ScaleControl_vue___default.a;
var MglGeojsonLayer = __WEBPACK_IMPORTED_MODULE_6__components_GeojsonLayer_vue___default.a;

// export default {
//   MglMap,
//   MglNavigationControl
// };

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div')
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-311f8626", module.exports)
  }
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c("div")
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4afaf47b", module.exports)
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c("div")
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5605dbde", module.exports)
  }
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c("div")
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-64495e42", module.exports)
  }
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": _vm.container
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-65e7c7e4", module.exports)
  }
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c("div")
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-66943bec", module.exports)
  }
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div')
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e8c1490a", module.exports)
  }
}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-mapbox.js.map