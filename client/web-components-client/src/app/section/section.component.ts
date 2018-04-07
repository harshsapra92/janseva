import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

  getBoxColorColor() {
    let classString = '';

    switch (this.title) {
      case "New":
        classString = "box-default";
        break;
    
      case "Accepted": 
        classString = "box-info";
        break;
      
      case "Work In Progress":
        classString = "box-warning";
        break;
      
      case "Done": 
        classString = "box-success";
        break;
        
      default:
        classString = "box-default"
        break;
    }

    return classString;
  }
}
