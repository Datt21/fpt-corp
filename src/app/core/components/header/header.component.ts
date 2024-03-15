import {
  Component,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private fragment: string | any;
  form: UntypedFormGroup | any;
  menuVisible = false;
  hiddenMd = false;
  hiddenSm = false;
  visible: boolean = false;
  menuItems: any[] = [
    { label: 'Trang Chủ', value: '#home' },
    { label: 'Giới Thiệu', value: '#introduction' },
    { label: 'Sản Phẩm', value: '#production' },
    { label: 'Liên Hệ', value: '#contact' },
  ];
  activeItem: string | undefined;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createFrorm();
    this.hiddenMd = window.innerWidth > 768;
    this.activeItem = this.menuItems[0]?.value;
  }
  @HostListener('window:resize') onResize() {
    this.hiddenSm = false;
    this.hiddenMd = window.innerWidth > 768;
  }

  onMenuItemClick(item: string) {
    this.activeItem = item;
    setTimeout(() => {
      this.hiddenSm = !this.hiddenSm;
    }, 2000);
  }

  createFrorm() {
    this.form = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
    });
  }

  toggleMenu() {
    this.hiddenSm = !this.hiddenSm;
  }

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
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
    this.visible = false;
  }
}
