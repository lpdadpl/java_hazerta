import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService, User } from '../user-data.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-purchase-history',
    imports: [CommonModule],
    templateUrl: './purchase-history.html',
    styleUrl: './purchase-history.css',
})
export class PurchaseHistory implements OnInit {
    usuario: User | undefined;

    constructor(
        private route: ActivatedRoute,
        private userDataService: UserDataService
    ) { }

    ngOnInit() {
        this.route.parent?.params.subscribe(params => {
            const userId = +params['userId'];
            this.usuario = this.userDataService.getUserById(userId);
        });
    }
}

