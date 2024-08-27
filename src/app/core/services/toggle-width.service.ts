import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleWidthService {
  private isExpandedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isExpanded$: Observable<boolean> = this.isExpandedSubject.asObservable();

  toggleWidth(): void {
    this.isExpandedSubject.next(!this.isExpandedSubject.value);
  }
}