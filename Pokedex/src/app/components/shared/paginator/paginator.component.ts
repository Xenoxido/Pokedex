import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() firstElement : number = 1;
  @Input() lastElement: number = 10;

  @Input() step: number = 1;

  @Input() limitPrev: number = 0;
  @Input() limitNext: number = 100000;

  @Output() pageChanged: EventEmitter<number[]> = new EventEmitter<number[]>();
  constructor() { }

  ngOnInit(): void {
  }

  OnClickNext() : void {
    if(this.lastElement + this.step <= this.limitNext){
      this.lastElement += this.step;
      this.firstElement = this.lastElement - this.step;
    }

    if(this.lastElement + this.step > this.limitNext){
      this.firstElement = this.limitPrev;
      this.lastElement = this.firstElement + this.step;
    }
    this.pageChanged.emit([this.firstElement, this.lastElement]);
  }

  OnClickPrevious() : void {
    if(this.firstElement -this.step >= this.limitPrev){
      this.firstElement -= this.step;
      this.lastElement = this.firstElement + this.step;
    }

    if(this.firstElement -this.step < this.limitPrev){
      this.lastElement = this.limitNext;
      this.firstElement = this.lastElement - this.step;
    }    
    this.pageChanged.emit([this.firstElement, this.lastElement]);
  }

}
