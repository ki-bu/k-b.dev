exports.id = "component---node-modules-lekoarts-gatsby-theme-cara-src-templates-cara-tsx";
exports.ids = ["component---node-modules-lekoarts-gatsby-theme-cara-src-templates-cara-tsx"];
exports.modules = {

/***/ "./node_modules/@react-spring/animated/dist/react-spring-animated.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@react-spring/animated/dist/react-spring-animated.esm.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animated": () => (/* binding */ Animated),
/* harmony export */   "AnimatedArray": () => (/* binding */ AnimatedArray),
/* harmony export */   "AnimatedObject": () => (/* binding */ AnimatedObject),
/* harmony export */   "AnimatedString": () => (/* binding */ AnimatedString),
/* harmony export */   "AnimatedValue": () => (/* binding */ AnimatedValue),
/* harmony export */   "createHost": () => (/* binding */ createHost),
/* harmony export */   "getAnimated": () => (/* binding */ getAnimated),
/* harmony export */   "getAnimatedType": () => (/* binding */ getAnimatedType),
/* harmony export */   "getPayload": () => (/* binding */ getPayload),
/* harmony export */   "isAnimated": () => (/* binding */ isAnimated),
/* harmony export */   "setAnimated": () => (/* binding */ setAnimated)
/* harmony export */ });
/* harmony import */ var _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-spring/shared */ "./node_modules/@react-spring/shared/dist/react-spring-shared.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const $node = Symbol.for('Animated:node');
const isAnimated = value => !!value && value[$node] === value;
const getAnimated = owner => owner && owner[$node];
const setAnimated = (owner, node) => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.defineHidden)(owner, $node, node);
const getPayload = owner => owner && owner[$node] && owner[$node].getPayload();
class Animated {
  constructor() {
    this.payload = void 0;
    setAnimated(this, this);
  }

  getPayload() {
    return this.payload || [];
  }

}

class AnimatedValue extends Animated {
  constructor(_value) {
    super();
    this.done = true;
    this.elapsedTime = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.v0 = void 0;
    this.durationProgress = 0;
    this._value = _value;

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.num(this._value)) {
      this.lastPosition = this._value;
    }
  }

  static create(value) {
    return new AnimatedValue(value);
  }

  getPayload() {
    return [this];
  }

  getValue() {
    return this._value;
  }

  setValue(value, step) {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.num(value)) {
      this.lastPosition = value;

      if (step) {
        value = Math.round(value / step) * step;

        if (this.done) {
          this.lastPosition = value;
        }
      }
    }

    if (this._value === value) {
      return false;
    }

    this._value = value;
    return true;
  }

  reset() {
    const {
      done
    } = this;
    this.done = false;

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.num(this._value)) {
      this.elapsedTime = 0;
      this.durationProgress = 0;
      this.lastPosition = this._value;
      if (done) this.lastVelocity = null;
      this.v0 = null;
    }
  }

}

class AnimatedString extends AnimatedValue {
  constructor(value) {
    super(0);
    this._string = null;
    this._toString = void 0;
    this._toString = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.createInterpolator)({
      output: [value, value]
    });
  }

  static create(value) {
    return new AnimatedString(value);
  }

  getValue() {
    let value = this._string;
    return value == null ? this._string = this._toString(this._value) : value;
  }

  setValue(value) {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.str(value)) {
      if (value == this._string) {
        return false;
      }

      this._string = value;
      this._value = 1;
    } else if (super.setValue(value)) {
      this._string = null;
    } else {
      return false;
    }

    return true;
  }

  reset(goal) {
    if (goal) {
      this._toString = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.createInterpolator)({
        output: [this.getValue(), goal]
      });
    }

    this._value = 0;
    super.reset();
  }

}

const TreeContext = {
  dependencies: null
};

class AnimatedObject extends Animated {
  constructor(source) {
    super();
    this.source = source;
    this.setValue(source);
  }

  getValue(animated) {
    const values = {};
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(this.source, (source, key) => {
      if (isAnimated(source)) {
        values[key] = source.getValue(animated);
      } else if ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(source)) {
        values[key] = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(source);
      } else if (!animated) {
        values[key] = source;
      }
    });
    return values;
  }

  setValue(source) {
    this.source = source;
    this.payload = this._makePayload(source);
  }

  reset() {
    if (this.payload) {
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(this.payload, node => node.reset());
    }
  }

  _makePayload(source) {
    if (source) {
      const payload = new Set();
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(source, this._addToPayload, payload);
      return Array.from(payload);
    }
  }

  _addToPayload(source) {
    if (TreeContext.dependencies && (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(source)) {
      TreeContext.dependencies.add(source);
    }

    const payload = getPayload(source);

    if (payload) {
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(payload, node => this.add(node));
    }
  }

}

class AnimatedArray extends AnimatedObject {
  constructor(source) {
    super(source);
  }

  static create(source) {
    return new AnimatedArray(source);
  }

  getValue() {
    return this.source.map(node => node.getValue());
  }

  setValue(source) {
    const payload = this.getPayload();

    if (source.length == payload.length) {
      return payload.map((node, i) => node.setValue(source[i])).some(Boolean);
    }

    super.setValue(source.map(makeAnimated));
    return true;
  }

}

function makeAnimated(value) {
  const nodeType = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isAnimatedString)(value) ? AnimatedString : AnimatedValue;
  return nodeType.create(value);
}

function getAnimatedType(value) {
  const parentNode = getAnimated(value);
  return parentNode ? parentNode.constructor : _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(value) ? AnimatedArray : (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isAnimatedString)(value) ? AnimatedString : AnimatedValue;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const withAnimated = (Component, host) => {
  const hasInstance = !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(Component) || Component.prototype && Component.prototype.isReactComponent;
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((givenProps, givenRef) => {
    const instanceRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const ref = hasInstance && (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(value => {
      instanceRef.current = updateRef(givenRef, value);
    }, [givenRef]);
    const [props, deps] = getAnimatedState(givenProps, host);
    const forceUpdate = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useForceUpdate)();

    const callback = () => {
      const instance = instanceRef.current;

      if (hasInstance && !instance) {
        return;
      }

      const didUpdate = instance ? host.applyAnimatedValues(instance, props.getValue(true)) : false;

      if (didUpdate === false) {
        forceUpdate();
      }
    };

    const observer = new PropsObserver(callback, deps);
    const observerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
      const lastObserver = observerRef.current;
      observerRef.current = observer;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(deps, dep => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.addFluidObserver)(dep, observer));

      if (lastObserver) {
        (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(lastObserver.deps, dep => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.removeFluidObserver)(dep, lastObserver));
        _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.cancel(lastObserver.update);
      }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(callback, []);
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useOnce)(() => () => {
      const observer = observerRef.current;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(observer.deps, dep => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.removeFluidObserver)(dep, observer));
    });
    const usedProps = host.getComponentProps(props.getValue());
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Component, _extends({}, usedProps, {
      ref: ref
    }));
  });
};

class PropsObserver {
  constructor(update, deps) {
    this.update = update;
    this.deps = deps;
  }

  eventObserved(event) {
    if (event.type == 'change') {
      _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.write(this.update);
    }
  }

}

function getAnimatedState(props, host) {
  const dependencies = new Set();
  TreeContext.dependencies = dependencies;
  if (props.style) props = _extends({}, props, {
    style: host.createAnimatedStyle(props.style)
  });
  props = new AnimatedObject(props);
  TreeContext.dependencies = null;
  return [props, dependencies];
}

function updateRef(ref, value) {
  if (ref) {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(ref)) ref(value);else ref.current = value;
  }

  return value;
}

const cacheKey = Symbol.for('AnimatedComponent');
const createHost = (components, {
  applyAnimatedValues: _applyAnimatedValues = () => false,
  createAnimatedStyle: _createAnimatedStyle = style => new AnimatedObject(style),
  getComponentProps: _getComponentProps = props => props
} = {}) => {
  const hostConfig = {
    applyAnimatedValues: _applyAnimatedValues,
    createAnimatedStyle: _createAnimatedStyle,
    getComponentProps: _getComponentProps
  };

  const animated = Component => {
    const displayName = getDisplayName(Component) || 'Anonymous';

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.str(Component)) {
      Component = animated[Component] || (animated[Component] = withAnimated(Component, hostConfig));
    } else {
      Component = Component[cacheKey] || (Component[cacheKey] = withAnimated(Component, hostConfig));
    }

    Component.displayName = `Animated(${displayName})`;
    return Component;
  };

  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(components, (Component, key) => {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(components)) {
      key = getDisplayName(Component);
    }

    animated[key] = animated(Component);
  });
  return {
    animated
  };
};

const getDisplayName = arg => _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.str(arg) ? arg : arg && _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.str(arg.displayName) ? arg.displayName : _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(arg) && arg.name || null;




/***/ }),

/***/ "./node_modules/@react-spring/core/dist/react-spring-core.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@react-spring/core/dist/react-spring-core.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Globals": () => (/* reexport safe */ _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals),
/* harmony export */   "createInterpolator": () => (/* reexport safe */ _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.createInterpolator),
/* harmony export */   "BailSignal": () => (/* binding */ BailSignal),
/* harmony export */   "Controller": () => (/* binding */ Controller),
/* harmony export */   "FrameValue": () => (/* binding */ FrameValue),
/* harmony export */   "Interpolation": () => (/* binding */ Interpolation),
/* harmony export */   "Spring": () => (/* binding */ Spring),
/* harmony export */   "SpringContext": () => (/* binding */ SpringContext),
/* harmony export */   "SpringRef": () => (/* binding */ SpringRef),
/* harmony export */   "SpringValue": () => (/* binding */ SpringValue),
/* harmony export */   "Trail": () => (/* binding */ Trail),
/* harmony export */   "Transition": () => (/* binding */ Transition),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "inferTo": () => (/* binding */ inferTo),
/* harmony export */   "interpolate": () => (/* binding */ interpolate),
/* harmony export */   "to": () => (/* binding */ to),
/* harmony export */   "update": () => (/* binding */ update),
/* harmony export */   "useChain": () => (/* binding */ useChain),
/* harmony export */   "useSpring": () => (/* binding */ useSpring),
/* harmony export */   "useSpringRef": () => (/* binding */ useSpringRef),
/* harmony export */   "useSprings": () => (/* binding */ useSprings),
/* harmony export */   "useTrail": () => (/* binding */ useTrail),
/* harmony export */   "useTransition": () => (/* binding */ useTransition)
/* harmony export */ });
/* harmony import */ var _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-spring/shared */ "./node_modules/@react-spring/shared/dist/react-spring-shared.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_spring_animated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/animated */ "./node_modules/@react-spring/animated/dist/react-spring-animated.esm.js");
/* harmony import */ var _react_spring_types_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-spring/types/animated */ "./node_modules/@react-spring/types/animated.js");
/* harmony import */ var _react_spring_types_animated__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_spring_types_animated__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _react_spring_types_animated__WEBPACK_IMPORTED_MODULE_3__) if(["default","Globals","createInterpolator","BailSignal","Controller","FrameValue","Interpolation","Spring","SpringContext","SpringRef","SpringValue","Trail","Transition","config","inferTo","interpolate","to","update","useChain","useSpring","useSpringRef","useSprings","useTrail","useTransition"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _react_spring_types_animated__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _react_spring_types_interpolation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-spring/types/interpolation */ "./node_modules/@react-spring/types/interpolation.js");
/* harmony import */ var _react_spring_types_interpolation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_spring_types_interpolation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _react_spring_types_interpolation__WEBPACK_IMPORTED_MODULE_4__) if(["default","Globals","createInterpolator","BailSignal","Controller","FrameValue","Interpolation","Spring","SpringContext","SpringRef","SpringValue","Trail","Transition","config","inferTo","interpolate","to","update","useChain","useSpring","useSpringRef","useSprings","useTrail","useTransition"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _react_spring_types_interpolation__WEBPACK_IMPORTED_MODULE_4__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);








function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function callProp(value, ...args) {
  return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(value) ? value(...args) : value;
}
const matchProp = (value, key) => value === true || !!(key && value && (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(value) ? value(key) : (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(value).includes(key)));
const resolveProp = (prop, key) => _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(prop) ? key && prop[key] : prop;
const getDefaultProp = (props, key) => props.default === true ? props[key] : props.default ? props.default[key] : undefined;

const noopTransform = value => value;

const getDefaultProps = (props, transform = noopTransform) => {
  let keys = DEFAULT_PROPS;

  if (props.default && props.default !== true) {
    props = props.default;
    keys = Object.keys(props);
  }

  const defaults = {};

  for (const key of keys) {
    const value = transform(props[key], key);

    if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(value)) {
      defaults[key] = value;
    }
  }

  return defaults;
};
const DEFAULT_PROPS = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'];
const RESERVED_PROPS = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  keys: 1,
  callId: 1,
  parentId: 1
};

function getForwardProps(props) {
  const forward = {};
  let count = 0;
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(props, (value, prop) => {
    if (!RESERVED_PROPS[prop]) {
      forward[prop] = value;
      count++;
    }
  });

  if (count) {
    return forward;
  }
}

function inferTo(props) {
  const to = getForwardProps(props);

  if (to) {
    const out = {
      to
    };
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(props, (val, key) => key in to || (out[key] = val));
    return out;
  }

  return _extends({}, props);
}
function computeGoal(value) {
  value = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(value);
  return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(value) ? value.map(computeGoal) : (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isAnimatedString)(value) ? _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.createStringInterpolator({
    range: [0, 1],
    output: [value, value]
  })(1) : value;
}
function hasProps(props) {
  for (const _ in props) return true;

  return false;
}
function isAsyncTo(to) {
  return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(to) || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(to) && _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(to[0]);
}
function detachRefs(ctrl, ref) {
  var _ctrl$ref;

  (_ctrl$ref = ctrl.ref) == null ? void 0 : _ctrl$ref.delete(ctrl);
  ref == null ? void 0 : ref.delete(ctrl);
}
function replaceRef(ctrl, ref) {
  if (ref && ctrl.ref !== ref) {
    var _ctrl$ref2;

    (_ctrl$ref2 = ctrl.ref) == null ? void 0 : _ctrl$ref2.delete(ctrl);
    ref.add(ctrl);
    ctrl.ref = ref;
  }
}

function useChain(refs, timeSteps, timeFrame = 1000) {
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (timeSteps) {
      let prevDelay = 0;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(refs, (ref, i) => {
        const controllers = ref.current;

        if (controllers.length) {
          let delay = timeFrame * timeSteps[i];
          if (isNaN(delay)) delay = prevDelay;else prevDelay = delay;
          (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(controllers, ctrl => {
            (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(ctrl.queue, props => {
              const memoizedDelayProp = props.delay;

              props.delay = key => delay + callProp(memoizedDelayProp || 0, key);
            });
            ctrl.start();
          });
        }
      });
    } else {
      let p = Promise.resolve();
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(refs, ref => {
        const controllers = ref.current;

        if (controllers.length) {
          const queues = controllers.map(ctrl => {
            const q = ctrl.queue;
            ctrl.queue = [];
            return q;
          });
          p = p.then(() => {
            (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(controllers, (ctrl, i) => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(queues[i] || [], update => ctrl.queue.push(update)));
            return Promise.all(ref.start());
          });
        }
      });
    }
  });
}

const config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};

const linear = t => t;

const defaults = _extends({}, config.default, {
  mass: 1,
  damping: 1,
  easing: linear,
  clamp: false
});

