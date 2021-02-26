import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public files: any = [];

  fileHandler($event: File[]): void {
    this.generateThumbnail($event);
  }

  generateThumbnail($event): void {
    const reader  = new FileReader();

    reader.readAsDataURL($event[0]);

    reader.onloadend = () => {
      this.files.push({img: reader.result, id: this.files.length});
    };
  }
}
