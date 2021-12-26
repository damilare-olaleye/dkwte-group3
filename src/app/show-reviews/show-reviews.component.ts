import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DisplayReviews } from 'DisplayRestaurant';
import { User } from 'src/User';
import { IndexService } from '../index.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-show-reviews',
  templateUrl: './show-reviews.component.html',
  styleUrls: ['./show-reviews.component.css']
})
export class ShowReviewsComponent implements OnInit {

constructor(private indexService: IndexService, private router: Router, public dialog: MatDialog, private modalService: ModalService, public dialogRef: MatDialogRef<ShowReviewsComponent>, @Inject(MAT_DIALOG_DATA)public data: string) { }

displayReview: DisplayReviews[] = [];

  ratings!: string;
  review!: string;
  submittedDate!: string;
  restaurant!: string;
  author!: number;
  reviewTitle!: string;
  restaurant_name!: string;

  ngOnInit(): void {

  this.modalService.displayReviews().subscribe((res) => {
    let responseObj = <{body:DisplayReviews[]}><unknown>res
    this.displayReview = responseObj.body;
  })

  }

  onCloseReview(){
    this.dialogRef.close('Confirm');
  }
}
