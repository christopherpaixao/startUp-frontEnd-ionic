import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  currentUser: any;

  constructor(private token: TokenStorageService) {}

  ngOnInit() {
    this.currentUser = this.token.getUser();
  }
}
