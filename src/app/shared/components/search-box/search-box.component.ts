import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @ViewChild('txtSearchText') txtSearch!: ElementRef<HTMLInputElement>;
  @Input()
  public placeholder: string = '';
  @Output()
  public onValue: EventEmitter<string> = new EventEmitter<string>();

  onChangeValue(): void {
    this.onValue.emit(this.txtSearch.nativeElement.value);
  }
}
