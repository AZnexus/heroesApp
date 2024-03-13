import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  // el Subscribe va vincular a un Observable. Si es observable es necessari que es faci el subscribe
  onLogin(): void {
    this.authService.login('az@gmail.com', '12345')
      .subscribe( user => {
        this.router.navigate(['/'])
      })
  }
}
