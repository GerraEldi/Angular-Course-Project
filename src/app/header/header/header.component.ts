import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Output() FeatureSelected = new EventEmitter<string>() ;
  constructor() { }
  onSelect(feature: string) {
    this.FeatureSelected.emit(feature);
  }
  ngOnInit(): void {
  }

}