class AnimationConfig {
  constructor() {
    this.tension = void 0;
    this.friction = void 0;
    this.frequency = void 0;
    this.damping = void 0;
    this.mass = void 0;
    this.velocity = 0;
    this.restVelocity = void 0;
    this.precision = void 0;
    this.progress = void 0;
    this.duration = void 0;
    this.easing = void 0;
    this.clamp = void 0;
    this.bounce = void 0;
    this.decay = void 0;
    this.round = void 0;
    Object.assign(this, defaults);
  }

}
function mergeConfig(config, newConfig, defaultConfig) {
  if (defaultConfig) {
    defaultConfig = _extends({}, defaultConfig);
    sanitizeConfig(defaultConfig, newConfig);
    newConfig = _extends({}, defaultConfig, newConfig);
  }

  sanitizeConfig(config, newConfig);
  Object.assign(config, newConfig);

  for (const key in defaults) {
    if (config[key] == null) {
      config[key] = defaults[key];
    }
  }

  let {
    mass,
    frequency,
    damping
  } = config;

  if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(frequency)) {
    if (frequency < 0.01) frequency = 0.01;
    if (damping < 0) damping = 0;
    config.tension = Math.pow(2 * Math.PI / frequency, 2) * mass;
    config.friction = 4 * Math.PI * damping * mass / frequency;
  }

  return config;
}

function sanitizeConfig(config, props) {
  if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.decay)) {
    config.duration = undefined;
  } else {
    const isTensionConfig = !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.tension) || !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.friction);

    if (isTensionConfig || !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.frequency) || !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.damping) || !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.mass)) {
      config.duration = undefined;
      config.decay = undefined;
    }

    if (isTensionConfig) {
      config.frequency = undefined;
    }
  }
}

const emptyArray = [];
class Animation {
  constructor() {
    this.changed = false;
    this.values = emptyArray;
    this.toValues = null;
    this.fromValues = emptyArray;
    this.to = void 0;
    this.from = void 0;
    this.config = new AnimationConfig();
    this.immediate = false;
  }

}

function scheduleProps(callId, {
  key,
  props,
  defaultProps,
  state,
  actions
}) {
  return new Promise((resolve, reject) => {
    var _props$cancel;

    let delay;
    let timeout;
    let cancel = matchProp((_props$cancel = props.cancel) != null ? _props$cancel : defaultProps == null ? void 0 : defaultProps.cancel, key);

    if (cancel) {
      onStart();
    } else {
      if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.pause)) {
        state.paused = matchProp(props.pause, key);
      }

      let pause = defaultProps == null ? void 0 : defaultProps.pause;

      if (pause !== true) {
        pause = state.paused || matchProp(pause, key);
      }

      delay = callProp(props.delay || 0, key);

      if (pause) {
        state.resumeQueue.add(onResume);
        actions.pause();
      } else {
        actions.resume();
        onResume();
      }
    }

    function onPause() {
      state.resumeQueue.add(onResume);
      state.timeouts.delete(timeout);
      timeout.cancel();
      delay = timeout.time - _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.now();
    }

    function onResume() {
      if (delay > 0) {
        timeout = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.setTimeout(onStart, delay);
        state.pauseQueue.add(onPause);
        state.timeouts.add(timeout);
      } else {
        onStart();
      }
    }

    function onStart() {
      state.pauseQueue.delete(onPause);
      state.timeouts.delete(timeout);

      if (callId <= (state.cancelId || 0)) {
        cancel = true;
      }

      try {
        actions.start(_extends({}, props, {
          callId,
          cancel
        }), resolve);
      } catch (err) {
        reject(err);
      }
    }
  });
}

const getCombinedResult = (target, results) => results.length == 1 ? results[0] : results.some(result => result.cancelled) ? getCancelledResult(target.get()) : results.every(result => result.noop) ? getNoopResult(target.get()) : getFinishedResult(target.get(), results.every(result => result.finished));
const getNoopResult = value => ({
  value,
  noop: true,
  finished: true,
  cancelled: false
});
const getFinishedResult = (value, finished, cancelled = false) => ({
  value,
  finished,
  cancelled
});
const getCancelledResult = value => ({
  value,
  cancelled: true,
  finished: false
});

function runAsync(to, props, state, target) {
  const {
    callId,
    parentId,
    onRest
  } = props;
  const {
    asyncTo: prevTo,
    promise: prevPromise
  } = state;

  if (!parentId && to === prevTo && !props.reset) {
    return prevPromise;
  }

  return state.promise = (async () => {
    state.asyncId = callId;
    state.asyncTo = to;
    const defaultProps = getDefaultProps(props, (value, key) => key === 'onRest' ? undefined : value);
    let preventBail;
    let bail;
    const bailPromise = new Promise((resolve, reject) => (preventBail = resolve, bail = reject));

    const bailIfEnded = bailSignal => {
      const bailResult = callId <= (state.cancelId || 0) && getCancelledResult(target) || callId !== state.asyncId && getFinishedResult(target, false);

      if (bailResult) {
        bailSignal.result = bailResult;
        bail(bailSignal);
        throw bailSignal;
      }
    };

    const animate = (arg1, arg2) => {
      const bailSignal = new BailSignal();
      const skipAnimationSignal = new SkipAniamtionSignal();
      return (async () => {
        if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.skipAnimation) {
          stopAsync(state);
          skipAnimationSignal.result = getFinishedResult(target, false);
          bail(skipAnimationSignal);
          throw skipAnimationSignal;
        }

        bailIfEnded(bailSignal);
        const props = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(arg1) ? _extends({}, arg1) : _extends({}, arg2, {
          to: arg1
        });
        props.parentId = callId;
        (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(defaultProps, (value, key) => {
          if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props[key])) {
            props[key] = value;
          }
        });
        const result = await target.start(props);
        bailIfEnded(bailSignal);

        if (state.paused) {
          await new Promise(resume => {
            state.resumeQueue.add(resume);
          });
        }

        return result;
      })();
    };

    let result;

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.skipAnimation) {
      stopAsync(state);
      return getFinishedResult(target, false);
    }

    try {
      let animating;

      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(to)) {
        animating = (async queue => {
          for (const props of queue) {
            await animate(props);
          }
        })(to);
      } else {
          animating = Promise.resolve(to(animate, target.stop.bind(target)));
        }

      await Promise.all([animating.then(preventBail), bailPromise]);
      result = getFinishedResult(target.get(), true, false);
    } catch (err) {
      if (err instanceof BailSignal) {
        result = err.result;
      } else if (err instanceof SkipAniamtionSignal) {
        result = err.result;
      } else {
        throw err;
      }
    } finally {
      if (callId == state.asyncId) {
        state.asyncId = parentId;
        state.asyncTo = parentId ? prevTo : undefined;
        state.promise = parentId ? prevPromise : undefined;
      }
    }

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(onRest)) {
      _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => {
        onRest(result, target, target.item);
      });
    }

    return result;
  })();
}
function stopAsync(state, cancelId) {
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flush)(state.timeouts, t => t.cancel());
  state.pauseQueue.clear();
  state.resumeQueue.clear();
  state.asyncId = state.asyncTo = state.promise = undefined;
  if (cancelId) state.cancelId = cancelId;
}
class BailSignal extends Error {
  constructor() {
    super('An async animation has been interrupted. You see this error because you ' + 'forgot to use `await` or `.catch(...)` on its returned promise.');
    this.result = void 0;
  }

}
class SkipAniamtionSignal extends Error {
  constructor() {
    super('SkipAnimationSignal');
    this.result = void 0;
  }

}

const isFrameValue = value => value instanceof FrameValue;
let nextId$1 = 1;
class FrameValue extends _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.FluidValue {
  constructor(...args) {
    super(...args);
    this.id = nextId$1++;
    this.key = void 0;
    this._priority = 0;
  }

  get priority() {
    return this._priority;
  }

  set priority(priority) {
    if (this._priority != priority) {
      this._priority = priority;

      this._onPriorityChange(priority);
    }
  }

  get() {
    const node = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this);
    return node && node.getValue();
  }

  to(...args) {
    return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.to(this, args);
  }

  interpolate(...args) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.deprecateInterpolate)();
    return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.to(this, args);
  }

  toJSON() {
    return this.get();
  }

  observerAdded(count) {
    if (count == 1) this._attach();
  }

  observerRemoved(count) {
    if (count == 0) this._detach();
  }

  _attach() {}

  _detach() {}

  _onChange(value, idle = false) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.callFluidObservers)(this, {
      type: 'change',
      parent: this,
      value,
      idle
    });
  }

  _onPriorityChange(priority) {
    if (!this.idle) {
      _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.frameLoop.sort(this);
    }

    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.callFluidObservers)(this, {
      type: 'priority',
      parent: this,
      priority
    });
  }

}

const $P = Symbol.for('SpringPhase');
const HAS_ANIMATED = 1;
const IS_ANIMATING = 2;
const IS_PAUSED = 4;
const hasAnimated = target => (target[$P] & HAS_ANIMATED) > 0;
const isAnimating = target => (target[$P] & IS_ANIMATING) > 0;
const isPaused = target => (target[$P] & IS_PAUSED) > 0;
const setActiveBit = (target, active) => active ? target[$P] |= IS_ANIMATING | HAS_ANIMATED : target[$P] &= ~IS_ANIMATING;
const setPausedBit = (target, paused) => paused ? target[$P] |= IS_PAUSED : target[$P] &= ~IS_PAUSED;

