import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';


type InfoExploreType = 'info' | 'explore';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.scss'
})
export class CardInfoComponent {
  @Input() balanceProduct: string = '';
  @Input() detaildProduct: string = '';
  @Input() nameProduct: string = '';
  @Input() numberProduct: string = '';
  @Input() productClass: string = '';
  @Input() detailInfo: string = '';
  @Input() type : InfoExploreType = 'info';
}
