import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resources = [
    {
      title: 'JavaScript — Just another introduction to ES6',
      url: 'https://medium.com/sons-of-javascript/javascript-an-introduction-to-es6-1819d0d89a0f',
      updated: 'Feb 22, 2015'
    },
    {
      title: 'Angular 5— The Complete Guide',
      url: 'https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/content',
      updated: 'Apr 16, 2017'
    },
    {
      title: 'SpringBoot For Beginners',
      url: 'https://github.com/in28minutes/SpringBootForBeginners',
      updated: 'Dec 15, 2017'
    },
    {
      title: 'Spring & Hibernate for Beginners',
      url: 'https://www.udemy.com/spring-hibernate-tutorial/learn/v4/overview',
      updated: 'Mar 13, 2018'
    },
    {
      title: 'Master Microservices with Spring Boot and Spring Cloud',
      url: 'https://www.udemy.com/microservices-with-spring-boot-and-spring-cloud/learn/v4/content',
      updated: 'Dec 18, 2017'
    },
    {
      title: 'Materialize-CSS',
      url: 'https://materializecss.com/',
      updated: 'May 18, 2018'
    },
    {
      title: 'Java 8 Tutorial',
      url: 'http://winterbe.com/posts/2014/03/16/java-8-tutorial/',
      updated: 'Mar 16, 2014'
    },
    {
      title: 'Getting Started With PL/SQL',
      url: 'http://www.oracle.com/technetwork/database/features/plsql/index.html',
      updated: 'May 10, 2017'
    },
    {
      title: 'Bootstrap Getting started',
      url: 'https://getbootstrap.com/docs/3.3/getting-started/',
      updated: 'Feb 18, 2018'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
