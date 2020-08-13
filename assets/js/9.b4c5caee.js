(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{234:function(e,t,a){e.exports=a.p+"assets/img/httpsercurity-configuration.044a3fd4.png"},235:function(e,t,a){e.exports=a.p+"assets/img/spring-sercurity-spel.8ca4c072.png"},236:function(e,t,a){e.exports=a.p+"assets/img/spring-environment-property.3420247e.png"},237:function(e,t,a){e.exports=a.p+"assets/img/spring-resttemplate-operations.47fbbd0e.png"},238:function(e,t,a){e.exports=a.p+"assets/img/spring-message-converter.134c6805.png"},239:function(e,t,a){e.exports=a.p+"assets/img/rabbitmq-broker.93a36e7a.png"},240:function(e,t,a){e.exports=a.p+"assets/img/kafka-cluster.ce9ec672.png"},241:function(e,t,a){e.exports=a.p+"assets/img/reactor-flow-diagram.15837a26.png"},314:function(e,t,a){"use strict";a.r(t);var n=a(6),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"foundation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#foundation"}},[e._v("#")]),e._v(" Foundation")]),e._v(" "),n("p",[e._v("SpringFramework was introduced in Rod Johnson’s book, Expert One-on-One J2EE Designand Development")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("@Configuration")]),e._v(" annotation indicates to Spring that this is a configuration classthat will provide beans to the Spring application context.")]),e._v(" "),n("p",[n("code",[e._v("@Bean")]),e._v(" indicating that the objects they return should be addedas beans in the application context (where, by default, their respective bean IDs willbe the same as the names of the methods that define them)")]),e._v(" "),n("p",[n("code",[e._v("spring-boot-starter-parent")]),e._v(" as its parentPOM. Among other things, this parent POM provides dependency management forseveral libraries commonly used in Spring projects.")]),e._v(" "),n("p",[n("code",[e._v("@WebMvcTest")]),e._v(" is a special test annotation provided by Spring Boot that arranges for the test to run inthe context of a Spring MVC application")]),e._v(" "),n("p",[e._v("Spring boot DevTools:")]),e._v(" "),n("ul",[n("li",[e._v("Automatic application restart when code changes")]),e._v(" "),n("li",[e._v("Automatic browser refresh when browser-destined resource change")]),e._v(" "),n("li",[e._v("Automatic disable of template caches")]),e._v(" "),n("li",[e._v("Built in H2 Console if the H2 database is in use")])]),e._v(" "),n("h3",{attrs:{id:"spring-mvc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc"}},[e._v("#")]),e._v(" Spring MVC")]),e._v(" "),n("p",[e._v("To apply validation in Spring MVC, you need to:")]),e._v(" "),n("ul",[n("li",[e._v("Declare validation rules on the class that is to be validated")]),e._v(" "),n("li",[e._v("Specify that validation should be performed in the controller methods thatrequire validation")]),e._v(" "),n("li",[e._v("Modify the form views to display validation errors")])]),e._v(" "),n("p",[e._v("To validate a domain, you need to add the Java Bean Validation API's "),n("code",[e._v("@Valid")]),e._v(" annatation")]),e._v(" "),n("p",[e._v("Thymeleaf offers convenient access to the Errors object via the fields property andwith its th:errors attribute.")]),e._v(" "),n("p",[e._v("By default, templates are only parsed once, when they’re first used, and the resultsof that parse are cached for subsequent use.")]),e._v(" "),n("h3",{attrs:{id:"spring-data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-data"}},[e._v("#")]),e._v(" Spring Data")]),e._v(" "),n("p",[e._v("wo ways to save data with JdbcTemplate include the following:")]),e._v(" "),n("ul",[n("li",[e._v("irectly, using the "),n("code",[e._v("update()")]),e._v(" method")]),e._v(" "),n("li",[e._v("sing the "),n("code",[e._v("SimpleJdbcInsert")]),e._v(" wrapper classListing")])]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("update()")]),e._v(" method,used when saving ingredient data, doesn’t help you get at the generated ID")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("update()")]),e._v(" method you need accepts a "),n("code",[e._v("PreparedStatementCreator")]),e._v(" and a "),n("code",[e._v("Key-Holder")]),e._v(". It’s the "),n("code",[e._v("KeyHolder")]),e._v(" that will provide the generated taco ID. But in order to useit, you must also create a "),n("code",[e._v("PreparedStatementCreator")])]),e._v(" "),n("p",[e._v("JPA requires that entities have a no-arguments constructor")]),e._v(" "),n("h3",{attrs:{id:"spring-security"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-security"}},[e._v("#")]),e._v(" Spring Security")]),e._v(" "),n("p",[e._v("By doing nothing more than adding the security starter to the project build, youget the following security features:")]),e._v(" "),n("ul",[n("li",[e._v("All HTTP request paths require authentication")]),e._v(" "),n("li",[e._v("No specific roles or authorities are required")]),e._v(" "),n("li",[e._v("There’s no login page")]),e._v(" "),n("li",[e._v("Authentication is prompted with HTTP basic authentication")]),e._v(" "),n("li",[e._v("There’s only one user; the username is user")])]),e._v(" "),n("p",[e._v("Spring Security offers several options for configuring a user store,including these:")]),e._v(" "),n("ul",[n("li",[e._v("An in-memory user store")]),e._v(" "),n("li",[e._v("A JDBC-based user store")]),e._v(" "),n("li",[e._v("An LDAP-backed user store")]),e._v(" "),n("li",[e._v("A custom user details service")])]),e._v(" "),n("p",[n("code",[e._v("UserDetailsService")]),e._v("'s "),n("code",[e._v("loadByUsername()")]),e._v(" method has one simple rule: it must never return null.")]),e._v(" "),n("p",[e._v("有关用户配置信息的配置类位于"),n("code",[e._v("WebSercurityConfigurerAdater")]),e._v("中")]),e._v(" "),n("p",[e._v("Among the many things you can con-figure with HttpSecurity are these：")]),e._v(" "),n("ul",[n("li",[e._v("Requiring that certain security conditions be met before allowing a request tobe served")]),e._v(" "),n("li",[e._v("Configuring a custom login page")]),e._v(" "),n("li",[e._v("Enabling users to log out of the application")]),e._v(" "),n("li",[e._v("Configuring cross-site request forgery protection")])]),e._v(" "),n("p",[n("img",{attrs:{src:a(234),alt:"Configuration methods to define how a path is to be secured"}})]),e._v(" "),n("p",[n("img",{attrs:{src:a(235),alt:"Spring Security extensions to the Spring Expression Language"}})]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("and()")]),e._v(" method signifies that you’refinished with the authorization configuration and are ready to apply some addi-tional HTTP configuration.")]),e._v(" "),n("p",[e._v("By default, Spring Security listens for login requests at "),n("code",[e._v("/login")]),e._v(" and expects that the username and password fields be named "),n("code",[e._v("username")]),e._v(" and "),n("code",[e._v("password")]),e._v(".")]),e._v(" "),n("p",[e._v("Spring Security listen for requests to "),n("code",[e._v("/authenticate")]),e._v(" to handle login submissions.")]),e._v(" "),n("p",[e._v("There are several ways to determine who the user is. These are a few of the mostcommon ways:")]),e._v(" "),n("ul",[n("li",[e._v("Inject a "),n("code",[e._v("Principal")]),e._v(" object into the controller method")]),e._v(" "),n("li",[e._v("Inject an "),n("code",[e._v("Authentication")]),e._v(" object into the controller method")]),e._v(" "),n("li",[e._v("Use "),n("code",[e._v("SecurityContextHolder")]),e._v(" to get at the security context")]),e._v(" "),n("li",[e._v("Use an "),n("code",[e._v("@AuthenticationPrincipal")]),e._v(" annotated method")])]),e._v(" "),n("h3",{attrs:{id:"configuration-properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration-properties"}},[e._v("#")]),e._v(" Configuration properties")]),e._v(" "),n("p",[e._v("It’s important to establishthat there are two different (but related) kinds of configurations in Spring:")]),e._v(" "),n("ul",[n("li",[e._v("Bean wiring")]),e._v(" "),n("li",[e._v("Property injection")])]),e._v(" "),n("p",[e._v("The Spring environment abstraction is a one-stop shop for any configurable property.")]),e._v(" "),n("p",[e._v("The Spring environment pulls from several propertysources, including:")]),e._v(" "),n("ul",[n("li",[e._v("JVM system properties")]),e._v(" "),n("li",[e._v("Operation system environment variables")]),e._v(" "),n("li",[e._v("Command-line arguments")]),e._v(" "),n("li",[e._v("Application property configuration files")])]),e._v(" "),n("p",[n("img",{attrs:{src:a(236),alt:"The Spring environment pulls properties from property sources and makes them available to beans in the application context"}})]),e._v(" "),n("p",[e._v("To support property injection of configuration properties, Spring Boot providesthe @ConfigurationProperties annotation. When placed on any Spring bean, itspecifies that the properties of that bean can be injected from properties in theSpring environment.")]),e._v(" "),n("p",[e._v("the "),n("code",[e._v("@Profile")]),e._v(" annotation can designate beans as onlybeing applicable to a given profile")]),e._v(" "),n("h2",{attrs:{id:"integrated-spring"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#integrated-spring"}},[e._v("#")]),e._v(" Integrated Spring")]),e._v(" "),n("h3",{attrs:{id:"restfull"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#restfull"}},[e._v("#")]),e._v(" RESTFull")]),e._v(" "),n("p",[n("code",[e._v("@CrossOrigin")]),e._v(" allows clients from any domain to consume the API")]),e._v(" "),n("p",[n("code",[e._v("@RequestBody")]),e._v(" annotation ensures that JSON in therequest body")]),e._v(" "),n("p",[e._v("It’s always a good idea to use "),n("code",[e._v("@ResponseStatus")]),e._v(" where appropriate to communicate the most descriptive and accurate HTTP status code to the client")]),e._v(" "),n("h3",{attrs:{id:"hatoas"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hatoas"}},[e._v("#")]),e._v(" HATOAS")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("Resource")]),e._v(" type represents a single resource, whereas "),n("code",[e._v("Resources")]),e._v(" is a collection of resources.")]),e._v(" "),n("p",[n("code",[e._v("ResourceSupport")]),e._v(" to inherit a list of Link object and methods to manage the list of links")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("@Relation")]),e._v(" annotation can help break the coupling between the JSON fieldname and the resource type class names as defined in Java.")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("@RestResource")]),e._v(" annotation lets you give the entity any relation name and pathyou want.")]),e._v(" "),n("h3",{attrs:{id:"spring-data-rest"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-data-rest"}},[e._v("#")]),e._v(" Spring Data REST")]),e._v(" "),n("p",[e._v("their endpoints seem somewhatdetached from the Spring Data REST endpoints in a couple of ways:")]),e._v(" "),n("ul",[n("li",[e._v("Your own controller endpoints aren’t mapped under Spring Data REST’s basepath.")]),e._v(" "),n("li",[e._v("Any endpoints you define in your own controllers won’t be automaticallyincluded as hyperlinks in the resources returned by Spring Data REST end-points.")])]),e._v(" "),n("h3",{attrs:{id:"spring-resttemplate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-resttemplate"}},[e._v("#")]),e._v(" Spring RestTemplate")]),e._v(" "),n("p",[e._v("A Spring application can consume a REST API with:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("RestTemplate")]),e._v(" — A straightforward, synchronous REST client provided by thecore Spring Framework.")]),e._v(" "),n("li",[n("code",[e._v("Traverson")]),e._v(" — A hyperlink-aware, synchronous REST client provided by Spring HATEOAS. Inspired from a JavaScript library of the same name.")]),e._v(" "),n("li",[n("code",[e._v("WebClient")]),e._v(" — A reactive, asynchronous REST client introduced in Spring 5.")])]),e._v(" "),n("p",[n("img",{attrs:{src:a(237),alt:"RestTemplate operations"}})]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("ResponseEntity")]),e._v(" gives access toadditional response details, such as the response headers.")]),e._v(" "),n("h2",{attrs:{id:"async-message"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#async-message"}},[e._v("#")]),e._v(" Async Message")]),e._v(" "),n("h3",{attrs:{id:"jms"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jms"}},[e._v("#")]),e._v(" JMS")]),e._v(" "),n("p",[e._v("Spring supports JMS through a template-based abstraction known as "),n("code",[e._v("JmsTemplate")]),e._v(".")]),e._v(" "),n("p",[e._v("Each of these three method categories is composed of three overriding methods that are distinguished by how the JMS destination (queue or topic) isspecified:")]),e._v(" "),n("ul",[n("li",[e._v("One method accepts no destination parameter and sends the message to adefault destination.")]),e._v(" "),n("li",[e._v("One method accepts a "),n("code",[e._v("Destination")]),e._v(" object that specifies the destination forthe message.")]),e._v(" "),n("li",[e._v("One method accepts a "),n("code",[e._v("String")]),e._v(" that specifies the destination for the messageby name.")])]),e._v(" "),n("p",[e._v("Specifying the destination with a "),n("code",[e._v("Destination")]),e._v(" object like this affords you the opportunity to configure the "),n("code",[e._v("Destination")]),e._v(" with more than just the destination name.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(238),alt:"Spring Message Converter"}})]),e._v(" "),n("h3",{attrs:{id:"rabbitmq-and-amqp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-and-amqp"}},[e._v("#")]),e._v(" RabbitMQ and AMQP")]),e._v(" "),n("p",[e._v("AMQP messages are addressed with the name of an exchange and a routing key, which are decoupled from the queue that the receiver is listening to.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(239),alt:"RabbitMQ broker"}})]),e._v(" "),n("p",[e._v("There are several different kinds of exchanges, including the following:")]),e._v(" "),n("ul",[n("li",[e._v("Default — A special exchange that’s automatically created by the broker. It routes messages to queues whose name is the same as the message’s routing key. All queues will automatically be bound to the default exchange.")]),e._v(" "),n("li",[e._v("Direct — Routes messages to a queue whose binding key is the same as the mes-sage’s routing key.")]),e._v(" "),n("li",[e._v("Topic — Routes a message to one or more queues where the binding key (whichmay contain wildcards) matches the message’s routing key.")]),e._v(" "),n("li",[e._v("Fanout — Routes messages to all bound queues without regard for binding keysor routing keys.")]),e._v(" "),n("li",[e._v("Headers — Similar to a topic exchange, except that routing is based on message header values rather than routing keys.")]),e._v(" "),n("li",[e._v("Dead letter — A catch-all for any messages that are undeliverable (meaning they don’t match any defined exchange-to-queue binding)")])]),e._v(" "),n("p",[e._v("Spring offers several message converters for RabbitTemplate, includingthe following:")]),e._v(" "),n("ul",[n("li",[e._v("Jackson2JsonMessageConverter — Converts objects to and from JSON usingthe Jackson 2 JSON processor")]),e._v(" "),n("li",[e._v("MarshallingMessageConverter — Converts using a Spring Marshaller and Unmarshaller")]),e._v(" "),n("li",[e._v("SerializerMessageConverter — Converts String and native objects of anykind using Spring’s Serializer and Deserializer abstractions")]),e._v(" "),n("li",[e._v("SimpleMessageConverter — Converts String, byte arrays, and Serializable types")]),e._v(" "),n("li",[e._v("ContentTypeDelegatingMessageConverter — Delegates to another Message-Converter based on the contentType header")]),e._v(" "),n("li",[e._v("MessagingMessageConverter — Delegates to an underlying MessageConverterfor the message conversion and to an "),n("code",[e._v("AmqpHeaderConverter")]),e._v(" for the headers")])]),e._v(" "),n("p",[e._v("For "),n("code",[e._v("message-driven")]),e._v(" RabbitMQ beans, Spring offers "),n("code",[e._v("RabbitListener")]),e._v(", the RabbitMQ counterpart to "),n("code",[e._v("JmsListener")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"kafka"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kafka"}},[e._v("#")]),e._v(" Kafka")]),e._v(" "),n("p",[n("img",{attrs:{src:a(240),alt:"Kafka cluster"}})]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("topic")]),e._v(" and "),n("code",[e._v("payload")]),e._v(" are the two most important parameters.")]),e._v(" "),n("h3",{attrs:{id:"spring-integration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-integration"}},[e._v("#")]),e._v(" Spring Integration")]),e._v(" "),n("p",[n("code",[e._v("@MessagingGateway")]),e._v(" is tells Spring Integration to generate an implementation of this interfaceat runtime—similar to how Spring Data automatically generates implementations ofrepository interfaces.")]),e._v(" "),n("p",[e._v("Three configuration options for declaring integration flows include these:")]),e._v(" "),n("ul",[n("li",[e._v("XML configuration")]),e._v(" "),n("li",[e._v("Java configuration")]),e._v(" "),n("li",[e._v("Java configuration with a DSL")])]),e._v(" "),n("p",[e._v("The role each of these com-ponents plays in an integration flow:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("Channels")]),e._v(" ——Pass messages from one element to another.")]),e._v(" "),n("li",[n("code",[e._v("Filters")]),e._v("— Conditionally allow messages to pass through the flow based on somecriteria.")]),e._v(" "),n("li",[n("code",[e._v("Transformers")]),e._v("—Change message values and/or convert message payloads fromone type to another.")]),e._v(" "),n("li",[n("code",[e._v("Routers")]),e._v("—Direct messages to one of several channels, typically based on mes-sage headers.")]),e._v(" "),n("li",[n("code",[e._v("Splitters")]),e._v("—Split incoming messages into two or more messages, each sent to dif-ferent channels.")]),e._v(" "),n("li",[n("code",[e._v("Aggregators")]),e._v("—The opposite of splitters, combining multiple messages coming infrom separate channels into a single message.")]),e._v(" "),n("li",[n("code",[e._v("Service activators")]),e._v("—Hand a message off to some Java method for processing, andthen publish the return value on an output channel.")]),e._v(" "),n("li",[n("code",[e._v("Channel adapters")]),e._v("—Connect a channel to some external system or transport. Caneither accept input or write to the external system.")]),e._v(" "),n("li",[n("code",[e._v("Gateways")]),e._v("—Pass data into an integration flow via an interface.")])]),e._v(" "),n("p",[e._v("Spring Integration provides several channel implementations, including these:")]),e._v(" "),n("ul",[n("li",[e._v("PublishSubscribeChannel—Messages published into a PublishSubscribe-Channel are passed on to one or more consumers.")]),e._v(" "),n("li",[e._v("QueueChannel—Messages published into a QueueChannel are stored in a queueuntil pulled by a consumer in a first in, first out (FIFO) fashion. If there aremultiple consumers, only one of them receives the message.")]),e._v(" "),n("li",[e._v("PriorityChannel—Like QueueChannel but, rather than FIFO behavior, mes-sages are pulled by consumers based on the message priority header.")]),e._v(" "),n("li",[e._v("RendezvousChannel—Like QueueChannel except that the sender blocks thechannel until a consumer receives the message, effectively synchronizing thesender with the consumer.")]),e._v(" "),n("li",[e._v("DirectChannel—Like PublishSubscribeChannel but sends a message to a sin-gle consumer by invoking the consumer in the same thread as the sender. Thisallows for transactions to span across the channel.")]),e._v(" "),n("li",[e._v("ExecutorChannel—Similar to DirectChannel but the message dispatch occursvia a TaskExecutor, taking place in a separate thread from the sender. Thischannel type doesn’t support transactions that span the channel.")]),e._v(" "),n("li",[e._v("FluxMessageChannel—A Reactive Streams Publisher message channel based onProject Reactor’s Flux. (We’ll talk more about Reactive Streams, Reactor, andFlux in chapter 10.)")])]),e._v(" "),n("p",[e._v("Filters can be placed in the midst of an integration pipeline to allow or disallow mes-sages from proceeding to the next step in the flow")]),e._v(" "),n("p",[e._v("Transformers perform some operation on messages, typically resulting in a differentmessage and, possibly, with a different payload type")]),e._v(" "),n("p",[e._v("Routers, based on some routing criteria, allow for branching in an integration flow,directing messages to different channels")]),e._v(" "),n("p",[e._v("in an integration flow it can be useful to split a message into multiple mes-sages to be handled independently.")]),e._v(" "),n("p",[e._v("Service activators receive messages from an input channel and send those messages toan implementation of "),n("code",[e._v("MessageHandler")])]),e._v(" "),n("p",[e._v("Gateways are the means by which an application can submit data into an integrationflow and, optionally, receive a response that’s the result of the flow. Implemented bySpring Integration, gateways are realized as interfaces that the application can call tosend messages to the integration flow")]),e._v(" "),n("p",[e._v("Channel adapters represent the entry and exit points of an integration flow. Dataenters an integration flow by way of an inbound channel adapter and exits an integra-tion flow by way of an outbound channel adapter.")]),e._v(" "),n("h2",{attrs:{id:"reactive-spring"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reactive-spring"}},[e._v("#")]),e._v(" Reactive Spring")]),e._v(" "),n("h3",{attrs:{id:"intrdution"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intrdution"}},[e._v("#")]),e._v(" Intrdution")]),e._v(" "),n("p",[e._v("As we develop application code, there are two styles of code we can write:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("Imperative")])]),e._v(" "),n("li",[n("code",[e._v("Reactive")])])]),e._v(" "),n("p",[n("img",{attrs:{src:a(241),alt:"Mono and Flux diagram"}})]),e._v(" "),n("p",[e._v("Between Flux and Mono, there are over 500 operations, each of which can be loosely categorized as:")]),e._v(" "),n("ul",[n("li",[e._v("Creation operations")]),e._v(" "),n("li",[e._v("Combination operations")]),e._v(" "),n("li",[e._v("Transformation operations")]),e._v(" "),n("li",[e._v("Logic operation")])]),e._v(" "),n("h3",{attrs:{id:"flux-operation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flux-operation"}},[e._v("#")]),e._v(" Flux operation")]),e._v(" "),n("p",[e._v("Whereas "),n("code",[e._v("skip()")]),e._v(" skipsthe first few items, "),n("code",[e._v("take()")]),e._v(" only emits the first so many items")])])}),[],!1,null,null,null);t.default=s.exports}}]);