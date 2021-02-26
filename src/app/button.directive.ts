import {Directive, ElementRef, EventEmitter, OnInit, Output, Renderer2} from '@angular/core';
import {$t} from 'codelyzer/angular/styles/chars';

@Directive({
  selector: 'app-file-upload[button]'
})
export class ButtonDirective  {
  @Output() buttonClick = new EventEmitter();

  private el: ElementRef;
  private renderer: Renderer2;
  private inputField;

  constructor(el: ElementRef, renderer: Renderer2) {
    this.el = el;
    this.renderer = renderer;
    this.createButton();
    this.createInput();
  }

  createButton(): any {
    const button = this.renderer.createElement('button');
    button.innerText = 'Upload';
    button.addEventListener('click', () => this.inputField.click());
    this.el.nativeElement.append(button);
  }

  createInput(): any {
    this.inputField = this.renderer.createElement('input');
    this.inputField.type = 'file';
    this.inputField.hidden = true;
    this.inputField.addEventListener('change', e => this.buttonClick.emit(e));
    this.el.nativeElement.append(this.inputField);
  }
}
