import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-logout-popup',
  templateUrl: './logout-popup.component.html',
  styleUrls: ['./logout-popup.component.css']
})
export class LogoutPopupComponent {
  @Input() title: any;
  @Input() message: any;
  @Input() btnOkText: any;
  @Input() btnCancelText: any;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  public decline() {
    this.activeModal.close(false);
  }

  public accept() {
    this.activeModal.close(true);
  }

  public dismiss() {
    this.activeModal.dismiss();
  }
}
