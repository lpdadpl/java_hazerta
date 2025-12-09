import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-home-ex3',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home-ex3.html',
  styleUrl: './home-ex3.css',
})
export class HomeEx3 implements OnInit {
  usuarios: any[] = [];

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    this.usuarios = this.userDataService.getAllUsers();
  }
}
