import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    RouterLink,
    RouterModule,
    ContactFormComponent,
    NavBarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild(ContactFormComponent) contactFormComponent!: ContactFormComponent;
  animationCompleted = false;

  ngAfterViewInit() {
    // Supondo que a animação dura 3 segundos
    setTimeout(() => {
      this.animationCompleted = true;
    }, 3000); // 3000ms = 3s
  }

  openContactForm() {
    if (this.contactFormComponent) {
      this.contactFormComponent.openForm();
    }
  }
}
