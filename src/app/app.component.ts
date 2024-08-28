import { Component, OnInit } from '@angular/core';
import { ToggleWidthService } from './core/services/toggle-width.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pruebaSkandiaFront';
  isExploreSectionVisible = false;
  
  constructor(private toggleWidthService: ToggleWidthService) {}

  ngOnInit(): void {
   
    this.toggleWidthService.isShow$.subscribe(
      (expanded: boolean) => this.isExploreSectionVisible = expanded
    );
  }
 
  


  

}