class SpringValue extends FrameValue {
  constructor(arg1, arg2) {
    super();
    this.key = void 0;
    this.animation = new Animation();
    this.queue = void 0;
    this.defaultProps = {};
    this._state = {
      paused: false,
      pauseQueue: new Set(),
      resumeQueue: new Set(),
      timeouts: new Set()
    };
    this._pendingCalls = new Set();
    this._lastCallId = 0;
    this._lastToId = 0;
    this._memoizedDuration = 0;

    if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(arg1) || !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(arg2)) {
      const props = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(arg1) ? _extends({}, arg1) : _extends({}, arg2, {
        from: arg1
      });

      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.default)) {
        props.default = true;
      }

      this.start(props);
    }
  }

  get idle() {
    return !(isAnimating(this) || this._state.asyncTo) || isPaused(this);
  }

  get goal() {
    return (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(this.animation.to);
  }

  get velocity() {
    const node = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this);
    return node instanceof _react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.AnimatedValue ? node.lastVelocity || 0 : node.getPayload().map(node => node.lastVelocity || 0);
  }

  get hasAnimated() {
    return hasAnimated(this);
  }

  get isAnimating() {
    return isAnimating(this);
  }

  get isPaused() {
    return isPaused(this);
  }

  advance(dt) {
    let idle = true;
    let changed = false;
    const anim = this.animation;
    let {
      config,
      toValues
    } = anim;
    const payload = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getPayload)(anim.to);

    if (!payload && (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(anim.to)) {
      toValues = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(anim.to));
    }

    anim.values.forEach((node, i) => {
      if (node.done) return;
      const to = node.constructor == _react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.AnimatedString ? 1 : payload ? payload[i].lastPosition : toValues[i];
      let finished = anim.immediate;
      let position = to;

      if (!finished) {
        position = node.lastPosition;

        if (config.tension <= 0) {
          node.done = true;
          return;
        }

        let elapsed = node.elapsedTime += dt;
        const from = anim.fromValues[i];
        const v0 = node.v0 != null ? node.v0 : node.v0 = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(config.velocity) ? config.velocity[i] : config.velocity;
        let velocity;

        if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(config.duration)) {
          let p = 1;

          if (config.duration > 0) {
            if (this._memoizedDuration !== config.duration) {
              this._memoizedDuration = config.duration;

              if (node.durationProgress > 0) {
                node.elapsedTime = config.duration * node.durationProgress;
                elapsed = node.elapsedTime += dt;
              }
            }

            p = (config.progress || 0) + elapsed / this._memoizedDuration;
            p = p > 1 ? 1 : p < 0 ? 0 : p;
            node.durationProgress = p;
          }

          position = from + config.easing(p) * (to - from);
          velocity = (position - node.lastPosition) / dt;
          finished = p == 1;
        } else if (config.decay) {
            const decay = config.decay === true ? 0.998 : config.decay;
            const e = Math.exp(-(1 - decay) * elapsed);
            position = from + v0 / (1 - decay) * (1 - e);
            finished = Math.abs(node.lastPosition - position) < 0.1;
            velocity = v0 * e;
          } else {
              velocity = node.lastVelocity == null ? v0 : node.lastVelocity;
              const precision = config.precision || (from == to ? 0.005 : Math.min(1, Math.abs(to - from) * 0.001));
              const restVelocity = config.restVelocity || precision / 10;
              const bounceFactor = config.clamp ? 0 : config.bounce;
              const canBounce = !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(bounceFactor);
              const isGrowing = from == to ? node.v0 > 0 : from < to;
              let isMoving;
              let isBouncing = false;
              const step = 1;
              const numSteps = Math.ceil(dt / step);

              for (let n = 0; n < numSteps; ++n) {
                isMoving = Math.abs(velocity) > restVelocity;

                if (!isMoving) {
                  finished = Math.abs(to - position) <= precision;

                  if (finished) {
                    break;
                  }
                }

                if (canBounce) {
                  isBouncing = position == to || position > to == isGrowing;

                  if (isBouncing) {
                    velocity = -velocity * bounceFactor;
                    position = to;
                  }
                }

                const springForce = -config.tension * 0.000001 * (position - to);
                const dampingForce = -config.friction * 0.001 * velocity;
                const acceleration = (springForce + dampingForce) / config.mass;
                velocity = velocity + acceleration * step;
                position = position + velocity * step;
              }
            }

        node.lastVelocity = velocity;

        if (Number.isNaN(position)) {
          console.warn(`Got NaN while animating:`, this);
          finished = true;
        }
      }

      if (payload && !payload[i].done) {
        finished = false;
      }

      if (finished) {
        node.done = true;
      } else {
        idle = false;
      }

      if (node.setValue(position, config.round)) {
        changed = true;
      }
    });
    const node = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this);
    const currVal = node.getValue();

    if (idle) {
      const finalVal = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(anim.to);

      if ((currVal !== finalVal || changed) && !config.decay) {
        node.setValue(finalVal);

        this._onChange(finalVal);
      } else if (changed && config.decay) {
        this._onChange(currVal);
      }

      this._stop();
    } else if (changed) {
      this._onChange(currVal);
    }
  }

  set(value) {
    _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => {
      this._stop();

      this._focus(value);

      this._set(value);
    });
    return this;
  }

  pause() {
    this._update({
      pause: true
    });
  }

  resume() {
    this._update({
      pause: false
    });
  }

  finish() {
    if (isAnimating(this)) {
      const {
        to,
        config
      } = this.animation;
      _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => {
        this._onStart();

        if (!config.decay) {
          this._set(to, false);
        }

        this._stop();
      });
    }

    return this;
  }

  update(props) {
    const queue = this.queue || (this.queue = []);
    queue.push(props);
    return this;
  }

  start(to, arg2) {
    let queue;

    if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(to)) {
      queue = [_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(to) ? to : _extends({}, arg2, {
        to
      })];
    } else {
      queue = this.queue || [];
      this.queue = [];
    }

    return Promise.all(queue.map(props => this._update(props))).then(results => getCombinedResult(this, results));
  }

  stop(cancel) {
    const {
      to
    } = this.animation;

    this._focus(this.get());

    stopAsync(this._state, cancel && this._lastCallId);
    _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => this._stop(to, cancel));
    return this;
  }

  reset() {
    this._update({
      reset: true
    });
  }

  eventObserved(event) {
    if (event.type == 'change') {
      this._start();
    } else if (event.type == 'priority') {
      this.priority = event.priority + 1;
    }
  }

  _prepareNode(props) {
    const key = this.key || '';
    let {
      to,
      from
    } = props;
    to = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(to) ? to[key] : to;

    if (to == null || isAsyncTo(to)) {
      to = undefined;
    }

    from = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(from) ? from[key] : from;

    if (from == null) {
      from = undefined;
    }

    const range = {
      to,
      from
    };

    if (!hasAnimated(this)) {
      if (props.reverse) [to, from] = [from, to];
      from = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(from);

      if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(from)) {
        this._set(from);
      } else if (!(0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this)) {
          this._set(to);
        }
    }

    return range;
  }

  _update(_ref, isLoop) {
    let props = _extends({}, _ref);

    const {
      key,
      defaultProps
    } = this;
    if (props.default) Object.assign(defaultProps, getDefaultProps(props, (value, prop) => /^on/.test(prop) ? resolveProp(value, key) : value));
    mergeActiveFn(this, props, 'onProps');
    sendEvent(this, 'onProps', props, this);

    const range = this._prepareNode(props);

    if (Object.isFrozen(this)) {
      throw Error('Cannot animate a `SpringValue` object that is frozen. ' + 'Did you forget to pass your component to `animated(...)` before animating its props?');
    }

    const state = this._state;
    return scheduleProps(++this._lastCallId, {
      key,
      props,
      defaultProps,
      state,
      actions: {
        pause: () => {
          if (!isPaused(this)) {
            setPausedBit(this, true);
            (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flushCalls)(state.pauseQueue);
            sendEvent(this, 'onPause', getFinishedResult(this, checkFinished(this, this.animation.to)), this);
          }
        },
        resume: () => {
          if (isPaused(this)) {
            setPausedBit(this, false);

            if (isAnimating(this)) {
              this._resume();
            }

            (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flushCalls)(state.resumeQueue);
            sendEvent(this, 'onResume', getFinishedResult(this, checkFinished(this, this.animation.to)), this);
          }
        },
        start: this._merge.bind(this, range)
      }
    }).then(result => {
      if (props.loop && result.finished && !(isLoop && result.noop)) {
        const nextProps = createLoopUpdate(props);

        if (nextProps) {
          return this._update(nextProps, true);
        }
      }

      return result;
    });
  }

  _merge(range, props, resolve) {
    if (props.cancel) {
      this.stop(true);
      return resolve(getCancelledResult(this));
    }

    const hasToProp = !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(range.to);
    const hasFromProp = !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(range.from);

    if (hasToProp || hasFromProp) {
      if (props.callId > this._lastToId) {
        this._lastToId = props.callId;
      } else {
        return resolve(getCancelledResult(this));
      }
    }

    const {
      key,
      defaultProps,
      animation: anim
    } = this;
    const {
      to: prevTo,
      from: prevFrom
    } = anim;
    let {
      to = prevTo,
      from = prevFrom
    } = range;

    if (hasFromProp && !hasToProp && (!props.default || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(to))) {
      to = from;
    }

    if (props.reverse) [to, from] = [from, to];
    const hasFromChanged = !(0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(from, prevFrom);

    if (hasFromChanged) {
      anim.from = from;
    }

    from = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(from);
    const hasToChanged = !(0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(to, prevTo);

    if (hasToChanged) {
      this._focus(to);
    }

    const hasAsyncTo = isAsyncTo(props.to);
    const {
      config
    } = anim;
    const {
      decay,
      velocity
    } = config;

    if (hasToProp || hasFromProp) {
      config.velocity = 0;
    }

    if (props.config && !hasAsyncTo) {
      mergeConfig(config, callProp(props.config, key), props.config !== defaultProps.config ? callProp(defaultProps.config, key) : void 0);
    }

    let node = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this);

    if (!node || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(to)) {
      return resolve(getFinishedResult(this, true));
    }

    const reset = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.reset) ? hasFromProp && !props.default : !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(from) && matchProp(props.reset, key);
    const value = reset ? from : this.get();
    const goal = computeGoal(to);
    const isAnimatable = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.num(goal) || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(goal) || (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isAnimatedString)(goal);
    const immediate = !hasAsyncTo && (!isAnimatable || matchProp(defaultProps.immediate || props.immediate, key));

    if (hasToChanged) {
      const nodeType = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimatedType)(to);

      if (nodeType !== node.constructor) {
        if (immediate) {
          node = this._set(goal);
        } else throw Error(`Cannot animate between ${node.constructor.name} and ${nodeType.name}, as the "to" prop suggests`);
      }
    }

    const goalType = node.constructor;
    let started = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(to);
    let finished = false;

    if (!started) {
      const hasValueChanged = reset || !hasAnimated(this) && hasFromChanged;

      if (hasToChanged || hasValueChanged) {
        finished = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(computeGoal(value), goal);
        started = !finished;
      }

      if (!(0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(anim.immediate, immediate) && !immediate || !(0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(config.decay, decay) || !(0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(config.velocity, velocity)) {
        started = true;
      }
    }

    if (finished && isAnimating(this)) {
      if (anim.changed && !reset) {
        started = true;
      } else if (!started) {
          this._stop(prevTo);
        }
    }

    if (!hasAsyncTo) {
      if (started || (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(prevTo)) {
        anim.values = node.getPayload();
        anim.toValues = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(to) ? null : goalType == _react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.AnimatedString ? [1] : (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(goal);
      }

      if (anim.immediate != immediate) {
        anim.immediate = immediate;

        if (!immediate && !reset) {
          this._set(prevTo);
        }
      }

      if (started) {
        const {
          onRest
        } = anim;
        (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(ACTIVE_EVENTS, type => mergeActiveFn(this, props, type));
        const result = getFinishedResult(this, checkFinished(this, prevTo));
        (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flushCalls)(this._pendingCalls, result);

        this._pendingCalls.add(resolve);

        if (anim.changed) _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => {
          anim.changed = !reset;
          onRest == null ? void 0 : onRest(result, this);

          if (reset) {
            callProp(defaultProps.onRest, result);
          } else {
              anim.onStart == null ? void 0 : anim.onStart(result, this);
            }
        });
      }
    }

    if (reset) {
      this._set(value);
    }

    if (hasAsyncTo) {
      resolve(runAsync(props.to, props, this._state, this));
    } else if (started) {
        this._start();
      } else if (isAnimating(this) && !hasToChanged) {
          this._pendingCalls.add(resolve);
        } else {
            resolve(getNoopResult(value));
          }
  }

  _focus(value) {
    const anim = this.animation;

    if (value !== anim.to) {
      if ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidObservers)(this)) {
        this._detach();
      }

      anim.to = value;

      if ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidObservers)(this)) {
        this._attach();
      }
    }
  }

  _attach() {
    let priority = 0;
    const {
      to
    } = this.animation;

    if ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(to)) {
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.addFluidObserver)(to, this);

      if (isFrameValue(to)) {
        priority = to.priority + 1;
      }
    }

    this.priority = priority;
  }

  _detach() {
    const {
      to
    } = this.animation;

    if ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(to)) {
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.removeFluidObserver)(to, this);
    }
  }

  _set(arg, idle = true) {
    const value = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(arg);

    if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(value)) {
      const oldNode = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this);

      if (!oldNode || !(0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(value, oldNode.getValue())) {
        const nodeType = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimatedType)(value);

        if (!oldNode || oldNode.constructor != nodeType) {
          (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.setAnimated)(this, nodeType.create(value));
        } else {
          oldNode.setValue(value);
        }

        if (oldNode) {
          _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => {
            this._onChange(value, idle);
          });
        }
      }
    }

    return (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this);
  }

  _onStart() {
    const anim = this.animation;

    if (!anim.changed) {
      anim.changed = true;
      sendEvent(this, 'onStart', getFinishedResult(this, checkFinished(this, anim.to)), this);
    }
  }

  _onChange(value, idle) {
    if (!idle) {
      this._onStart();

      callProp(this.animation.onChange, value, this);
    }

    callProp(this.defaultProps.onChange, value, this);

    super._onChange(value, idle);
  }

  _start() {
    const anim = this.animation;
    (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this).reset((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(anim.to));

    if (!anim.immediate) {
      anim.fromValues = anim.values.map(node => node.lastPosition);
    }

    if (!isAnimating(this)) {
      setActiveBit(this, true);

      if (!isPaused(this)) {
        this._resume();
      }
    }
  }

  _resume() {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.skipAnimation) {
      this.finish();
    } else {
      _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.frameLoop.start(this);
    }
  }

  _stop(goal, cancel) {
    if (isAnimating(this)) {
      setActiveBit(this, false);
      const anim = this.animation;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(anim.values, node => {
        node.done = true;
      });

      if (anim.toValues) {
        anim.onChange = anim.onPause = anim.onResume = undefined;
      }

      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.callFluidObservers)(this, {
        type: 'idle',
        parent: this
      });
      const result = cancel ? getCancelledResult(this.get()) : getFinishedResult(this.get(), checkFinished(this, goal != null ? goal : anim.to));
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flushCalls)(this._pendingCalls, result);

      if (anim.changed) {
        anim.changed = false;
        sendEvent(this, 'onRest', result, this);
      }
    }
  }

}

function checkFinished(target, to) {
  const goal = computeGoal(to);
  const value = computeGoal(target.get());
  return (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(value, goal);
}

function createLoopUpdate(props, loop = props.loop, to = props.to) {
  let loopRet = callProp(loop);

  if (loopRet) {
    const overrides = loopRet !== true && inferTo(loopRet);
    const reverse = (overrides || props).reverse;
    const reset = !overrides || overrides.reset;
    return createUpdate(_extends({}, props, {
      loop,
      default: false,
      pause: undefined,
      to: !reverse || isAsyncTo(to) ? to : undefined,
      from: reset ? props.from : undefined,
      reset
    }, overrides));
  }
}
function createUpdate(props) {
  const {
    to,
    from
  } = props = inferTo(props);
  const keys = new Set();
  if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(to)) findDefined(to, keys);
  if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(from)) findDefined(from, keys);
  props.keys = keys.size ? Array.from(keys) : null;
  return props;
}
function declareUpdate(props) {
  const update = createUpdate(props);

  if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(update.default)) {
    update.default = getDefaultProps(update);
  }

  return update;
}

function findDefined(values, keys) {
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(values, (value, key) => value != null && keys.add(key));
}

const ACTIVE_EVENTS = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];

function mergeActiveFn(target, props, type) {
  target.animation[type] = props[type] !== getDefaultProp(props, type) ? resolveProp(props[type], target.key) : undefined;
}

function sendEvent(target, type, ...args) {
  var _target$animation$typ, _target$animation, _target$defaultProps$, _target$defaultProps;

  (_target$animation$typ = (_target$animation = target.animation)[type]) == null ? void 0 : _target$animation$typ.call(_target$animation, ...args);
  (_target$defaultProps$ = (_target$defaultProps = target.defaultProps)[type]) == null ? void 0 : _target$defaultProps$.call(_target$defaultProps, ...args);
}

const BATCHED_EVENTS = ['onStart', 'onChange', 'onRest'];
let nextId = 1;
class Controller {
  constructor(props, flush) {
    this.id = nextId++;
    this.springs = {};
    this.queue = [];
    this.ref = void 0;
    this._flush = void 0;
    this._initialProps = void 0;
    this._lastAsyncId = 0;
    this._active = new Set();
    this._changed = new Set();
    this._started = false;
    this._item = void 0;
    this._state = {
      paused: false,
      pauseQueue: new Set(),
      resumeQueue: new Set(),
      timeouts: new Set()
    };
    this._events = {
      onStart: new Map(),
      onChange: new Map(),
      onRest: new Map()
    };
    this._onFrame = this._onFrame.bind(this);

    if (flush) {
      this._flush = flush;
    }

    if (props) {
      this.start(_extends({
        default: true
      }, props));
    }
  }

  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every(spring => spring.idle);
  }

  get item() {
    return this._item;
  }

  set item(item) {
    this._item = item;
  }

  get() {
    const values = {};
    this.each((spring, key) => values[key] = spring.get());
    return values;
  }

  set(values) {
    for (const key in values) {
      const value = values[key];

      if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(value)) {
        this.springs[key].set(value);
      }
    }
  }

  update(props) {
    if (props) {
      this.queue.push(createUpdate(props));
    }

    return this;
  }

  start(props) {
    let {
      queue
    } = this;

    if (props) {
      queue = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(props).map(createUpdate);
    } else {
      this.queue = [];
    }

    if (this._flush) {
      return this._flush(this, queue);
    }

    prepareKeys(this, queue);
    return flushUpdateQueue(this, queue);
  }

  stop(arg, keys) {
    if (arg !== !!arg) {
      keys = arg;
    }

    if (keys) {
      const springs = this.springs;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(keys), key => springs[key].stop(!!arg));
    } else {
      stopAsync(this._state, this._lastAsyncId);
      this.each(spring => spring.stop(!!arg));
    }

    return this;
  }

  pause(keys) {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(keys)) {
      this.start({
        pause: true
      });
    } else {
      const springs = this.springs;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(keys), key => springs[key].pause());
    }

    return this;
  }

  resume(keys) {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(keys)) {
      this.start({
        pause: false
      });
    } else {
      const springs = this.springs;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(keys), key => springs[key].resume());
    }

    return this;
  }

  each(iterator) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(this.springs, iterator);
  }

  _onFrame() {
    const {
      onStart,
      onChange,
      onRest
    } = this._events;
    const active = this._active.size > 0;
    const changed = this._changed.size > 0;

    if (active && !this._started || changed && !this._started) {
      this._started = true;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flush)(onStart, ([onStart, result]) => {
        result.value = this.get();
        onStart(result, this, this._item);
      });
    }

    const idle = !active && this._started;
    const values = changed || idle && onRest.size ? this.get() : null;

    if (changed && onChange.size) {
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flush)(onChange, ([onChange, result]) => {
        result.value = values;
        onChange(result, this, this._item);
      });
    }

    if (idle) {
      this._started = false;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flush)(onRest, ([onRest, result]) => {
        result.value = values;
        onRest(result, this, this._item);
      });
    }
  }

  eventObserved(event) {
    if (event.type == 'change') {
      this._changed.add(event.parent);

      if (!event.idle) {
        this._active.add(event.parent);
      }
    } else if (event.type == 'idle') {
      this._active.delete(event.parent);
    } else return;

    _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.onFrame(this._onFrame);
  }

}
function flushUpdateQueue(ctrl, queue) {
  return Promise.all(queue.map(props => flushUpdate(ctrl, props))).then(results => getCombinedResult(ctrl, results));
}
async function flushUpdate(ctrl, props, isLoop) {
  const {
    keys,
    to,
    from,
    loop,
    onRest,
    onResolve
  } = props;
  const defaults = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(props.default) && props.default;

  if (loop) {
    props.loop = false;
  }

  if (to === false) props.to = null;
  if (from === false) props.from = null;
  const asyncTo = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(to) || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(to) ? to : undefined;

  if (asyncTo) {
    props.to = undefined;
    props.onRest = undefined;

    if (defaults) {
      defaults.onRest = undefined;
    }
  } else {
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(BATCHED_EVENTS, key => {
        const handler = props[key];

        if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(handler)) {
          const queue = ctrl['_events'][key];

          props[key] = ({
            finished,
            cancelled
          }) => {
            const result = queue.get(handler);

            if (result) {
              if (!finished) result.finished = false;
              if (cancelled) result.cancelled = true;
            } else {
              queue.set(handler, {
                value: null,
                finished: finished || false,
                cancelled: cancelled || false
              });
            }
          };

          if (defaults) {
            defaults[key] = props[key];
          }
        }
      });
    }

  const state = ctrl['_state'];

  if (props.pause === !state.paused) {
    state.paused = props.pause;
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flushCalls)(props.pause ? state.pauseQueue : state.resumeQueue);
  } else if (state.paused) {
      props.pause = true;
    }

  const promises = (keys || Object.keys(ctrl.springs)).map(key => ctrl.springs[key].start(props));
  const cancel = props.cancel === true || getDefaultProp(props, 'cancel') === true;

  if (asyncTo || cancel && state.asyncId) {
    promises.push(scheduleProps(++ctrl['_lastAsyncId'], {
      props,
      state,
      actions: {
        pause: _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
        resume: _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.noop,

        start(props, resolve) {
          if (cancel) {
            stopAsync(state, ctrl['_lastAsyncId']);
            resolve(getCancelledResult(ctrl));
          } else {
            props.onRest = onRest;
            resolve(runAsync(asyncTo, props, state, ctrl));
          }
        }

      }
    }));
  }

  if (state.paused) {
    await new Promise(resume => {
      state.resumeQueue.add(resume);
    });
  }

  const result = getCombinedResult(ctrl, await Promise.all(promises));

  if (loop && result.finished && !(isLoop && result.noop)) {
    const nextProps = createLoopUpdate(props, loop, to);

    if (nextProps) {
      prepareKeys(ctrl, [nextProps]);
      return flushUpdate(ctrl, nextProps, true);
    }
  }

  if (onResolve) {
    _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => onResolve(result, ctrl, ctrl.item));
  }

  return result;
}
function getSprings(ctrl, props) {
  const springs = _extends({}, ctrl.springs);

  if (props) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(props), props => {
      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.keys)) {
        props = createUpdate(props);
      }

      if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(props.to)) {
        props = _extends({}, props, {
          to: undefined
        });
      }

      prepareSprings(springs, props, key => {
        return createSpring(key);
      });
    });
  }

  setSprings(ctrl, springs);
  return springs;
}
function setSprings(ctrl, springs) {
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(springs, (spring, key) => {
    if (!ctrl.springs[key]) {
      ctrl.springs[key] = spring;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.addFluidObserver)(spring, ctrl);
    }
  });
}

