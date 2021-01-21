import {  Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
          AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewChecked, AfterViewInit, OnDestroy {

  constructor() { 
    console.log('constructor');  
  }

  ngOnInit(){
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
