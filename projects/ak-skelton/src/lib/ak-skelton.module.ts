import { NgModule } from '@angular/core';
import { SkeletonDirective } from './ak-skeleton.directive';
import { AkSkeltonComponent } from './ak-skelton.component';



@NgModule({
  declarations: [
    AkSkeltonComponent,
    SkeletonDirective
  ],
  imports: [
  ],
  exports: [
    AkSkeltonComponent,
    SkeletonDirective
  ]
})
export class AkSkeltonModule { }
