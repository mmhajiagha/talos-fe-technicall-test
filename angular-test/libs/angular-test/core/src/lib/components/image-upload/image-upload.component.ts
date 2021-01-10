import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'talos-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ImageUploadComponent {
  @Output() fileSelect: EventEmitter<any> = new EventEmitter<any>();
  imageUrl: any = '/assets/img/image-upload.jpg';


  uploadFile(event) {
    const reader = new FileReader();
    const file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.fileSelect.emit(reader.result);
      };
    }
  }
}
