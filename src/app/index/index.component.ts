/// <reference types="@types/googlemaps" />

import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
import { Restaurant } from 'src/Restaurant';
import { User } from 'src/User';
import { IndexService } from '../index.service';

declare var google:any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private httpClient: HttpClient, private elementRef: ElementRef, private indexService: IndexService, private router: Router) { }

  isButtonDisabled: boolean = false;

  showResults: boolean = false;

  showRestuaurantResult!: string;

  errorMessage!: string;

  resutaurantList!: Restaurant[];

  location!: string;
  radius!: number;
  searchAddress!: string;

  loading: boolean = true;


  formattedAddress: string = '';

  displayRandRestaurant!: Restaurant;

  options = {
    componentRestrictions: {
      country: ['US']
    },
  } as unknown as Options;

public handleAddressChange(address: any){
  this.formattedAddress = address.formatted_address;
}

  ngOnInit(): void {
  }

invokeEvent(place: Object) {
  this.setAddress.emit(place);
}

  @Input()
  adressType!: string;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild('addresstext') addresstext: any;

  autocompleteInput!: string;
  queryWait!: boolean;


  checkIfLoggedIn() {
    this.indexService.checkLoginStatus().subscribe((res) => {
      if (res.status === 200){
        let body = <User> res.body;

        if(body.role === 'Member'){
          this.router.navigate(['/index']); // navigates to member route page
        }

        if(body.role === 'Admin'){
          this.router.navigate(['Admin']); // navigates to admin route page
        }
      }
    },
    (err) => {

    });
  }

  displayRestaurantResult() {
    navigator.geolocation.getCurrentPosition( loc => {
      let currerntUserPosition = loc.coords.latitude + " " + loc.coords.longitude

      console.log(currerntUserPosition);
      this.indexService.getRestaurantResult(currerntUserPosition, this.radius).subscribe((res) => {
        let responseObj = <{results:Restaurant[]}>res
        const idx = Math.floor(Math.random() * responseObj.results.length); // randomize the responseObj array
          const newRestaurant = responseObj.results[idx];

          this.displayRandRestaurant = newRestaurant;

          this.loading = false;

          this.isButtonDisabled = false;
       })
    })
  }

  displayResult() {
    this.isButtonDisabled = true;

    this.showResults = true;

    this.displayRestaurantResult();
  }
}
