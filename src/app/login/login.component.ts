// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";

  constructor(private router: Router) {}

  onLogin() {
    // Replace these hardcoded values with your actual login validation logic
    const validUsername = 'admin';
    const validPassword = 'password';

    // Check if the entered credentials are valid
    if (this.username === validUsername && this.password === validPassword) {
      // If the credentials are valid, navigate to the dashboard component
      this.router.navigate(['/dashboard']);
    } else {
      // If the credentials are invalid, show an error message or handle it as needed
      console.log('Invalid credentials. Please try again.');
    }
  }
}
