import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  AfterContentInit
} from '@angular/core';

@Component({
  template: `
    <xotb-panel title="ng-xotb documentation">
      <iframe
        #readme
        [height]="innerHeight"
        width="100%"
        src="./assets/docs/README.html"
        type="text/html"
        style="border:0; font-family:Helvetica, sans-serif;"
      ></iframe>
    </xotb-panel>
  `
})
export class DemoWelcomeComponent implements OnInit, AfterContentInit {
  public innerHeight: any;

  @ViewChild('readme', { static: true }) readme: ElementRef;

  ngOnInit() {
    this.innerHeight = window.innerHeight - 100;
  }
  ngAfterContentInit() {
    this.readme.nativeElement.onload = () => {
      const iframe = this.readme.nativeElement.contentDocument.documentElement;
      const style = document.createElement('style');
      style.textContent = `
        body  {
          font-family: Roboto, sans-serif;
          font-size: 1rem;
          line-height: 1.75rem;
          color: #3e3e3c;
          font-weight: 100;
        }
        h2  {
          font-weight: 400;
          font-size: 1.5rem;
        }
        h3  {
          font-weight: 400;
          font-size: 1rem;
        }
        h4  {
            font-size: .85rem;
            font-weight: 400;
        }
      `;
      iframe.getElementsByTagName('head')[0].appendChild(style);
    };
  }
}
