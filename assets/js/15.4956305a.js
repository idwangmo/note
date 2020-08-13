(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{216:function(t,e,v){t.exports=v.p+"assets/img/cloud_computing_stack.d1836b4d.png"},217:function(t,e,v){t.exports=v.p+"assets/img/codebase.e845e908.png"},309:function(t,e,v){"use strict";v.r(e);var a=v(6),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"第一章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一章"}},[t._v("#")]),t._v(" 第一章")]),t._v(" "),a("p",[a("img",{attrs:{src:v(216),alt:"Cloud computing stack"}})]),t._v(" "),a("p",[t._v("源码仓库要能存下一整个程序的信息和他的相关依赖，并且不需要在各个环境中重新编译\n或打包代码")]),t._v(" "),a("p",[a("img",{attrs:{src:v(217),alt:"Codebase"}})]),t._v(" "),a("ol",[a("li",[t._v("一个代码库在一个版本控制库中，能在多个环境中部署")]),t._v(" "),a("li",[t._v("明确的声明和隔离依赖")]),t._v(" "),a("li",[t._v("将配置文件放入到环境中：应用成员应该严格的根据配置划分")]),t._v(" "),a("li",[t._v("将支持的服务视为附加资源")]),t._v(" "),a("li",[t._v("严格的分卡构建阶段和运行阶段")]),t._v(" "),a("li",[t._v("将应用程序视为一个或多个无状态进程")]),t._v(" "),a("li",[t._v("通过特定的端口暴露服务")]),t._v(" "),a("li",[t._v("通过流程模型横线扩展")]),t._v(" "),a("li",[t._v("通过快速启动和正常的")]),t._v(" "),a("li",[t._v("尽可能的保证开发，预发和生成的一致")]),t._v(" "),a("li",[t._v("将日志视为一个事件流")]),t._v(" "),a("li",[t._v("将管理 / 管理任务作为一次性流程运行")])]),t._v(" "),a("h2",{attrs:{id:"第二章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二章"}},[t._v("#")]),t._v(" 第二章")]),t._v(" "),a("p",[a("code",[t._v("Spring")]),t._v("框架的"),a("code",[t._v("Assert")]),t._v("类支持契约式设计而不仅仅用于单元测试。")]),t._v(" "),a("p",[t._v("可以在一个类中创建所有的对象，并建立他们之间的联系，这个原理被称为反转控制（IOC)。")]),t._v(" "),a("p",[t._v("可以创建只依赖基础类型和接口的组建代码，而不依赖于特定的实现，这被称为依赖注入（DI）。")]),t._v(" "),a("p",[t._v("切点描述了应用内部的匹配方式")]),t._v(" "),a("p",[t._v("在含有"),a("code",[t._v("@Configuration")]),t._v("的应用程序配置类中加入"),a("code",[t._v("@EnableAspectJAutoProxy")]),t._v("，然后我们只需要将横切面转换成一个类，并在其上加入"),a("code",[t._v("@Aspect")]),t._v("注解")]),t._v(" "),a("p",[t._v("将"),a("code",[t._v("@EnableTransactionManagement")]),t._v("添加到配置类中，然后使用"),a("code",[t._v("@Transactional")]),t._v("注解划定业务服务的事务边界。")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("Spring boot")]),t._v("中，提供默认和高可用的配置是最高优先级，约定优于配置")]),t._v(" "),a("p",[t._v("Spring boot 实现了开闭原则：对扩展开放，但是对修改关闭")]),t._v(" "),a("p",[t._v("当需要对 Spring boot 进行调试时候，可以再 Spring boot 应用启动时候加入"),a("code",[t._v("--Debug=true")]),t._v("，这会打印出当前的所有配置项")]),t._v(" "),a("h2",{attrs:{id:"第三章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三章"}},[t._v("#")]),t._v(" 第三章")]),t._v(" "),a("h3",{attrs:{id:"spring-框架对配置的支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-框架对配置的支持"}},[t._v("#")]),t._v(" Spring 框架对配置的支持")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://12factor.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("十二要素程序宣言"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("code",[t._v("Enviornment")]),t._v("接口提供了运行中应用程序及其运行时环境之间的隔离，并允许应用程序提出关于环境的问题。")]),t._v(" "),a("p",[a("code",[t._v("@PropertySource")]),t._v("将可以是 Spring 从文件中加载配置文件，特别是以类似于以前版本的 Spring 属性占位符解析的方式")]),t._v(" "),a("p",[a("code",[t._v("Profile")]),t._v("可以用来描述从一个环境变化到另一个环境的 bean 和 bean 图")]),t._v(" "),a("p",[a("code",[t._v("@Value")]),t._v("注解提供了一种将环境变量注入到构造器，setter 及属性中的方法")]),t._v(" "),a("p",[t._v("命令行参数会覆盖由"),a("code",[t._v("JNDI")]),t._v("提供的属性值，而"),a("code",[t._v("JNDI")]),t._v("的属性值又会覆盖由"),a("code",[t._v("System.getProperties()")]),t._v("提供的属性值")]),t._v(" "),a("p",[t._v("Spring boot 也会自动的加载"),a("code",[t._v(".yml")]),t._v("配置文件")]),t._v(" "),a("p",[t._v("Spring 允许映射所有的配置到 POJO 类似的配置当中")]),t._v(" "),a("p",[a("code",[t._v("@EnableConfigurationProperties")]),t._v("注解将让 Spring 映射配置到有"),a("code",[t._v("@ConfigurationProperties")]),t._v("注解的 POJO 上")]),t._v(" "),a("h3",{attrs:{id:"spring-cloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud"}},[t._v("#")]),t._v(" Spring Cloud")]),t._v(" "),a("p",[t._v("在 Spring Cloud 系统中运行时，Spring boot 应用程序需要一个唯一的名字，这个名字最好容易记住")]),t._v(" "),a("p",[t._v("在有配置的注解的类上加入"),a("code",[t._v("@RefreshScope")]),t._v("注解，可以让 Spring boot 应用程序自动更新配置，自己重新构建"),a("code",[t._v("Bean")]),t._v("，在这种情况下，只要触发了"),a("code",[t._v("refresh")]),t._v("事件，就会重建其所注解的类，初始化其生命周期，并重新建立"),a("code",[t._v("@Value")]),t._v("和"),a("code",[t._v("@Autowried")]),t._v("注入。")]),t._v(" "),a("p",[a("code",[t._v("Spring")]),t._v("会重新创建所有标记了"),a("code",[t._v("@RefreshScope")]),t._v("注解的"),a("code",[t._v("bean")]),t._v("，而且是直接丢弃整个"),a("code",[t._v("bean")]),t._v("并创建一个新的"),a("code",[t._v("bean")])]),t._v(" "),a("p",[t._v("所有刷新范围的 Bean 都将在收到 Spring 应用程序上下文的"),a("code",[t._v("RefreshScopeRefreshedEvent")]),t._v("类型的时间后进行更新")]),t._v(" "),a("p",[a("code",[t._v("Spring Cloud Bus")]),t._v("支持刷新多个应用程序上下文实例")]),t._v(" "),a("p",[a("code",[t._v("Spring Cloud Stream")]),t._v("支持不同的消息技术")]),t._v(" "),a("p",[t._v("对于其他用于常规性、非总线相关处理的实例，可以使用"),a("code",[t._v("Sring")]),t._v("限定符注解"),a("code",[t._v("@Primary")]),t._v("来进行注解")]),t._v(" "),a("h2",{attrs:{id:"第四章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第四章"}},[t._v("#")]),t._v(" 第四章")]),t._v(" "),a("p",[t._v("集成测试的实践侧重于针对一组相互依赖的软件模块编写和执行测试用例。云原生应用应该专注于如何设计集成测试，使它能够在与其他应用软件无关的临时环境中执行")]),t._v(" "),a("p",[t._v("无论采用何种方式，一定确保得向生产环境部署二进制包之前，能够自动的运行所有测试用例。")]),t._v(" "),a("p",[t._v("十二要素程序中的一个重要原则是，应该尽量减少开发环境和生产环境之间的差异")]),t._v(" "),a("p",[a("code",[t._v("Mock")]),t._v("对象允许我们隔离测试系统的一部分，通过一种受控的方式，用具有类似测试行为对象来代替实际的对象")]),t._v(" "),a("p",[t._v("端到端测试侧重于从用户角度测试功能")]),t._v(" "),a("p",[a("code",[t._v("Spring")]),t._v("中集成测试是指在测试执行期间需要访问"),a("code",[t._v("Spring")]),t._v("应用程序的上下文，而单元测试 不需要访问"),a("code",[t._v("Spring")]),t._v("应用程序上下文")]),t._v(" "),a("p",[a("code",[t._v("@RunWith")]),t._v("注解告诉"),a("code",[t._v("JUnit")]),t._v("使用那个测试运行器策略")]),t._v(" "),a("p",[a("code",[t._v("@SpringBootTest")]),t._v("注解将指明此类是一个 Spring Boot 的测试类，并且提供了扫描"),a("code",[t._v("ContextConfiguration")]),t._v("的支持，并且告诉如何加载 ContextConfiguration。当没有自定义的配置类被扫描到的时候，将会加载在 Spring 框架包中的配置文件。")]),t._v(" "),a("p",[t._v("在集成测试执行的过程中任何测试都需要访问 Spring context，而单元测试的不需要 Spring context。")]),t._v(" "),a("p",[t._v("在 Spring boot 程序中，我们需要部署"),a("code",[t._v(".jar")]),t._v("文件，所以"),a("code",[t._v("@SpringBooTest")]),t._v("支持"),a("code",[t._v("webEnvironment")]),t._v("\n属性去描述 Spring boot 在程序运行的时候应该怎么配置嵌入式的容器")]),t._v(" "),a("p",[a("code",[t._v("@JsonTest")]),t._v("注解运行仅仅是测试 JSON 的序列化和反序列化。")]),t._v(" "),a("p",[a("code",[t._v("@DataJpaTest")]),t._v("提供了在使用 Sring data JPA 的项目中进行测试方法。"),a("code",[t._v("TestEntityManager")]),t._v("\n提供了无需数据库就能与底层数据存储进行交互的方式。")]),t._v(" "),a("p",[a("code",[t._v("@RestClientTest")]),t._v("注解可以将一个 service 注解一个实例以及将一个 RestTemplate\n注册为自动测试配置的一部分")]),t._v(" "),a("p",[t._v("契约测试始终隐藏生产者 API 的实现")]),t._v(" "),a("h2",{attrs:{id:"第五章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第五章"}},[t._v("#")]),t._v(" 第五章")]),t._v(" "),a("p",[t._v("Spring session 是 Servert HTTP Session API 的用 SPI 处理同步的插入式替换。")]),t._v(" "),a("p",[t._v("Servlet API 要求对象必须重新实现 Java 的序列化以此来重写 HTTP Session。")]),t._v(" "),a("h2",{attrs:{id:"第六章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第六章"}},[t._v("#")]),t._v(" 第六章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://martinfowler.com/articles/richardsonMaturityModel.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("REST 成熟度模型"),a("OutboundLink")],1),t._v("：")]),t._v(" "),a("ol",{attrs:{start:"0"}},[a("li",[t._v("The swamp of Pox")]),t._v(" "),a("li",[t._v("Resource")]),t._v(" "),a("li",[t._v("HTTP verbs")]),t._v(" "),a("li",[t._v("Hypermedia controls")])]),t._v(" "),a("p",[t._v("基本上，使用例如 Spring MVC 或者 Flask 之类的框架的时候，已经处于第二个级别了，即便是错误的使用了这几个框架，那么最终的"),a("code",[t._v("API")]),t._v("仍然可能是符合二级的。")]),t._v(" "),a("p",[t._v("内容协商是 HTTP 最强大的功能之一：同一个服务可以同时支持多个使用不同协议的客户端")]),t._v(" "),a("p",[t._v("文件上传可能会阻塞和独占"),a("code",[t._v("Servlet")]),t._v("容器的线程池。"),a("code",[t._v("Spring MVC")]),t._v("后台的"),a("code",[t._v("Callable<T>")]),t._v("处理器方法会将返回值返回给配置好的"),a("code",[t._v("Executor")]),t._v("线程池，并释放容器线程，直到响应准备就绪。")]),t._v(" "),a("p",[t._v("servlet 容器维护着一个 HTTP 请求的线程池")]),t._v(" "),a("p",[a("code",[t._v("CustomerRestController")]),t._v("中处理器方法可以对现有的记录进行操作，如果没有找到改记录，则抛出异常。")]),t._v(" "),a("p",[a("code",[t._v("Spring MVC")]),t._v("支持在处理器方法上使用"),a("code",[t._v("@ExceptionHandler")]),t._v("注解，来监听和响应"),a("code",[t._v("Spring MVC")]),t._v("控制器中的错误条件。")]),t._v(" "),a("p",[t._v("错误是一个有效"),a("code",[t._v("API")]),t._v("的重要组成部分，错误应该唯一、简洁地向自动化客户端指出错误情况，并为最终解决问题的人提供支持，至少要让他们了解错误的含义。")]),t._v(" "),a("p",[t._v("超媒体指的是，日常资源的链接通过向客户端提供信息，最终导致应用状态的变化。")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("Spring HATEOAS")]),t._v("中，"),a("code",[t._v("Resource")]),t._v("是一个包含数据和一组相关链接的封装对象。")]),t._v(" "),a("p",[a("code",[t._v("API")]),t._v("版本的一种方法是使用语义版本控制，语义版本是"),a("code",[t._v("MAJOR")]),t._v("，"),a("code",[t._v("MINOR.PATHC")]),t._v("是其中的一种形式，"),a("code",[t._v("MAJOR")]),t._v("版本好只有在"),a("code",[t._v("API")]),t._v("不兼容以前的版本时才会更改，"),a("code",[t._v("MINOR")]),t._v("版本号应该在"),a("code",[t._v("API")]),t._v("发生改版单现有客户端还能够继续使用的情况下更改，"),a("code",[t._v("PATCH")]),t._v("版本好的更改表示对现有功能的修复。")]),t._v(" "),a("p",[a("code",[t._v("Spring Data REST")]),t._v("会根据指定的"),a("code",[t._v("Spring Data repository")]),t._v("自动创建一个具有"),a("code",[t._v("HAL")]),t._v("风格的超媒体链接")]),t._v(" "),a("h2",{attrs:{id:"第七章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第七章"}},[t._v("#")]),t._v(" 第七章")]),t._v(" "),a("p",[a("code",[t._v("CAP")]),t._v("原理指出，分布式系统不可能同时提供以下三个属性：一致性、可用性和分区容忍性。")]),t._v(" "),a("h2",{attrs:{id:"第八章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第八章"}},[t._v("#")]),t._v(" 第八章")]),t._v(" "),a("p",[a("code",[t._v("Zuul")]),t._v("过滤器默认有四种类型：")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("pre")]),t._v("过滤器在请求路由之前执行")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("routing")]),t._v("过滤器可以处理请求的实际路由")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("post")]),t._v("过滤器在请求路由之后执行")])]),t._v(" "),a("li",[a("p",[t._v("如果在处理请求的过程中发生错误，则会执行"),a("code",[t._v("error")]),t._v("过滤器")])])]),t._v(" "),a("p",[t._v("限速器的两种算法：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("令牌桶算法")])]),t._v(" "),a("li",[a("p",[t._v("漏桶算法")])])]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("Web")]),t._v("层中，"),a("code",[t._v("Spring Security")]),t._v("会以一个单独的"),a("code",[t._v("javax.servlet.Filter")]),t._v("存在(从"),a("code",[t._v("Web")]),t._v("容器角度来看)，然后委托给"),a("code",[t._v("Filter")]),t._v("实例的其他虚拟链")]),t._v(" "),a("p",[a("code",[t._v("UserDetailsService")]),t._v("实现的约定：给定一个字符串"),a("code",[t._v("username")]),t._v("，返回一个"),a("code",[t._v("UserDetails")]),t._v("实现，或者抛出一个"),a("code",[t._v("UsernameNotFoundException")]),t._v("异常，在任何情况下，它都不应该返回"),a("code",[t._v("null")])]),t._v(" "),a("p",[t._v("如果我们添加一个"),a("code",[t._v("@EnableResourceServer")]),t._v("注解，将授权服务器配置为一个资源服务器，那么对于那些处理带访问令牌的"),a("code",[t._v("Spring MVC")]),t._v("处理器来说，"),a("code",[t._v("Spring Security OAuth")]),t._v("会自动为它们提供一个"),a("code",[t._v("java.security.Principal")]),t._v("对象，并且还会将其转换为资源服务器可以使用的"),a("code",[t._v("JSON")]),t._v("格式")]),t._v(" "),a("h2",{attrs:{id:"第九章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第九章"}},[t._v("#")]),t._v(" 第九章")]),t._v(" "),a("p",[t._v("良好的数据模型可以有效地传达软件中的业务需求")]),t._v(" "),a("p",[t._v("领域驱动设计目的在解决问题是软件设计中的复杂性")]),t._v(" "),a("p",[t._v("大多数数据仓储仅专注于提供最佳数据存储，而对可用性关注不足")]),t._v(" "),a("p",[t._v("域类(domain class)是一个基本的类，其作为域数据模型，由一组专用字段组成，并根据域模型的设计，使用"),a("code",[t._v("public getter")]),t._v("和"),a("code",[t._v("setter")]),t._v("公开其内容")]),t._v(" "),a("p",[t._v("通过使用"),a("code",[t._v("Repository")]),t._v("模式，数据消费着只需要关心违反约束条件的一类异常")]),t._v(" "),a("p",[a("img",{attrs:{src:"imgs%5Ccloud_native_java%5Cspring-data-commons.jpg",alt:"Spring Data Commons"}})]),t._v(" "),a("p",[t._v("有界的上下文是将业务领域的一部分模块化为单独的统一模型的一种方式，每个有界的上下文可以有一组无关的概念，同时明确共享概念之间的联系")]),t._v(" "),a("p",[t._v("通过在实体类上加上"),a("code",[t._v("@EntityListensers(AuditingEntityListener.class)")]),t._v("以及在配置类上加入"),a("code",[t._v("@EnableJpaAuduiting")]),t._v("来开启审计")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("MongoDB")]),t._v("进行审计的时候需要配置"),a("code",[t._v("AbstractMongoEventListenser")]),t._v("，并且需要一个基本的实体类，其他实体通过继承用于审计，下面是一个实例代码：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 实体类.\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Data")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseEntity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalDateTime")]),t._v(" lastModified"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalDateTime")]),t._v(" createdAt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 配置类.\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Componet")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MongoListenserConfig")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstarctMongoEventListenser")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseEntity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onBeforeSave")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeforeSaveEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseEntity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Objects")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCreatedAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCreateAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalDateTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLastModified")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalDateTim")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onBeforeSave")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br")])]),a("p",[t._v("图数据库将数据库对象表示为节点和关系的连接图")]),t._v(" "),a("p",[t._v("使用的分布式数据存储的好处是，多进程、应用程序和服务器能够使用相同的密钥对值进行并发操作。通常，要从多个应用程序执行此操作，需要在操作其值之前将某种形式的反序列化转换为语言支持的数据结构。")]),t._v(" "),a("p",[a("code",[t._v("Spring Data Redis")]),t._v("实现了"),a("code",[t._v("Spring")]),t._v("框架的"),a("code",[t._v("CacheManager")]),t._v("的抽象")]),t._v(" "),a("p",[t._v("确保仔细检查微服务架构中为资源配置的"),a("code",[t._v("TTL")]),t._v("到期时间")]),t._v(" "),a("h2",{attrs:{id:"第十章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第十章"}},[t._v("#")]),t._v(" 第十章")]),t._v(" "),a("p",[t._v("事件驱动的含义：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("事件通知：通过发送事件消息来通知其他系统其系统域的变化。消息的接收者不产生答复。源系统不期望应答，也不需要应答。事件通知是不可变的，这意味着事件消息的内容不应包含事件生成后修改的数据。")])]),t._v(" "),a("li",[a("p",[t._v("携事件的状态转移：消息中不包含任何需要求接收方回调系统的数据。各式各样的事件消息中包括接收着处理事情所需的一切内容。")])]),t._v(" "),a("li",[a("p",[t._v("事件溯源：事件溯源是对存储系统能够导致系统状态随事件变化的领域事件日志的实践。在这种情况下，可以从任何事件点重新播放事件以重建系统状态。")])])]),t._v(" "),a("p",[a("code",[t._v("Spring Integration")]),t._v("的核心是"),a("code",[t._v("Spring")]),t._v("框架中的"),a("code",[t._v("MessageChannel")]),t._v("和"),a("code",[t._v("Message<T>")]),t._v("类型。"),a("code",[t._v("Message<T>")]),t._v("对象有一个"),a("code",[t._v("playload")]),t._v("和一组"),a("code",[t._v("header")]),t._v("，用来提供有关消息有效载荷的元数据。"),a("code",[t._v("Message<T>")]),t._v("对象流过"),a("code",[t._v("MessageChannel")]),t._v("实例")]),t._v(" "),a("p",[t._v("通过消息传递端点连接"),a("code",[t._v("MessageChannel")]),t._v("对象，不同"),a("code",[t._v("Java")]),t._v("对象处理不同类型消息。"),a("code",[t._v("Spring Integration")]),t._v("流中的每个消息传递终端都可能产生一个输出值，然后将其发给下游或者"),a("code",[t._v("null")]),t._v("来终止处理")]),t._v(" "),a("p",[a("code",[t._v("inbound gateway")]),t._v("接收来自外部系统的传入请求，作为"),a("code",[t._v("Message<T>")]),t._v("处理并发送回复。"),a("code",[t._v("outboud gateway")]),t._v("采用"),a("code",[t._v("Message<T>")]),t._v("将其发送到外部系统，并等待来自该系统的回复。")]),t._v(" "),a("p",[a("code",[t._v("inbound adapter")]),t._v("是从外部接收消息并将它们变成"),a("code",[t._v("Spring Message<T>")]),t._v("的组件，"),a("code",[t._v("outbound adapter")]),t._v("接收"),a("code",[t._v("Spring Message<T>")]),t._v("并将其转换为下游系统期望的消息传递出去。")]),t._v(" "),a("p",[a("code",[t._v("inbond adapter")]),t._v("有两种"),a("code",[t._v("polling adapter")]),t._v("和"),a("code",[t._v("event-driven adapter")])]),t._v(" "),a("p",[a("code",[t._v("dependency injection")]),t._v("使组件代码不用关心资源的初始化和获取，其可以自由地专注于编写这些依赖关系的代码。")]),t._v(" "),a("h2",{attrs:{id:"第-11-章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-11-章"}},[t._v("#")]),t._v(" 第 11 章")]),t._v(" "),a("h3",{attrs:{id:"sping-batch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sping-batch"}},[t._v("#")]),t._v(" Sping batch")]),t._v(" "),a("p",[t._v("批处理支持名为窗口的逻辑——一个上限和一个下限，用来分隔一组数据。")]),t._v(" "),a("p",[t._v("块是一匹数据的高效划分")]),t._v(" "),a("p",[a("code",[t._v("Spring batch")]),t._v("的核型是"),a("code",[t._v("job")]),t._v("概念，而"),a("code",[t._v("job")]),t._v("又可能有多个步骤，其是有状态的，它为数据库中运行的所有作业保留元数据表，支持两种机制来并行写入数据：远程分区和远程分块")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("@StepScope")]),t._v("注释的"),a("code",[t._v("bean")]),t._v("不是单例")]),t._v(" "),a("p",[a("code",[t._v("Spring cloud Task")]),t._v("是一个抽象，用于管理进程从运行到终止的整个生命周期。")]),t._v(" "),a("p",[t._v("分区的"),a("code",[t._v("Step")]),t._v("在"),a("code",[t._v("leader")]),t._v("节点上不做任何工作，相反，它充当一种代理节点，将工作分派给"),a("code",[t._v("worker")]),t._v("节点")]),t._v(" "),a("p",[t._v("当应用程序启动时，"),a("code",[t._v("Spring boot")]),t._v("运行所有的"),a("code",[t._v("CommandLineRunner")]),t._v("实例")]),t._v(" "),a("p",[a("code",[t._v("task")]),t._v("可以运行并具有预期的最终状态。任务是任何短暂进程或工作负载的理想抽象")]),t._v(" "),a("h3",{attrs:{id:"workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workflow"}},[t._v("#")]),t._v(" Workflow")]),t._v(" "),a("p",[a("code",[t._v("workflow")]),t._v("是通过自治代理系统明确建模工作的实践。"),a("code",[t._v("workflow")]),t._v("系统定义了一个状态机，并构建了一个状态机向目标建模。")]),t._v(" "),a("p",[t._v("工作流简化了建模流程，从设计的角度来看，工作流系统有助于保持你的服务和实体的无状态，并且不会出现无关的流程状态。")]),t._v(" "),a("h2",{attrs:{id:"第十二章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第十二章"}},[t._v("#")]),t._v(" 第十二章")]),t._v(" "),a("p",[a("code",[t._v("CAP")]),t._v("原则：")]),t._v(" "),a("ul",[a("li",[t._v("一致性: Consistency")]),t._v(" "),a("li",[t._v("数据高科用性: Availability")]),t._v(" "),a("li",[t._v("网路分区的容忍性: Partition")])]),t._v(" "),a("p",[t._v("当调用失败的时候，"),a("code",[t._v("Srping Retry")]),t._v("会调用一个使用"),a("code",[t._v("@Recovery")]),t._v("的处理方法，恢复方法与可恢复方法相同的相应，默认情况会调用三次，每次都会增加停止的时间。")]),t._v(" "),a("p",[t._v("如果想使用基于信号量的隔离，有限的计算资源，想要一个更简洁的"),a("code",[t._v("API")]),t._v("，使用"),a("code",[t._v("Spring Retry")]),t._v("，如果必须使用基于线程隔离或希望短路由可视化，请使用"),a("code",[t._v("Hystrix")])]),t._v(" "),a("p",[a("code",[t._v("Saga")]),t._v("事务应该被设计为最多一次（at-most-once，它应该是幂等的，如果多次执行，则不会留下明显的副作用")]),t._v(" "),a("h3",{attrs:{id:"cqrs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cqrs"}},[t._v("#")]),t._v(" CQRS")]),t._v(" "),a("p",[a("code",[t._v("CQRS")]),t._v("无论何时只要有命令更新领域模型并持久化，就会有事件（消息）触发所有的观察查询模型来更新它们自己的表示。")]),t._v(" "),a("p",[a("code",[t._v("CQRS")]),t._v("是一种发布和订阅自有界上下文以外的应用程序领域事件方式。")]),t._v(" "),a("p",[t._v("命令网关根据类型异步地将命令分派到适当的命令处理程序。")]),t._v(" "),a("p",[t._v("聚合是一个有状态的组建，其标识符是在处理域事件之后应用突变的结果。")]),t._v(" "),a("h3",{attrs:{id:"spring-cloud-data-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-data-flow"}},[t._v("#")]),t._v(" Spring Cloud Data Flow")])])}),[],!1,null,null,null);e.default=s.exports}}]);