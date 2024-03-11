import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  visible: boolean = false;
  form: UntypedFormGroup | any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createFrorm();
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
