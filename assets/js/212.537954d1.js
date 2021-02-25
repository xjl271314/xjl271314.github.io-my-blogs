(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{879:function(t,e,l){"use strict";l.r(e);var a=l(14),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"微信小程序组件注意事项"}},[t._v("微信小程序组件注意事项")]),t._v(" "),l("h2",{attrs:{id:"icon图标"}},[t._v("icon图标")]),t._v(" "),l("p",[t._v("基础库 "),l("code",[t._v("1.0.0")]),t._v(" 开始支持，低版本需做兼容处理。")]),t._v(" "),l("div",{staticClass:"custom-block warning"},[l("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),l("p",[t._v("组件属性的长度单位默认为"),l("code",[t._v("px")]),t._v("，2.4.0起支持传入单位"),l("code",[t._v("(rpx/px)")]),t._v("。")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("参数类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("参数描述")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("是否必传")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("最低版本")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("type")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("String")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("有效值"),l("code",[t._v("success")]),t._v("、"),l("code",[t._v("success_no_circle")]),t._v("、"),l("code",[t._v("info")]),t._v("、"),l("code",[t._v("warn")]),t._v("、"),l("code",[t._v("waiting")]),t._v("、"),l("code",[t._v("cancel")]),t._v("、"),l("code",[t._v("download")]),t._v("、"),l("code",[t._v("search")]),t._v("、"),l("code",[t._v("clear")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.0.0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("size")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("String")]),t._v("、"),l("code",[t._v("Number")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("icon的尺寸大小")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.0.0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("color")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("String")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("icon的颜色,同CssColor")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.0.0")])])])]),t._v(" "),l("h3",{attrs:{id:"tabbar中的icon尺寸规则"}},[t._v("tabBar中的icon尺寸规则")]),t._v(" "),l("p",[t._v("标准规范上tabBar中使用的icon图标需要满足以下条件:")]),t._v(" "),l("ol",[l("li",[t._v("尺寸大小为81*81,不支持自定义大小(可以通过外部填充透明色的图片来变相更改图片的大小)。")]),t._v(" "),l("li",[t._v("需要使用png格式的图片。")]),t._v(" "),l("li",[t._v("尺寸大小不要超过40KB。")])]),t._v(" "),l("h3",{attrs:{id:"color改变的是什么颜色"}},[t._v("color改变的是什么颜色?")]),t._v(" "),l("p",[t._v("color改变的是整个icon的颜色,中间的是镂空的。")]),t._v(" "),l("h3",{attrs:{id:"有时候真机上icon显示空白是什么原因"}},[t._v("有时候真机上icon显示空白是什么原因?")]),t._v(" "),l("ol",[l("li",[t._v("如果是自定义实现的图标,注意检查下字体格式等问题,是不是由于兼容性问题导致,小程序中推荐使用 "),l("code",[t._v("TTF")]),t._v(" 和 "),l("code",[t._v("WOFF")]),t._v(" 格式的字体。")])]),t._v(" "),l("h2",{attrs:{id:"progress进度条"}},[t._v("progress进度条")]),t._v(" "),l("h3",{attrs:{id:"如何让进度条再播放完的时候再次播放一次动画"}},[t._v("如何让进度条再播放完的时候再次播放一次动画?")]),t._v(" "),l("div",{staticClass:"language-js extra-class"},[l("pre",{pre:!0,attrs:{class:"language-js"}},[l("code",[l("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当动画执行完成 进度加载完")]),t._v("\n"),l("span",{pre:!0,attrs:{class:"token function"}},[t._v("onAnimationEnd")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),l("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),l("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" percent"),l("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),l("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),l("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),l("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" percent"),l("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),l("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),l("p",[t._v("由于小程序通信本身是执行底层的"),l("code",[t._v("evaluateJavascript")]),t._v("脚本,本身就是要消耗时间的,所以两次的"),l("code",[t._v("setData")]),t._v("是最简单有效的解决方案。")]),t._v(" "),l("h3",{attrs:{id:"如何设计实现一个环形进度条"}},[t._v("如何设计实现一个环形进度条?")]),t._v(" "),l("p",[t._v("可参考使用svg绘制的形式来实现。")]),t._v(" "),l("h2",{attrs:{id:"rich-text"}},[t._v("rich-text")]),t._v(" "),l("h2",{attrs:{id:"movable-area-和-movable-view"}},[t._v("movable-area 和 movable-view")]),t._v(" "),l("ul",[l("li",[t._v("2020.11.02")])]),t._v(" "),l("p",[t._v("基础库 1.2.0 开始支持，低版本需做兼容处理。")]),t._v(" "),l("p",[t._v("这两个标签需要配合使用,其中"),l("code",[t._v("movable-area")]),t._v("是"),l("code",[t._v("movable-view")]),t._v("的可移动区域。"),l("code",[t._v("movable-view")]),t._v("是可移动的视图容器，在页面中可以拖拽滑动。"),l("code",[t._v("movable-view")]),t._v("必须在 "),l("code",[t._v("movable-area")]),t._v(" 组件中，并且必须是直接子节点，否则不能移动。")]),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),l("ol",[l("li",[l("p",[l("code",[t._v("movable-area")]),t._v(" 必须设置"),l("code",[t._v("width")]),t._v("和"),l("code",[t._v("height")]),t._v("属性，不设置默认为"),l("code",[t._v("10px")]),t._v("。")])]),t._v(" "),l("li",[l("p",[t._v("当"),l("code",[t._v("movable-view")]),t._v("小于"),l("code",[t._v("movable-area")]),t._v("时，"),l("code",[t._v("movable-view")]),t._v("的移动范围是在"),l("code",[t._v("movable-area")]),t._v("内。")])]),t._v(" "),l("li",[l("p",[t._v("当"),l("code",[t._v("movable-view")]),t._v("大于"),l("code",[t._v("movable-area")]),t._v("时，"),l("code",[t._v("movable-view")]),t._v("的移动范围必须包含"),l("code",[t._v("movable-area")]),t._v("（x轴方向和y轴方向分开考虑）。")])])])]),t._v(" "),l("p",[l("strong",[t._v("movable-area")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("参数类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("参数描述")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("是否必传")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("最低版本")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("scale-area")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("当里面的"),l("code",[t._v("movable-view")]),t._v("设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个"),l("code",[t._v("movable-area")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.9.90")])])])]),t._v(" "),l("p",[l("strong",[t._v("movable-view")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("参数类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("参数描述")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("是否必传")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("最低版本")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("direction")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("movable-view")]),t._v("的移动方向，属性值有"),l("code",[t._v("all")]),t._v("、"),l("code",[t._v("vertical")]),t._v("、"),l("code",[t._v("horizontal")]),t._v("、"),l("code",[t._v("none")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("none")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.2.0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("inertia")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("movable-view")]),t._v("是否带有惯性")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.2.0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("out-of-bounds")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("超过可移动区域后，movable-view是否还可以移动")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.2.0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("x")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.2.0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("y")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.2.0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("damping")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("20")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.2.0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("friction")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.2.0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("disabled")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.9.90")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("scale")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否支持双指缩放，默认缩放手势生效区域是在"),l("code",[t._v("movable-view")]),t._v("内")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.9.90")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("scale-min")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("定义缩放倍数最小值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.5")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.9.90")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("scale-max")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("定义缩放倍数最大值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.9.90")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("scale-value")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("定义缩放倍数，取值范围为 0.5 - 10")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.9.90")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("animation")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否使用动画")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("2.1.0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("bindchange")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("eventhandle")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("拖动过程中触发的事件，"),l("code",[t._v("event.detail = {x, y, source}")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.9.90")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("bindscale")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("eventhandle")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("缩放过程中触发的事件，"),l("code",[t._v("event.detail = {x, y, scale}")]),t._v("，x和y字段在2.1.0之后支持")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.9.90")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("htouchmove")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("eventhandle")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("初次手指触摸后移动为横向的移动时触发，如果"),l("code",[t._v("catch")]),t._v("此事件，则意味着"),l("code",[t._v("touchmove")]),t._v("事件也被"),l("code",[t._v("catch")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.9.90")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("vtouchmove")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("eventhandle")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("初次手指触摸后移动为纵向的移动时触发，如果"),l("code",[t._v("catch")]),t._v("此事件，则意味着"),l("code",[t._v("touchmove")]),t._v("事件也被"),l("code",[t._v("catch")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.9.90")])])])]),t._v(" "),l("p",[t._v("** bindchange 返回的 source 表示产生移动的原因 **")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("参数描述")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("touch")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("拖动")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("touch-out-of-bounds")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("超出移动范围")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("out-of-bounds")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("超出移动范围后的回弹")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("friction")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("惯性")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("空字符串")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("setData")])])])]),t._v(" "),l("h3",{attrs:{id:"基于movable-view实现可滑动删除的组件"}},[t._v("基于movable-view实现可滑动删除的组件")]),t._v(" "),l("div",{staticClass:"language-wxml extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("\n\n")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);