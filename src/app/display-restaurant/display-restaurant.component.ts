import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Restaurant } from 'src/Restaurant';
import { IndexService } from '../index.service';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalService } from '../modal.service';
import { DisplayReviews } from 'DisplayRestaurant';
import { ShowReviewsComponent } from '../show-reviews/show-reviews.component';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-display-restaurant',
  templateUrl: './display-restaurant.component.html',
  styleUrls: ['./display-restaurant.component.css']
})
export class DisplayRestaurantComponent implements OnInit {

  closeResult = '';

constructor(public dialog: MatDialog, private loginService: LoginService, private router: Router, private modalService: ModalService, private httpClient: HttpClient, private indexService: IndexService) { }

radius!: number;
errorMessage!: string;

restaurantId!: string;

rating!: string;

review!: string;

id!: number;


@Input()
showResult!: boolean;

@Input()
loading: boolean = true;

dialogResult!: string;

restaurantName!: string;
restaurantAddress!: string;

@Input()
displayRandRestaurant!: Restaurant;

@Input() displayReview: DisplayReviews[] = [];

 ngOnInit() {
   console.log(this.displayReview);
}


  async onAddNewReview() {
    let modalRef = this.dialog.open(ModalComponent, {
      width: '380px',
      height: '350px',
      data: 'New Restaurant Review'
    });

    // dont know what to put here without user inputing the id
    // this.modalService.restaurantById(12).subscribe((res) => {

    // this.modalService.restaurantByNameAndAddress(this.restaurantName, this.restaurantAddress).subscribe((res) => {

    // })

    modalRef.afterClosed().subscribe(result => {
      this.dialogResult = result;
    });

    // })
  }

  onDisplayReviews() {
    let modalRef = this.dialog.open(ShowReviewsComponent, {
      width: '6000px',
      height: '1500px',
      data: 'Reviews from Customers'

    });

    this.modalService.displayReviews().subscribe((res) => {
      let responseObj = <{body:DisplayReviews[]}><unknown>res
      this.displayReview = responseObj.body;
    })


    modalRef.afterClosed().subscribe(result => {
      this.dialogResult = result;
    });
  }

}