function createSpring(key, observer) {
  const spring = new SpringValue();
  spring.key = key;

  if (observer) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.addFluidObserver)(spring, observer);
  }

  return spring;
}

function prepareSprings(springs, props, create) {
  if (props.keys) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(props.keys, key => {
      const spring = springs[key] || (springs[key] = create(key));
      spring['_prepareNode'](props);
    });
  }
}

function prepareKeys(ctrl, queue) {
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(queue, props => {
    prepareSprings(ctrl.springs, props, key => {
      return createSpring(key, ctrl);
    });
  });
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const _excluded$3 = ["children"];
const SpringContext = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$3);

  const inherited = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ctx);
  const pause = props.pause || !!inherited.pause,
        immediate = props.immediate || !!inherited.immediate;
  props = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useMemoOne)(() => ({
    pause,
    immediate
  }), [pause, immediate]);
  const {
    Provider
  } = ctx;
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Provider, {
    value: props
  }, children);
};
const ctx = makeContext(SpringContext, {});
SpringContext.Provider = ctx.Provider;
SpringContext.Consumer = ctx.Consumer;

function makeContext(target, init) {
  Object.assign(target, react__WEBPACK_IMPORTED_MODULE_1__.createContext(init));
  target.Provider._context = target;
  target.Consumer._context = target;
  return target;
}

const SpringRef = () => {
  const current = [];

  const SpringRef = function SpringRef(props) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.deprecateDirectCall)();
    const results = [];
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(current, (ctrl, i) => {
      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update = _getProps(props, ctrl, i);

        if (update) {
          results.push(ctrl.start(update));
        }
      }
    });
    return results;
  };

  SpringRef.current = current;

  SpringRef.add = function (ctrl) {
    if (!current.includes(ctrl)) {
      current.push(ctrl);
    }
  };

  SpringRef.delete = function (ctrl) {
    const i = current.indexOf(ctrl);
    if (~i) current.splice(i, 1);
  };

  SpringRef.pause = function () {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(current, ctrl => ctrl.pause(...arguments));
    return this;
  };

  SpringRef.resume = function () {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(current, ctrl => ctrl.resume(...arguments));
    return this;
  };

  SpringRef.set = function (values) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(current, ctrl => ctrl.set(values));
  };

  SpringRef.start = function (props) {
    const results = [];
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(current, (ctrl, i) => {
      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update = this._getProps(props, ctrl, i);

        if (update) {
          results.push(ctrl.start(update));
        }
      }
    });
    return results;
  };

  SpringRef.stop = function () {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(current, ctrl => ctrl.stop(...arguments));
    return this;
  };

  SpringRef.update = function (props) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(current, (ctrl, i) => ctrl.update(this._getProps(props, ctrl, i)));
    return this;
  };

  const _getProps = function _getProps(arg, ctrl, index) {
    return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(arg) ? arg(index, ctrl) : arg;
  };

  SpringRef._getProps = _getProps;
  return SpringRef;
};

function useSprings(length, props, deps) {
  const propsFn = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(props) && props;
  if (propsFn && !deps) deps = [];
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
  const layoutId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
  const forceUpdate = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useForceUpdate)();
  const state = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    ctrls: [],
    queue: [],

    flush(ctrl, updates) {
      const springs = getSprings(ctrl, updates);
      const canFlushSync = layoutId.current > 0 && !state.queue.length && !Object.keys(springs).some(key => !ctrl.springs[key]);
      return canFlushSync ? flushUpdateQueue(ctrl, updates) : new Promise(resolve => {
        setSprings(ctrl, springs);
        state.queue.push(() => {
          resolve(flushUpdateQueue(ctrl, updates));
        });
        forceUpdate();
      });
    }

  }), []);
  const ctrls = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([...state.ctrls]);
  const updates = [];
  const prevLength = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.usePrev)(length) || 0;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(ctrls.current.slice(length, prevLength), ctrl => {
      detachRefs(ctrl, ref);
      ctrl.stop(true);
    });
    ctrls.current.length = length;
    declareUpdates(prevLength, length);
  }, [length]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    declareUpdates(0, Math.min(prevLength, length));
  }, deps);

  function declareUpdates(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; i++) {
      const ctrl = ctrls.current[i] || (ctrls.current[i] = new Controller(null, state.flush));
      const update = propsFn ? propsFn(i, ctrl) : props[i];

      if (update) {
        updates[i] = declareUpdate(update);
      }
    }
  }

  const springs = ctrls.current.map((ctrl, i) => getSprings(ctrl, updates[i]));
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SpringContext);
  const prevContext = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.usePrev)(context);
  const hasContext = context !== prevContext && hasProps(context);
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    layoutId.current++;
    state.ctrls = ctrls.current;
    const {
      queue
    } = state;

    if (queue.length) {
      state.queue = [];
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(queue, cb => cb());
    }

    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(ctrls.current, (ctrl, i) => {
      ref == null ? void 0 : ref.add(ctrl);

      if (hasContext) {
        ctrl.start({
          default: context
        });
      }

      const update = updates[i];

      if (update) {
        replaceRef(ctrl, update.ref);

        if (ctrl.ref) {
          ctrl.queue.push(update);
        } else {
          ctrl.start(update);
        }
      }
    });
  });
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useOnce)(() => () => {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(state.ctrls, ctrl => ctrl.stop(true));
  });
  const values = springs.map(x => _extends({}, x));
  return ref ? [values, ref] : values;
}

function useSpring(props, deps) {
  const isFn = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(props);
  const [[values], ref] = useSprings(1, isFn ? props : [props], isFn ? deps || [] : deps);
  return isFn || arguments.length == 2 ? [values, ref] : values;
}

const initSpringRef = () => SpringRef();

const useSpringRef = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initSpringRef)[0];

function useTrail(length, propsArg, deps) {
  const propsFn = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(propsArg) && propsArg;
  if (propsFn && !deps) deps = [];
  let reverse = true;
  const result = useSprings(length, (i, ctrl) => {
    const props = propsFn ? propsFn(i, ctrl) : propsArg;
    reverse = reverse && props.reverse;
    return props;
  }, deps || [{}]);
  const ref = result[1];
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(ref.current, (ctrl, i) => {
      const parent = ref.current[i + (reverse ? 1 : -1)];
      if (parent) ctrl.start({
        to: parent.springs
      });
    });
  }, deps);

  if (propsFn || arguments.length == 3) {
    ref['_getProps'] = (propsArg, ctrl, i) => {
      const props = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(propsArg) ? propsArg(i, ctrl) : propsArg;

      if (props) {
        const parent = ref.current[i + (props.reverse ? 1 : -1)];
        if (parent) props.to = parent.springs;
        return props;
      }
    };

    return result;
  }

  return result[0];
}

let TransitionPhase;

(function (TransitionPhase) {
  TransitionPhase["MOUNT"] = "mount";
  TransitionPhase["ENTER"] = "enter";
  TransitionPhase["UPDATE"] = "update";
  TransitionPhase["LEAVE"] = "leave";
})(TransitionPhase || (TransitionPhase = {}));

function useTransition(data, props, deps) {
  const propsFn = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(props) && props;
  const {
    reset,
    sort,
    trail = 0,
    expires = true,
    onDestroyed,
    ref: propsRef,
    config: propsConfig
  } = propsFn ? propsFn() : props;
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
  const items = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(data);
  const transitions = [];
  const usedTransitions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const prevTransitions = reset ? null : usedTransitions.current;
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    usedTransitions.current = transitions;
  });
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useOnce)(() => () => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(usedTransitions.current, t => {
    if (t.expired) {
      clearTimeout(t.expirationId);
    }

    detachRefs(t.ctrl, ref);
    t.ctrl.stop(true);
  }));
  const keys = getKeys(items, propsFn ? propsFn() : props, prevTransitions);
  const expired = reset && usedTransitions.current || [];
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(expired, ({
    ctrl,
    item,
    key
  }) => {
    detachRefs(ctrl, ref);
    callProp(onDestroyed, item, key);
  }));
  const reused = [];
  if (prevTransitions) (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(prevTransitions, (t, i) => {
    if (t.expired) {
      clearTimeout(t.expirationId);
      expired.push(t);
    } else {
      i = reused[i] = keys.indexOf(t.key);
      if (~i) transitions[i] = t;
    }
  });
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(items, (item, i) => {
    if (!transitions[i]) {
      transitions[i] = {
        key: keys[i],
        item,
        phase: TransitionPhase.MOUNT,
        ctrl: new Controller()
      };
      transitions[i].ctrl.item = item;
    }
  });

  if (reused.length) {
    let i = -1;
    const {
      leave
    } = propsFn ? propsFn() : props;
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(reused, (keyIndex, prevIndex) => {
      const t = prevTransitions[prevIndex];

      if (~keyIndex) {
        i = transitions.indexOf(t);
        transitions[i] = _extends({}, t, {
          item: items[keyIndex]
        });
      } else if (leave) {
        transitions.splice(++i, 0, t);
      }
    });
  }

  if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(sort)) {
    transitions.sort((a, b) => sort(a.item, b.item));
  }

  let delay = -trail;
  const forceUpdate = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useForceUpdate)();
  const defaultProps = getDefaultProps(props);
  const changes = new Map();
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(transitions, (t, i) => {
    const key = t.key;
    const prevPhase = t.phase;
    const p = propsFn ? propsFn() : props;
    let to;
    let phase;
    let propsDelay = callProp(p.delay || 0, key);

    if (prevPhase == TransitionPhase.MOUNT) {
      to = p.enter;
      phase = TransitionPhase.ENTER;
    } else {
      const isLeave = keys.indexOf(key) < 0;

      if (prevPhase != TransitionPhase.LEAVE) {
        if (isLeave) {
          to = p.leave;
          phase = TransitionPhase.LEAVE;
        } else if (to = p.update) {
          phase = TransitionPhase.UPDATE;
        } else return;
      } else if (!isLeave) {
        to = p.enter;
        phase = TransitionPhase.ENTER;
      } else return;
    }

    to = callProp(to, t.item, i);
    to = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(to) ? inferTo(to) : {
      to
    };

    if (!to.config) {
      const config = propsConfig || defaultProps.config;
      to.config = callProp(config, t.item, i, phase);
    }

    delay += trail;

    const payload = _extends({}, defaultProps, {
      delay: propsDelay + delay,
      ref: propsRef,
      immediate: p.immediate,
      reset: false
    }, to);

    if (phase == TransitionPhase.ENTER && _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(payload.from)) {
      const _p = propsFn ? propsFn() : props;

      const from = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(_p.initial) || prevTransitions ? _p.from : _p.initial;
      payload.from = callProp(from, t.item, i);
    }

    const {
      onResolve
    } = payload;

    payload.onResolve = result => {
      callProp(onResolve, result);
      const transitions = usedTransitions.current;
      const t = transitions.find(t => t.key === key);
      if (!t) return;

      if (result.cancelled && t.phase != TransitionPhase.UPDATE) {
        return;
      }

      if (t.ctrl.idle) {
        const idle = transitions.every(t => t.ctrl.idle);

        if (t.phase == TransitionPhase.LEAVE) {
          const expiry = callProp(expires, t.item);

          if (expiry !== false) {
            const expiryMs = expiry === true ? 0 : expiry;
            t.expired = true;

            if (!idle && expiryMs > 0) {
              if (expiryMs <= 0x7fffffff) t.expirationId = setTimeout(forceUpdate, expiryMs);
              return;
            }
          }
        }

        if (idle && transitions.some(t => t.expired)) {
          forceUpdate();
        }
      }
    };

    const springs = getSprings(t.ctrl, payload);
    changes.set(t, {
      phase,
      springs,
      payload
    });
  });
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SpringContext);
  const prevContext = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.usePrev)(context);
  const hasContext = context !== prevContext && hasProps(context);
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (hasContext) (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(transitions, t => {
      t.ctrl.start({
        default: context
      });
    });
  }, [context]);
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(changes, ({
      phase,
      payload
    }, t) => {
      const {
        ctrl
      } = t;
      t.phase = phase;
      ref == null ? void 0 : ref.add(ctrl);

      if (hasContext && phase == TransitionPhase.ENTER) {
        ctrl.start({
          default: context
        });
      }

      if (payload) {
        replaceRef(ctrl, payload.ref);

        if (ctrl.ref) {
          ctrl.update(payload);
        } else {
          ctrl.start(payload);
        }
      }
    });
  }, reset ? void 0 : deps);

  const renderTransitions = render => react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, transitions.map((t, i) => {
    const {
      springs
    } = changes.get(t) || t.ctrl;
    const elem = render(_extends({}, springs), t.item, t, i);
    return elem && elem.type ? react__WEBPACK_IMPORTED_MODULE_1__.createElement(elem.type, _extends({}, elem.props, {
      key: _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.str(t.key) || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.num(t.key) ? t.key : t.ctrl.id,
      ref: elem.ref
    })) : elem;
  }));

  return ref ? [renderTransitions, ref] : renderTransitions;
}
let nextKey = 1;

function getKeys(items, {
  key,
  keys = key
}, prevTransitions) {
  if (keys === null) {
    const reused = new Set();
    return items.map(item => {
      const t = prevTransitions && prevTransitions.find(t => t.item === item && t.phase !== TransitionPhase.LEAVE && !reused.has(t));

      if (t) {
        reused.add(t);
        return t.key;
      }

      return nextKey++;
    });
  }

  return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(keys) ? items : _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(keys) ? items.map(keys) : (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(keys);
}

const _excluded$2 = ["children"];
function Spring(_ref) {
  let {
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  return children(useSpring(props));
}

const _excluded$1 = ["items", "children"];
function Trail(_ref) {
  let {
    items,
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  const trails = useTrail(items.length, props);
  return items.map((item, index) => {
    const result = children(item, index);
    return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(result) ? result(trails[index]) : result;
  });
}

const _excluded = ["items", "children"];
function Transition(_ref) {
  let {
    items,
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return useTransition(items, props)(children);
}

class Interpolation extends FrameValue {
  constructor(source, args) {
    super();
    this.key = void 0;
    this.idle = true;
    this.calc = void 0;
    this._active = new Set();
    this.source = source;
    this.calc = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.createInterpolator)(...args);

    const value = this._get();

    const nodeType = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimatedType)(value);
    (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.setAnimated)(this, nodeType.create(value));
  }

  advance(_dt) {
    const value = this._get();

    const oldValue = this.get();

    if (!(0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(value, oldValue)) {
      (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this).setValue(value);

      this._onChange(value, this.idle);
    }

    if (!this.idle && checkIdle(this._active)) {
      becomeIdle(this);
    }
  }

  _get() {
    const inputs = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(this.source) ? this.source.map(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue) : (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(this.source));
    return this.calc(...inputs);
  }

  _start() {
    if (this.idle && !checkIdle(this._active)) {
      this.idle = false;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getPayload)(this), node => {
        node.done = false;
      });

      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.skipAnimation) {
        _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => this.advance());
        becomeIdle(this);
      } else {
        _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.frameLoop.start(this);
      }
    }
  }

  _attach() {
    let priority = 1;
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(this.source), source => {
      if ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(source)) {
        (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.addFluidObserver)(source, this);
      }

      if (isFrameValue(source)) {
        if (!source.idle) {
          this._active.add(source);
        }

        priority = Math.max(priority, source.priority + 1);
      }
    });
    this.priority = priority;

    this._start();
  }

  _detach() {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(this.source), source => {
      if ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(source)) {
        (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.removeFluidObserver)(source, this);
      }
    });

    this._active.clear();

    becomeIdle(this);
  }

  eventObserved(event) {
    if (event.type == 'change') {
      if (event.idle) {
        this.advance();
      } else {
        this._active.add(event.parent);

        this._start();
      }
    } else if (event.type == 'idle') {
        this._active.delete(event.parent);
      } else if (event.type == 'priority') {
          this.priority = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(this.source).reduce((highest, parent) => Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1), 0);
        }
  }

}

