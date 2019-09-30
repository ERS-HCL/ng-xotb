import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  templateUrl: './iconography.component.html',
  styleUrls: ['./iconography.component.scss']
})
export class IconographyComponent {
  @ViewChild('feather', { static: true }) feather: ElementRef;

  applyCSSonIframe() {
    const iframe = this.feather.nativeElement.contentDocument.documentElement;
    const style = document.createElement('style');
    style.textContent = `
        body  {
          font-family: Roboto, sans-serif;
          font-size: 1rem;
          line-height: 1.75rem;
          color: #3e3e3c;
          font-weight: 100;
        }
        .css-1gaoowb{
          display:none !important;
        }
      `;
    iframe.getElementsByTagName('head')[0].appendChild(style);
    console.log(iframe.getElementsByClassName('css-1gaoowb'));
  }

  ngOnInit() {
    this.feather.nativeElement.onload = e => {
      console.log('loaded', e, this.feather);
    };
    // this.isIframeLoaded();
  }

  isIframeLoaded() {
    if (this.feather.nativeElement.contentDocument) {
      this.applyCSSonIframe();
    } else {
      setTimeout(() => {
        console.log('timeout', this);
        this.isIframeLoaded();
      });
    }
  }
}
