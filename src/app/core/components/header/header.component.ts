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
import { MenuItem } from '../../models/menu.type';

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
  itemsMenu: MenuItem[] = [];
  activeItem: number = 0;
  menu: HTMLElement | any;
  subMenuElement: HTMLElement | any;
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

  createFrorm() {
    this.form = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
    });
  }

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }

  // menu responsive
  toggleMenu() {
    this.menu = document.querySelector('.menu') as HTMLElement;
    this.menu.classList.toggle('active');
    document.querySelector('.menu-overlay')?.classList.toggle('active');
  }

  subMenu(event: any) {
    const menu = document.querySelector('.menu');
    if (!menu?.classList.contains('active')) {
      return;
    }
    if (event.target.closest('.menu-item-has-children')) {
      const hasChildren = event.target.closest('.menu-item-has-children');
      this.showSubMenu(hasChildren);
    }
  }

  showSubMenu(hasChildren: any) {
    const menu = document.querySelector('.menu');
    this.subMenuElement = hasChildren.querySelector('.sub-menu');
    this.subMenuElement.classList.add('active');
    this.subMenuElement.style.animation = 'slideLeft 0.5s ease forwards';
    menu?.querySelector('.mobile-menu-head')?.classList.add('active');
    const menuTitle = hasChildren.querySelector('p').childNodes[0].textContent;
    if (menu && menu.querySelector('.current-menu-title')) {
      (menu.querySelector('.current-menu-title') as HTMLElement).innerHTML =
        menuTitle;
    }
  }

  hideSubMenu() {
    const menu = document.querySelector('.menu');
    this.subMenuElement.style.animation = 'slideRight 0.5s ease forwards';
    setTimeout(() => {
      this.subMenuElement.classList.remove('active');
    }, 300);
    if (menu && menu.querySelector('.current-menu-title')) {
      (menu.querySelector('.current-menu-title') as HTMLElement).innerHTML = '';
    }
    menu?.querySelector('.mobile-menu-head')?.classList.remove('active');
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
