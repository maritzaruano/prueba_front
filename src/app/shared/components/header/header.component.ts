import { Component } from '@angular/core';
import { ToggleWidthService } from '../../../core/services/toggle-width.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    private toggleWidthService: ToggleWidthService){}

  toogleMenu(){
      this.toggleWidthService.toggleWidth();
  }
}
