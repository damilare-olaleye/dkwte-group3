import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AllReviews } from 'AllReviews';
import { Subject } from 'rxjs';
import { LoginService } from '../login.service';
import { ModalService } from '../modal.service';
import {DataTableDirective} from 'angular-datatables';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(DataTableDirective, {static: false})
  datatableElement: any = DataTableDirective;

  min: any = 0;
  max: any = 0;

  reviewId!: number;
  ratings!: string;
  review!: string;
  reviewTitle!: string;
  submittedDate!: string;
  restaurant_name!: string;
  authorId!: number

  allReviews: AllReviews[] = [];

  dtElement: any;

  constructor(private loginService: LoginService, private modalService: ModalService, private router: Router) { }

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  filterTerm!:string;

  ngOnInit(): void {

    this.dtOptions = {
      destroy: true,
      ordering: true,
      dom: 'Bfrtip',
      pagingType: 'full_numbers',
      search: true,
      searching: true,
      pageLength: 5,
      processing: true,
      "columnDefs": [
        { "orderable": false, "targets": 5 }
      ],
    };

    this.displayReviews();

    $.fn.dataTable.ext.search.push((settings: any, data: string[], dataIndex: any) => {
      const id = parseFloat(data[0]) || 0; // use data for the id column
      return (Number.isNaN(this.min) && Number.isNaN(this.max)) ||
          (Number.isNaN(this.min) && id <= this.max) ||
          (this.min <= id && Number.isNaN(this.max)) ||
          (this.min <= id && id <= this.max);
    });

  }

  filterById(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }

 ngAfterViewInit(): void {
     this.dtTrigger.next;
 }

  ngOnDestroy(): void {
    $.fn.dataTable.ext.search.pop();

  }

  displayReviews() {
    this.modalService.displayReviews().subscribe((res)=> {
      let responseObj = <{body:AllReviews[]}><unknown>res
      this.allReviews = responseObj.body;

      this.dtTrigger.next;

    })
  }

  deleteReviewByReviewId(id: number) {
    this.modalService.deleteReviewByReviewId(id).subscribe((res) => {
      setTimeout(() => window.location.reload(), 100);
    })
  }

}


