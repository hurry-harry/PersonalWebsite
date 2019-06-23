import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  currJobTitle = 'Junior Developer';
  currCompany: {[key: string]: string} = {
    'name': 'YouSource Inc',
    'link': 'https://www.you-source.com/'
  };
  currLocation: {[key: string]: string} = {
    'city': 'Makati City',
    'country': 'Philippines',
    'countryISO': 'PHL'
  }

  aboutDetailsMaxHeight: string;

  constructor() { }

  ngOnInit() {
    this.aboutDetailsMaxHeight = '0px';
  }

  aboutDetailsContent(): void {
    if (this.aboutDetailsMaxHeight === '0px') {
      this.aboutDetailsMaxHeight = document.getElementById('aboutDetailsContentTechStack').clientHeight.toString() + 'px';
    }
  } 

}
