---
layout: post # Use the default post layout
title: "Spring Boot microservices real time project tutorial"
categories: [Microservices] # Example categories
tags: [Microservices Tutorial] # All tags : Microservices Tutorial, Interview QAns, Challenges
---


## Spring Boot microservices real time project tutorial

#### Day 1 : Setup of Spring boot microservices 

In this tutorial we will see real time implementation of spring boot microservices with best practices. Today we 
will the setup of microservices with spring boot multi module project.

For to quick startup goto website https://start.spring.io provide a spring web dependency as given below image 

![alt text](/img/ms-day1-setup.png)

Download and extract into your intellij idea. Mostly i prefer Intellij Idea. I will use version control system as git.
So that all my projects are stored in github repository. Before creating a github repository we will create a project 
and then add our repository over there. I choose a Kanban project template which is best suits for me we can visualize 
all activities my issues drafts daily basis i move according to timeline. I created and added draft. You can see below image.

![alt text](/img/ms-day1-kanban-project.png)

#### Set up Eureka Server and Book Service as spring boot module

Next we will first create our Eureka Server. Now go to the starter website search for dependency

![alt text](/img/ms-day1-eureka-server.png)

Now download and extract in to our BookStore application and the same add one more project books service. I choose database as mysql

![alt text](/img/ms-day1-books-service-setup.png)



