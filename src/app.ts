import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Contact {
  name: string;
  number: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './style.css'
})
export class App {

  contacts: Contact[] = [];

  name = '';
  number = '';

  editIndex: number | null = null;

  addContact() {

    if (this.name.trim() === '' || this.number.trim() === '') {
      alert("Please fill all fields");
      return;
    }

    if (this.editIndex === null) {

      this.contacts.push({
        name: this.name,
        number: this.number
      });

    } else {

      this.contacts[this.editIndex] = {
        name: this.name,
        number: this.number
      };

      this.editIndex = null;
    }

    this.clearForm();
  }

  editContact(index: number) {

    this.name = this.contacts[index].name;
    this.number = this.contacts[index].number;

    this.editIndex = index;
  }

  deleteContact(index: number) {

    this.contacts.splice(index, 1);

    if (this.editIndex === index) {
      this.clearForm();
    }
  }

  clearForm() {
    this.name = '';
    this.number = '';
    this.editIndex = null;
  }

}