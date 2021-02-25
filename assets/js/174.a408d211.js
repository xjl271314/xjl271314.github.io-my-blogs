(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{840:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"虚拟dom"}},[t._v("虚拟DOM")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("虚拟DOM")]),t._v("是"),a("code",[t._v("React")]),t._v("中实现的对真实DOM的一种抽象的"),a("code",[t._v("Javascript")]),t._v("对象。"),a("code",[t._v("虚拟DOM")]),t._v("中只保留着一些构建真实DOM的映射等,没有"),a("code",[t._v("真实的DOM")]),t._v("复杂，真实DOM上存在着几百个属性与方法。")])]),t._v(" "),a("h3",{attrs:{id:"为什么需要虚拟dom"}},[t._v("为什么需要虚拟DOM?")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("前端优化中一个常用的秘诀就是尽可能减少DOM操作。一个是因为DOM结构比较深/长,频繁的变更DOM会造成浏览器不断的重排或者重绘。采用虚拟DOM的话，在变更中采用异步的方式,patch中尽可能一次性的将差异更新到真实的DOM中，保证DOM更新的性能。")])]),t._v(" "),a("li",[a("p",[t._v("手动更新DOM的话无法保证性能，而且如果在多人合作的项目中，代码review不严格的话可能产生性能较低的代码。")])]),t._v(" "),a("li",[a("p",[t._v("采用虚拟DOM的话可以实现更好的跨平台，比如SSR(Node中并没有DOM)。")])])]),t._v(" "),a("h3",{attrs:{id:"虚拟dom的生成？"}},[t._v("虚拟DOM的生成？")]),t._v(" "),a("blockquote",[a("p",[t._v("思想是接收一些参数，返回一个DOM的抽象对象")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ele")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" element "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        _type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VNODE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ele\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" element\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);