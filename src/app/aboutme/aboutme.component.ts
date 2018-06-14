import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  repos = [
    {
      title: 'RestfulService',
      description: 'Demo project on building a Restful service using spring Rest and Hibernate.',
      updated: 'Updated on Mar 23, 2018'
    },
    {
      title: 'HibernateDemo',
      description: 'Demo project on Hibernate ORM tool to connect DB using annotaions and mapping strategies.',
      updated: 'Updated on Apr 3, 2018'
    },
    {
      title: 'SpringAnnotations',
      description: 'Demo project showcasing spring annotation configuration using version 5.',
      updated: 'Updated on Apr 6, 2018'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
