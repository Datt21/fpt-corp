import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import emailjs from '@emailjs/browser';
import {
  Featured_Products,
  LIST_ITEM_PRODUCT,
  LIST_ITEM_PRODUCT_SWITCH,
  Samples_Apartment,
  Typical_Projects,
} from '../../../shared/contanst/contants';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  UntypedFormGroup,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @ViewChild('videoPlayer')
  videoPlayer: ElementRef | any;
  form: UntypedFormGroup | any;
  formGroup: UntypedFormGroup | any;
  form_2: UntypedFormGroup | any;
  images: any[] | undefined;
  images_product: any[] | undefined;
  tab: number = 0;
  responsiveOptions: any[] | undefined;
  FeaturedProducts: any[];
  SamplesApartment: any[];
  List_Product: any[];
  Typical_Projects: any[];
  listProductSwitches: any[];
  visible: any;
  visible_switch: any;
  visible_popup: boolean = false;
  isSmScreen = false;
  apiLoaded = false;
  videoId = 'GUrXZQZuXcE';
  heightVideo: number | undefined;
  widthVideo: number | undefined;

  _activeIndex: number = 0;

  playerConfig = {
    controls: 0,
    mute: 1,
    autoplay: 1,
  };

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.FeaturedProducts = Featured_Products;
    this.SamplesApartment = Samples_Apartment;
    this.List_Product = LIST_ITEM_PRODUCT;
    this.Typical_Projects = Typical_Projects;
    this.visible = [];
    this.visible_switch = [];

    this.listProductSwitches = LIST_ITEM_PRODUCT_SWITCH;
  }

  ngOnInit() {
    this.createFrorm();
    this.isSmScreen = window.innerWidth <= 680;
    this.images = [
      {
        index: 0,
        itemImageSrc: '',
      },
      {
        index: 1,
        itemImageSrc: '../../../../assets/images/slide1.jpg',
      },
      {
        index: 2,
        itemImageSrc:
          '../../../../assets/images/1691569870-Trang-Chu-Website1920x680-resize.jpg',
      },
      {
        index: 3,
        itemImageSrc:
          '../../../../assets/images/1696234102-Trang-Chu-Website1920x680-fix.jpg',
      },
      {
        index: 4,
        itemImageSrc:
          '../../../../assets/images/1709517757-1920x680-copy-1.jpg',
      },
      {
        index: 5,
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

    this.formGroup = this.formBuilder.group({
      shape: [0],
      color: [0],
      buttonNumber: [0],
      capacity: [0],
    });
    this.form_2 = this.formBuilder.group({
      shape: [0],
      color: [0],
    });

    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://youtube.com/iframe_api';
    document.body.appendChild(scriptTag);
  }

  @HostListener('window:resize') onResize() {
    this.isSmScreen = window.innerWidth <= 680;
  }

  get activeIndex(): number {
    return this._activeIndex;
  }

  set activeIndex(newValue) {
    if (
      this.listProductSwitches[1].images &&
      0 <= newValue &&
      newValue <= this.listProductSwitches[1].images.length - 1
    ) {
      this._activeIndex = newValue;
      this.listProductSwitches[1].images.forEach((image: any) => {
        if (this._activeIndex === image.index) {
          this.formGroup.controls.shape.setValue(image.detail.shape);
          this.formGroup.controls.color.setValue(image.detail.color);
          this.formGroup.controls.buttonNumber.setValue(
            image.detail.buttonNumber
          );
          this.formGroup.controls.capacity.setValue(image.detail.capacity);
        }
      });
      this.listProductSwitches[0].images.forEach((image: any) => {
        if (this._activeIndex === image.index) {
          this.form_2.controls.shape.setValue(image.detail.shape);
          this.form_2.controls.color.setValue(image.detail.color);
        }
      });
    }
  }

  next() {
    this.activeIndex++;
  }

  prev() {
    this.activeIndex--;
  }

  ngAfterViewInit() {
    this.widthVideo = this.videoPlayer.nativeElement.offsetWidth;
    this.heightVideo = this.videoPlayer.nativeElement.offsetHeight;
    if (!this.isSmScreen) {
      this.heightVideo = this.videoPlayer.nativeElement.offsetHeight * 1.6;
    } else {
      this.heightVideo = this.videoPlayer.nativeElement.offsetHeight / 1.4;
    }
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

  selectOption(nameControl: string, value: any) {
    this.formGroup.controls[nameControl].setValue(value);
    this.listProductSwitches[1].images.forEach((image: any) => {
      if (
        JSON.stringify(image.detail) === JSON.stringify(this.formGroup.value)
      ) {
        this.activeIndex = image.index;
      }
    });
  }

  onReady(e: any): void {
    console.log(e, 'its ready');
  }

  selectOption_1(nameControl: string, value: any) {
    this.form_2.controls[nameControl].setValue(value);
    this.listProductSwitches[0].images.forEach((image: any) => {
      if (JSON.stringify(image.detail) === JSON.stringify(this.form_2.value)) {
        this.activeIndex = image.index;
      }
    });
  }
}
