import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DisplayReviews } from 'DisplayRestaurant';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-show-reviews',
  templateUrl: './show-reviews.component.html',
  styleUrls: ['./show-reviews.component.css']
})
export class ShowReviewsComponent implements OnInit {

constructor(public dialog: MatDialog, private modalService: ModalService, public dialogRef: MatDialogRef<ShowReviewsComponent>, @Inject(MAT_DIALOG_DATA)public data: string) { }

displayReview: DisplayReviews[] = [];

  ratings!: string;
  review!: string;
  submittedDate!: string;
  restaurant!: string;
  author!: number;
  reviewTitle!: string;

  ngOnInit(): void {
  this.modalService.displayReviews().subscribe((res) => {

    let responseObj = <{body:DisplayReviews[]}><unknown>res
    this.displayReview = responseObj.body;

    console.log(this.displayReview);
  })

  }

  onCloseReview(){
    this.dialogRef.close('Confirm');
  }
}
