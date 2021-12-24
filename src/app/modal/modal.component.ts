import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(private modalService: ModalService, public dialog: MatDialog, public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
  }

  onCloseReview(){
    this.dialogRef.close('Confirm');
  }

  onCancelReview(){
    this.dialogRef.close('Cancel');

  }

  rating!: string;
  review!: string;
  restaurantId!: string;

  onSaveReview(){

    // for (let i = 0; i < this.ratings.length; i++){

    //   console.log(i);
    //   this.rating = this.ratings[i].id;
    //   console.log(this.ratings[i].id);
    // }

      this.selectStar(this.rating);
      this.modalService.addReviews(this.selectStar(this.rating), this.review, this.restaurantId).subscribe(() => {
      this.dialogRef.close('Save');
    })
  }

  selectStar(value: any): string {

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
