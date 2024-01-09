import { Component, ElementRef, ViewChild } from '@angular/core';
//import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('dateElem')dateElem:ElementRef | undefined;

  selectedDate:string="";
  isValid:boolean=false;
  heading:string=title;
  
  ngOnInit(){}

  changeColor(){
    //$(this.dateElem?.nativeElement).addClass('highlight')
    changeBgColor(this.dateElem?.nativeElement);
  }

  checkValidity(changedModel:string){
    this.selectedDate=changedModel;
   this.isValid=checkIfDateIsValid(this.selectedDate);
   //this.isValid=moment(this.selectedDate).isValid()
  }
  
}
