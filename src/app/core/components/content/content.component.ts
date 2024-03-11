import { Component, HostListener, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';
import {
  Featured_Products,
  LIST_ITEM_PRODUCT,
  Samples_Apartment,
  Typical_Projects,
} from '../../../shared/contanst/contants';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  form: UntypedFormGroup | any;
  images: any[] | undefined;
  tab: number = 0;
  responsiveOptions: any[] | undefined;
  FeaturedProducts: any[];
  SamplesApartment: any[];
  List_Product: any[] | null;
  Typical_Projects: any[];
  visible: any;
  visible_popup: boolean = false;
  isSmScreen = false;
  apiLoaded = false;
  videoId = '';
  constructor(private formBuilder: FormBuilder) {
    this.FeaturedProducts = Featured_Products;
    this.SamplesApartment = Samples_Apartment;
    this.List_Product = LIST_ITEM_PRODUCT;
    this.Typical_Projects = Typical_Projects;
    this.visible = [];
  }

  ngOnInit() {
    this.createFrorm();
    this.isSmScreen = window.innerWidth <= 680;
    this.images = [
      {
        index: 0,
        itemImageSrc: '../../../../assets/images/slide1.jpg',
      },
      {
        index: 1,
        itemImageSrc:
          '../../../../assets/images/1691569870-Trang-Chu-Website1920x680-resize.jpg',
      },
      {
        index: 2,
        itemImageSrc:
          '../../../../assets/images/1696234102-Trang-Chu-Website1920x680-fix.jpg',
      },
      {
        index: 3,
        itemImageSrc:
          '../../../../assets/images/1709517757-1920x680-copy-1.jpg',
      },
      {
        index: 4,
        itemImageSrc: '../../../../assets/images/slide1.jpg',
      },
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];
  }

  @HostListener('window:resize') onResize() {
    this.isSmScreen = window.innerWidth <= 680;
  }

  createFrorm() {
    this.form = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
    });
  }

  selectTab(index: number) {
    this.tab = index;
  }

  showDialog(index: number) {
    this.visible[index] = true;
  }

  showDialogPopup() {
    this.visible_popup = true;
  }

  closeDialog() {
    this.visible_popup = false;
  }

  async submitForm() {
    emailjs.init('ywo6QgzjYu7mccLzi');
    let res = await emailjs.send('service_vkibbor', 'template_8kwrlji', {
      from_name: this.form.value?.name,
      to_name: 'Le Dinh Thang',
      name: this.form.value?.name,
      phone_number: this.form.value?.phone,
      email_customer: this.form.value?.email,
    });
    this.form.reset();
    this.visible_popup = false;
  }
}
