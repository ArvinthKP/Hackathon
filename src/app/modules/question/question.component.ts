import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;
  timeLeft: number = 90;
  blockAnswer:boolean = false;
  interval;
  message: boolean = false;

startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.message = true;
        this.blockAnswer = true;
        if(confirm("Times Up !, Answers will be automatically saved")) {
          window.location.href = '/thanks';
        }
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
  constructor() { }

  ngOnInit(): void {
    this.startTimer();
  }
  public scrollRight(): void {
    let width = document.getElementById('info-widget').clientWidth + 2;
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + width), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    let width = document.getElementById('info-widget').clientWidth + 2;
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - width), behavior: 'smooth' });
  }

  submit(){
    window.location.href = "/thanks";
  }
}
