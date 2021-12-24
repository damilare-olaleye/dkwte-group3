import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Restaurant } from 'src/Restaurant';
import { IndexService } from '../index.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-display-restaurant',
  templateUrl: './display-restaurant.component.html',
  styleUrls: ['./display-restaurant.component.css']
})
export class DisplayRestaurantComponent implements OnInit {

constructor(public dialog: MatDialog, private httpClient: HttpClient, private elementRef: ElementRef, private indexService: IndexService, private router: Router) { }

@Input()
showResult!: boolean;

@Input()
loading: boolean = true;

dialogResult!: string;

@Input()
displayRandRestaurant!: Restaurant;

  ngOnInit(): void {
  }

  onAddNewReview() {
    let modalRef = this.dialog.open(ModalComponent, {
      width: '400px',
      height: '300px',
      data: 'Write Review for Restaurant'
    });

    modalRef.afterClosed().subscribe(result => {
      this.dialogResult = result;
    });
  }

}
