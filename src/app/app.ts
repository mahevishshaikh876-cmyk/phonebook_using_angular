import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  name: string = '';
  number: string = '';

  contacts: { name: string; number: string }[] = [];

  add() {
    if (this.name.trim() === '' || this.number.trim() === '') {
      alert('Please enter name and number.');
      return;
    }

    this.contacts.push({
      name: this.name,
      number: this.number
    });

    this.name = '';
    this.number = '';
  }

  update() {
    const contact = this.contacts.find(c => c.name === this.name);

    if (contact) {
      contact.number = this.number;
      alert('Contact Updated!');
    } else {
      alert('Contact Not Found!');
    }

    this.name = '';
    this.number = '';
  }

  delete() {
    const index = this.contacts.findIndex(c => c.name === this.name);

    if (index !== -1) {
      this.contacts.splice(index, 1);
      alert('Contact Deleted!');
    } else {
      alert('Contact Not Found!');
    }

    this.name = '';
    this.number = '';
  }
}