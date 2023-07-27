import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @ViewChild('txtSearchText') txtSearch!: ElementRef<HTMLInputElement>;
  @Input()
  public placeholder: string = '';
  @Input()
  public initialValue:string = '';
  @Output()
  public onValue: EventEmitter<string> = new EventEmitter<string>();
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  onChangeValue(): void {
    this.onValue.emit(this.txtSearch.nativeElement.value);
  }

  onKeyPress(searchTerm: string): void {
    this.debouncer.next(searchTerm);
  }

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(500)
      )
      .subscribe(() => {
        this.onChangeValue();
      });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }
}
