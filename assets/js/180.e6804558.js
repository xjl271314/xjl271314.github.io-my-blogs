(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{834:function(t,s,_){"use strict";_.r(s);var e=_(14),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"charles工具使用教程"}},[t._v("charles工具使用教程")]),t._v(" "),_("ul",[_("li",[t._v("2020.05.12")])]),t._v(" "),_("blockquote",[_("p",[t._v("Charles是一款http代理服务器和http监视器，当移动端在无线网连接中按要求设置好代理服务器，使所有对网络的请求都经过Charles客户端来转发时，Charles可以监控这个客户端各个程序所有连接互联网的Http通信。")])]),t._v(" "),_("h2",{attrs:{id:"安装charles客户端"}},[t._v("安装Charles客户端")]),t._v(" "),_("p",[t._v("打开浏览器访问"),_("a",{attrs:{href:"https://www.charlesproxy.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Charles官网"),_("OutboundLink")],1),t._v("，下载相应系统的Charles安装包，然后一键安装即可。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200512184541621.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"官网"}})]),t._v(" "),_("h2",{attrs:{id:"抓包显示"}},[t._v("抓包显示")]),t._v(" "),_("p",[t._v("Charles提供两种查看抓包信息的页签，一个是"),_("code",[t._v("Structure")]),t._v("，另一个是"),_("code",[t._v("Sequence")]),t._v("。")]),t._v(" "),_("p",[_("code",[t._v("Structure")]),t._v("用来将访问请求按访问的域名分类，"),_("code",[t._v("Sequence")]),t._v("用来将请求按访问的时间排序。任何程序都可以在"),_("code",[t._v("Charles")]),t._v("中的"),_("code",[t._v("Structure")]),t._v("窗口中看到访问的域名。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200512185623492.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"Structure"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200512185824825.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"Sequence"}})]),t._v(" "),_("h2",{attrs:{id:"抓取本机的发送请求"}},[t._v("抓取本机的发送请求")]),t._v(" "),_("p",[t._v("打开charles——> 选择proxy菜单项——> 选择macOs Proxy  即可抓取本机的请求")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200512190706796.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"抓取本机"}})]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),_("p",[t._v("mac下需要打开启动台——>其他——>钥匙串访问——>设置信任证书")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200512215436571.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"钥匙串信任证书"}})]),t._v(" "),_("h2",{attrs:{id:"抓取移动设备发送的请求"}},[t._v("抓取移动设备发送的请求")]),t._v(" "),_("p",[t._v("使用charles抓取移动设备的请求需要保证移动设备和本机处于同一个网络中。")]),t._v(" "),_("h3",{attrs:{id:"_1-打开设置-查看当前网络的ip-或者打开终端-输入ifconfig"}},[t._v("1. 打开设置———> 查看当前网络的ip(或者打开终端 输入ifconfig)")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200512191430855.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"ip地址"}})]),t._v(" "),_("h3",{attrs:{id:"_2-打开charles-选择proxy菜单项-选择proxy-settings菜单项-填写相关代理设置"}},[t._v("2. 打开charles——> 选择proxy菜单项——> 选择Proxy Settings菜单项——> 填写相关代理设置")]),t._v(" "),_("p",[t._v("我们不进行设置的话 默认的端口就是8888端口")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200512192127130.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"代理端口配置"}})]),t._v(" "),_("h3",{attrs:{id:"_3-手机端配置代理"}},[t._v("3. 手机端配置代理")]),t._v(" "),_("p",[t._v("这里默认使用的是iphone手机。")]),t._v(" "),_("p",[t._v("手机端打开对应的网络——> 选择代理手动——> 输入对应的ip地址和端口")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200512193934344.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"手机配置代理"}})]),t._v(" "),_("p",[t._v("移动设备配置之后，第一次通过手机访问手机中的发送请求时，"),_("code",[t._v("Charles")]),t._v("会弹出提示框，提示有设备尝试连接到"),_("code",[t._v("Charle")]),t._v("s，是否允许，如果不允许的话，手机发送请求失败，点击"),_("code",[t._v("Allow")]),t._v("允许，这样这个设备的IP地址就会添加到允许列表中。")]),t._v(" "),_("p",[t._v("如果错误点击了"),_("code",[t._v("Deny")]),t._v("可以重启"),_("code",[t._v("Charles")]),t._v("会再此提示，或者通过"),_("code",[t._v("Proxy->Access Control Settings")]),t._v("手动添加地址，如果不想每个设备连接"),_("code",[t._v("Charles")]),t._v("都要点击允许的话，可以添加"),_("code",[t._v("0.0.0.0/0")]),t._v("允许所有设备连接到"),_("code",[t._v("Charles")]),t._v("。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200512194941719.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"允许单个"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200512194802419.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"允许所有设备"}})]),t._v(" "),_("p",[t._v("经过上面的配置之后我们就可以抓取http请求的包")]),t._v(" "),_("h2",{attrs:{id:"配置支持https抓包请求"}},[t._v("配置支持https抓包请求")]),t._v(" "),_("p",[t._v("默认charles是不支持https抓包的,所以需要安装对应的https证书")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200512195329755.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"配置https"}})]),t._v(" "),_("p",[t._v("手机上需要输入"),_("code",[t._v("chls.pro/ssl")]),t._v("安装对应的证书")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200512201215545.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"手机设置"}})]),t._v(" "),_("p",[t._v("手机上打开设置——>通用——>描述文件与设备管理——>信任描述文件")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200512203904879.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"信任描述文件"}})]),t._v(" "),_("p",[_("strong",[t._v("之前经常做到这步 然后发现还是无法解析https请求，主要是遗漏了手机上证书的信任操作。")])]),t._v(" "),_("p",[t._v("手机上打开设置——>选择通用——>关于本机——>证书信任设置")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200512211411459.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"证书信任设置"}})]),t._v(" "),_("h2",{attrs:{id:"抓包请求过滤"}},[t._v("抓包请求过滤")]),t._v(" "),_("p",[t._v("有的时候我们并不想要查看所有请求的api信息或者其他的一些图片等资源的请求，只想关注某些特定域名下的请求。")]),t._v(" "),_("p",[t._v("打开charles——>选择Proxy->Recording Settings菜单")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200512213248469.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"过滤请求"}})]),t._v(" "),_("p",[t._v("或者在"),_("code",[t._v("Sequence")]),t._v("界面的"),_("code",[t._v("Filter")]),t._v("栏中填入需要过滤的关键字。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200512214124266.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"Filter"}})]),t._v(" "),_("h2",{attrs:{id:"代理转发"}},[t._v("代理转发")]),t._v(" "),_("p",[t._v("我们在进行本地开发功能的测试时，可以将手机请求的地址转发到本机地址的程序进行执行。右键选择"),_("code",[t._v("Map Remote")]),t._v("，配置请求转发的地址。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200512214528901.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"添加map记录"}})]),t._v(" "),_("p",[t._v("并选择"),_("code",[t._v("Tools->Map Remote Settings菜单")]),t._v("，勾选配置的转发条目。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200512214542105.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"配置map"}})]),t._v(" "),_("h2",{attrs:{id:"charles注册"}},[t._v("charles注册")]),t._v(" "),_("p",[t._v("注册码:")]),t._v(" "),_("p",[t._v("Registered Name: https://zhile.io")]),t._v(" "),_("p",[t._v("License Key: 48891cf209c6d32bf4")]),t._v(" "),_("p",[t._v("注册码:")]),t._v(" "),_("p",[t._v("Registered Name: DavidHoo")]),t._v(" "),_("p",[t._v("License Key: 1F32648C9DBCB8A838")])])}),[],!1,null,null,null);s.default=a.exports}}]);