function isIdle(source) {
  return source.idle !== false;
}

function checkIdle(active) {
  return !active.size || Array.from(active).every(isIdle);
}

function becomeIdle(self) {
  if (!self.idle) {
    self.idle = true;
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getPayload)(self), node => {
      node.done = true;
    });
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.callFluidObservers)(self, {
      type: 'idle',
      parent: self
    });
  }
}

const to = (source, ...args) => new Interpolation(source, args);
const interpolate = (source, ...args) => ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.deprecateInterpolate)(), new Interpolation(source, args));

_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.assign({
  createStringInterpolator: _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.createStringInterpolator,
  to: (source, args) => new Interpolation(source, args)
});
const update = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.frameLoop.advance;




/***/ }),

/***/ "./node_modules/@react-spring/parallax/dist/react-spring-parallax.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@react-spring/parallax/dist/react-spring-parallax.esm.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Parallax": () => (/* binding */ Parallax),
/* harmony export */   "ParallaxLayer": () => (/* binding */ ParallaxLayer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_spring_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-spring/shared */ "./node_modules/@react-spring/shared/dist/react-spring-shared.esm.js");
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/web */ "./node_modules/@react-spring/web/dist/react-spring-web.esm.js");





function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const _excluded = ["horizontal", "factor", "offset", "speed", "sticky"],
      _excluded2 = ["pages", "innerStyle", "config", "enabled", "horizontal", "children"];
const ParentContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

function getScrollType(horizontal) {
  return horizontal ? 'scrollLeft' : 'scrollTop';
}

function mapChildrenRecursive(children, callback) {
  const isReactFragment = node => {
    if (node.type) {
      return node.type === react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
    }

    return node === react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
  };

  return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, child => isReactFragment(child) ? mapChildrenRecursive(child.props.children, callback) : callback(child));
}

const START_TRANSLATE_3D = 'translate3d(0px,0px,0px)';
const START_TRANSLATE = 'translate(0px,0px)';
const ParallaxLayer = react__WEBPACK_IMPORTED_MODULE_0__.memo(react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref, ref) => {
  let {
    horizontal,
    factor = 1,
    offset = 0,
    speed = 0,
    sticky
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  const parent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ParentContext);
  const ctrl = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_1__.useMemoOne)(() => {
    let translate;

    if (sticky) {
      const start = sticky.start || 0;
      translate = start * parent.space;
    } else {
      const targetScroll = Math.floor(offset) * parent.space;
      const distance = parent.space * offset + targetScroll * speed;
      translate = -(parent.current * speed) + distance;
    }

    return new _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.Controller({
      space: sticky ? parent.space : parent.space * factor,
      translate
    });
  }, []);
  const layer = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_1__.useMemoOne)(() => ({
    horizontal: horizontal === undefined || sticky ? parent.horizontal : horizontal,
    sticky: undefined,
    isSticky: false,

    setPosition(height, scrollTop, immediate = false) {
      if (sticky) {
        setSticky(height, scrollTop);
      } else {
        const targetScroll = Math.floor(offset) * height;
        const distance = height * offset + targetScroll * speed;
        ctrl.start({
          translate: -(scrollTop * speed) + distance,
          config: parent.config,
          immediate
        });
      }
    },

    setHeight(height, immediate = false) {
      ctrl.start({
        space: sticky ? height : height * factor,
        config: parent.config,
        immediate
      });
    }

  }), []);
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_1__.useOnce)(() => {
    if (sticky) {
      const start = sticky.start || 0;
      const end = sticky.end || start + 1;
      layer.sticky = {
        start,
        end
      };
    }
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, () => layer);
  const layerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  const setSticky = (height, scrollTop) => {
    const start = layer.sticky.start * height;
    const end = layer.sticky.end * height;
    const isSticky = scrollTop >= start && scrollTop <= end;
    if (isSticky === layer.isSticky) return;
    layer.isSticky = isSticky;
    const ref = layerRef.current;
    ref.style.position = isSticky ? 'sticky' : 'absolute';
    ctrl.set({
      translate: isSticky ? 0 : scrollTop < start ? start : end
    });
  };

  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_1__.useOnce)(() => {
    if (parent) {
      parent.layers.add(layer);
      parent.update();
      return () => {
        parent.layers.delete(layer);
        parent.update();
      };
    }
  });
  const translate3d = ctrl.springs.translate.to(layer.horizontal ? x => `translate3d(${x}px,0,0)` : y => `translate3d(0,${y}px,0)`);
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.a.div, _extends({}, rest, {
    ref: layerRef,
    style: _extends({
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      willChange: 'transform',
      [layer.horizontal ? 'height' : 'width']: '100%',
      [layer.horizontal ? 'width' : 'height']: ctrl.springs.space,
      WebkitTransform: translate3d,
      msTransform: translate3d,
      transform: translate3d
    }, rest.style)
  }));
}));
const Parallax = react__WEBPACK_IMPORTED_MODULE_0__.memo(react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
  const [ready, setReady] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const {
    pages,
    config: config$1 = _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.config.slow,
    enabled = true,
    horizontal = false,
    children
  } = props,
        rest = _objectWithoutPropertiesLoose(props, _excluded2);

  const state = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_1__.useMemoOne)(() => ({
    config: config$1,
    horizontal,
    busy: false,
    space: 0,
    current: 0,
    offset: 0,
    controller: new _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.Controller({
      scroll: 0
    }),
    layers: new Set(),
    update: () => update(),
    scrollTo: offset => scrollTo(offset),
    stop: () => state.controller.stop()
  }), []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    state.config = config$1;
  }, [config$1]);
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, () => state);
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  const update = () => {
    const container = containerRef.current;
    if (!container) return;
    const spaceProp = horizontal ? 'clientWidth' : 'clientHeight';
    state.space = container[spaceProp];
    const scrollType = getScrollType(horizontal);

    if (enabled) {
      state.current = container[scrollType];
    } else {
      container[scrollType] = state.current = state.offset * state.space;
    }

    const content = contentRef.current;

    if (content) {
      const sizeProp = horizontal ? 'width' : 'height';
      content.style[sizeProp] = `${state.space * pages}px`;
    }

    state.layers.forEach(layer => {
      layer.setHeight(state.space, true);
      layer.setPosition(state.space, state.current, true);
    });
  };

  const scrollTo = offset => {
    const container = containerRef.current;
    const scrollType = getScrollType(horizontal);
    state.offset = offset;
    state.controller.set({
      scroll: state.current
    });
    state.controller.stop().start({
      scroll: offset * state.space,
      config: config$1,

      onChange({
        value: {
          scroll
        }
      }) {
        container[scrollType] = scroll;
      }

    });
  };

  const onScroll = event => {
    if (!state.busy) {
      state.busy = true;
      state.current = event.target[getScrollType(horizontal)];
      _react_spring_shared__WEBPACK_IMPORTED_MODULE_1__.raf.onStart(() => {
        state.layers.forEach(layer => layer.setPosition(state.space, state.current));
        state.busy = false;
      });
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => state.update());
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_1__.useOnce)(() => {
    setReady(true);

    const onResize = () => {
      const update = () => state.update();

      _react_spring_shared__WEBPACK_IMPORTED_MODULE_1__.raf.onFrame(update);
      setTimeout(update, 150);
    };

    window.addEventListener('resize', onResize, false);
    return () => window.removeEventListener('resize', onResize, false);
  });
  const overflow = enabled ? 'scroll' : 'hidden';
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.a.div, _extends({}, rest, {
    ref: containerRef,
    onScroll: onScroll,
    onWheel: enabled ? state.stop : undefined,
    onTouchStart: enabled ? state.stop : undefined,
    style: _extends({
      position: 'absolute',
      width: '100%',
      height: '100%',
      overflow,
      overflowY: horizontal ? 'hidden' : overflow,
      overflowX: horizontal ? overflow : 'hidden',
      WebkitOverflowScrolling: 'touch',
      WebkitTransform: START_TRANSLATE,
      msTransform: START_TRANSLATE,
      transform: START_TRANSLATE_3D
    }, rest.style)
  }), ready && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.a.div, {
    ref: contentRef,
    style: _extends({
      overflow: 'hidden',
      position: 'absolute',
      [horizontal ? 'height' : 'width']: '100%',
      [horizontal ? 'width' : 'height']: state.space * pages,
      WebkitTransform: START_TRANSLATE,
      msTransform: START_TRANSLATE,
      transform: START_TRANSLATE_3D
    }, props.innerStyle)
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(ParentContext.Provider, {
    value: state
  }, mapChildrenRecursive(children, child => !child.props.sticky && child))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(ParentContext.Provider, {
    value: state
  }, mapChildrenRecursive(children, child => child.props.sticky && child))));
}));




/***/ }),

/***/ "./node_modules/@react-spring/rafz/dist/react-spring-rafz.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@react-spring/rafz/dist/react-spring-rafz.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__raf": () => (/* binding */ __raf),
/* harmony export */   "raf": () => (/* binding */ raf)
/* harmony export */ });
let updateQueue = makeQueue();
const raf = fn => schedule(fn, updateQueue);
let writeQueue = makeQueue();

raf.write = fn => schedule(fn, writeQueue);

let onStartQueue = makeQueue();

raf.onStart = fn => schedule(fn, onStartQueue);

let onFrameQueue = makeQueue();

raf.onFrame = fn => schedule(fn, onFrameQueue);

let onFinishQueue = makeQueue();

raf.onFinish = fn => schedule(fn, onFinishQueue);

let timeouts = [];

raf.setTimeout = (handler, ms) => {
  let time = raf.now() + ms;

  let cancel = () => {
    let i = timeouts.findIndex(t => t.cancel == cancel);
    if (~i) timeouts.splice(i, 1);
    __raf.count -= ~i ? 1 : 0;
  };

  let timeout = {
    time,
    handler,
    cancel
  };
  timeouts.splice(findTimeout(time), 0, timeout);
  __raf.count += 1;
  start();
  return timeout;
};

let findTimeout = time => ~(~timeouts.findIndex(t => t.time > time) || ~timeouts.length);

raf.cancel = fn => {
  updateQueue.delete(fn);
  writeQueue.delete(fn);
};

raf.sync = fn => {
  sync = true;
  raf.batchedUpdates(fn);
  sync = false;
};

raf.throttle = fn => {
  let lastArgs;

  function queuedFn() {
    try {
      fn(...lastArgs);
    } finally {
      lastArgs = null;
    }
  }

  function throttled(...args) {
    lastArgs = args;
    raf.onStart(queuedFn);
  }

  throttled.handler = fn;

  throttled.cancel = () => {
    onStartQueue.delete(queuedFn);
    lastArgs = null;
  };

  return throttled;
};

let nativeRaf = typeof window != 'undefined' ? window.requestAnimationFrame : () => {};

raf.use = impl => nativeRaf = impl;

raf.now = typeof performance != 'undefined' ? () => performance.now() : Date.now;

raf.batchedUpdates = fn => fn();

raf.catch = console.error;
raf.frameLoop = 'always';

raf.advance = () => {
  if (raf.frameLoop !== 'demand') {
    console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand');
  } else {
    update();
  }
};

let ts = -1;
let sync = false;

function schedule(fn, queue) {
  if (sync) {
    queue.delete(fn);
    fn(0);
  } else {
    queue.add(fn);
    start();
  }
}

function start() {
  if (ts < 0) {
    ts = 0;

    if (raf.frameLoop !== 'demand') {
      nativeRaf(loop);
    }
  }
}

function loop() {
  if (~ts) {
    nativeRaf(loop);
    raf.batchedUpdates(update);
  }
}

function update() {
  let prevTs = ts;
  ts = raf.now();
  let count = findTimeout(ts);

  if (count) {
    eachSafely(timeouts.splice(0, count), t => t.handler());
    __raf.count -= count;
  }

  onStartQueue.flush();
  updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667);
  onFrameQueue.flush();
  writeQueue.flush();
  onFinishQueue.flush();
}

function makeQueue() {
  let next = new Set();
  let current = next;
  return {
    add(fn) {
      __raf.count += current == next && !next.has(fn) ? 1 : 0;
      next.add(fn);
    },

    delete(fn) {
      __raf.count -= current == next && next.has(fn) ? 1 : 0;
      return next.delete(fn);
    },

    flush(arg) {
      if (current.size) {
        next = new Set();
        __raf.count -= current.size;
        eachSafely(current, fn => fn(arg) && next.add(fn));
        __raf.count += next.size;
        current = next;
      }
    }

  };
}

function eachSafely(values, each) {
  values.forEach(value => {
    try {
      each(value);
    } catch (e) {
      raf.catch(e);
    }
  });
}

const __raf = {
  count: 0,

  clear() {
    ts = -1;
    timeouts = [];
    onStartQueue = makeQueue();
    updateQueue = makeQueue();
    onFrameQueue = makeQueue();
    writeQueue = makeQueue();
    onFinishQueue = makeQueue();
    __raf.count = 0;
  }

};




/***/ }),

