import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import * as vue$1 from 'vue';
import { useSSRContext, ref, onUnmounted, withCtx, createTextVNode, unref, createVNode, defineComponent, mergeProps, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { ArrowDownTrayIcon } from '@heroicons/vue/24/outline';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(vue$1);

var vue=require$$0;function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script = vue.defineComponent({
  name: "VueWriter",
  props: {
    array: {
      type: Array,
      required: true
    },
    eraseSpeed: {
      type: Number,
      default: 100
    },
    typeSpeed: {
      type: Number,
      default: 200
    },
    delay: {
      type: Number,
      default: 2000
    },
    intervals: {
      type: Number,
      default: 500
    },
    start: {
      type: Number,
      default: 0
    },
    caret: {
      type: String,
      default: "cursor"
    },
    iterations: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      typeValue: "",
      count: 0,
      typeStatus: false,
      arrayIndex: 0,
      charIndex: 0
    };
  },
  methods: {
    typewriter: function typewriter() {
      var loop = 0;

      if (this.charIndex < this.array[this.arrayIndex].length) {
        if (!this.typeStatus) {
          this.typeStatus = true;
        }

        this.typeValue += this.array[this.arrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typewriter, this.typeSpeed);
      } else {
        this.count += 1;

        if (this.count === this.array.length) {
          loop += 1;

          if (loop === this.iterations) {
            return this.typeStatus = false;
          }
        }

        this.typeStatus = false;
        setTimeout(this.eraser, this.delay);
      }
    },
    eraser: function eraser() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.array[this.arrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraser, this.eraseSpeed);
      } else {
        this.typeStatus = false;
        this.arrayIndex += 1;
        if (this.arrayIndex >= this.array.length) this.arrayIndex = 0;
        setTimeout(this.typewriter, this.typeSpeed + this.intervals);
      }
    }
  },
  created: function created() {
    setTimeout(this.typewriter, this.start);
  }
});var _hoisted_1 = {
  class: "is-typed"
};
var _hoisted_2 = {
  class: "typed"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.renderSlot(_ctx.$slots, "default"), vue.createVNode("span", _hoisted_2, vue.toDisplayString(_ctx.typeValue), 1), vue.createVNode("span", {
    class: _ctx.caret + ' ' + {
      typing: _ctx.typeStatus
    }
  }, " ", 2)]);
}script.render = render;// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var component = /*#__PURE__*/(function () {
  // Get component instance
  var installable = script; // Attach install function executed by Vue.use()

  installable.install = function (app) {
    app.component('VueWriter', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default': component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});var vueWriter_ssr=component;

const VueWriter = /*@__PURE__*/getDefaultExportFromCjs(vueWriter_ssr);

const _sfc_main$5 = {
  __name: "HeadingCard",
  __ssrInlineRender: true,
  props: {
    textColor: String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["text-4xl font-mono font-bold", props.textColor]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeadingCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$5;
const _sfc_main$4 = {
  __name: "Section",
  __ssrInlineRender: true,
  props: {
    color: String,
    text: String,
    textColor: String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeadingCard = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["w-full", props.color]
      }, _attrs))}><div class="container mx-auto">`);
      _push(ssrRenderComponent(_component_HeadingCard, {
        class: "pt-4",
        textColor: props.textColor
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass(props.textColor)}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Section.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "SkillCard",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-2 border-solid border-black rounded-lg h-[200px]" }, _attrs))}><h1 class="font-bold">${ssrInterpolate(props.title)}</h1>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkillCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "SkillImage",
  __ssrInlineRender: true,
  props: {
    image: String,
    name: String
  },
  setup(__props) {
    const props = __props;
    const testImage = props.image;
    console.log(testImage);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full overflow-hidden group" }, _attrs))}><div class="relative overflow-hidden"><img class="rounded-full object-contain h-20 w-20"${ssrRenderAttr("src", props.image)} alt=""><div class="absolute h-full w-full bg-black/70 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full"><span class="text-white">${ssrInterpolate(props.name)}</span></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkillImage.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$2;
const _imports_0 = "" + publicAssetsURL("background.mp4");
const _imports_1 = "" + publicAssetsURL("picture.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HeaderButton",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "mt-2 mb-2 px-2 py-1 border rounded" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref(0);
    let navBarShow = ref(false);
    function handleScroll() {
      navBarShow.value = window.scrollY > 400;
      console.log(navBarShow.value);
    }
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Section = __nuxt_component_0;
      const _component_SkillCard = __nuxt_component_1;
      const _component_SkillImage = __nuxt_component_2;
      _push(`<!--[--><h1 class="text-white z-40 fixed w-full h-[50px] font-mono bg-black"><div class="absolute right-20"><div class="flex space-x-4">`);
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About Me`);
          } else {
            return [
              createTextVNode("About Me")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Skills`);
          } else {
            return [
              createTextVNode("Skills")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Projects Me`);
          } else {
            return [
              createTextVNode("Projects Me")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Extras`);
          } else {
            return [
              createTextVNode("Extras")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="/MatthewCurschmanResume.pdf" download target="blank">`);
      _push(ssrRenderComponent(_sfc_main$1, { class: "bg-white text-black flex items-center space-x-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Resume `);
            _push2(ssrRenderComponent(unref(ArrowDownTrayIcon), { class: "h-5 w-5 text-black-500" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Resume "),
              createVNode(unref(ArrowDownTrayIcon), { class: "h-5 w-5 text-black-500" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a></div></div></h1><div class="section bg-black"><div></div><h1 class="text-white pl-10 pt-60"><div> Matt Curschman </div><div class="pl-20"><div class="flex flex-row"><div class="pr-7">I am a </div><div>`);
      _push(ssrRenderComponent(unref(VueWriter), {
        class: "inline text-blue-300",
        array: ["Computer Engineer", "Computer Scientist", "Web Developer"],
        typeSpeed: 40,
        eraseSpeed: 50,
        delay: 1e3,
        intervals: 200
      }, null, _parent));
      _push(`</div></div></div></h1><h1></h1><div class="video-container"><video autoplay loop muted class="md:filter-none"><source${ssrRenderAttr("src", _imports_0)} type="video/mp4"></video></div></div>`);
      _push(ssrRenderComponent(_component_Section, {
        text: "About Me",
        textColor: "text-white",
        color: "bg-[#111]",
        class: "h-[700px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-row"${_scopeId}><img class="rounded-full pt-10"${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId}><pre class="text-lg"${_scopeId}>        My name is Matthew Curschman

        I have a degree in Computer Engineering from the University of Florida. Go Gators!

        I currently work as a Full-Stack web Developer, with a heavy lean on back-end technologies.I have experience
        with Database Creation, Parsing, Integration, and Utilization on large scale projects. My current work project
        is a Parsing application designed to parse large Google Sheets documents, extrapolate their data,and store it
        in a database, where it can then be accessed as an API backend, queried for further information, or have
        subsequent operations ran on it (Conflux Parser).

        My current side projects are a  lexicographic parser designed to parse and read mathematical equations and provide
        their derivative (derivApp), and a personal tracker (Myday)

        My friends describe me as funny, and I like to describe myself as determined. I am an Eagle Scout, have a
        Black Belt in Karate, and enjoy both piano and art as my hobbies. My favorite subjects are
        Computer Science (duh), Math, and Art.
      </pre></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-row" }, [
                createVNode("img", {
                  class: "rounded-full pt-10",
                  src: _imports_1,
                  alt: ""
                }),
                createVNode("pre", { class: "text-lg" }, "        My name is Matthew Curschman\n\n        I have a degree in Computer Engineering from the University of Florida. Go Gators!\n\n        I currently work as a Full-Stack web Developer, with a heavy lean on back-end technologies.I have experience\n        with Database Creation, Parsing, Integration, and Utilization on large scale projects. My current work project\n        is a Parsing application designed to parse large Google Sheets documents, extrapolate their data,and store it\n        in a database, where it can then be accessed as an API backend, queried for further information, or have\n        subsequent operations ran on it (Conflux Parser).\n\n        My current side projects are a  lexicographic parser designed to parse and read mathematical equations and provide\n        their derivative (derivApp), and a personal tracker (Myday)\n\n        My friends describe me as funny, and I like to describe myself as determined. I am an Eagle Scout, have a\n        Black Belt in Karate, and enjoy both piano and art as my hobbies. My favorite subjects are\n        Computer Science (duh), Math, and Art.\n      ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Section, {
        text: "Skills",
        textColor: "text-black",
        color: "bg-white",
        class: "h-[800px] mx-auto pb-20"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto text-center pt-20"${_scopeId}><div class="grid grid-cols-3 px-40 gap-5 pb-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SkillCard, { title: "Front End" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_SkillImage, {
                    image: "/html.png",
                    name: "HTML"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SkillImage, {
                    image: "/css.png",
                    name: "CSS"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SkillImage, {
                    image: "/tailwind.png",
                    name: "Tailwind"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-3" }, [
                      createVNode(_component_SkillImage, {
                        image: "/html.png",
                        name: "HTML"
                      }),
                      createVNode(_component_SkillImage, {
                        image: "/css.png",
                        name: "CSS"
                      }),
                      createVNode(_component_SkillImage, {
                        image: "/tailwind.png",
                        name: "Tailwind"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SkillCard, { title: "Back End" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_SkillImage, {
                    image: "/php.svg",
                    name: "PHP"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-3" }, [
                      createVNode(_component_SkillImage, {
                        image: "/php.svg",
                        name: "PHP"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SkillCard, { title: "Frameworks" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_SkillImage, {
                    image: "/nuxt.png",
                    name: "NuxtJS"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SkillImage, {
                    image: "/vue.webp",
                    name: "VueJS"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-3" }, [
                      createVNode(_component_SkillImage, {
                        image: "/nuxt.png",
                        name: "NuxtJS"
                      }),
                      createVNode(_component_SkillImage, {
                        image: "/vue.webp",
                        name: "VueJS"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SkillCard, { title: "Programming Languages" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_SkillImage, {
                    image: "/cppimage.png",
                    name: "C++"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SkillImage, {
                    image: "/java.svg",
                    name: "Java"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SkillImage, {
                    image: "/js.webp",
                    name: "JavaScript"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SkillImage, {
                    image: "/csharp.png",
                    name: "C#"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SkillImage, {
                    image: "/cimage.png",
                    name: "C"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SkillImage, {
                    image: "/python.png",
                    name: "Python"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-3" }, [
                      createVNode(_component_SkillImage, {
                        image: "/cppimage.png",
                        name: "C++"
                      }),
                      createVNode(_component_SkillImage, {
                        image: "/java.svg",
                        name: "Java"
                      }),
                      createVNode(_component_SkillImage, {
                        image: "/js.webp",
                        name: "JavaScript"
                      }),
                      createVNode(_component_SkillImage, {
                        image: "/csharp.png",
                        name: "C#"
                      }),
                      createVNode(_component_SkillImage, {
                        image: "/cimage.png",
                        name: "C"
                      }),
                      createVNode(_component_SkillImage, {
                        image: "/python.png",
                        name: "Python"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SkillCard, { title: "Version Control" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_SkillImage, {
                    image: "/gitlab.png",
                    name: "GitLab"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SkillImage, {
                    image: "/github.png",
                    name: "GitHub"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-3" }, [
                      createVNode(_component_SkillImage, {
                        image: "/gitlab.png",
                        name: "GitLab"
                      }),
                      createVNode(_component_SkillImage, {
                        image: "/github.png",
                        name: "GitHub"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SkillCard, { title: "Databases" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_SkillImage, {
                    image: "/sql.png",
                    name: "SQL"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SkillImage, {
                    image: "/mongo.png",
                    name: "MongoDB"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SkillImage, {
                    image: "/maria.png",
                    name: "MariaDB"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SkillImage, {
                    image: "/supabase.png",
                    name: "Supabase"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-3" }, [
                      createVNode(_component_SkillImage, {
                        image: "/sql.png",
                        name: "SQL"
                      }),
                      createVNode(_component_SkillImage, {
                        image: "/mongo.png",
                        name: "MongoDB"
                      }),
                      createVNode(_component_SkillImage, {
                        image: "/maria.png",
                        name: "MariaDB"
                      }),
                      createVNode(_component_SkillImage, {
                        image: "/supabase.png",
                        name: "Supabase"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SkillCard, { title: "Cloud" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-3"${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-3" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SkillCard, { title: "Third Parties" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-3"${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-3" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SkillCard, { title: "Operating Systems" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_SkillImage, {
                    image: "/macos.png",
                    name: "MacOS"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SkillImage, {
                    image: "/windows.webp",
                    name: "Windows"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SkillImage, {
                    image: "/linux.png",
                    name: "Linux"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-3" }, [
                      createVNode(_component_SkillImage, {
                        image: "/macos.png",
                        name: "MacOS"
                      }),
                      createVNode(_component_SkillImage, {
                        image: "/windows.webp",
                        name: "Windows"
                      }),
                      createVNode(_component_SkillImage, {
                        image: "/linux.png",
                        name: "Linux"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "mx-auto text-center pt-20" }, [
                createVNode("div", { class: "grid grid-cols-3 px-40 gap-5 pb-10" }, [
                  createVNode(_component_SkillCard, { title: "Front End" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-3" }, [
                        createVNode(_component_SkillImage, {
                          image: "/html.png",
                          name: "HTML"
                        }),
                        createVNode(_component_SkillImage, {
                          image: "/css.png",
                          name: "CSS"
                        }),
                        createVNode(_component_SkillImage, {
                          image: "/tailwind.png",
                          name: "Tailwind"
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_SkillCard, { title: "Back End" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-3" }, [
                        createVNode(_component_SkillImage, {
                          image: "/php.svg",
                          name: "PHP"
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_SkillCard, { title: "Frameworks" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-3" }, [
                        createVNode(_component_SkillImage, {
                          image: "/nuxt.png",
                          name: "NuxtJS"
                        }),
                        createVNode(_component_SkillImage, {
                          image: "/vue.webp",
                          name: "VueJS"
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_SkillCard, { title: "Programming Languages" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-3" }, [
                        createVNode(_component_SkillImage, {
                          image: "/cppimage.png",
                          name: "C++"
                        }),
                        createVNode(_component_SkillImage, {
                          image: "/java.svg",
                          name: "Java"
                        }),
                        createVNode(_component_SkillImage, {
                          image: "/js.webp",
                          name: "JavaScript"
                        }),
                        createVNode(_component_SkillImage, {
                          image: "/csharp.png",
                          name: "C#"
                        }),
                        createVNode(_component_SkillImage, {
                          image: "/cimage.png",
                          name: "C"
                        }),
                        createVNode(_component_SkillImage, {
                          image: "/python.png",
                          name: "Python"
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_SkillCard, { title: "Version Control" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-3" }, [
                        createVNode(_component_SkillImage, {
                          image: "/gitlab.png",
                          name: "GitLab"
                        }),
                        createVNode(_component_SkillImage, {
                          image: "/github.png",
                          name: "GitHub"
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_SkillCard, { title: "Databases" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-3" }, [
                        createVNode(_component_SkillImage, {
                          image: "/sql.png",
                          name: "SQL"
                        }),
                        createVNode(_component_SkillImage, {
                          image: "/mongo.png",
                          name: "MongoDB"
                        }),
                        createVNode(_component_SkillImage, {
                          image: "/maria.png",
                          name: "MariaDB"
                        }),
                        createVNode(_component_SkillImage, {
                          image: "/supabase.png",
                          name: "Supabase"
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_SkillCard, { title: "Cloud" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-3" })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_SkillCard, { title: "Third Parties" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-3" })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_SkillCard, { title: "Operating Systems" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-3" }, [
                        createVNode(_component_SkillImage, {
                          image: "/macos.png",
                          name: "MacOS"
                        }),
                        createVNode(_component_SkillImage, {
                          image: "/windows.webp",
                          name: "Windows"
                        }),
                        createVNode(_component_SkillImage, {
                          image: "/linux.png",
                          name: "Linux"
                        })
                      ])
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Section, {
        text: "Projects",
        textColor: "text-white",
        color: "bg-[#111]",
        class: "h-[700px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Deri An app that uses Java and lexical analysis to tokenize and parse characters, rendering the derivative of mathematical equations MyDay A self improvement app that offers several features such as daily life tracking, exercise tracking, calendar planning, and more `);
          } else {
            return [
              createTextVNode(" Deri An app that uses Java and lexical analysis to tokenize and parse characters, rendering the derivative of mathematical equations MyDay A self improvement app that offers several features such as daily life tracking, exercise tracking, calendar planning, and more ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-293f200a.mjs.map
