import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/User';
import { LoginService } from '../login.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  closeResult = '';

  selectedRating = 0;
  ratings = [
   {
     id: "1",
     icon: 'star',
     class: 'star-gray star-hover star'
   },
   {
    id: "2",
    icon: 'star',
    class: 'star-gray star-hover star'
   },
   {
    id: "3",
    icon: 'star',
    class: 'star-gray star-hover star'
   },
   {
    id: "4",
    icon: 'star',
    class: 'star-gray star-hover star'
   },
   {
    id: "5",
    icon: 'star',
    class: 'star-gray star-hover star'
   }

  ]

  constructor(private loginService: LoginService, private router: Router, private modalService: ModalService,
    public dialog: MatDialog, public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
  }


  onCloseReview(){
    this.dialogRef.close('Confirm');
  }

  onCancelReview(){
    this.dialogRef.close('Cancel');
  }

  review!: string;
  rating!: string;
  reviewTitle!: string;
  restaurantName!: string;

  errorMessage!: string;


  onSaveReview(){
  this.modalService.addReviews(this.rating, this.review, this.reviewTitle, this.restaurantName).subscribe((res) =>  {
    console.log(res);
    if (res.status === 200){

      console.log(res);
      let body = <User> res.body;

      console.log("not found")

      if(body.role === 'Member'){
        this.router.navigate(['index']);
      }

      if(body.role === 'Admin'){
        this.router.navigate(['admin'])
      }

      else {
        this.router.navigate([''])
      }
    }

  this.dialogRef.close('Save');
}, (err) => {
  this.errorMessage = err.error;
})
}

selectRating(value: any): string {

    if(this.selectedRating === 0){
      this.ratings.filter((star) => {
        if (star.id <= value){
          star.class = 'star-gold star';
        } else {
          star.class = 'star-gray star';
        }

        return star;
      });
    }

    return this.selectedRating = value;
  }

}
