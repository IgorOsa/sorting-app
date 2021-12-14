import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: this.fb.control('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  login() {
    const { username, password } = this.loginForm.value;

    if (username && password) {
      this.authService.login(username, password).subscribe(() => {
        // this.snackbarService.open('Logged  in.');
        this.router.navigateByUrl('/');
      });
    }
  }
}
