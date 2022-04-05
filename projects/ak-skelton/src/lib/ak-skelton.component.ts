import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'ng-ak-skelton',
  template: ``,
  host: {
    'class': 'pulse'
  },
  styleUrls: ['./ak-skelton.scss']
})
export class AkSkeltonComponent implements OnInit {
  width!: string;
  height!: string;
  className!: string;
  bgColor!: string;

constructor(private elmRef: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
  const host = this.elmRef.nativeElement;
  if(host) {
    host.style.setProperty('--skeleton-width', this.width ?? '100%');
    host.style.setProperty('--skeleton-height', this.height ?? '20px');
  }

    if(this.className) {
  host.classList.add(this.className);
}
  }

}
