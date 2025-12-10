import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AllBackButton } from '../../all-back-button/all-back-button';
import { BackHome } from '../back-home/back-home';

@Component({
  selector: 'app-user-profile',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, AllBackButton, BackHome],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {

}
