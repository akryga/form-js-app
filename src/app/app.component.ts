import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormEditor } from '@bpmn-io/form-js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'form-js-app';
  @ViewChild('form', { static: true }) private elForm: ElementRef<HTMLDivElement> | undefined;

  formEditor: FormEditor|undefined;
  
  ngOnInit(): void {
    this.formEditor = new FormEditor({
      container: this.elForm?.nativeElement
    });
    fetch("assets/form.json").
      then((r)=>{return r.json()}).
      then((j) => {this.formEditor?.importSchema(j);});
  }
}