/***/ "./node_modules/@react-spring/shared/dist/react-spring-shared.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@react-spring/shared/dist/react-spring-shared.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "raf": () => (/* reexport safe */ _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf),
/* harmony export */   "FluidValue": () => (/* binding */ FluidValue),
/* harmony export */   "Globals": () => (/* binding */ globals),
/* harmony export */   "addFluidObserver": () => (/* binding */ addFluidObserver),
/* harmony export */   "callFluidObserver": () => (/* binding */ callFluidObserver),
/* harmony export */   "callFluidObservers": () => (/* binding */ callFluidObservers),
/* harmony export */   "colorToRgba": () => (/* binding */ colorToRgba),
/* harmony export */   "colors": () => (/* binding */ colors),
/* harmony export */   "createInterpolator": () => (/* binding */ createInterpolator),
/* harmony export */   "createStringInterpolator": () => (/* binding */ createStringInterpolator),
/* harmony export */   "defineHidden": () => (/* binding */ defineHidden),
/* harmony export */   "deprecateDirectCall": () => (/* binding */ deprecateDirectCall),
/* harmony export */   "deprecateInterpolate": () => (/* binding */ deprecateInterpolate),
/* harmony export */   "each": () => (/* binding */ each),
/* harmony export */   "eachProp": () => (/* binding */ eachProp),
/* harmony export */   "flush": () => (/* binding */ flush),
/* harmony export */   "flushCalls": () => (/* binding */ flushCalls),
/* harmony export */   "frameLoop": () => (/* binding */ frameLoop),
/* harmony export */   "getFluidObservers": () => (/* binding */ getFluidObservers),
/* harmony export */   "getFluidValue": () => (/* binding */ getFluidValue),
/* harmony export */   "hasFluidValue": () => (/* binding */ hasFluidValue),
/* harmony export */   "hex3": () => (/* binding */ hex3),
/* harmony export */   "hex4": () => (/* binding */ hex4),
/* harmony export */   "hex6": () => (/* binding */ hex6),
/* harmony export */   "hex8": () => (/* binding */ hex8),
/* harmony export */   "hsl": () => (/* binding */ hsl),
/* harmony export */   "hsla": () => (/* binding */ hsla),
/* harmony export */   "is": () => (/* binding */ is),
/* harmony export */   "isAnimatedString": () => (/* binding */ isAnimatedString),
/* harmony export */   "isEqual": () => (/* binding */ isEqual),
/* harmony export */   "noop": () => (/* binding */ noop),
/* harmony export */   "removeFluidObserver": () => (/* binding */ removeFluidObserver),
/* harmony export */   "rgb": () => (/* binding */ rgb),
/* harmony export */   "rgba": () => (/* binding */ rgba),
/* harmony export */   "setFluidGetter": () => (/* binding */ setFluidGetter),
/* harmony export */   "toArray": () => (/* binding */ toArray),
/* harmony export */   "useForceUpdate": () => (/* binding */ useForceUpdate),
/* harmony export */   "useLayoutEffect": () => (/* binding */ useLayoutEffect),
/* harmony export */   "useMemoOne": () => (/* binding */ useMemoOne),
/* harmony export */   "useOnce": () => (/* binding */ useOnce),
/* harmony export */   "usePrev": () => (/* binding */ usePrev)
/* harmony export */ });
/* harmony import */ var _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-spring/rafz */ "./node_modules/@react-spring/rafz/dist/react-spring-rafz.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);





function noop() {}
const defineHidden = (obj, key, value) => Object.defineProperty(obj, key, {
  value,
  writable: true,
  configurable: true
});
const is = {
  arr: Array.isArray,
  obj: a => !!a && a.constructor.name === 'Object',
  fun: a => typeof a === 'function',
  str: a => typeof a === 'string',
  num: a => typeof a === 'number',
  und: a => a === undefined
};
function isEqual(a, b) {
  if (is.arr(a)) {
    if (!is.arr(b) || a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }

    return true;
  }

  return a === b;
}
const each = (obj, fn) => obj.forEach(fn);
function eachProp(obj, fn, ctx) {
  if (is.arr(obj)) {
    for (let i = 0; i < obj.length; i++) {
      fn.call(ctx, obj[i], `${i}`);
    }

    return;
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn.call(ctx, obj[key], key);
    }
  }
}
const toArray = a => is.und(a) ? [] : is.arr(a) ? a : [a];
function flush(queue, iterator) {
  if (queue.size) {
    const items = Array.from(queue);
    queue.clear();
    each(items, iterator);
  }
}
const flushCalls = (queue, ...args) => flush(queue, fn => fn(...args));

let createStringInterpolator$1;
let to;
let colors$1 = null;
let skipAnimation = false;
let willAdvance = noop;
const assign = globals => {
  if (globals.to) to = globals.to;
  if (globals.now) _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf.now = globals.now;
  if (globals.colors !== undefined) colors$1 = globals.colors;
  if (globals.skipAnimation != null) skipAnimation = globals.skipAnimation;
  if (globals.createStringInterpolator) createStringInterpolator$1 = globals.createStringInterpolator;
  if (globals.requestAnimationFrame) _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf.use(globals.requestAnimationFrame);
  if (globals.batchedUpdates) _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates = globals.batchedUpdates;
  if (globals.willAdvance) willAdvance = globals.willAdvance;
  if (globals.frameLoop) _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf.frameLoop = globals.frameLoop;
};

var globals = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get createStringInterpolator () { return createStringInterpolator$1; },
  get to () { return to; },
  get colors () { return colors$1; },
  get skipAnimation () { return skipAnimation; },
  get willAdvance () { return willAdvance; },
  assign: assign
});

const startQueue = new Set();
let currentFrame = [];
let prevFrame = [];
let priority = 0;
const frameLoop = {
  get idle() {
    return !startQueue.size && !currentFrame.length;
  },

  start(animation) {
    if (priority > animation.priority) {
      startQueue.add(animation);
      _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf.onStart(flushStartQueue);
    } else {
      startSafely(animation);
      (0,_react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf)(advance);
    }
  },

  advance,

  sort(animation) {
    if (priority) {
      _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf.onFrame(() => frameLoop.sort(animation));
    } else {
      const prevIndex = currentFrame.indexOf(animation);

      if (~prevIndex) {
        currentFrame.splice(prevIndex, 1);
        startUnsafely(animation);
      }
    }
  },

  clear() {
    currentFrame = [];
    startQueue.clear();
  }

};

function flushStartQueue() {
  startQueue.forEach(startSafely);
  startQueue.clear();
  (0,_react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf)(advance);
}

function startSafely(animation) {
  if (!currentFrame.includes(animation)) startUnsafely(animation);
}

function startUnsafely(animation) {
  currentFrame.splice(findIndex(currentFrame, other => other.priority > animation.priority), 0, animation);
}

function advance(dt) {
  const nextFrame = prevFrame;

  for (let i = 0; i < currentFrame.length; i++) {
    const animation = currentFrame[i];
    priority = animation.priority;

    if (!animation.idle) {
      willAdvance(animation);
      animation.advance(dt);

      if (!animation.idle) {
        nextFrame.push(animation);
      }
    }
  }

  priority = 0;
  prevFrame = currentFrame;
  prevFrame.length = 0;
  currentFrame = nextFrame;
  return currentFrame.length > 0;
}

function findIndex(arr, test) {
  const index = arr.findIndex(test);
  return index < 0 ? arr.length : index;
}

const colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call(...parts) {
  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  }

  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;

  if (colors$1 && colors$1[color] !== undefined) {
    return colors$1[color];
  }

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 0x000000ff) >>> 0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | parse1(match[4])) >>> 0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + 'ff', 16) >>> 0;
  }

  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 0x000000ff) >>> 0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | parse1(match[4])) >>> 0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const createInterpolator = (range, output, extrapolate) => {
  if (is.fun(range)) {
    return range;
  }

  if (is.arr(range)) {
    return createInterpolator({
      range,
      output: output,
      extrapolate
    });
  }

  if (is.str(range.output[0])) {
    return createStringInterpolator$1(range);
  }

  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
  const extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

  const easing = config.easing || (t => t);

  return input => {
    const range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
};

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input;

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax;
  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin);
  result = easing(result);
  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const $get = Symbol.for('FluidValue.get');
const $observers = Symbol.for('FluidValue.observers');

const hasFluidValue = arg => Boolean(arg && arg[$get]);

const getFluidValue = arg => arg && arg[$get] ? arg[$get]() : arg;

const getFluidObservers = target => target[$observers] || null;

function callFluidObserver(observer, event) {
  if (observer.eventObserved) {
    observer.eventObserved(event);
  } else {
    observer(event);
  }
}

function callFluidObservers(target, event) {
  let observers = target[$observers];

  if (observers) {
    observers.forEach(observer => {
      callFluidObserver(observer, event);
    });
  }
}

class FluidValue {
  constructor(get) {
    this[$get] = void 0;
    this[$observers] = void 0;

    if (!get && !(get = this.get)) {
      throw Error('Unknown getter');
    }

    setFluidGetter(this, get);
  }

}

const setFluidGetter = (target, get) => setHidden(target, $get, get);

function addFluidObserver(target, observer) {
  if (target[$get]) {
    let observers = target[$observers];

    if (!observers) {
      setHidden(target, $observers, observers = new Set());
    }

    if (!observers.has(observer)) {
      observers.add(observer);

      if (target.observerAdded) {
        target.observerAdded(observers.size, observer);
      }
    }
  }

  return observer;
}

function removeFluidObserver(target, observer) {
  let observers = target[$observers];

  if (observers && observers.has(observer)) {
    const count = observers.size - 1;

    if (count) {
      observers.delete(observer);
    } else {
      target[$observers] = null;
    }

    if (target.observerRemoved) {
      target.observerRemoved(count, observer);
    }
  }
}

const setHidden = (target, key, value) => Object.defineProperty(target, key, {
  value,
  writable: true,
  configurable: true
});

const numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
const unitRegex = new RegExp(`(${numberRegex.source})(%|[a-z]+)`, 'i');
let namedColorRegex;
const rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;

const rgbaRound = (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`;

const createStringInterpolator = config => {
  if (!namedColorRegex) namedColorRegex = colors$1 ? new RegExp(`(${Object.keys(colors$1).join('|')})(?!\\w)`, 'g') : /^\b$/;
  const output = config.output.map(value => getFluidValue(value).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba));
  const keyframes = output.map(value => value.match(numberRegex).map(Number));
  const outputRanges = keyframes[0].map((_, i) => keyframes.map(values => {
    if (!(i in values)) {
      throw Error('The arity of each "output" value must be equal');
    }

    return values[i];
  }));
  const interpolators = outputRanges.map(output => createInterpolator(_extends({}, config, {
    output
  })));
  return input => {
    var _output$find;

    const missingUnit = !unitRegex.test(output[0]) && ((_output$find = output.find(value => unitRegex.test(value))) == null ? void 0 : _output$find.replace(numberRegex, ''));
    let i = 0;
    return output[0].replace(numberRegex, () => `${interpolators[i++](input)}${missingUnit || ''}`).replace(rgbaRegex, rgbaRound);
  };
};

const prefix = 'react-spring: ';

const once = fn => {
  const func = fn;
  let called = false;

  if (typeof func != 'function') {
    throw new TypeError(`${prefix}once requires a function parameter`);
  }

  return (...args) => {
    if (!called) {
      func(...args);
      called = true;
    }
  };
};

const warnInterpolate = once(console.warn);
function deprecateInterpolate() {
  warnInterpolate(`${prefix}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
const warnDirectCall = once(console.warn);
function deprecateDirectCall() {
  warnDirectCall(`${prefix}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}

function isAnimatedString(value) {
  return is.str(value) && (value[0] == '#' || /\d/.test(value) || value in (colors$1 || {}));
}

const useOnce = effect => (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(effect, emptyDeps);
const emptyDeps = [];

function useForceUpdate() {
  const update = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)()[1];
  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(makeMountedRef)[0];
  useOnce(mounted.unmount);
  return () => {
    if (mounted.current) {
      update({});
    }
  };
}

function makeMountedRef() {
  const mounted = {
    current: true,
    unmount: () => () => {
      mounted.current = false;
    }
  };
  return mounted;
}

function useMemoOne(getResult, inputs) {
  const [initial] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => ({
    inputs,
    result: getResult()
  }));
  const committed = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const prevCache = committed.current;
  let cache = prevCache;

  if (cache) {
    const useCache = Boolean(inputs && cache.inputs && areInputsEqual(inputs, cache.inputs));

    if (!useCache) {
      cache = {
        inputs,
        result: getResult()
      };
    }
  } else {
    cache = initial;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    committed.current = cache;

    if (prevCache == initial) {
      initial.inputs = initial.result = undefined;
    }
  }, [cache]);
  return cache.result;
}

function areInputsEqual(next, prev) {
  if (next.length !== prev.length) {
    return false;
  }

  for (let i = 0; i < next.length; i++) {
    if (next[i] !== prev[i]) {
      return false;
    }
  }

  return true;
}

function usePrev(value) {
  const prevRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    prevRef.current = value;
  });
  return prevRef.current;
}

const useLayoutEffect = typeof window !== 'undefined' && window.document && window.document.createElement ? react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_1__.useEffect;




/***/ }),

/***/ "./node_modules/@react-spring/types/animated.js":
/*!******************************************************!*\
  !*** ./node_modules/@react-spring/types/animated.js ***!
  \******************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@react-spring/types/interpolation.js":
/*!***********************************************************!*\
  !*** ./node_modules/@react-spring/types/interpolation.js ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@react-spring/web/dist/react-spring-web.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@react-spring/web/dist/react-spring-web.esm.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ animated),
/* harmony export */   "animated": () => (/* binding */ animated)
/* harmony export */ });
/* harmony import */ var _react_spring_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-spring/core */ "./node_modules/@react-spring/core/dist/react-spring-core.esm.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _react_spring_core__WEBPACK_IMPORTED_MODULE_0__) if(["default","a","animated"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _react_spring_core__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/shared */ "./node_modules/@react-spring/shared/dist/react-spring-shared.esm.js");
/* harmony import */ var _react_spring_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-spring/animated */ "./node_modules/@react-spring/animated/dist/react-spring-animated.esm.js");






function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const _excluded$2 = ["style", "children", "scrollTop", "scrollLeft"];
const isCustomPropRE = /^--/;

function dangerousStyleValue(name, value) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (typeof value === 'number' && value !== 0 && !isCustomPropRE.test(name) && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px';
  return ('' + value).trim();
}

const attributeCache = {};
function applyAnimatedValues(instance, props) {
  if (!instance.nodeType || !instance.setAttribute) {
    return false;
  }

  const isFilterElement = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';

  const _ref = props,
        {
    style,
    children,
    scrollTop,
    scrollLeft
  } = _ref,
        attributes = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  const values = Object.values(attributes);
  const names = Object.keys(attributes).map(name => isFilterElement || instance.hasAttribute(name) ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase())));

  if (children !== void 0) {
    instance.textContent = children;
  }

  for (let name in style) {
    if (style.hasOwnProperty(name)) {
      const value = dangerousStyleValue(name, style[name]);

      if (isCustomPropRE.test(name)) {
        instance.style.setProperty(name, value);
      } else {
        instance.style[name] = value;
      }
    }
  }

  names.forEach((name, i) => {
    instance.setAttribute(name, values[i]);
  });

  if (scrollTop !== void 0) {
    instance.scrollTop = scrollTop;
  }

  if (scrollLeft !== void 0) {
    instance.scrollLeft = scrollLeft;
  }
}
let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

const _excluded$1 = ["x", "y", "z"];
const domTransforms = /^(matrix|translate|scale|rotate|skew)/;
const pxTransforms = /^(translate)/;
const degTransforms = /^(rotate|skew)/;

const addUnit = (value, unit) => _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.is.num(value) && value !== 0 ? value + unit : value;

const isValueIdentity = (value, id) => _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.is.arr(value) ? value.every(v => isValueIdentity(v, id)) : _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.is.num(value) ? value === id : parseFloat(value) === id;

class AnimatedStyle extends _react_spring_animated__WEBPACK_IMPORTED_MODULE_3__.AnimatedObject {
  constructor(_ref) {
    let {
      x,
      y,
      z
    } = _ref,
        style = _objectWithoutPropertiesLoose(_ref, _excluded$1);

    const inputs = [];
    const transforms = [];

    if (x || y || z) {
      inputs.push([x || 0, y || 0, z || 0]);
      transforms.push(xyz => [`translate3d(${xyz.map(v => addUnit(v, 'px')).join(',')})`, isValueIdentity(xyz, 0)]);
    }

    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.eachProp)(style, (value, key) => {
      if (key === 'transform') {
        inputs.push([value || '']);
        transforms.push(transform => [transform, transform === '']);
      } else if (domTransforms.test(key)) {
        delete style[key];
        if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.is.und(value)) return;
        const unit = pxTransforms.test(key) ? 'px' : degTransforms.test(key) ? 'deg' : '';
        inputs.push((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.toArray)(value));
        transforms.push(key === 'rotate3d' ? ([x, y, z, deg]) => [`rotate3d(${x},${y},${z},${addUnit(deg, unit)})`, isValueIdentity(deg, 0)] : input => [`${key}(${input.map(v => addUnit(v, unit)).join(',')})`, isValueIdentity(input, key.startsWith('scale') ? 1 : 0)]);
      }
    });

    if (inputs.length) {
      style.transform = new FluidTransform(inputs, transforms);
    }

    super(style);
  }

}

class FluidTransform extends _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.FluidValue {
  constructor(inputs, transforms) {
    super();
    this._value = null;
    this.inputs = inputs;
    this.transforms = transforms;
  }

  get() {
    return this._value || (this._value = this._get());
  }

  _get() {
    let transform = '';
    let identity = true;
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.each)(this.inputs, (input, i) => {
      const arg1 = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.getFluidValue)(input[0]);
      const [t, id] = this.transforms[i](_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.is.arr(arg1) ? arg1 : input.map(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.getFluidValue));
      transform += ' ' + t;
      identity = identity && id;
    });
    return identity ? 'none' : transform;
  }

  observerAdded(count) {
    if (count == 1) (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.each)(this.inputs, input => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.each)(input, value => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.hasFluidValue)(value) && (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.addFluidObserver)(value, this)));
  }

  observerRemoved(count) {
    if (count == 0) (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.each)(this.inputs, input => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.each)(input, value => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.hasFluidValue)(value) && (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.removeFluidObserver)(value, this)));
  }

  eventObserved(event) {
    if (event.type == 'change') {
      this._value = null;
    }

    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.callFluidObservers)(this, event);
  }

}

const primitives = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

const _excluded = ["scrollTop", "scrollLeft"];
_react_spring_core__WEBPACK_IMPORTED_MODULE_0__.Globals.assign({
  batchedUpdates: react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates,
  createStringInterpolator: _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.createStringInterpolator,
  colors: _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.colors
});
const host = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_3__.createHost)(primitives, {
  applyAnimatedValues,
  createAnimatedStyle: style => new AnimatedStyle(style),
  getComponentProps: _ref => {
    let props = _objectWithoutPropertiesLoose(_ref, _excluded);

    return props;
  }
});
const animated = host.animated;




/***/ }),

/***/ "./src/@lekoarts/gatsby-theme-cara/sections/about.mdx":
/*!************************************************************!*\
  !*** ./src/@lekoarts/gatsby-theme-cara/sections/about.mdx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_frontmatter": () => (/* binding */ _frontmatter),
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");

const _excluded = ["components"];

/* @jsx mdx */


/* @jsxRuntime classic */

/* @jsx mdx */

const _frontmatter = {};
const layoutProps = {
  _frontmatter
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)(MDXLayout, Object.assign({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h2", null, `Über Uns`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("blockquote", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", {
    parentName: "blockquote"
  }, `Wir bei der K&B Software entwickeln innerhalb eines einheitlichen Ökosystems Healthcare-Lösungen, welche alle Teilnehmer des Gesundheitsmarktes zukunftsorientiert miteinander verbindet.`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `Bei allen unseren Lösungen, Schnittstellen und Programmen stellen wir stets den Patienten und die Maximiereung seiner Gesundheit in den Mittelpunkt.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./src/@lekoarts/gatsby-theme-cara/sections/contact.mdx":
/*!**************************************************************!*\
  !*** ./src/@lekoarts/gatsby-theme-cara/sections/contact.mdx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_frontmatter": () => (/* binding */ _frontmatter),
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");

const _excluded = ["components"];

/* @jsx mdx */


/* @jsxRuntime classic */

/* @jsx mdx */

const _frontmatter = {};
const layoutProps = {
  _frontmatter
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)(MDXLayout, Object.assign({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h2", null, `Uns erreichen`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "p",
    "href": "https://go.nibyou.com/facebook"
  }, `Facebook`), ` - `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "p",
    "href": "https://go.nibyou.com/github"
  }, `GitHub`), ` - `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "p",
    "href": "https://go.nibyou.com/twitter"
  }, `Twitter`), ` - `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "p",
    "href": "https://go.nibyou.com/linkedin"
  }, `LinkedIn`)));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./src/@lekoarts/gatsby-theme-cara/sections/intro.mdx":
