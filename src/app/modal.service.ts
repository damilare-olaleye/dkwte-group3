import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private http: HttpClient) { }


  addReviews(rating: string, review: string, reviewTitle: string, restaurant_name: string){
    return this.http.post('http://localhost:5050/newreviews', {
      "rating": rating,
      "review": review,
      "reviewTitle": reviewTitle,
      "restaurant_name": restaurant_name
     }, {
      withCredentials: true,
      observe: 'response'
    }
    )
  }

  checkLoginStatus() {
    return this.http.get(`http://localhost:5050/loginstatus`, {
      observe: 'response',
      withCredentials: true
    })
  }

  displayReviews() {
   return this.http.get(`http://localhost:5050/reviews`, {
      observe: 'response',
      withCredentials: true

    })

  }

  deleteReviewByReviewId(reviewId: number) {
    return this.http.delete(`http://localhost:5050/deletereviews/${reviewId}`, {
      observe: 'response',
      responseType: 'text',
      withCredentials: true
    })
  }

  restaurantById(restaurantId: number) {
    return this.http.get(`http://localhost:5050/restaruantById/${restaurantId}`, {
      observe: 'response'
    })
  }

  restaurantByNameAndAddress(name: string, address: string){
    return this.http.get(`http://localhost:5050/restaurant`, {
    })
  }

}
