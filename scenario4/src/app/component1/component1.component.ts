import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  @Output() public childEvent = new EventEmitter();

  public fireEvent(Value)
  {
    console.log(Value);
    this.childEvent.emit(Value);
  }

  constructor() { }

  ngOnInit() {
  }

}
