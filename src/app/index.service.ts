import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Restaurant } from 'src/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  checkLoginStatus() {
    return this.http.get('http://localhost:5050/loginstatus', {
      observe: 'response',
      withCredentials: true
    })
  }

  logout() {
    return this.http.post('http://localhost:5050/logout', {}, {
      observe: 'response',
      withCredentials: true,
      responseType: 'text'
    })
  }

  getRestaurantResult(location: string, radius: number){
    return this.http.post(`http://ec2-18-219-69-82.us-east-2.compute.amazonaws.com:8081/https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyC2OBwh8YRiSW45UXMk8y_ABYmgOuZDCKc&type=restaurant&location=${location}&radius=${radius}`, {
    })
  }

  getRestaurant(restaurantName: string, restaurantAddress: string){
    return this.http.post(`http://localhost:5050/restaurant`, {
      "restaurantName": restaurantName,
      "restaurantAddress": restaurantAddress
    }, {
      withCredentials: true,
      observe: 'response'
    })
  }

  addRestaurant(restaurantName: string, restaurantAddress: string){
    return this.http.post(`http://localhost:5050/restaurant`, {
      "restaurantName": restaurantName,
      "restaurantAddress": restaurantAddress
    }, {
      withCredentials: true,
      observe: 'response'
    }
    )
  }
}
