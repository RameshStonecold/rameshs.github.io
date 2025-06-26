---
layout: post # Use the default post layout, or 'springboot_post' if you create one
title: "Top most spring boot repeated interview Questions and answers"
categories: Spring Boot # Example categories
tags: [Interview QAns] # All Spring boot tags   [ Spring Boot Tutorials, Interview QAns, Challenges]
---


## Top most repeated interview Questions and answers

#### 1) What is Spring boot ? why it important ?
Ans: Spring boot is one of the modules of spring io project which was built on the top spring framework. Spring Boot is 
an opinionated framework that simplifies the development of production-ready, stand-alone Spring applications by providing 
convention-over-configuration, embedded servers, and easy dependency management. Spring boot is mostly used microservices 
project where quick setup of applications offering many advantages such as:

Easy to use: Spring Boot reduces the amount of boilerplate code required to construct a Spring application.
Rapid Development: Spring Boot’s opinionated approach and auto-configuration allow developers to create apps quickly without
the need for time-consuming setup, reducing development time.
Scalable: Spring Boot applications are designed to be scalable. This means that they may be easily scaled up or down to meet
your application’s requirements.
Production-ready: Spring Boot contains capabilities such as metrics, health checks, and externalized configuration, all of which
are intended for usage in production situations.


#### 2) Most important feature of Spring Boot?
Ans: Auto-configuration is arguably its most important feature, as it automatically configures your Spring application 
based on the dependencies present on the classpath, significantly reducing boilerplate configuration.

#### 4) Define the Key Components of Spring Boot.
Ans: The key components of Spring Boot are given below:
a) Spring Boot Starters
b) Auto-configuration
c) Spring Boot Actuator
d) Spring Boot CLI for Embedded Servers

#### 5) What are the bean scopes in Spring Boot?
Ans: The standard Spring bean scopes also apply to Spring Boot:
Singleton: (Default) One single instance per Spring IoC container.
Prototype: A new instance is created every time it's requested.
Request: (Web-aware) A new instance per HTTP request.
Session: (Web-aware) A new instance per HTTP session.
Application/GlobalSession: (Web-aware, Portlet context) A single instance per ServletContext or PortletContext.
WebSocket: (Spring 4.0+) A single instance per WebSocket session.

#### 6) What are the annotations you used in Spring Boot?
Ans: Commonly used annotations include:
 @SpringBootApplication
 @RestController
 @Controller
 @Service
 @Repository
 @Component
 @Autowired
 @Qualifier
 @Primary
 @Value
 @RequestMapping
 @GetMapping, @PostMapping, etc.
 @PathVariable
 @RequestBody
 @ResponseBody
 @Configuration
 @Bean
 @Profile
 @EnableAutoConfiguration
 @ComponentScan

#### 7) Difference between @Controller and @Component?
@Component: A generic stereotype annotation indicating that a class is a Spring component and should be picked up by 
component scanning.
@Controller: A specialized @Component used for web controllers, making them capable of handling web requests and 
returning views or data. It also allows for @RequestMapping and related annotations.

#### 8) Difference between @Qualifier vs @Primary?
Ans: Both are used to resolve ambiguity when multiple beans of the same type exist:
@Primary: Designates a single bean as the primary candidate when multiple beans of the same type are available for 
autowiring. It acts as a default choice.
@Qualifier: Provides a specific name to a bean. When autowiring, you can use @Qualifier("beanName") to explicitly 
specify which bean to inject, overriding the @Primary designation.

#### 9) How does @ResponseBody work internally?
Ans:  @ResponseBody on a method indicates that the return value of the method should be bound directly to the web response 
body. Internally, Spring uses HttpMessageConverter implementations (e.g., MappingJackson2HttpMessageConverter
for JSON) to convert the Java object returned by the method into the appropriate format (e.g., JSON, XML) and write it
to the HTTP response stream.

#### 10) What is the use of @Profile annotation?
Ans:  @Profile is used to indicate that a component or @Configuration class is only eligible for registration when 
one or more specified profiles are active. This allows you to configure different beans or configurations for different 
environments (e.g., dev, test, prod).

#### 11) What is the difference between @Bean vs @Component ?
Ans: @Component: A general-purpose stereotype annotation applied to classes to mark them as Spring-managed components. 
Spring's component scanning will discover these classes and register them as beans.
@Bean: A method-level annotation typically used within @Configuration classes. It indicates that a method produces a bean
that should be managed by the Spring IoC container. It's used when you need to programmatically create or configure a bean,
especially for third-party libraries or complex setups.

#### 12) What is Spring Boot Actuator?
Ans: Spring Boot Actuator provides production-ready features to monitor and manage your application. It exposes endpoints
(e.g., /health, /info, /metrics, /beans, /env) that provide insights into your application's health, configuration, performance,
and more.

#### 13) What are the Features of Spring Boot?
Ans: Spring Boot includes several important features. A few of them are listed below:

Auto-configuration: Spring Boot automatically configures dependencies using the @EnableAutoconfiguration annotation, 
reducing boilerplate code.
Spring Boot Starter POM: These POMs provide pre-configured dependencies for functions such as database, security, and 
Maven setup.
Spring Boot CLI (Command Line Interface): This command line tool is mostly used for managing dependencies, creating projects,
and running apps.
Actuator: The Spring Boot Actuator performs health checks, collects metrics, and monitors application endpoints. It also 
facilitates troubleshooting management.
Embedded Servers: Spring Boot has embedded servers such as Tomcat and Jetty that allow applications to execute quickly. 
There is no need for external servers.

