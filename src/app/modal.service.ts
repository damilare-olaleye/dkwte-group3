import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private http: HttpClient) { }

  addReviews(rating: string, review: string, restaurantId: string){
    return this.http.post('http://localhost:5050/newreviews', {
      "rating": rating,
      "review": review,
      "restaurantId": restaurantId
    }

    )
  }



}
