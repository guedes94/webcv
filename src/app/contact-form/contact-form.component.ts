import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  isOpen = false;

  openForm() {
    this.isOpen = true;
  }

  closeForm() {
    this.isOpen = false;
  }

  onSubmit() {
    alert('Form submitted');
    this.closeForm();
  }
}
