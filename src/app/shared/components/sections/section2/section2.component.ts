import { Component, ElementRef, ViewChild, Renderer2, OnInit } from '@angular/core';
import { CardsTsService } from '../../../../core/services/cards.ts.service';
import { catchError, map, of, tap } from 'rxjs';
import { ICard, IListCard } from '../../../../core/interfaces/ICard.interface';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {
  @ViewChild('sliderContainer', { read: ElementRef, static: true }) sliderContainer!: ElementRef;
  @ViewChild('leftButton', { read: ElementRef, static: true }) leftButton!: ElementRef;
  @ViewChild('rightButton', { read: ElementRef, static: true }) rightButton!: ElementRef;

  public descriptionSection = '¡Cuentas con <span class="text-orange text-bold">$2.120.000</span> para tu objetivo! Te recomendamos aportar <span class="text-bold">$388.000 mensuales</span> para lograrlo en <span class="text-bold">diciembre del 2022</span>.';

  listCard: ICard[] = [];
  error: string | null = null;

  private currentPosition: number = 0;
  private readonly cardWidth: number = 352; // Ancho de cada tarjeta (incluyendo márgenes, si es necesario)
  private readonly visibleCards: number = 3;
  private totalCards: number = 4; // Total de tarjetas en el slider
  toggleWidthService: any;

  constructor(private renderer: Renderer2 ,
    private cardService: CardsTsService
  ) {}
  

ngOnInit() {
  this.cardService.getCards().pipe(
    map(response => response.listCard),
    tap(data => {
      this.listCard = data;
      this.totalCards = this.listCard.length + 1; // +1 para incluir la tarjeta de 'explore'
    }),
    catchError(error => {
      this.error = 'There was an error fetching the data.';
      console.error(error);
      return of([]);
    })
  ).subscribe();
}
 

  ngAfterViewInit() {
    this.updateButtonStates();
  }

  getClassForIndex(index: number): string {
    // Define tus clases en un array
    const classes = [
      'card-info--border-green',
      'card-info--border-blue-sky',
      'card-info--border-blue-black',
      'card-info--border-orange'
    ];
    // Usa el índice para seleccionar la clase adecuada
    return classes[index % classes.length];
  }

  slideRight(): void {
    const maxPosition = -(this.cardWidth * (this.totalCards - this.visibleCards));
    if (this.currentPosition > maxPosition) {
      this.currentPosition -= this.cardWidth;
      this.sliderContainer.nativeElement.style.transform = `translateX(${this.currentPosition}px)`;
      this.updateButtonStates();
    }
  }

  slideLeft(): void {
    if (this.currentPosition < 0) {
      this.currentPosition += this.cardWidth;
      this.sliderContainer.nativeElement.style.transform = `translateX(${this.currentPosition}px)`;
      this.updateButtonStates();
    }
  }

  private updateButtonStates(): void {
    const maxPosition = -(this.cardWidth * (this.totalCards - this.visibleCards));
  
    if (this.currentPosition === 0) {
      this.renderer.addClass(this.leftButton.nativeElement, 'disabled');
      this.renderer.removeClass(this.rightButton.nativeElement, 'disabled');
    } else if (this.currentPosition === maxPosition) {
      this.renderer.addClass(this.rightButton.nativeElement, 'disabled');
      this.renderer.removeClass(this.leftButton.nativeElement, 'disabled');
    } else {
      this.renderer.removeClass(this.leftButton.nativeElement, 'disabled');
      this.renderer.removeClass(this.rightButton.nativeElement, 'disabled');
    }
  }

  
}