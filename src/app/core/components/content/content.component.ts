import { Component, OnInit } from '@angular/core';

import {
  NEWS,
  particlesOptions,
  PARTNERS,
  PRODUCTS,
  REASONS,
  SLICK_OPTIONS,
  SLIDES,
} from '../../../shared/contanst/contants';
import { loadSlim } from '@tsparticles/slim';
import { NgParticlesService } from '@tsparticles/angular';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  options: any;
  id: string = 'tsparticles';
  products: any[] = [];
  reasons: any[] = [];
  news: any[] = [];
  slickOptions: any;
  slides: any[] = [];
  partners: any[] = [];
  assetPrefix: string = '/fpt-corp-page/';
  constructor(private readonly ngParticlesService: NgParticlesService) {
    this.options = particlesOptions;
    this.products = PRODUCTS;
    this.reasons = REASONS;
    this.news = NEWS;
    this.slickOptions = SLICK_OPTIONS;
    this.slides = SLIDES;
    this.partners = PARTNERS;
  }

  ngOnInit() {
    this.ngParticlesService.init(async (engine) => {
      await loadSlim(engine);
    });
  }

  particlesLoaded(container: any): void {
    console.log(container);
  }

  slickInit(e: any) {}
}
