import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
// name input
  name:string = "";
  submit(){
    confirm("Your Data Submitted Succesfully");
    this.name = "";
    
  }

  show1(event:Event){
    let ctrl = <HTMLInputElement>event.target;
    this.name = ctrl.value;
  }

// age input
  showage:any = "";
  eligibility:any = "";

  h6var:any = "";
  h5var:any = "";
  eligible:boolean = true;

  show3(event:Event){
    let ctrl = <HTMLInputElement>event.target;
    this.showage = ctrl.value;
  }
  submit1(){
    if(this.showage >=18){
      this.eligibility = "You Are Eligible for Voting";
      this.eligible = false;
    }
    else{
      this.eligibility = "You Are Not Eligible for Voting";
      this.eligible = false;
    }
  }


// options
  category:string[] = ["12th","UG","PG","Masters"];
  selectedCategory = "12th";

  job:string[] = ["Army","Navy","Airforce"];
  selectedJob = "Army";

  categoryChanged(){
    if(this.selectedCategory == "12th"){
      this.job = ["Army","Navy","Airforce"];
      this.selectedJob = "Army";
    }
    else if(this.selectedCategory == "UG"){
      this.job = ["Defence","Army","Navy","Airforce"];
      this.selectedJob = "Defence";
    }
    else if(this.selectedCategory == "PG"){
      this.job = ["Assistant","Officer","Developer"];
      this.selectedJob = "Assistant";
    }
    else{
      this.job = ["Manager","Commander","Any"];
      this.selectedJob = "Manager";
    }
  }

}
