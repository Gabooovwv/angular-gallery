import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild('file') file: ElementRef<HTMLElement>;

  changeHandler(e: File[]): void {
    console.log(e);
    alert('Upload success');
  }
  clickHandler(): void {
    const el: HTMLElement = this.file.nativeElement;
    el.click();
  }

  dragenterHandler(e): void {
    e.stopPropagation();
    e.preventDefault();
  }

  dragoverHandler(e): void {
    e.stopPropagation();
    e.preventDefault();
  }

  dropHandler(e): void {
    e.stopPropagation();
    e.preventDefault();

    const dataTransfer = e.dataTransfer;
    const files        = dataTransfer.files;

    this.changeHandler(files);
  }
}
