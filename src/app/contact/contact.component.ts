import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  code = [
    'Javascript',
    'Angular JS & 2+',
    'React JS',
    'Node JS',
    'JQuery',
    'Python',
    'Java',
    'HTML5',
    'CSS3'
  ];

  automation = [
    'Selenium Webdriver',
    'Protractor',
    'Cypress.io',
    'Jasmine',
    'BrowserStack',
    'PhantomJS',
    'Sikuli'
  ];

  configurations = [
    'Varnish VCL',
    'Fastly',
    'Git',
    'Google Analytics',
    'Optimizely',
    'Catchpoint',
    'Mongo DB'
  ];

  tools = [
    'Netlify',
    'Shippable',
    'Jenkins',
    'Jira',
    'Mantis',
    'Confluence',
    'Asana',
    'Pivotal Tracker'
  ];

  constructor() { }

  ngOnInit() {
  }

}
