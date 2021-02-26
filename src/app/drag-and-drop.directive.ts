import {Directive, ElementRef, EventEmitter, OnInit, Output, Renderer2} from '@angular/core';

@Directive({
  selector: 'app-file-upload[drag-and-drop]'
})
export class DragAndDropDirective {
  @Output() fileDrop = new EventEmitter();

  private el: ElementRef;
  private renderer: Renderer2;

  constructor(el: ElementRef, renderer: Renderer2) {
    this.el = el;
    this.renderer = renderer;
    this.createBox();
  }

  createBox(): any {
    const div = this.renderer.createElement('div');
    div.className = 'dropbox';
    div.addEventListener('dragenter', e => this.dragenterHandler(e));
    div.addEventListener('dragover', e => this.dragoverHandler(e));
    div.addEventListener('drop', e => this.dropHandler(e));
    this.el.nativeElement.append(div);
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

    this.fileDrop.emit(e.dataTransfer.files);
  }
}
