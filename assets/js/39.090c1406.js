(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{330:function(a,t,e){"use strict";e.r(t);var s=e(6),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"bean基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bean基础"}},[a._v("#")]),a._v(" Bean基础")]),a._v(" "),e("p",[a._v("使用Bean：")]),a._v(" "),e("ol",[e("li",[a._v("读取spring的配置文件")]),a._v(" "),e("li",[a._v("获取配置的bean")]),a._v(" "),e("li",[a._v("调用方法")])]),a._v(" "),e("p",[a._v("配置bean：")]),a._v(" "),e("ul",[e("li",[a._v("class：bean的全类名，通过反射的方式在IOC容器中创建Bean，所有要求Bean中必须有无参的构造器")]),a._v(" "),e("li",[a._v("id：标识容器中bean，id唯一，在 IOC 容器中必须是唯一的若 id 没有指定，Spring 自动将权限定性类名作为 Bean 的名字id 可以指定多个名字，名字之间可用逗号、分号、或空格分隔")])]),a._v(" "),e("p",[a._v("ApplicationContext代表IoC容器")]),a._v(" "),e("p",[a._v("spring中提供了两种类型的IoC容器实现：")]),a._v(" "),e("ul",[e("li",[a._v("BeanFactory: IOC 容器的基本实现.")]),a._v(" "),e("li",[a._v("ApplicationContext: 提供了更多的高级特性. 是 BeanFactory 的子接口.")])]),a._v(" "),e("p",[a._v("BeanFactory 是 Spring 框架的基础设施，面向 Spring 本身；ApplicationContext 面向使用 Spring 框架的开发者，几乎所有的应用场合都直接使用 ApplicationContext 而非底层的 BeanFactory无论使用何种方式, 配置文件时相同的")]),a._v(" "),e("p",[a._v("ApplicationContext 的主要实现类：")]),a._v(" "),e("ul",[e("li",[a._v("ClassPathXmlApplicationContext：从 类路径下加载配置文件")]),a._v(" "),e("li",[a._v("FileSystemXmlApplicationContext: 从文件系统中加载配置文件")])]),a._v(" "),e("p",[a._v("ConfigurableApplicationContext 扩展于 ApplicationContext，新增加两个主要方法：refresh() 和 close()， 让 ApplicationContext 具有启动、刷新和关闭上下文的能力ApplicationContext 在初始化上下文时就实例化所有单例的 Bean。WebApplicationContext 是专门为 WEB 应用而准备的，它允许从相对于 WEB 根目录的路径中完成初始化工作")]),a._v(" "),e("h1",{attrs:{id:"依赖注入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖注入"}},[a._v("#")]),a._v(" 依赖注入")]),a._v(" "),e("h2",{attrs:{id:"基本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本"}},[a._v("#")]),a._v(" 基本")]),a._v(" "),e("p",[a._v("Spring 支持 3 种依赖注入的方式")]),a._v(" "),e("ul",[e("li",[a._v("属性注入")]),a._v(" "),e("li",[a._v("构造器注入")]),a._v(" "),e("li",[a._v("工厂方法注入（很少使用，不推荐）")])]),a._v(" "),e("p",[a._v("使用构造器注入属性值可以指定参数的位置和参数的类型，以区分重载的类型")]),a._v(" "),e("p",[a._v("字面值：")]),a._v(" "),e("ul",[e("li",[a._v("字面值：可用字符串表示的值，可以通过"),e("code",[a._v("<value>")]),a._v("元素标签或 value 属性进行注入。")]),a._v(" "),e("li",[a._v("基本数据类型及其封装类、String 等类型都可以采取字面值注入的方式")]),a._v(" "),e("li",[a._v("若字面值中包含特殊字符，可以使用 "),a._v(" 把字面值包裹起来")])]),a._v(" "),e("p",[a._v("可以使用property的ref属性建立bean之间的引用关系，也可以使用"),e("code",[a._v("<ref>")]),a._v("子标签来建立此种关系")]),a._v(" "),e("p",[a._v("内部bean不能被外部引用，只能在内部使用")]),a._v(" "),e("p",[a._v("可以使用专用的"),e("code",[a._v("<null/>")]),a._v("元素标签为 Bean 的字符串或其它对象类型的属性注入 null 值")]),a._v(" "),e("p",[a._v("为级联属性赋值，注意：属性需要先初始化后才可以级联属性赋值，否则会有异常，和struts2不同")]),a._v(" "),e("h2",{attrs:{id:"集合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集合"}},[a._v("#")]),a._v(" 集合")]),a._v(" "),e("p",[a._v("集合属性：在 Spring中可以通过一组内置的 xml 标签(例如:"),e("code",[a._v("<list>")]),a._v(", "),e("code",[a._v("<set>")]),a._v(" 或 "),e("code",[a._v("<map>")]),a._v(") 来配置集合属性.\n配置 java.util.List 类型的属性, 需要指定"),e("code",[a._v("<list>")]),a._v(" 标签, 在标签里包含一些元素. 这些标签可以通过 "),e("code",[a._v("<value>")]),a._v("指定简单的常量值, 通过 "),e("code",[a._v("<ref>")]),a._v("指定对其他 Bean 的引用. 通过"),e("code",[a._v("<bean>")]),a._v("指定内置 Bean 定义. 通过 "),e("code",[a._v("<null/>")]),a._v(" 指定空元素. 甚至可以内嵌其他集合.数组的定义和 List 一样, 都使用"),e("code",[a._v("<list>")]),a._v("配置 java.util.Set 需要使用 "),e("code",[a._v("<set>")]),a._v("标签, 定义元素的方法与 List 一样.Java.util.Map 通过 "),e("code",[a._v("<map>")]),a._v("标签定义,"),e("code",[a._v("<map>")]),a._v("标签里可以使用多个"),e("code",[a._v("<entry>")]),a._v(" 作为子标签. 每个条目包含一个键和一个值. 必须在 "),e("code",[a._v("<key>")]),a._v("标签里定义键因为键和值的类型没有限制, 所以可以自由地为它们指定"),e("code",[a._v("<value>")]),a._v(", "),e("code",[a._v("<ref")]),a._v(", "),e("code",[a._v("<bean>")]),a._v(" 或 "),e("code",[a._v("<null>")]),a._v(" 元素. 可以将 Map 的键和值作为"),e("code",[a._v("<entry>")]),a._v("的属性定义: 简单常量使用 key 和 value 来定义; Bean 引用通过 key-ref 和 value-ref 属性定义使用"),e("code",[a._v("<props>")]),a._v(" 定义 java.util.Properties, 该标签使用多个 "),e("code",[a._v("<prop>")]),a._v("作为子标签. 每个"),e("code",[a._v("<prop>")]),a._v(" 标签必须定义 key 属性")]),a._v(" "),e("p",[a._v("使用map节点及猫的entry子节点配置Map类型成员变量")]),a._v(" "),e("p",[a._v("配置单例的集合bean，以供多个bean进行引用，需要导入util命名空间")]),a._v(" "),e("p",[a._v("通过p命名空间位bean的属性赋值，需要先导入p命名空间，相对于传统的配置方式更加简洁")]),a._v(" "),e("h2",{attrs:{id:"自动装配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动装配"}},[a._v("#")]),a._v(" 自动装配")]),a._v(" "),e("p",[a._v("Spring IOC 容器可以自动装配 Bean. 需要做的仅仅是在"),e("code",[a._v("<bean>")]),a._v("的 autowire 属性里指定自动装配的模式:")]),a._v(" "),e("ul",[e("li",[a._v("byType(根据类型自动装配): 若 IOC 容器中有多个与目标 Bean 类型一致的 Bean. 在这种情况下, Spring 将无法判定哪个 Bean 最合适该属性, 所以不能执行自动装配.若IoC容器中有1个以上的匹配类型的bean，则抛异常")]),a._v(" "),e("li",[a._v("byName(根据名称自动装配): 必须将目标 Bean 的名称和属性名设置的完全相同.更加bean的名字和当前bean的setter风格的属性名进行自动装配，若有匹配的，则进行进行自动装配，反之则不装配")]),a._v(" "),e("li",[a._v("constructor(通过构造器自动装配): 当 Bean 中存在多个构造器时, 此种自动装配方式将会很复杂. "),e("strong",[a._v("不推荐使用")])])]),a._v(" "),e("p",[a._v("自动装配的缺点：")]),a._v(" "),e("ul",[e("li",[a._v("在 Bean 配置文件里设置 autowire 属性进行自动装配将会装配 Bean 的所有属性. 然而, 若只希望装配个别属性时, autowire 属性就不够灵活了.")]),a._v(" "),e("li",[a._v("autowire 属性要么根据类型自动装配, 要么根据名称自动装配, 不能两者兼而有之.")]),a._v(" "),e("li",[a._v("一般情况下，在实际的项目中很少使用自动装配功能，因为和自动装配功能所带来的好处比起来，明确清晰的配置文档更有说服力一些")])]),a._v(" "),e("h2",{attrs:{id:"继承"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[a._v("#")]),a._v(" 继承")]),a._v(" "),e("p",[a._v("bean配置的继承：使用bean的parent属性指定继承哪个bean的配置")]),a._v(" "),e("p",[a._v("抽象bean：bean的abstract属性为true的bean，这样的bean不能被IoC容器实例化，只用来被继承配置，若某一个bean的class属性没有指定，则该bean必须是一个抽象bean")]),a._v(" "),e("p",[a._v("Spring 允许用户通过 depends-on 属性设定 Bean 前置依赖的Bean，前置依赖的 Bean 会在本 Bean 实例化之前创建好。如果前置依赖于多个 Bean，则可以通过逗号，空格或的方式配置 Bean 的名称")]),a._v(" "),e("h2",{attrs:{id:"作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[a._v("#")]),a._v(" 作用域")]),a._v(" "),e("p",[a._v("使用bean的scope属性配置bean的作用域：")]),a._v(" "),e("ul",[e("li",[a._v("singleton：默认值，容器初始时创建bean实例，在整个容器的生命周期只创建一个实例")]),a._v(" "),e("li",[a._v("prototype：原型的，容器初始化时不创建bean的实例，而在每次请求时都创建一个新的实例并返回")])]),a._v(" "),e("p",[a._v("在配置文件里配置 Bean 时, 有时需要在 Bean 的配置里混入系统部署的细节信息(例如: 文件路径, 数据源配置信息等). 而这些部署细节实际上需要和 Bean 配置相分离\nSpring 提供了一个 PropertyPlaceholderConfigurer 的 BeanFactory 后置处理器, 这个处理器允许用户将 Bean 配置的部分内容外移到属性文件中. 可以在 Bean 配置文件里使用形式为"),e("code",[a._v("${var}")]),a._v("的变量, PropertyPlaceholderConfigurer 从属性文件里加载属性, 并使用这些属性来替换变量.Spring 还允许在属性文件中使用"),e("code",[a._v("${propName}")]),a._v("，以实现属性之间的相互引用。")]),a._v(" "),e("p",[a._v("导入属性文件，使用外部化属性文件的属性，通过"),e("code",[a._v("<context:property-placeholder>")]),a._v("进行属性文件的指定，在引用处引用属性文件")]),a._v(" "),e("h2",{attrs:{id:"spel表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spel表达式"}},[a._v("#")]),a._v(" SpEL表达式")]),a._v(" "),e("p",[a._v("SpEL：")]),a._v(" "),e("ol",[e("li",[a._v("为属性配置一个字面值")]),a._v(" "),e("li",[a._v("引用其他对象")]),a._v(" "),e("li",[a._v("引用其他对象的属性")]),a._v(" "),e("li",[a._v("调用其他方法，还可以链式操作")]),a._v(" "),e("li",[a._v("算术运算符：+、-、*、/、%、^")]),a._v(" "),e("li",[a._v("加号还可以用作字符串连接符")]),a._v(" "),e("li",[a._v("比较运算符：<、>、==、>=、lt、gt,、eq、le,、 ge")]),a._v(" "),e("li",[a._v("逻辑运算符：and、or、not")]),a._v(" "),e("li",[e("code",[a._v("boolException ? true : false")]),a._v("表达式及其变式")]),a._v(" "),e("li",[a._v("正则表达式")]),a._v(" "),e("li",[a._v("调用静态方法或静态属性")]),a._v(" "),e("li",[a._v("使用SpEL引用类的静态属性")]),a._v(" "),e("li",[a._v("引用其他bean的属性")])]),a._v(" "),e("h2",{attrs:{id:"bean的生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bean的生命周期"}},[a._v("#")]),a._v(" bean的生命周期")]),a._v(" "),e("p",[a._v("Spring IOC 容器可以管理 Bean 的生命周期, Spring 允许在 Bean 生命周期的特定点执行定制的任务")]),a._v(" "),e("p",[a._v("Spring IOC 容器对 Bean 的生命周期进行管理的过程:")]),a._v(" "),e("ol",[e("li",[a._v("通过构造器或工厂方法创建 Bean 实例")]),a._v(" "),e("li",[a._v("为 Bean 的属性设置值和对其他 Bean 的引用")]),a._v(" "),e("li",[a._v("调用 Bean 的初始化方法")]),a._v(" "),e("li",[a._v("Bean 可以使用了")]),a._v(" "),e("li",[a._v("当容器关闭时, 调用 Bean 的销毁方法")])]),a._v(" "),e("p",[a._v("在 Bean 的声明Bean 后置处理器允许在调用初始化方法前后对 Bean 进行额外的处理.\nBean 后置处理器对 IOC 容器里的所有 Bean 实例逐一处理, 而非单一实例. 其典型应用是: 检查 Bean 属性的正确性或根据特定的标准更改 Bean 的属性.里设置 init-method 和 destroy-method 属性, 为 Bean 指定初始化和销毁方法")]),a._v(" "),e("p",[a._v("实现BeanPostProcessor接口，并提供")]),a._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// init-method之前被调用")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("postProcessBeforeInitialization")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" bean"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" beanName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// init-method之后被调用")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("postProcessAfterInitialization")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" bean"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" beanName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// bean:bean实例本身")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// beanName：IoC容器配置的bean的名字")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 返回值：是实际上放回给用户的那个bean，注意：可以在以上两个方法中修改返回的bean，甚至返回一个新bean")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("p",[a._v("配置bean的后置处理器，不需配置id，IoC容器自动识别是一个BeanPostProcessor")]),a._v(" "),e("h2",{attrs:{id:"其他调用bean的方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他调用bean的方法"}},[a._v("#")]),a._v(" 其他调用bean的方法")]),a._v(" "),e("p",[a._v("静态工厂方法：直接调用某一个类的静态方法就可以返回bean的实例")]),a._v(" "),e("p",[a._v("通过静态工厂方法来配置bean，猪儿不是配置静态工厂方法实例，而是配置bean实例")]),a._v(" "),e("p",[a._v("调用静态工厂方法创建 Bean是将对象创建的过程封装到静态方法中. 当客户端需要对象时, 只需要简单地调用静态方法, 而不同关心创建对象的细节.\n要声明通过静态方法创建的 Bean, 需要在 Bean 的 class 属性里指定拥有该工厂的方法的类, 同时在 factory-method 属性里指定工厂方法的名称. 最后, 使用 "),e("code",[a._v("<constrctor-arg>")]),a._v("元素为该方法传递方法参数.")]),a._v(" "),e("p",[a._v("实例工厂方法: 将对象的创建过程封装到另外一个对象实例的方法里. 当客户端需要请求对象时, 只需要简单的调用该实例方法而不需要关心对象的创建细节")]),a._v(" "),e("p",[a._v("实例工厂方法，即需要创建工厂本身，在调用工厂方法来放回bean的实例")]),a._v(" "),e("p",[a._v("自定义的BeanFactory需要实现BeanFactory接口")]),a._v(" "),e("h2",{attrs:{id:"自动配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动配置"}},[a._v("#")]),a._v(" 自动配置")]),a._v(" "),e("p",[a._v("接受的注解：")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("@Component")]),a._v(": 基本注解, 标识了一个受 Spring 管理的组件")]),a._v(" "),e("li",[e("code",[a._v("@Respository")]),a._v(": 标识持久层组件")]),a._v(" "),e("li",[e("code",[a._v("@Service")]),a._v(": 标识服务层(业务层)组件")]),a._v(" "),e("li",[e("code",[a._v("@Controller")]),a._v(": 标识表现层组件")])]),a._v(" "),e("p",[a._v("对于扫描到的组件, Spring 有默认的命名策略: 使用非限定类名, 第一个字母小写. 也可以在注解中通过 value 属性值标识组件的名称")]),a._v(" "),e("p",[e("code",[a._v("<context:component-scan>")]),a._v("扫描需要的包，需要多个包是使用逗号分隔")]),a._v(" "),e("p",[e("code",[a._v("<context:include-filter>")]),a._v("子节点表示要包含的目标类")]),a._v(" "),e("p",[e("code",[a._v("<context:exclude-filter>")]),a._v("子节点表示要排除在外的目标类")]),a._v(" "),e("p",[e("code",[a._v("<context:component-scan>")]),a._v("下可以拥有若干个"),e("code",[a._v("<context:include-filter>")]),a._v("和"),e("code",[a._v("<context:exclude-filter>")]),a._v("子节点")]),a._v(" "),e("p",[e("code",[a._v("<context:component-scan>")]),a._v("元素还会自动注册 AutowiredAnnotationBeanPostProcessor 实例, 该实例可以自动装配具有 @Autowired 和 @Resource 、@Inject注解的属性.")]),a._v(" "),e("p",[a._v("@Autowired 注解自动装配具有兼容类型的单个 Bean属性:")]),a._v(" "),e("ul",[e("li",[a._v("构造器, 普通字段(即使是非 public), 一切具有参数的方法都可以应用@Authwired 注解")]),a._v(" "),e("li",[a._v("默认情况下, 所有使用 @Authwired 注解的属性都需要被设置. 当 Spring 找不到匹配的 Bean 装配属性时, 会抛出异常, 若某一属性允许不被设置, 可以设置 @Authwired 注解的 required 属性为 false")]),a._v(" "),e("li",[a._v("默认情况下, 当 IOC 容器里存在多个类型兼容的 Bean 时, 通过类型的自动装配将无法工作. 此时可以在 "),e("strong",[a._v("@Qualifier 注解里提供 Bean 的名称. Spring 允许对方法的入参标注 @Qualifiter 已指定注入 Bean 的名称")])]),a._v(" "),e("li",[a._v("@Authwired 注解也可以应用在数组类型的属性上, 此时 Spring 将会把所有匹配的 Bean 进行自动装配.")]),a._v(" "),e("li",[a._v("@Authwired 注解也可以应用在集合属性上, 此时 Spring 读取该集合的类型信息, 然后自动装配所有与之兼容的 Bean.")]),a._v(" "),e("li",[a._v("@Authwired 注解用在 java.util.Map 上时, 若该 Map 的键值为 String, 那么 Spring 将自动装配与之 Map 值类型兼容的 Bean, 此时 Bean 的名称作为键值")])]),a._v(" "),e("p",[a._v("@Resource 注解要求提供一个 Bean 名称的属性，若该属性为空，则自动采用标注处的变量或方法名作为 Bean 的名称")]),a._v(" "),e("p",[a._v("@Inject 和 @Autowired 注解一样也是按类型匹配注入的 Bean， 但没有 reqired 属性")]),a._v(" "),e("h2",{attrs:{id:"泛型依赖注入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#泛型依赖注入"}},[a._v("#")]),a._v(" 泛型依赖注入")]),a._v(" "),e("p",[a._v("子类会自动继承父类（泛型）的一些依赖关系")]),a._v(" "),e("h1",{attrs:{id:"spring-aop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-aop"}},[a._v("#")]),a._v(" Spring　AOP")]),a._v(" "),e("p",[a._v("问题：")]),a._v(" "),e("ol",[e("li",[a._v("代码混乱：原有的业务方法急剧膨胀.  每个方法在处理核心逻辑的同时还必须兼顾其他多个关注点")]),a._v(" "),e("li",[a._v("代码分散：.如果日志需求发生变化, 必须修改所有模块.")])]),a._v(" "),e("p",[a._v("InvacationHandler方法参数：")]),a._v(" "),e("ol",[e("li",[a._v("proxy：正在返回的那个代理对象，一般情况下，在invoke方法中都不使用该对象")]),a._v(" "),e("li",[a._v("method：正在被调用的方法")]),a._v(" "),e("li",[a._v("args：调用方法时，传入的参数")])]),a._v(" "),e("h2",{attrs:{id:"术语"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#术语"}},[a._v("#")]),a._v(" 术语")]),a._v(" "),e("ul",[e("li",[a._v("切面(Aspect):  横切关注点(跨越应用程序多个模块的功能)被模块化的特殊对象")]),a._v(" "),e("li",[a._v("通知(Advice):  切面必须要完成的工作")]),a._v(" "),e("li",[a._v("目标(Target): 被通知的对象")]),a._v(" "),e("li",[a._v("代理(Proxy): 向目标对象应用通知之后创建的对象")]),a._v(" "),e("li",[a._v("连接点（Joinpoint）：程序执行的某个特定位置：如类某个方法调用前、调用后、方法抛出异常后等。连接点由两个信息确定：方法表示的程序执行点；相对点表示的方位。例如 ArithmethicCalculator#add() 方法执行前的连接点，执行点为 ArithmethicCalculator#add()； 方位为该方法执行前的位置")]),a._v(" "),e("li",[a._v("切点（pointcut）：每个类都拥有多个连接点：例如 ArithmethicCalculator 的所有方法实际上都是连接点，即连接点是程序类中客观存在的事务。AOP 通过切点定位到特定的连接点。类比：连接点相当于数据库中的记录，切点相当于查询条件。切点和连接点不是一对一的关系，一个切点匹配多个连接点，切点通过 org.springframework.aop.Pointcut 接口进行描述，它使用类和方法作为连接点的查询条件。")])]),a._v(" "),e("h2",{attrs:{id:"切面编程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#切面编程"}},[a._v("#")]),a._v(" 切面编程")]),a._v(" "),e("p",[a._v("将一个类声明为切面：需要把该类放入到IoC容器中，再声明为一个切面")]),a._v(" "),e("p",[e("code",[a._v("<aop:aspectj-autoproxy/>")]),a._v("将自动的为匹配到的切点增加切面内容")]),a._v(" "),e("p",[a._v("要在 Spring 中声明 AspectJ 切面, 只需要在 IOC 容器中将切面声明为 Bea在 AspectJ 注解中, 切面只是一个带有 @Aspect 注解的 Java 类. 通知是标注有某种注解的简单的 Java 方法.n 实例.\nAspectJ 支持 5 种类型的通知注解:")]),a._v(" "),e("ul",[e("li",[a._v("@fore: 前置通知, 在方法执行之前执行")]),a._v(" "),e("li",[a._v("@After: 后置通知, 在方法执行之后执行")]),a._v(" "),e("li",[a._v("@AfterRunning: 返回通知, 在方法返回结果之后执行")]),a._v(" "),e("li",[a._v("@AfterThrowing: 异常通知, 在方法抛出异常之后")]),a._v(" "),e("li",[a._v("@Around: 环绕通知, 围绕着方法执行")])]),a._v(" "),e("p",[a._v("可以在通知方法中声明一个类型为 JoinPoint 的参数. 然后就能访问链接细节. 如方法名称和参数值.")]),a._v(" "),e("p",[a._v("后置通知是在连接点完成之后执行的, 即连接点返回结果或者抛出异常的时候, 下面的后置通知记录了方法的终止.\n一个切面可以包括一个或者多个通知")]),a._v(" "),e("p",[a._v("后置通知中不能访问目标方法的执行结果")]),a._v(" "),e("p",[a._v("返回通知可以方位结果")]),a._v(" "),e("p",[a._v("异常通知：可以访问到异常对象，且可以指定在出现特定异常时在执行通知代码")]),a._v(" "),e("p",[a._v("环绕通知需要携带ProceedingsJoinPoint类型参数，环绕通知类似于动态代理的全过程，ProceedingsJoinPoint类型参数可以决定是否执行目标方法，且环绕通知必须有放回值，放回值即为目标方法的返回值")]),a._v(" "),e("p",[a._v("可以使用@Order注解指定切面的优先级，值越小，优先级越高")]),a._v(" "),e("h2",{attrs:{id:"重用切点表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重用切点表达式"}},[a._v("#")]),a._v(" 重用切点表达式")]),a._v(" "),e("p",[a._v("定义一个方法，用于声明切入点表达式，一般地，该方法中不在需要添如其他代码")]),a._v(" "),e("p",[a._v("使用@Pointcut来声明切入点表达式")]),a._v(" "),e("p",[a._v("后面的其他通知直接使用方法名来引用当前的切入点表达式")]),a._v(" "),e("h2",{attrs:{id:"基于xml配置的方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于xml配置的方式"}},[a._v("#")]),a._v(" 基于XML配置的方式")]),a._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("aop:")]),a._v("config")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("aop:")]),a._v("pointcut")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("expression")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("top.wangjinpeng.chapter2.impl.LoggingAsAspect.cutTest()"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("aop:")]),a._v("aspect")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("ref")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("loggingAsAspect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("aop:")]),a._v("before")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("method")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("beforeMethod"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("pointcut")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("top.wangjinpeng.chapter2.impl.LoggingAsAspect.cutTest()"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("aop:")]),a._v("before")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("method")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("afterMethod"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("pointcut")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("top.wangjinpeng.chapter2.impl.LoggingAsAspect.cutTest()"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("aop:")]),a._v("aspect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("aop:")]),a._v("config")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("p",[a._v("除了使用 AspectJ 注解声明切面, Spring 也支持在 Bean 配置文件中声明切面. 这种声明是通过 aop schema 中的 XML 元素完成的.\n正常情况下, 基于注解的声明要优先于基于 XML 的声明. 通过 AspectJ 注解, 切面可以与 AspectJ 兼容, 而基于 XML 的配置则是 Spring 专有的. 由于 AspectJ 得到越来越多的 AOP 框架支持, 所以以注解风格编写的切面将会有更多重用的机会.")]),a._v(" "),e("p",[a._v("当使用 XML 声明切面时, 需要在 "),e("code",[a._v("<beans>")]),a._v(" 根元素中导入 aop Schema\n在 Bean 配置文件中, 所有的 Spring AOP 配置都必须定义在 "),e("code",[a._v("<aop:config>")]),a._v(" 元素内部. 对于每个切面而言, 都要创建一个 "),e("code",[a._v("<aop:aspect>")]),a._v(" 元素来为具体的切面实现引用后端 Bean 实例.\n切面 Bean 必须有一个标示符, 供 "),e("code",[a._v("<aop:aspect>")]),a._v(" 元素引用")]),a._v(" "),e("h1",{attrs:{id:"spring-jdbc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-jdbc"}},[a._v("#")]),a._v(" spring jdbc")]),a._v(" "),e("h2",{attrs:{id:"简化-jdbc-模板查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简化-jdbc-模板查询"}},[a._v("#")]),a._v(" 简化 JDBC 模板查询")]),a._v(" "),e("p",[a._v("每次使用都创建一个 JdbcTemplate 的新实例, 这种做法效率很低下.")]),a._v(" "),e("p",[a._v("JdbcTemplate 类被设计成为线程安全的, 所以可以再 IOC 容器中声明它的单个实例, 并将这个实例注入到所有的 DAO 实例中.")]),a._v(" "),e("p",[a._v("JdbcTemplate 也利用了 Java 1.5 的特定(自动装箱, 泛型, 可变长度等)来简化开发")]),a._v(" "),e("p",[a._v("Spring JDBC 框架还提供了一个 JdbcDaoSupport 类来简化 DAO 实现. 该类声明了 jdbcTemplate 属性, 它可以从 IOC 容器中注入, 或者自动从数据源中创建.")]),a._v(" "),e("h2",{attrs:{id:"基本使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[a._v("#")]),a._v(" 基本使用")]),a._v(" "),e("ol",[e("li",[a._v("配置DataSource")]),a._v(" "),e("li",[a._v("配置JdbcTemplate")]),a._v(" "),e("li",[a._v("使用")])]),a._v(" "),e("p",[a._v("其不支持级联属性，JdbcTemplate到底是一个JDBC的小工具，而不是ORM框架")]),a._v(" "),e("h2",{attrs:{id:"在-jdbc-模板中使用具名参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-jdbc-模板中使用具名参数"}},[a._v("#")]),a._v(" 在 JDBC 模板中使用具名参数")]),a._v(" "),e("p",[a._v("在经典的 JDBC 用法中, SQL 参数是用占位符 ? 表示,并且受到位置的限制. 定位参数的问题在于, 一旦参数的顺序发生变化, 就必须改变参数绑定.")]),a._v(" "),e("p",[a._v("在 Spring JDBC 框架中, 绑定 SQL 参数的另一种选择是使用具名参数(named parameter).")]),a._v(" "),e("p",[a._v("具名参数: SQL 按名称(以冒号开头)而不是按位置进行指定. 具名参数更易于维护, 也提升了可读性. 具名参数由框架类在运行时用占位符取代")]),a._v(" "),e("p",[a._v("具名参数只在 NamedParameterJdbcTemplate 中得到支持")]),a._v(" "),e("p",[a._v("在 SQL 语句中使用具名参数时, 可以在一个 Map 中提供参数值, 参数名为键\n也可以使用 SqlParameterSource 参数")]),a._v(" "),e("p",[a._v("批量更新时可以提供 Map 或 SqlParameterSource 的数组")]),a._v(" "),e("p",[a._v("配置NamedParameterJdbcTemplte，该对象可以使用具名参数，其没有无参数的构造器，所以必须为其构造器指定参数")]),a._v(" "),e("p",[a._v("使用具名参数时，可以使用update（String sql，SqlParameterSource paramSource)方法进行更新操作")]),a._v(" "),e("ol",[e("li",[a._v("SQL语句中的参数名和类的属性一致")]),a._v(" "),e("li",[a._v("使用SQLParameterSource的BeanPropertySqlParameterSource实现类作为参数")])]),a._v(" "),e("h1",{attrs:{id:"事务管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事务管理"}},[a._v("#")]),a._v(" 事务管理")]),a._v(" "),e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),e("p",[a._v("事务管理是企业级应用程序开发中必不可少的技术,  用来确保数据的完整性和一致性.")]),a._v(" "),e("p",[a._v("事务就是一系列的动作, 它们被当做一个单独的工作单元. 这些动作要么全部完成, 要么全部不起作用")]),a._v(" "),e("p",[a._v("事务的四个关键属性(ACID)")]),a._v(" "),e("ul",[e("li",[a._v("原子性(atomicity): 事务是一个原子操作, 由一系列动作组成. 事务的原子性确保动作要么全部完成要么完全不起作用.")]),a._v(" "),e("li",[a._v("一致性(consistency): 一旦所有事务动作完成, 事务就被提交. 数据和资源就处于一种满足业务规则的一致性状态中.")]),a._v(" "),e("li",[a._v("隔离性(isolation): 可能有许多事务会同时处理相同的数据, 因此每个事物都应该与其他事务隔离开来, 防止数据损坏.")]),a._v(" "),e("li",[a._v("持久性(durability): 一旦事务完成, 无论发生什么系统错误, 它的结果都不应该受到影响. 通常情况下, 事务的结果被写到持久化存储器中.")])]),a._v(" "),e("h2",{attrs:{id:"spring事务管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring事务管理"}},[a._v("#")]),a._v(" spring事务管理")]),a._v(" "),e("p",[a._v("作为企业级应用程序框架, Spring 在不同的事务管理 API 之上定义了一个抽象层. 而应用程序开发人员不必了解底层的事务管理 API, 就可以使用 Spring 的事务管理机制.")]),a._v(" "),e("p",[a._v("Spring 既支持编程式事务管理, 也支持声明式的事务管理.")]),a._v(" "),e("p",[a._v("编程式事务管理: 将事务管理代码嵌入到业务方法中来控制事务的提交和回滚. 在编程式管理事务时, 必须在每个事务操作中包含额外的事务管理代码.")]),a._v(" "),e("p",[a._v("声明式事务管理: 大多数情况下比编程式事务管理更好用. 它将事务管理代码从业务方法中分离出来, 以声明的方式来实现事务管理. 事务管理作为一种横切关注点, 可以通过 AOP 方法模块化. Spring 通过 Spring AOP 框架支持声明式事务管理.")]),a._v(" "),e("p",[a._v("Spring 从不同的事务管理 API 中抽象了一整套的事务机制. 开发人员不必了解底层的事务 API, 就可以利用这些事务机制. 有了这些事务机制, 事务管理代码就能独立于特定的事务技术了.\nSpring 的核心事务管理抽象是它为事务管理封装了一组独立于技术的方法. 无论使用 Spring 的哪种事务管理策略(编程式或声明式), 事务管理器都是必须的.")]),a._v(" "),e("h2",{attrs:{id:"用事务通知声明式地管理事务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用事务通知声明式地管理事务"}},[a._v("#")]),a._v(" 用事务通知声明式地管理事务")]),a._v(" "),e("p",[a._v("事务管理是一种横切关注点")]),a._v(" "),e("p",[a._v("为了在 Spring 2.x 中启用声明式事务管理, 可以通过 tx Schema 中定义的"),e("code",[a._v("<tx:advice> 元")]),a._v("素声明事务通知, 为此必须事先将这个 Schema 定义添加到"),e("code",[a._v("<beans>")]),a._v("根元素中去.")]),a._v(" "),e("p",[a._v("声明了事务通知后, 就需要将它与切入点关联起来. 由于事务通知是在"),e("code",[a._v("<aop:config>")]),a._v(" 元素外部声明的, 所以它无法直接与切入点产生关联. 所以必须在"),e("code",[a._v("<aop:config>")]),a._v(" 元素中声明一个增强器通知与切入点关联起来.")]),a._v(" "),e("p",[a._v("由于 Spring AOP 是基于代理的方法, 所以只能增强公共方法. 因此, 只有公有方法才能通过 Spring AOP 进行事务管理.")]),a._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!--启用注解的配置--\x3e")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("tx:")]),a._v("annotation-driven")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("transaction-manager")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("transactionManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!--事务管理的配置--\x3e")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("bean")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("transactionManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("org.springframework.jdbc.datasource.DataSourceTransactionManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("property")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("dataSource"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("ref")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("dataSource"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("bean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("h2",{attrs:{id:"用-transactional-注解声明式地管理事务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用-transactional-注解声明式地管理事务"}},[a._v("#")]),a._v(" 用 @Transactional 注解声明式地管理事务")]),a._v(" "),e("p",[a._v("除了在带有切入点, 通知和增强器的 Bean 配置文件中声明事务外, Spring 还允许简单地用"),e("code",[a._v("@Transactional")]),a._v("注解来标注事务方法.")]),a._v(" "),e("p",[a._v("为了将方法定义为支持事务处理的, 可以为方法添加"),e("code",[a._v("@Transactional")]),a._v(" 注解. 根据 Spring AOP 基于代理机制, 只能标注公有方法.")]),a._v(" "),e("p",[a._v("可以在方法或者类级别上添加"),e("code",[a._v("@Transactional")]),a._v("注解. 当把这个注解应用到类上时, 这个类中的所有公共方法都会被定义成支持事务处理的.")]),a._v(" "),e("p",[a._v("在 Bean 配置文件中只需要启用 "),e("code",[a._v("<tx:annotation-driven>")]),a._v("元素, 并为之指定事务管理器就可以了.")]),a._v(" "),e("p",[a._v("如果事务处理器的名称是 transactionManager, 就可以在"),e("code",[a._v("<tx:annotation-driven>")]),a._v("元素中省略 transaction-manager 属性. 这个元素会自动检测该名称的事务处理器.")]),a._v(" "),e("p",[a._v("当事务方法被另一个事务方法调用时, 必须指定事务应该如何传播. 例如: 方法可能继续在现有事务中运行, 也可能开启一个新事务, 并在自己的事务中运行.")]),a._v(" "),e("p",[a._v("使用Propagation指定事务的传播行为，及当前的事务方法被另外一个事务方法调用时，如何使用事务。默认取值为REQUIRED，即调用方法的事务。默认情况下spring 的声明式事务对所有的运行时异常进行回滚，也可以对事务的属性进行设置")]),a._v(" "),e("p",[a._v("默认情况下只有未检查异常(RuntimeException和Error类型的异常)会导致事务回滚. 而受检查异常不会.\n事务的回滚规则可以通过 @Transactional 注解的 rollbackFor 和 noRollbackFor 属性来定义. 这两个属性被声明为 Class[] 类型的, 因此可以为这两个属性指定多个异常类.\nrollbackFor:  遇到时必须进行回滚\nnoRollbackFor: 一组异常类，遇到时必须不回滚")]),a._v(" "),e("h2",{attrs:{id:"超时和只读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#超时和只读"}},[a._v("#")]),a._v(" 超时和只读")]),a._v(" "),e("p",[a._v("由于事务可以在行和表上获得锁,  因此长事务会占用资源, 并对整体性能产生影响.\n如果一个事物只读取数据但不做修改, 数据库引擎可以对这个事务进行优化.\n超时事务属性: 事务在强制回滚之前可以保持多久. 这样可以防止长期运行的事务占用资源.\n只读事务属性: 表示这个事务只读取数据但不更新数据, 这样可以帮助数据库引擎优化事务.")]),a._v(" "),e("h1",{attrs:{id:"spring整合hibernate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring整合hibernate"}},[a._v("#")]),a._v(" spring整合hibernate")]),a._v(" "),e("h2",{attrs:{id:"整合什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#整合什么"}},[a._v("#")]),a._v(" 整合什么")]),a._v(" "),e("ol",[e("li",[a._v("用Ioc容器来管理hibernate的sessionFactory")]),a._v(" "),e("li",[a._v("让hibernate使用上spring的声明式事务")])]),a._v(" "),e("h2",{attrs:{id:"spring-hibernate事务流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-hibernate事务流程"}},[a._v("#")]),a._v(" spring  hibernate事务流程")]),a._v(" "),e("p",[a._v("在方法之前")]),a._v(" "),e("ol",[e("li",[a._v("获取Session")]),a._v(" "),e("li",[a._v("把Session和当前线程绑定，就可以在Dao中使用SessionFactory的getCurrentSession()的方法来获取Session")]),a._v(" "),e("li",[a._v("开启事务")])]),a._v(" "),e("p",[a._v("若方法正常，没有出现异常")]),a._v(" "),e("ol",[e("li",[a._v("提交事务")]),a._v(" "),e("li",[a._v("和当前线程绑定的Session解除绑定")]),a._v(" "),e("li",[a._v("关闭Session")])]),a._v(" "),e("p",[a._v("若方法出现异常：")]),a._v(" "),e("ol",[e("li",[a._v("回滚事务")]),a._v(" "),e("li",[a._v("和当前线程绑定的Session解除绑定")]),a._v(" "),e("li",[a._v("关闭Session")])])])}),[],!1,null,null,null);t.default=n.exports}}]);