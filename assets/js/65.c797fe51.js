(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{726:function(t,s,n){"use strict";n.r(s);var a=n(14),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"事件循环-event-loop"}},[t._v("事件循环(Event Loop)")]),t._v(" "),n("p",[t._v("我们都知道"),n("code",[t._v("javascript")]),t._v("是一门单线程语言,那么为什么需要是单线程的呢？")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("单线程与之用途有关，单线程能够保证一致性，如果有两个线程，一个线程点击了一个元素，另一个删除了一个元素，浏览器以哪一个为准？")]),t._v(" "),n("p",[t._v("单线程指的是单个脚本只能在一个线程上运行，而不是 JavaScript 引擎只有一个线程。")])]),t._v(" "),n("p",[t._v("我们先看一张经典的图")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200213143037885.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"Event Loop"}})]),t._v(" "),n("p",[n("code",[t._v("javascript")]),t._v("中为了协调事务的处理，交互等必须采用"),n("code",[t._v("Event Loop")]),t._v("机制。任务主要分为"),n("code",[t._v("同步任务")]),t._v("和"),n("code",[t._v("异步任务")]),t._v("。")]),t._v(" "),n("p",[t._v("异步任务分成了"),n("code",[t._v("宏任务")]),t._v("和"),n("code",[t._v("微任务")]),t._v("。")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("宏任务：包括整体代码"),n("code",[t._v("script")]),t._v("、"),n("code",[t._v("setTimeout")]),t._v("、"),n("code",[t._v("setInterval")]),t._v("、"),n("code",[t._v("UI 渲染")]),t._v("、"),n("code",[t._v("I/O")]),t._v("、"),n("code",[t._v("postMessage")]),t._v("、"),n("code",[t._v("MessageChannel")]),t._v("、"),n("code",[t._v("setImmediate(Node.js 环境)")])])]),t._v(" "),n("li",[n("p",[t._v("微任务："),n("code",[t._v("Promise.then(非new Promise)")]),t._v("、"),n("code",[t._v("process.nextTick(node环境)")]),t._v("、"),n("code",[t._v("MutaionObserver")])])])]),t._v(" "),n("blockquote",[n("p",[t._v("单次循环的事件的执行顺序，是先执行宏任务，然后执行微任务，这个是基础，任务可以有同步任务和异步任务，同步的进入主线程，异步的进入Event Table并注册函数，异步事件完成后，会将回调函数放入"),n("code",[t._v("Event Queue")]),t._v("中(宏任务和微任务是不同的"),n("code",[t._v("Event Queue")]),t._v(")，同步任务执行完成后，会从"),n("code",[t._v("Event Queue")]),t._v("中读取事件放入主线程执行，回调函数中可能还会包含不同的任务，因此会循环执行上述操作。")])]),t._v(" "),n("p",[n("strong",[t._v("Event Loop")])]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v("JavaScript")]),t._v("是单线程的，所有的"),n("code",[t._v("同步任务")]),t._v("都会在"),n("code",[t._v("主线程")]),t._v("中执行。")])]),t._v(" "),n("li",[n("p",[t._v("主线程之外，还有一个"),n("code",[t._v("任务队列")]),t._v("。每当一个异步任务有结果了，就往"),n("code",[t._v("任务队列")]),t._v("里塞一个事件。")])]),t._v(" "),n("li",[n("p",[t._v("当主线程中的任务，都执行完之后，系统会 “依次” 读取任务队列里的事件。与之相对应的异步任务进入主线程，开始执行。")])]),t._v(" "),n("li",[n("p",[t._v("异步任务之间，会存在差异，所以它们执行的优先级也会有区别。大致分为 微任务 和 宏任务。"),n("font",{attrs:{color:"#f44"}},[t._v("同一次事件循环中，微任务永远在宏任务之前执行。")])],1)]),t._v(" "),n("li",[n("p",[t._v("主线程会不断重复上面的步骤，直到执行完所有任务。")])])]),t._v(" "),n("p",[n("strong",[t._v("Event Loop常见面试题")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("async1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async1 start'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("async2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async1 end'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("async2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script start'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setTimeout'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("async1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script end'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 1. script start // 同步任务\n * 2. async1 start // async1函数中的同步任务\n * 3. async2       // async1函数中遇到await先立即执行\n * 4. promise1     // 遇到promise 执行同步任务\n * 5. script end   // 执行外层同步任务\n * 6. async1 end   // 执行微任务中先注册的\n * 7. promise2     // 执行promise中的then 优先级大于setTimeout\n * 8. setTimeout   // 执行setTimeout函数\n * /\n\n")])])])]),n("p",[n("strong",[t._v("引申")])]),t._v(" "),n("p",[t._v("Q: 如果我写了一个"),n("code",[t._v("setTimeout(()=>console.log(1111), 500);")]),t._v("这段代码会在500毫秒后执行吗?")]),t._v(" "),n("p",[t._v("A: 不一定会执行，这段代码只是告诉浏览器我往异步任务队列塞了一个延迟500毫秒后执行的任务，如果当前异步任务队列是空闲的，在得到执行权后会延时500毫秒执行。否则的话必须等到获得执行权。")])])}),[],!1,null,null,null);s.default=e.exports}}]);