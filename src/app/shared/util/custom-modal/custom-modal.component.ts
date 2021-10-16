import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements OnInit {

  @Input('modalTitle')
  modalTitle: string = '';

  @Input('modalBody')
  modalBody: string = '';

  @Output() closed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeClicked() {
    this.closed.emit();
  }

}