/*!************************************************************!*\
  !*** ./src/@lekoarts/gatsby-theme-cara/sections/intro.mdx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_frontmatter": () => (/* binding */ _frontmatter),
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");

const _excluded = ["components"];

/* @jsx mdx */


/* @jsxRuntime classic */

/* @jsx mdx */

const _frontmatter = {};
const layoutProps = {
  _frontmatter
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)(MDXLayout, Object.assign({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h1", null, `K&B Software Solutions`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `Software, die Menschen verbindet.`));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./src/@lekoarts/gatsby-theme-cara/sections/projects.mdx":
/*!***************************************************************!*\
  !*** ./src/@lekoarts/gatsby-theme-cara/sections/projects.mdx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_frontmatter": () => (/* binding */ _frontmatter),
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");

const _excluded = ["components"];

/* @jsx mdx */


/* @jsxRuntime classic */

/* @jsx mdx */

const _frontmatter = {};

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("div", props);
};

const ProjectCard = makeShortcode("ProjectCard");
const layoutProps = {
  _frontmatter
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)(MDXLayout, Object.assign({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h2", null, `Projekte`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)(ProjectCard, {
    title: "Nibyou",
    link: "https://nibyou.de",
    bg: "linear-gradient(to right, #98c1c12e 0%, #87b7b7 100%)",
    mdxType: "ProjectCard"
  }, "Praxissoftware f\xFCr zertifizierte Ern\xE4hrungstherapeuten. Von Organisation bis Therapie - alles aus einer Hand."));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-cara/src/components/about.tsx":
/*!***************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-cara/src/components/about.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/divider */ "./node_modules/@lekoarts/gatsby-theme-cara/src/elements/divider.tsx");
/* harmony import */ var _elements_inner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/inner */ "./node_modules/@lekoarts/gatsby-theme-cara/src/elements/inner.tsx");
/* harmony import */ var _elements_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/content */ "./node_modules/@lekoarts/gatsby-theme-cara/src/elements/content.tsx");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./svg */ "./node_modules/@lekoarts/gatsby-theme-cara/src/components/svg.tsx");
/* harmony import */ var _styles_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/animations */ "./node_modules/@lekoarts/gatsby-theme-cara/src/styles/animations.tsx");
/* harmony import */ var _sections_about__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/about */ "./src/@lekoarts/gatsby-theme-cara/sections/about.mdx");





 // @ts-ignore



const About = ({
  offset,
  factor = 1
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elements_divider__WEBPACK_IMPORTED_MODULE_1__["default"], {
  bg: "divider",
  clipPath: "polygon(0 16%, 100% 4%, 100% 82%, 0 94%)",
  speed: 0.2,
  offset: offset,
  factor: factor
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elements_divider__WEBPACK_IMPORTED_MODULE_1__["default"], {
  speed: 0.1,
  offset: offset,
  factor: factor
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_animations__WEBPACK_IMPORTED_MODULE_5__.UpDown, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
  icon: "box",
  hiddenMobile: true,
  width: 6,
  color: "icon_blue",
  left: "50%",
  top: "75%"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
  icon: "upDown",
  hiddenMobile: true,
  width: 8,
  color: "icon_darkest",
  left: "70%",
  top: "20%"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
  icon: "triangle",
  width: 8,
  stroke: true,
  color: "icon_darkest",
  left: "25%",
  top: "5%"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
  icon: "upDown",
  hiddenMobile: true,
  width: 24,
  color: "icon_orange",
  left: "80%",
  top: "80%"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_animations__WEBPACK_IMPORTED_MODULE_5__.UpDownWide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
  icon: "arrowUp",
  hiddenMobile: true,
  width: 16,
  color: "icon_purple",
  left: "5%",
  top: "80%"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
  icon: "triangle",
  width: 12,
  stroke: true,
  color: "icon_brightest",
  left: "95%",
  top: "50%"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
  icon: "circle",
  hiddenMobile: true,
  width: 6,
  color: "icon_brightest",
  left: "85%",
  top: "15%"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
  icon: "upDown",
  hiddenMobile: true,
  width: 8,
  color: "icon_darkest",
  left: "45%",
  top: "10%"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
  icon: "circle",
  hiddenMobile: true,
  width: 6,
  color: "icon_brightest",
  left: "4%",
  top: "20%"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
  icon: "circle",
  width: 12,
  color: "icon_darkest",
  left: "70%",
  top: "60%"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
  icon: "box",
  width: 6,
  color: "icon_orange",
  left: "10%",
  top: "10%"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
  icon: "box",
  width: 12,
  color: "icon_darkest",
  left: "20%",
  top: "30%"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
  icon: "hexa",
  width: 8,
  stroke: true,
  color: "icon_darkest",
  left: "80%",
  top: "70%"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elements_content__WEBPACK_IMPORTED_MODULE_3__["default"], {
  speed: 0.4,
  offset: offset,
  factor: factor
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elements_inner__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sections_about__WEBPACK_IMPORTED_MODULE_6__["default"], null))));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-cara/src/components/contact.tsx":
/*!*****************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-cara/src/components/contact.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var _elements_divider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/divider */ "./node_modules/@lekoarts/gatsby-theme-cara/src/elements/divider.tsx");
/* harmony import */ var _elements_inner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/inner */ "./node_modules/@lekoarts/gatsby-theme-cara/src/elements/inner.tsx");
/* harmony import */ var _elements_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/content */ "./node_modules/@lekoarts/gatsby-theme-cara/src/elements/content.tsx");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg */ "./node_modules/@lekoarts/gatsby-theme-cara/src/components/svg.tsx");
/* harmony import */ var _styles_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/animations */ "./node_modules/@lekoarts/gatsby-theme-cara/src/styles/animations.tsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ "./src/@lekoarts/gatsby-theme-cara/components/footer.tsx");
/* harmony import */ var _sections_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/contact */ "./src/@lekoarts/gatsby-theme-cara/sections/contact.mdx");
/** @jsx jsx */






 // @ts-ignore



const Contact = ({
  offset,
  factor = 1
}) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(_elements_divider__WEBPACK_IMPORTED_MODULE_0__["default"], {
  fill: "divider",
  speed: 0.2,
  offset: offset,
  factor: factor
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
  sx: {
    position: `absolute`,
    bottom: 0,
    width: `full`,
    transform: `matrix(1, 0, 0, -1, 0, 0)`
  }
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
  sx: {
    position: `relative`,
    height: `full`,
    svg: {
      width: `100%`,
      height: `40vh`
    },
    path: {
      animation: (0,_styles_animations__WEBPACK_IMPORTED_MODULE_4__.waveAnimation)(`20s`)
    }
  }
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  id: "contact-wave",
  viewBox: "0 0 800 338.05",
  preserveAspectRatio: "none"
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)("animate", {
  attributeName: "d",
  values: "M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z",
  repeatCount: "indefinite",
  dur: "30s"
})))))), (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(_elements_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
  speed: 0.4,
  offset: offset,
  factor: factor
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(_elements_inner__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(_sections_contact__WEBPACK_IMPORTED_MODULE_6__["default"], null)), (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(_footer__WEBPACK_IMPORTED_MODULE_5__["default"], null)), (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(_elements_divider__WEBPACK_IMPORTED_MODULE_0__["default"], {
  speed: 0.1,
  offset: offset,
  factor: factor
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(_styles_animations__WEBPACK_IMPORTED_MODULE_4__.UpDown, null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "upDown",
  hiddenMobile: true,
  width: 8,
  color: "icon_darkest",
  left: "70%",
  top: "20%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "triangle",
  width: 8,
  stroke: true,
  color: "icon_darkest",
  left: "25%",
  top: "5%"
})), (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(_styles_animations__WEBPACK_IMPORTED_MODULE_4__.UpDownWide, null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "triangle",
  width: 12,
  stroke: true,
  color: "icon_brightest",
  left: "95%",
  top: "50%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "circle",
  width: 6,
  color: "icon_brightest",
  left: "85%",
  top: "15%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "upDown",
  hiddenMobile: true,
  width: 8,
  color: "icon_darkest",
  left: "45%",
  top: "10%"
})), (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "circle",
  width: 6,
  color: "icon_brightest",
  left: "4%",
  top: "20%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "circle",
  width: 12,
  color: "icon_darkest",
  left: "70%",
  top: "60%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "box",
  width: 12,
  color: "icon_darkest",
  left: "20%",
  top: "30%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_7__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "hexa",
  width: 8,
  stroke: true,
  color: "icon_darkest",
  left: "80%",
  top: "70%"
})));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-cara/src/components/hero.tsx":
/*!**************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-cara/src/components/hero.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var _elements_divider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/divider */ "./node_modules/@lekoarts/gatsby-theme-cara/src/elements/divider.tsx");
/* harmony import */ var _elements_inner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/inner */ "./node_modules/@lekoarts/gatsby-theme-cara/src/elements/inner.tsx");
/* harmony import */ var _elements_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/content */ "./node_modules/@lekoarts/gatsby-theme-cara/src/elements/content.tsx");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg */ "./node_modules/@lekoarts/gatsby-theme-cara/src/components/svg.tsx");
/* harmony import */ var _styles_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/animations */ "./node_modules/@lekoarts/gatsby-theme-cara/src/styles/animations.tsx");
/* harmony import */ var _sections_intro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/intro */ "./src/@lekoarts/gatsby-theme-cara/sections/intro.mdx");
/** @jsx jsx */





 // @ts-ignore



const Hero = ({
  offset,
  factor = 1
}) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_elements_divider__WEBPACK_IMPORTED_MODULE_0__["default"], {
  speed: 0.2,
  offset: offset,
  factor: factor
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_styles_animations__WEBPACK_IMPORTED_MODULE_4__.UpDown, null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "triangle",
  hiddenMobile: true,
  width: 48,
  stroke: true,
  color: "icon_orange",
  left: "10%",
  top: "20%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "hexa",
  width: 48,
  stroke: true,
  color: "icon_red",
  left: "60%",
  top: "70%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "box",
  width: 6,
  color: "icon_darker",
  left: "60%",
  top: "15%"
})), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_styles_animations__WEBPACK_IMPORTED_MODULE_4__.UpDownWide, null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "arrowUp",
  hiddenMobile: true,
  width: 16,
  color: "icon_blue",
  left: "80%",
  top: "10%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "triangle",
  width: 12,
  stroke: true,
  color: "icon_brightest",
  left: "90%",
  top: "50%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "circle",
  width: 16,
  color: "icon_darker",
  left: "70%",
  top: "90%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "triangle",
  width: 16,
  stroke: true,
  color: "icon_darkest",
  left: "30%",
  top: "65%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "cross",
  width: 16,
  stroke: true,
  color: "icon_pink",
  left: "28%",
  top: "15%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "circle",
  width: 6,
  color: "icon_darkest",
  left: "75%",
  top: "10%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "upDown",
  hiddenMobile: true,
  width: 8,
  color: "icon_darkest",
  left: "45%",
  top: "10%"
})), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "circle",
  hiddenMobile: true,
  width: 24,
  color: "icon_darker",
  left: "5%",
  top: "70%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "circle",
  width: 6,
  color: "icon_darkest",
  left: "4%",
  top: "20%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "circle",
  width: 12,
  color: "icon_darkest",
  left: "50%",
  top: "60%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "upDown",
  width: 8,
  color: "icon_darkest",
  left: "95%",
  top: "90%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "upDown",
  hiddenMobile: true,
  width: 24,
  color: "icon_darker",
  left: "40%",
  top: "80%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "triangle",
  width: 8,
  stroke: true,
  color: "icon_darker",
  left: "25%",
  top: "5%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "circle",
  width: 64,
  color: "icon_green",
  left: "95%",
  top: "5%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "box",
  hiddenMobile: true,
  width: 64,
  color: "icon_purple",
  left: "5%",
  top: "90%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "box",
  width: 6,
  color: "icon_darkest",
  left: "10%",
  top: "10%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "box",
  width: 12,
  color: "icon_darkest",
  left: "40%",
  top: "30%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "hexa",
  width: 16,
  stroke: true,
  color: "icon_darker",
  left: "10%",
  top: "50%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "hexa",
  width: 8,
  stroke: true,
  color: "icon_darker",
  left: "80%",
  top: "70%"
})), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_elements_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
  sx: {
    variant: `texts.bigger`
  },
  speed: 0.4,
  offset: offset,
  factor: factor
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_elements_inner__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sections_intro__WEBPACK_IMPORTED_MODULE_5__["default"], null))));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-cara/src/components/layout.tsx":
/*!****************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-cara/src/components/layout.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");
/* harmony import */ var _seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seo */ "./node_modules/@lekoarts/gatsby-theme-cara/src/components/seo.tsx");




