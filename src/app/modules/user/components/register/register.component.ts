import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  imageURL?: string;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: this.fb.control('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      avatar: [null],
    });
  }

  showPreview(event: Event) {
    // @ts-ignore
    const file = (event.target as HTMLInputElement).files[0];
    this.registerForm.patchValue({
      avatar: file,
    });
    // @ts-ignore
    this.registerForm.get('avatar').updateValueAndValidity();

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  createUser() {
    const { username, password, email, avatar } = this.registerForm.value;
    console.log(username, password, email);
  }
  cancel() {
    this.router.navigate(['']);
  }
}
