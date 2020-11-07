(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{702:function(_,v,t){"use strict";t.r(v);var o=t(14),e=Object(o.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"bff"}},[_._v("BFF")]),_._v(" "),t("ul",[t("li",[_._v("2020.03.16")])]),_._v(" "),t("blockquote",[t("p",[t("code",[_._v("BFF(Backend For Frontend（服务于前端的后端）)")]),_._v("，也就是服务器设计 API 时会考虑前端的使用，并在服务端直接进行业务逻辑的处理，又称为"),t("code",[_._v("用户体验适配器")]),_._v("。"),t("code",[_._v("BFF")]),_._v(" 只是一种逻辑分层，而非一种技术，虽然 "),t("code",[_._v("BFF")]),_._v(" 是一个新名词，但它的理念由来已久。")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200316203345143.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),_._v(" "),t("p",[_._v("在我们的前端页面时常存在，某个页面需要向 "),t("code",[_._v("backend A")]),_._v("、"),t("code",[_._v("backend B")]),_._v(" 以及 "),t("code",[_._v("backend C")]),_._v("...... 发送请求，不同服务的返回值用于渲染页面中不同的 "),t("code",[_._v("component")]),_._v("，即一个页面存在很多请求的场景。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200316203509417.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),_._v(" "),t("p",[_._v("此时，每次访问该页面都需要发送 3 个请求。同时为了保障 "),t("code",[_._v("Android")]),_._v("，"),t("code",[_._v("iOS")]),_._v("，以及 "),t("code",[_._v("Web")]),_._v(" 端的不同需求，需要为不同的平台写不同的 "),t("code",[_._v("API")]),_._v(" 接口，而每当值发生一些变化时，需要 "),t("code",[_._v("Android")]),_._v("，"),t("code",[_._v("iOS")]),_._v("，"),t("code",[_._v("Web")]),_._v(" 做出修改。")]),_._v(" "),t("p",[_._v("与此同时，当我们需要对一个字符串进行处理，如限定 "),t("code",[_._v("140")]),_._v(" 个字符的时候，我们需要在每一个客户端"),t("code",[_._v("（Android，iOS，Web）")]),_._v("分别实现一遍，这样的代价显然相当大。")]),_._v(" "),t("p",[t("strong",[_._v("于是，我们就需要 "),t("code",[_._v("BFF")]),_._v(" 作为中间件。在这个中间件上我们将做一些业务逻辑处理：")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200316203712676.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),_._v(" "),t("p",[_._v("例如，我们加入 "),t("code",[_._v("BFF")]),_._v(" 层，原本每次访问发送 3 请求页面，变成一个请求。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200316203745321.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),_._v(" "),t("h2",{attrs:{id:"使用-bff-的正确姿势"}},[_._v("使用 BFF 的正确姿势")]),_._v(" "),t("p",[t("strong",[_._v("- 多端应用")])]),_._v(" "),t("p",[_._v("我们在设计 API 时会考虑到不同设备的需求，也就是为不同的设备提供不同的 API，虽然它们可能是实现相同的功能，但因为不同设备的特殊性，它们对服务端的 API 访问也各有其特点，需要区别处理。")]),_._v(" "),t("p",[t("strong",[_._v("- 服务聚合")])]),_._v(" "),t("p",[_._v("随着微服务的兴起，原本在同一个进程内运行的业务流程被拆分到了不同的服务中。这在增加业务灵活性的同时，也让前端的调用变得更复杂。BFF 的出现为前端应用提供了一个对业务服务调用的聚合点，它屏蔽了复杂的服务调用链，让前端可以聚焦在所需要的数据上，而不用关注底层提供这些数据的服务。")]),_._v(" "),t("p",[t("strong",[_._v("- 非必要，莫新增")])]),_._v(" "),t("p",[_._v("我们在看到 BFF 带来的各种好处的同时，也要注意到它所带来的代码重复和工作量增加方面的问题。如果与已有 BFF 功能类似，且展现数据的要求也相近的话，一定要谨慎对待新增 BFF 的行为。因此，建议非必要，莫新增。")]),_._v(" "),t("h2",{attrs:{id:"实战中的玩法"}},[_._v("实战中的玩法")]),_._v(" "),t("p",[t("strong",[_._v("- 访问控制")]),_._v("\n例如，服务中的权限控制，将所有服务中的权限控制集中在 BFF 层，使下层服务更加纯粹和独立。")]),_._v(" "),t("p",[t("strong",[_._v("- 应用缓存")]),_._v("\n项目中时常存在一些需要缓存的临时数据，此时 BFF 作为业务的汇聚点，距离用户请求最近，遂将该缓存操作放在 BFF 层。")]),_._v(" "),t("p",[t("strong",[_._v("- 第三方入口")]),_._v("\n在业务中需要与第三交互时，将该交互放在 BFF 层，这样可以只暴露必要信息给第三方，从而便于控制第三方的访问。")])])}),[],!1,null,null,null);v.default=e.exports}}]);