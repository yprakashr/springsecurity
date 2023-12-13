import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditOverlayComponent } from './edit-overlay/edit-overlay.component';

@Injectable({
  providedIn: 'root',
})
export class EditOverlayService {
  constructor(private modalService: NgbModal) {}

  public confirm(
    uID: number,
    btnOkText: string = 'Update',
    btnCancelText: string = 'Cancel',
    dialogSize = '50vw'
  ): Promise<boolean> {
    const modalRef = this.modalService.open(EditOverlayComponent, {
      size: dialogSize,
    });
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;
    modalRef.componentInstance.uID = uID;

    return modalRef.result;
  }
}
