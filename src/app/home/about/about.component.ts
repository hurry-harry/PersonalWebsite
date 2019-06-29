import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  currJobTitle = 'Junior Developer';
  currCompany: {[key: string]: string} = {
    name: 'YouSource Inc.',
    link: 'https://www.you-source.com/'
  };
  currLocation: {[key: string]: string} = {
    city: 'Makati City',
    country: 'Philippines',
    countryISO: 'PHL'
  };

  isToggledTechStackAccordion: boolean;
  isToggledWorkExpAccordion: boolean;

  constructor() { }

  ngOnInit() {
    this.isToggledTechStackAccordion = false;
    this.isToggledWorkExpAccordion = false;
  }

  toggleTechStackAccordion(): void {
    this.isToggledTechStackAccordion = !this.isToggledTechStackAccordion;
  }

  toggleWorkExpAccordion(): void {
    this.isToggledWorkExpAccordion = !this.isToggledWorkExpAccordion;
  }
}
