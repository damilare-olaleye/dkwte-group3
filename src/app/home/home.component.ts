import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
import { lastValueFrom } from 'rxjs';
import { Restaurant } from 'src/Restaurant';
import { IndexService } from '../index.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

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

  restaurantName!: string;
  restaurantAddress!: string;

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

  displayRestaurantResult() {
    navigator.geolocation.getCurrentPosition( async loc => {
      let currerntUserPosition = loc.coords.latitude + " " + loc.coords.longitude

      console.log(currerntUserPosition);
     await lastValueFrom (this.indexService.getRestaurantResult(currerntUserPosition, this.radius)).then( async (res) => {
        let responseObj = <{results:Restaurant[]}>res
        const idx = Math.floor(Math.random() * responseObj.results.length); // randomize the responseObj array
        const newRestaurant = responseObj.results[idx];

        this.displayRandRestaurant = newRestaurant;

        // second request to get restaurant
       await lastValueFrom (this.indexService.getRestaurant(newRestaurant.name, newRestaurant.vicinity)).then((res) => {

          if(res.status >= 400){

          // third request to add new restaurant
        this.indexService.addRestaurant(newRestaurant.name, newRestaurant.vicinity).subscribe((res) => {
           // console.log(res.body);
    }, (err) => {
     this.errorMessage = err.error;
  })
          }
        }, (err) => {
          this.errorMessage = err.error;
        })
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