const Layout = ({
  children,
  className = ``
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.Global, {
  styles: theme => ({
    "*": {
      boxSizing: `inherit`,
      "&:before": {
        boxSizing: `inherit`
      },
      "&:after": {
        boxSizing: `inherit`
      }
    },
    html: {
      fontSize: `18px`,
      WebkitTextSizeAdjust: `100%`
    },
    img: {
      borderStyle: `none`
    },
    pre: {
      fontFamily: `monospace`,
      fontSize: `1em`
    },
    "[hidden]": {
      display: `none`
    },
    "::selection": {
      backgroundColor: theme.colors.primary,
      color: theme.colors.background
    }
  })
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_seo__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
  className: className
}, children));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-cara/src/components/projects.tsx":
/*!******************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-cara/src/components/projects.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var _elements_divider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/divider */ "./node_modules/@lekoarts/gatsby-theme-cara/src/elements/divider.tsx");
/* harmony import */ var _elements_inner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/inner */ "./node_modules/@lekoarts/gatsby-theme-cara/src/elements/inner.tsx");
/* harmony import */ var _elements_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/content */ "./node_modules/@lekoarts/gatsby-theme-cara/src/elements/content.tsx");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg */ "./node_modules/@lekoarts/gatsby-theme-cara/src/components/svg.tsx");
/* harmony import */ var _styles_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/animations */ "./node_modules/@lekoarts/gatsby-theme-cara/src/styles/animations.tsx");
/* harmony import */ var _sections_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/projects */ "./src/@lekoarts/gatsby-theme-cara/sections/projects.mdx");
/** @jsx jsx */





 // @ts-ignore



const Projects = ({
  offset,
  factor = 2
}) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_elements_divider__WEBPACK_IMPORTED_MODULE_0__["default"], {
  bg: "linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)",
  sx: {
    clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)`
  },
  speed: -0.2,
  offset: 1.1,
  factor: factor
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_elements_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
  speed: 0.4,
  offset: offset + 0.2,
  factor: factor
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_elements_inner__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
  sx: {
    display: `grid`,
    gridGap: [4, 4, 4, 5],
    gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
    h2: {
      gridColumn: `-1/1`,
      color: `white !important`
    }
  }
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sections_projects__WEBPACK_IMPORTED_MODULE_5__["default"], null)))), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_elements_divider__WEBPACK_IMPORTED_MODULE_0__["default"], {
  speed: 0.1,
  offset: offset,
  factor: factor
}, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_styles_animations__WEBPACK_IMPORTED_MODULE_4__.UpDown, null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "box",
  width: 6,
  color: "icon_brightest",
  left: "85%",
  top: "75%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "upDown",
  width: 8,
  color: "icon_teal",
  left: "70%",
  top: "20%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "triangle",
  width: 8,
  stroke: true,
  color: "icon_orange",
  left: "25%",
  top: "5%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "circle",
  hiddenMobile: true,
  width: 24,
  color: "icon_brightest",
  left: "17%",
  top: "60%"
})), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_styles_animations__WEBPACK_IMPORTED_MODULE_4__.UpDownWide, null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "arrowUp",
  hiddenMobile: true,
  width: 16,
  color: "icon_green",
  left: "20%",
  top: "90%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "triangle",
  width: 12,
  stroke: true,
  color: "icon_brightest",
  left: "90%",
  top: "30%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "circle",
  width: 16,
  color: "icon_yellow",
  left: "70%",
  top: "90%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "triangle",
  hiddenMobile: true,
  width: 16,
  stroke: true,
  color: "icon_teal",
  left: "18%",
  top: "75%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "circle",
  width: 6,
  color: "icon_brightest",
  left: "75%",
  top: "10%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "upDown",
  hiddenMobile: true,
  width: 8,
  color: "icon_green",
  left: "45%",
  top: "10%"
})), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "circle",
  hiddenMobile: true,
  width: 6,
  color: "icon_brightest",
  left: "4%",
  top: "20%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "circle",
  width: 12,
  color: "icon_pink",
  left: "80%",
  top: "60%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "box",
  width: 6,
  color: "icon_orange",
  left: "10%",
  top: "10%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "box",
  width: 12,
  color: "icon_yellow",
  left: "29%",
  top: "26%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "hexa",
  width: 16,
  stroke: true,
  color: "icon_red",
  left: "75%",
  top: "30%"
}), (0,theme_ui__WEBPACK_IMPORTED_MODULE_6__.jsx)(_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  icon: "hexa",
  width: 8,
  stroke: true,
  color: "icon_yellow",
  left: "80%",
  top: "70%"
})));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-cara/src/components/seo.tsx":
/*!*************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-cara/src/components/seo.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-site-metadata */ "./node_modules/@lekoarts/gatsby-theme-cara/src/hooks/use-site-metadata.tsx");





const SEO = ({
  title = ``,
  description = ``,
  pathname = ``,
  image = ``,
  children = null
}) => {
  const site = (0,_hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const {
    siteTitle,
    siteTitleAlt: defaultTitle,
    siteUrl,
    siteDescription: defaultDescription,
    siteLanguage,
    siteImage: defaultImage,
    author
  } = site;
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${image || defaultImage}`
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
    title: title,
    defaultTitle: defaultTitle,
    titleTemplate: `%s | ${siteTitle}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("html", {
    lang: siteLanguage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "description",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "image",
    content: seo.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:title",
    content: seo.title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:url",
    content: seo.url
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:description",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:image",
    content: seo.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:image:alt",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:title",
    content: seo.title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:url",
    content: seo.url
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:description",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:image",
    content: seo.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:image:alt",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:creator",
    content: author
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "gatsby-theme",
    content: "@lekoarts/gatsby-theme-cara"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: (0,gatsby__WEBPACK_IMPORTED_MODULE_2__.withPrefix)(`/favicon-32x32.png`)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: (0,gatsby__WEBPACK_IMPORTED_MODULE_2__.withPrefix)(`/favicon-16x16.png`)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: (0,gatsby__WEBPACK_IMPORTED_MODULE_2__.withPrefix)(`/apple-touch-icon.png`)
  }), children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-cara/src/components/svg.tsx":
/*!*************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-cara/src/components/svg.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var _styles_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/utils */ "./node_modules/@lekoarts/gatsby-theme-cara/src/styles/utils.tsx");
/** @jsx jsx */



const icons = {
  triangle: {
    shape: (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("polygon", {
      strokeWidth: "1px",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      points: "14.921,2.27 28.667,25.5 1.175,25.5 "
    }),
    viewBox: `0 0 30 30`
  },
  circle: {
    shape: (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"
    }),
    viewBox: `0 0 30 30`
  },
  arrowUp: {
    shape: (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z"
    }), ` `, (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z"
    })),
    viewBox: `0 0 30 42`
  },
  upDown: {
    shape: (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z"
    }), (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z"
    })),
    viewBox: `0 0 30 44.58`
  },
  box: {
    shape: (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z"
    }),
    viewBox: `0 0 30 30`
  },
  hexa: {
    shape: (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("polygon", {
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      points: "27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
    }),
    viewBox: `0 0 30 30`
  },
  cross: {
    shape: (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      strokeWidth: "3px",
      d: "M60.5,50l34.8-34.8c2.9-2.9,2.9-7.6,0-10.5c-2.9-2.9-7.6-2.9-10.5,0L50,39.5L15.2,4.7c-2.9-2.9-7.6-2.9-10.5,0    c-2.9,2.9-2.9,7.6,0,10.5L39.5,50L4.7,84.8c-2.9,2.9-2.9,7.6,0,10.5c1.4,1.4,3.3,2.2,5.2,2.2s3.8-0.7,5.2-2.2L50,60.5l34.8,34.8    c1.4,1.4,3.3,2.2,5.2,2.2c1.9,0,3.8-0.7,5.2-2.2c2.9-2.9,2.9-7.6,0-10.5L60.5,50z"
    }),
    viewBox: `0 0 100 100`
  }
};

const Svg = ({
  stroke = false,
  color = ``,
  width,
  icon,
  left,
  top,
  hiddenMobile = false
}) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
  sx: {
    position: `absolute`,
    stroke: stroke ? `currentColor` : `none`,
    fill: stroke ? `none` : `currentColor`,
    display: hiddenMobile ? _styles_utils__WEBPACK_IMPORTED_MODULE_1__.hidden : `block`,
    color,
    width,
    left,
    top
  },
  viewBox: icons[icon].viewBox
}, icons[icon].shape);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Svg);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-cara/src/elements/content.tsx":
/*!***************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-cara/src/elements/content.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var _react_spring_parallax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-spring/parallax */ "./node_modules/@react-spring/parallax/dist/react-spring-parallax.esm.js");
/** @jsx jsx */



const Content = ({
  speed,
  offset,
  children,
  className = ``,
  factor = 1
}) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_0__.ParallaxLayer, {
  sx: {
    padding: [3, 4, 4, 5],
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
    zIndex: 50
  },
  speed: speed,
  offset: offset,
  factor: factor,
  className: className
}, children);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-cara/src/elements/divider.tsx":
/*!***************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-cara/src/elements/divider.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var _react_spring_parallax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-spring/parallax */ "./node_modules/@react-spring/parallax/dist/react-spring-parallax.esm.js");
/** @jsx jsx */



const Divider = ({
  speed,
  offset,
  factor = 1,
  bg = ``,
  fill = ``,
  clipPath = ``,
  children = null,
  className = ``
}) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_0__.ParallaxLayer, {
  sx: {
    position: `absolute`,
    width: `full`,
    height: `full`,
    background: bg,
    backgroundColor: bg,
    "#contact-wave": {
      color: fill,
      fill: `currentColor`
    },
    clipPath
  },
  speed: speed,
  offset: offset,
  factor: factor,
  className: className
}, children);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-cara/src/elements/inner.tsx":
/*!*************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-cara/src/elements/inner.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/** @jsx jsx */


const Inner = ({
  className = ``,
  children
}) => (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
  sx: {
    width: [`full`, `full`, `full`, `full`, `full`, `2/3`],
    textAlign: `left`
  },
  className: className
}, children);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inner);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-cara/src/hooks/use-site-metadata.tsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-cara/src/hooks/use-site-metadata.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_318001574_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../public/page-data/sq/d/318001574.json */ "./public/page-data/sq/d/318001574.json");


const useSiteMetadata = () => {
  const data = _public_page_data_sq_d_318001574_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return data.site.siteMetadata;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSiteMetadata);

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-cara/src/styles/animations.tsx":
/*!****************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-cara/src/styles/animations.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpDown": () => (/* binding */ UpDown),
/* harmony export */   "UpDownWide": () => (/* binding */ UpDownWide),
/* harmony export */   "waveAnimation": () => (/* binding */ waveAnimation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");
/** @jsx jsx */


const wave = _emotion_react__WEBPACK_IMPORTED_MODULE_1__.keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`;
const upDown = _emotion_react__WEBPACK_IMPORTED_MODULE_1__.keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`;
const upDownWide = _emotion_react__WEBPACK_IMPORTED_MODULE_1__.keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`;
const upDownAnimation = _emotion_react__WEBPACK_IMPORTED_MODULE_1__.css`
  ${upDown} 4s ease-in-out infinite alternate;
`;
const upDownWideAnimation = _emotion_react__WEBPACK_IMPORTED_MODULE_1__.css`
  ${upDownWide} 18s ease-in-out infinite alternate;
`;
function UpDown({
  children
}) {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    css: _emotion_react__WEBPACK_IMPORTED_MODULE_1__.css`
        animation: ${upDownAnimation};
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `
  }, children);
}
function UpDownWide({
  children
}) {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    css: _emotion_react__WEBPACK_IMPORTED_MODULE_1__.css`
        animation: ${upDownWideAnimation};
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `
  }, children);
}
const waveAnimation = length => `${wave} ${length} linear infinite alternate`;

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-cara/src/styles/utils.tsx":
/*!***********************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-cara/src/styles/utils.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hidden": () => (/* binding */ hidden)
/* harmony export */ });
const hidden = [`none`, `none`, `block`];

/***/ }),

/***/ "./node_modules/@lekoarts/gatsby-theme-cara/src/templates/cara.tsx":
/*!*************************************************************************!*\
  !*** ./node_modules/@lekoarts/gatsby-theme-cara/src/templates/cara.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_spring_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-spring/parallax */ "./node_modules/@react-spring/parallax/dist/react-spring-parallax.esm.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./node_modules/@lekoarts/gatsby-theme-cara/src/components/layout.tsx");
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hero */ "./node_modules/@lekoarts/gatsby-theme-cara/src/components/hero.tsx");
/* harmony import */ var _components_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/projects */ "./node_modules/@lekoarts/gatsby-theme-cara/src/components/projects.tsx");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/about */ "./node_modules/@lekoarts/gatsby-theme-cara/src/components/about.tsx");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/contact */ "./node_modules/@lekoarts/gatsby-theme-cara/src/components/contact.tsx");








const Cara = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {
  pages: 5
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_hero__WEBPACK_IMPORTED_MODULE_3__["default"], {
  offset: 0,
  factor: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_projects__WEBPACK_IMPORTED_MODULE_4__["default"], {
  offset: 1,
  factor: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_about__WEBPACK_IMPORTED_MODULE_5__["default"], {
  offset: 3,
  factor: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_contact__WEBPACK_IMPORTED_MODULE_6__["default"], {
  offset: 4,
  factor: 1
})));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cara);

/***/ }),

/***/ "./src/@lekoarts/gatsby-theme-cara/components/footer.tsx":
/*!***************************************************************!*\
  !*** ./src/@lekoarts/gatsby-theme-cara/components/footer.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/color-modes/dist/theme-ui-color-modes.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/** @jsx jsx */



const Footer = () => {
  const [colorMode, setColorMode] = (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.useColorMode)();
  const isDark = colorMode === `dark`;

  const toggleColorMode = e => {
    setColorMode(isDark ? `light` : `dark`);
  };

  return (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_3__.Box, {
    as: "footer",
    variant: "footer"
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
    sx: {
      variant: `buttons.toggle`,
      fontWeight: `semibold`,
      display: `block`,
      mx: `auto`,
      mb: 3
    },
    onClick: toggleColorMode,
    type: "button",
    "aria-label": "Toggle dark mode"
  }, isDark ? `Hell` : `Dunkel`), "Copyright \xA9 ", new Date().getFullYear(), ". Alle Rechte vorbehalten.", (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", null), (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    sx: {
      justifyContent: `center`,
      alignItems: `center`,
      mt: 3,
      color: `text`,
      fontWeight: `semibold`,
      a: {
        color: `text`
      }
    }
  }, (0,theme_ui__WEBPACK_IMPORTED_MODULE_2__.jsx)(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/impressum"
  }, "Impressum")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./public/page-data/sq/d/318001574.json":
/*!**********************************************!*\
  !*** ./public/page-data/sq/d/318001574.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"siteTitle":"K&B","siteTitleAlt":"K&B Software","siteHeadline":"K&B Software, die Menschen verbindet.","siteUrl":"https://k-b.dev","siteDescription":"Landing Page der K&B Software","siteLanguage":"en","siteImage":"/banner.jpg","author":"K&B Software"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-cara-src-templates-cara-tsx.js.map