import { Component, OnInit } from '@angular/core';
import { CardsTsService } from '../../../core/services/cards.ts.service';
import { ToggleWidthService } from '../../../core/services/toggle-width.service';
import { IOpcionMenu } from '../../../core/interfaces/ICard.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isExpanded: boolean = false;

  public optionsMenu: IOpcionMenu[] = [];

  constructor(private cardService: CardsTsService,
    private toggleWidthService: ToggleWidthService
  ){ }

  ngOnInit(): void {
    this.cardService.getOptionsMenu().subscribe((data) =>{
      this.optionsMenu = data;
    })

    this.toggleWidthService.isExpanded$.subscribe(
      (expanded) => this.isExpanded = expanded
    );
  }



  toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}