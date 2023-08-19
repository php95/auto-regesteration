import { CommonModule } from '@angular/common';
import { Attribute, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ModalComponent {

  @Input() title:string = '';
  @Output() closeModal = new EventEmitter();


  // you cannot assign default values to attribute decorator
  constructor(
    @Attribute ('styleCls') public styleCls:string,
    @Attribute ('hideCloseIcon') public hideCloseIcon:boolean,
    @Attribute ('isClickableBlankArea') public isClickableBlankArea:boolean ,
    @Attribute ('closeIconStyle') public closeIconStyle:string) {}

  onModalClose() {
    this.closeModal.emit();
  }

  onBlankAreaClicked(event:any) {
    if (event.srcElement.id === 'BLANK' && this.isClickableBlankArea) {
      this.onModalClose();
    }
  }
}
