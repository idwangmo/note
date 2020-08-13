(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{321:function(t,v,_){"use strict";_.r(v);var a=_(6),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"微服务架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构"}},[t._v("#")]),t._v(" 微服务架构")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("一组小的服务")])]),t._v(" "),_("li",[_("p",[t._v("独立的进程")])]),t._v(" "),_("li",[_("p",[t._v("轻量级通信")])]),t._v(" "),_("li",[_("p",[t._v("基于业务能力")])]),t._v(" "),_("li",[_("p",[t._v("独立部署：每个团队各自独立，各自进行部署")])]),t._v(" "),_("li",[_("p",[t._v("无集中式管理")])])]),t._v(" "),_("p",[t._v("本质上不能脱离 SOA")]),t._v(" "),_("h3",{attrs:{id:"微服务的利弊"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#微服务的利弊"}},[t._v("#")]),t._v(" 微服务的利弊")]),t._v(" "),_("h4",{attrs:{id:"利"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#利"}},[t._v("#")]),t._v(" 利")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("强模块化边界")])]),t._v(" "),_("li",[_("p",[t._v("可独立部署")])]),t._v(" "),_("li",[_("p",[t._v("技术多样性")])])]),t._v(" "),_("h4",{attrs:{id:"弊"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#弊"}},[t._v("#")]),t._v(" 弊")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("分布式系统负责性")])]),t._v(" "),_("li",[_("p",[t._v("最终那个一致性")])]),t._v(" "),_("li",[_("p",[t._v("运维负责性")])]),t._v(" "),_("li",[_("p",[t._v("测试复杂性")])])]),t._v(" "),_("h3",{attrs:{id:"康威法则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#康威法则"}},[t._v("#")]),t._v(" 康威法则")]),t._v(" "),_("p",[t._v("设计系统的组织，其产生的架构设计等价余组织间的沟通结构")]),t._v(" "),_("p",[t._v("单块优先，后期转换到微服务上，前期不能很好的划分服务之间的边界")]),t._v(" "),_("p",[_("img",{attrs:{src:"imgs/microservices/end-to-end-ownership.png",alt:"end-to-end-ownership"}})]),t._v(" "),_("p",[t._v("Build it, run it.")]),t._v(" "),_("p",[_("img",{attrs:{src:"imgs/microservices/middle-platform.png",alt:"中台战略"}})]),t._v(" "),_("h4",{attrs:{id:"服务发现模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务发现模式"}},[t._v("#")]),t._v(" 服务发现模式")]),t._v(" "),_("ul",[_("li",[t._v("独立"),_("code",[t._v("Load Balancer")])]),t._v(" "),_("li",[t._v("进程内"),_("code",[t._v("Load Balancer")])]),t._v(" "),_("li",[t._v("主机独立进程"),_("code",[t._v("Load Balancer")])])]),t._v(" "),_("h3",{attrs:{id:"网关"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网关"}},[t._v("#")]),t._v(" 网关")]),t._v(" "),_("h4",{attrs:{id:"功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[t._v("#")]),t._v(" 功能")]),t._v(" "),_("ul",[_("li",[t._v("反向路由")]),t._v(" "),_("li",[t._v("认证安全")]),t._v(" "),_("li",[t._v("限量熔断")]),t._v(" "),_("li",[t._v("日志监控")])]),t._v(" "),_("h4",{attrs:{id:"zuul-过滤器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#zuul-过滤器"}},[t._v("#")]),t._v(" Zuul 过滤器")]),t._v(" "),_("ul",[_("li",[t._v("Pre routing filters")]),t._v(" "),_("li",[t._v("Routing filters")]),t._v(" "),_("li",[t._v("Post routing filters")])]),t._v(" "),_("p",[_("img",{attrs:{src:"imgs/microservices/rpc-vs-rest.png",alt:"RPC VS REST"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"imgs/microservices/trace-choose.png",alt:"链路监控的选型"}})]),t._v(" "),_("h2",{attrs:{id:"oauth2-参考书目"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#oauth2-参考书目"}},[t._v("#")]),t._v(" OAuth2 参考书目")]),t._v(" "),_("ul",[_("li",[t._v("OAuth2 in Action")]),t._v(" "),_("li",[t._v("OAuth2 2.0 Cookbook")])]),t._v(" "),_("h3",{attrs:{id:"应用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),_("ol",[_("li",[t._v("开发系统间的授权")]),t._v(" "),_("li",[t._v("现代微服务的安全")]),t._v(" "),_("li",[t._v("企业内部应用认证授权")])]),t._v(" "),_("p",[t._v("OAuth2 不是一个认证协议，其不告诉任何用户信息。也没有定义授权处理机制，也没有定义 Token 格式和加密方法。")]),t._v(" "),_("p",[t._v("OAuth2 仅仅是一个授权框架，仅用于授权代理")]),t._v(" "),_("h3",{attrs:{id:"授权类型选择"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#授权类型选择"}},[t._v("#")]),t._v(" 授权类型选择")]),t._v(" "),_("p",[_("img",{attrs:{src:"imgs/microservices/oauth2-choose.png",alt:"OAuth2 授权类型选型"}})]),t._v(" "),_("h3",{attrs:{id:"访问令牌的类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#访问令牌的类型"}},[t._v("#")]),t._v(" 访问令牌的类型")]),t._v(" "),_("ol",[_("li",[t._v("By reference token （透明令牌）")]),t._v(" "),_("li",[t._v("By value token （自包含令牌）")])]),t._v(" "),_("p",[t._v("JWT 是自解释，自校验的")]),t._v(" "),_("h3",{attrs:{id:"openid"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#openid"}},[t._v("#")]),t._v(" OpenID")]),t._v(" "),_("p",[t._v("(Identity,Authentication)+OAuth2.0 = OpenID Connect")]),t._v(" "),_("h2",{attrs:{id:"配置中心"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置中心"}},[t._v("#")]),t._v(" 配置中心")]),t._v(" "),_("h3",{attrs:{id:"传统应用配置的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#传统应用配置的问题"}},[t._v("#")]),t._v(" 传统应用配置的问题")]),t._v(" "),_("ul",[_("li",[t._v("主要采用本地文件静态配置")]),t._v(" "),_("li",[t._v("配置散乱、格式不标准")]),t._v(" "),_("li",[t._v("易发生事故")]),t._v(" "),_("li",[t._v("配置修改麻烦，周期长")]),t._v(" "),_("li",[t._v("配置信息缺少安全审计和版本控制")])]),t._v(" "),_("h3",{attrs:{id:"现代配置核心需求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#现代配置核心需求"}},[t._v("#")]),t._v(" 现代配置核心需求")]),t._v(" "),_("ol",[_("li",[t._v("交付件和配置分离")]),t._v(" "),_("li",[t._v("抽象标准化")]),t._v(" "),_("li",[t._v("集中式")]),t._v(" "),_("li",[t._v("高可用")]),t._v(" "),_("li",[t._v("实时性")]),t._v(" "),_("li",[t._v("治理")])])])}),[],!1,null,null,null);v.default=r.exports}}]);