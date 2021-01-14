(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{793:function(_,v,t){"use strict";t.r(v);var p=t(14),e=Object(p.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"前端性能优化对业务产生的影响"}},[_._v("前端性能优化对业务产生的影响")]),_._v(" "),t("ul",[t("li",[_._v("2020.11.27")])]),_._v(" "),t("p",[_._v("性能是一个老生常谈的话题,面试中、晋升中总是会问题相关的问题。")]),_._v(" "),t("p",[_._v("那么性能的目的是为了什么?性能的优化能给业务带来什么?为公司创造什么样的价值。")]),_._v(" "),t("p",[_._v("之前看到这么一个小故事:")]),_._v(" "),t("p",[_._v("从前有个工程师，特别注重代码细节，有一天他发现系统中的一段代码写的性能很差，因此，他用汇编重写了整段代码，执行效率足足提升了三倍。但是最后，大家发现，用户反馈性能丝毫没有提高，因为他优化的那个进程名字叫"),t("code",[_._v("System Idle")]),_._v("。")]),_._v(" "),t("blockquote",[t("p",[_._v("System Idle Process 是WIN2000/XP以及Vista/WIN7操作系统都有的一个进程，其作用都是一样的。就是在CPU空闲的时候，发出一个IDLE命令，使baiCPU挂起（暂时停止工作），可有效的降低CPU内核的温度，在操作系统服务里面，都没有禁止它的选项。"),t("br"),t("br"),_._v("它是占用除了当前应用程序所分配的处理器（CPU)百分比之外的所有占用率；一旦应用程序发出请求，处理器会立刻响应的。在这个进程里出现的CPU占用数值并不是真正的占用而是体现的CPU的空闲率。"),t("br"),t("br"),_._v("这个数值越大CPU的空闲率就越高，反之就是CPU的占用率越高。如果在刚刚开机的情况下就发现System Idle Process的CPU占用值很低的话应该就注意后台有什么大的程序在运行或者感染病毒了。数字越小则表示CPU资源紧张。该进程是系统必须的，不能禁止。")])]),_._v(" "),t("p",[_._v("像上述的这种性能优化其实就脱离了业务背景,带来的价值并不大。")]),_._v(" "),t("p",[_._v("所以凡是真正有价值的性能优化，必定是从端到端的业务场景建立体系来考虑的。")]),_._v(" "),t("p",[_._v("那么为了给业务带来价值,我们需要从哪几个方面去建立一个好的性能体系呢？大致有如下几点:")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("现状评估和建立指标；")])]),_._v(" "),t("li",[t("p",[_._v("技术方案；")])]),_._v(" "),t("li",[t("p",[_._v("执行；")])]),_._v(" "),t("li",[t("p",[_._v("结果评估和监控。")])])]),_._v(" "),t("h2",{attrs:{id:"现状评估和建立指标"}},[_._v("现状评估和建立指标")]),_._v(" "),t("p",[_._v("每个公司都有自己不同的业务,对应着也有不同场景下的基础建设,这个没有唯一的标准,评估现状的时候没有最好的解决方案,只有适合自己内部的解决方案。")]),_._v(" "),t("p",[_._v("但是再性能的方面无外乎都会涉及到这么几个点:")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("页面加载性能；")])]),_._v(" "),t("li",[t("p",[_._v("动画与操作性能；")])]),_._v(" "),t("li",[t("p",[_._v("内存、电量消耗。")])])]),_._v(" "),t("p",[_._v("“页面加载性能”跟用户的流失率有非常强的关联性,研究发现当用户的界面加载时间再1s之内,对用户来说是比较合理的体验,超过1s外就会产生一定的焦急感,这也就产生了对应的"),t("code",[_._v("秒开率")]),_._v("一词。")]),_._v(" "),t("h2",{attrs:{id:"技术方案"}},[_._v("技术方案")]),_._v(" "),t("p",[_._v("为了优化页面加载的性能问题,我们首先需要了解的是"),t("code",[_._v("从输入 URL 后按下回车，到底发生了什么")]),_._v("。这个问题经常也会出现在各种的面试场景,大致包括了一下这个几个方面,这里仅简单介绍,完整的可以查看我写的另外一篇文章"),t("a",{attrs:{href:"https://xjl271314.github.io/docs/http/#%E4%BB%8E%E7%94%A8%E6%88%B7%E8%BE%93%E5%85%A5URL%E5%88%B0%E6%B5%8F%E8%A7%88%E5%99%A8%E5%91%88%E7%8E%B0%E9%A1%B5%E9%9D%A2%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88?",target:"_blank",rel:"noopener noreferrer"}},[_._v("从用户输入url到浏览器呈现页面发生了什么？"),t("OutboundLink")],1),_._v("。")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("从域名到 IP 地址，需要用 DNS 协议查询；")])]),_._v(" "),t("li",[t("p",[_._v("HTTP 协议是用 TCP 传输的，所以会有 TCP 建立连接过程；")])]),_._v(" "),t("li",[t("p",[_._v("如果使用 HTTPS，还有有 HTTPS 交换证书；")])]),_._v(" "),t("li",[t("p",[_._v("每个网页还有图片等请求。")])])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201127150535880.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"页面秒开率优化"}})]),_._v(" "),t("p",[_._v("优化的效果不是一个人的事情,需要整个团队以及其他部分的通力合作。")]),_._v(" "),t("h2",{attrs:{id:"实施"}},[_._v("实施")]),_._v(" "),t("p",[_._v("实施的过程一部分涉及前端的开发工作,一部分也涉及到跟其他部分的沟通与合作。建议制定一个目标计划,每天跟进计划的进行状况,有变动的点及时同步各个部门。")]),_._v(" "),t("h2",{attrs:{id:"结果评估和监控"}},[_._v("结果评估和监控")]),_._v(" "),t("p",[_._v("优化的最终目的是产生收益,如何让老板们知道我们做了这么一件事情,并且这件事情给公司带来了价值,这就一定要涉及到结果的监控和总结。没有数据的说明,我们无法让人家信服这是一件能带来价值的事情。")]),_._v(" "),t("p",[_._v("要想拿到数据,不外乎以下两件事情:")]),_._v(" "),t("ol",[t("li",[_._v("数据采集；")])]),_._v(" "),t("p",[_._v("数据采集针对前端而言可以通过Performance看板采集页面相关的数据,上传到指定的服务器上。")]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[_._v("数据的展示。")])]),_._v(" "),t("p",[_._v("数据展示没有唯一的标准,但是有个注意点就是一定要突出优化前后的差异。可以用大屏的数据看板也可以做成移动端形式的看板,依据个人喜欢来完成即可。")])])}),[],!1,null,null,null);v.default=e.exports}}]);